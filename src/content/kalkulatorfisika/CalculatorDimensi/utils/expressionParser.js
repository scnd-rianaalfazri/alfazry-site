// utils/expressionParser.js
//
// Parser buatan sendiri (tanpa library eksternal) yang mengubah deretan token
// dari tokenizer.js menjadi AST (Abstract Syntax Tree) yang siap dihitung
// dimensinya oleh dimensionMath.js.
//
// Tata bahasa (grammar) yang diimplementasikan, dari prioritas terendah ke tertinggi:
//   formula     := expression (EQUALS expression)?
//   expression  := term (('+' | '-') term)*
//   term        := factor (('*' | '/') factor)*
//   factor      := unary ('^' factor)?          // pangkat, asosiatif ke kanan
//   unary       := ('-' | '+') unary | primary
//   primary     := NUMBER | IDENT | '(' expression ')'
//
// Bentuk AST yang dihasilkan:
//   { type: 'Number', value: number }
//   { type: 'Variable', symbol: string }
//   { type: 'UnaryMinus', value: ASTNode }
//   { type: 'BinaryOp', op: '+'|'-'|'*'|'/'|'^', left: ASTNode, right: ASTNode }

import { tokenize, TOKEN_TYPES } from "./tokenizer.js";

/** Error khusus untuk kegagalan saat parsing (sintaks rumus tidak valid). */
export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

/**
 * Kelas Parser internal: membaca token satu per satu (recursive descent)
 * dan membangun AST sesuai tata bahasa di atas.
 */
class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.pos = 0;
  }

  /** Melihat token saat ini tanpa memindahkan posisi. */
  peek() {
    return this.tokens[this.pos] || null;
  }

  /** Mengambil token saat ini lalu memindahkan posisi ke token berikutnya. */
  next() {
    const token = this.tokens[this.pos];
    this.pos += 1;
    return token;
  }

  /** Mengecek apakah token saat ini adalah operator dengan nilai tertentu. */
  isOp(token, value) {
    return !!token && token.type === TOKEN_TYPES.OP && token.value === value;
  }

  /** primary := NUMBER | IDENT | '(' expression ')' */
  parsePrimary() {
    const token = this.peek();

    if (!token) {
      throw new ParseError(
        "Rumus tidak lengkap. Pastikan seluruh operator memiliki operand."
      );
    }

    if (token.type === TOKEN_TYPES.NUMBER) {
      this.next();
      return { type: "Number", value: token.value };
    }

    if (token.type === TOKEN_TYPES.IDENT) {
      this.next();
      return { type: "Variable", symbol: token.value };
    }

    if (token.type === TOKEN_TYPES.LPAREN) {
      this.next(); // konsumsi '('
      const inner = this.parseExpression();
      const closing = this.peek();
      if (!closing || closing.type !== TOKEN_TYPES.RPAREN) {
        throw new ParseError("Tanda kurung tidak seimbang: kurang ')'.");
      }
      this.next(); // konsumsi ')'
      return inner;
    }

    if (token.type === TOKEN_TYPES.RPAREN) {
      throw new ParseError("Tanda kurung tidak seimbang: kelebihan ')'.");
    }

    throw new ParseError(`Token tidak dikenal pada rumus: "${token.value}".`);
  }

  /** unary := ('-' | '+') unary | primary */
  parseUnary() {
    if (this.isOp(this.peek(), "-")) {
      this.next();
      const value = this.parseUnary();
      return { type: "UnaryMinus", value };
    }
    if (this.isOp(this.peek(), "+")) {
      this.next();
      return this.parseUnary();
    }
    return this.parsePrimary();
  }

  /** factor := unary ('^' factor)?  (asosiatif ke kanan, mis. a^b^c = a^(b^c)) */
  parseFactor() {
    const base = this.parseUnary();
    if (this.isOp(this.peek(), "^")) {
      this.next();
      const exponent = this.parseFactor();
      return { type: "BinaryOp", op: "^", left: base, right: exponent };
    }
    return base;
  }

  /** term := factor (('*' | '/') factor)* */
  parseTerm() {
    let left = this.parseFactor();
    while (this.isOp(this.peek(), "*") || this.isOp(this.peek(), "/")) {
      const op = this.next().value;
      const right = this.parseFactor();
      left = { type: "BinaryOp", op, left, right };
    }
    return left;
  }

  /** expression := term (('+' | '-') term)* */
  parseExpression() {
    let left = this.parseTerm();
    while (this.isOp(this.peek(), "+") || this.isOp(this.peek(), "-")) {
      const op = this.next().value;
      const right = this.parseTerm();
      left = { type: "BinaryOp", op, left, right };
    }
    return left;
  }
}

/**
 * Mem-parsing satu sisi rumus (tanpa tanda '=') menjadi AST,
 * sekaligus memastikan seluruh token habis terpakai (tidak ada sisa token nyasar).
 * @param {{type:string, value:(string|number)}[]} tokens
 * @returns {object} AST
 */
function parseTokensAsExpression(tokens) {
  if (tokens.length === 0) {
    throw new ParseError("Rumus tidak boleh kosong.");
  }
  const parser = new Parser(tokens);
  const ast = parser.parseExpression();

  if (parser.pos !== tokens.length) {
    const leftover = tokens[parser.pos];
    throw new ParseError(
      `Rumus tidak valid, ditemukan token tak terduga: "${leftover.value}".`
    );
  }

  return ast;
}

/**
 * Fungsi utama parser: menerima string rumus mentah dari pengguna dan
 * mengembalikan hasil parsing lengkap dengan informasi apakah rumus
 * berupa persamaan (mengandung '=') atau ekspresi tunggal.
 *
 * @param {string} rawInput - Rumus mentah, misalnya "m*v" atau "F=m*a"
 * @returns {
 *   { hasEquals: true, lhs: object, rhs: object, lhsRaw: string, rhsRaw: string, raw: string } |
 *   { hasEquals: false, expr: object, raw: string }
 * }
 */
export function parseFormula(rawInput) {
  const trimmed = (rawInput || "").trim();

  if (!trimmed) {
    throw new ParseError("Masukkan rumus terlebih dahulu.");
  }

  const tokens = tokenize(trimmed);
  const equalsCount = tokens.filter((t) => t.type === TOKEN_TYPES.EQUALS).length;

  if (equalsCount > 1) {
    throw new ParseError("Rumus hanya boleh memiliki satu tanda '='.");
  }

  if (equalsCount === 1) {
    const eqIndex = tokens.findIndex((t) => t.type === TOKEN_TYPES.EQUALS);
    const lhsTokens = tokens.slice(0, eqIndex);
    const rhsTokens = tokens.slice(eqIndex + 1);

    if (lhsTokens.length === 0) {
      throw new ParseError("Bagian kiri rumus (sebelum '=') tidak boleh kosong.");
    }
    if (rhsTokens.length === 0) {
      throw new ParseError("Bagian kanan rumus (setelah '=') tidak boleh kosong.");
    }

    const lhs = parseTokensAsExpression(lhsTokens);
    const rhs = parseTokensAsExpression(rhsTokens);

    const rawEqIndex = trimmed.indexOf("=");
    const lhsRaw = trimmed.slice(0, rawEqIndex).trim();
    const rhsRaw = trimmed.slice(rawEqIndex + 1).trim();

    return { hasEquals: true, lhs, rhs, lhsRaw, rhsRaw, raw: trimmed };
  }

  const expr = parseTokensAsExpression(tokens);
  return { hasEquals: false, expr, raw: trimmed };
}
