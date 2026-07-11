// utils/tokenizer.js
//
// Mengubah string rumus (misalnya "(m*v²)/(r*t)" atau "s = vt + ½at²")
// menjadi deretan token yang siap dibaca oleh expressionParser.js.
//
// Tokenizer ini ditulis manual tanpa library eksternal, dan menangani:
//   - Operator: + - * / ^ (termasuk alias × dan ÷)
//   - Tanda kurung: ( )
//   - Tanda sama dengan: =
//   - Angka desimal, termasuk simbol pecahan "½"
//   - Superskrip unicode (v², t⁻²) yang otomatis diterjemahkan menjadi "^2", "^-2"
//   - Simbol variabel satu karakter (termasuk huruf Yunani seperti ρ, μ, λ, ω)
//   - Perkalian tersirat, misalnya "vt" dibaca sebagai "v * t", "2m" dibaca "2 * m"

import { VARIABLE_TABLE } from "./dimensionData.js";

/** Jenis-jenis token yang dikenali parser. */
export const TOKEN_TYPES = {
  NUMBER: "NUMBER",
  IDENT: "IDENT",
  OP: "OP",
  LPAREN: "LPAREN",
  RPAREN: "RPAREN",
  EQUALS: "EQUALS",
};

/** Error khusus untuk kegagalan saat tokenisasi (karakter tidak dikenal, dsb). */
export class TokenizeError extends Error {
  constructor(message) {
    super(message);
    this.name = "TokenizeError";
  }
}

// Peta karakter superskrip unicode ke karakter biasa.
const SUPERSCRIPT_MAP = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "⁻": "-",
  "⁺": "+",
};

const SUPERSCRIPT_REGEX = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+/g;

// Daftar simbol variabel yang dikenal, diurutkan dari yang paling panjang
// agar pencocokan simbol multi-karakter (jika suatu saat ditambahkan) lebih diutamakan.
const KNOWN_SYMBOLS = Object.keys(VARIABLE_TABLE).sort(
  (a, b) => b.length - a.length
);

/**
 * Mengganti seluruh karakter superskrip (v², t⁻²) menjadi notasi pangkat biasa (v^2, t^-2),
 * lalu menormalkan alias operator (×, ÷) dan simbol pecahan (½).
 * @param {string} raw
 * @returns {string}
 */
function preprocess(raw) {
  let result = raw.replace(SUPERSCRIPT_REGEX, (match) => {
    const translated = Array.from(match)
      .map((ch) => SUPERSCRIPT_MAP[ch])
      .join("");
    return "^" + translated;
  });

  result = result
    .replace(/×/g, "*")
    .replace(/·/g, "*")
    .replace(/÷/g, "/")
    .replace(/½/g, "0.5")
    .replace(/¼/g, "0.25")
    .replace(/¾/g, "0.75");

  return result;
}

/**
 * Mencoba mencocokkan simbol variabel yang dikenal di posisi `index` pada string `str`,
 * dengan pencocokan terpanjang lebih diutamakan (longest match).
 * @param {string} str
 * @param {number} index
 * @returns {string|null} simbol yang cocok, atau null jika tidak ada
 */
function matchKnownSymbol(str, index) {
  for (const symbol of KNOWN_SYMBOLS) {
    if (str.startsWith(symbol, index)) {
      return symbol;
    }
  }
  return null;
}

/**
 * Mengecek apakah suatu karakter valid sebagai huruf simbol variabel
 * (huruf Latin, huruf Yunani yang dipakai, dsb).
 * @param {string} ch
 * @returns {boolean}
 */
function isIdentifierChar(ch) {
  // Huruf Latin biasa (a-z, A-Z) atau karakter unicode di luar rentang ASCII
  // (untuk menampung huruf Yunani seperti ρ, μ, λ, ω) yang bukan simbol operator.
  if (/[a-zA-Z]/.test(ch)) return true;
  if (/\s/.test(ch)) return false;
  if ("+-*/^()=.".includes(ch)) return false;
  if (/[0-9]/.test(ch)) return false;
  return true;
}

/**
 * Tokenisasi utama: mengubah string rumus menjadi array token.
 * @param {string} rawInput
 * @returns {{type:string, value:(string|number)}[]}
 */
export function tokenize(rawInput) {
  const input = preprocess(rawInput);
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const ch = input[i];

    // Lewati spasi
    if (/\s/.test(ch)) {
      i += 1;
      continue;
    }

    // Angka (mendukung desimal seperti 0.5)
    if (/[0-9]/.test(ch) || (ch === "." && /[0-9]/.test(input[i + 1] || ""))) {
      let start = i;
      let sawDot = false;
      while (
        i < input.length &&
        (/[0-9]/.test(input[i]) || (input[i] === "." && !sawDot))
      ) {
        if (input[i] === ".") sawDot = true;
        i += 1;
      }
      const numberText = input.slice(start, i);
      tokens.push({ type: TOKEN_TYPES.NUMBER, value: parseFloat(numberText) });
      continue;
    }

    // Tanda kurung
    if (ch === "(") {
      tokens.push({ type: TOKEN_TYPES.LPAREN, value: "(" });
      i += 1;
      continue;
    }
    if (ch === ")") {
      tokens.push({ type: TOKEN_TYPES.RPAREN, value: ")" });
      i += 1;
      continue;
    }

    // Tanda sama dengan
    if (ch === "=") {
      tokens.push({ type: TOKEN_TYPES.EQUALS, value: "=" });
      i += 1;
      continue;
    }

    // Operator aritmetika
    if ("+-*/^".includes(ch)) {
      tokens.push({ type: TOKEN_TYPES.OP, value: ch });
      i += 1;
      continue;
    }

    // Simbol variabel (dicoba cocokkan simbol yang dikenal dulu, lalu fallback 1 karakter)
    if (isIdentifierChar(ch)) {
      const known = matchKnownSymbol(input, i);
      if (known) {
        tokens.push({ type: TOKEN_TYPES.IDENT, value: known });
        i += known.length;
      } else {
        tokens.push({ type: TOKEN_TYPES.IDENT, value: ch });
        i += 1;
      }
      continue;
    }

    // Karakter yang benar-benar tidak dikenal
    throw new TokenizeError(`Karakter tidak dikenal: "${ch}"`);
  }

  return insertImplicitMultiplication(tokens);
}

/**
 * Menyisipkan operator perkalian tersirat di antara token yang saling berdekatan
 * tanpa operator eksplisit, misalnya "2m" (2 * m), "vt" (v * t), ")(" (paren * paren).
 * @param {{type:string, value:(string|number)}[]} tokens
 * @returns {{type:string, value:(string|number)}[]}
 */
function insertImplicitMultiplication(tokens) {
  const result = [];

  for (let idx = 0; idx < tokens.length; idx += 1) {
    const current = tokens[idx];
    const prev = result[result.length - 1];

    if (prev) {
      const prevEndsValue =
        prev.type === TOKEN_TYPES.NUMBER ||
        prev.type === TOKEN_TYPES.IDENT ||
        prev.type === TOKEN_TYPES.RPAREN;

      const currentStartsValue =
        current.type === TOKEN_TYPES.NUMBER ||
        current.type === TOKEN_TYPES.IDENT ||
        current.type === TOKEN_TYPES.LPAREN;

      if (prevEndsValue && currentStartsValue) {
        result.push({ type: TOKEN_TYPES.OP, value: "*" });
      }
    }

    result.push(current);
  }

  return result;
}
