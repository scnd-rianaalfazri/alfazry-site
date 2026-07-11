// utils/dimensionMath.js
//
// Inti logika Kalkulator Dimensi Fisika. File ini menghubungkan parser
// (expressionParser.js) dengan data dimensi (dimensionData.js) dan
// pemformatan tampilan (formatter.js) untuk menghasilkan:
//   - Perhitungan dimensi akhir dari suatu rumus (Fitur 2)
//   - Langkah penyelesaian bertahap (Fitur 3)
//   - Validasi homogenitas persamaan (Fitur 4)
//   - Interpretasi hasil ke nama besaran yang dikenal (Fitur 9)
//   - Penanganan variabel tak dikenal (Fitur 10)
//
// Fungsi utama yang dipakai komponen UI adalah `analyzeFormula(rawInput)`.

import { parseFormula } from "./expressionParser.js";
import {
  BASE_DIMENSIONS,
  ZERO_DIMENSION,
  VARIABLE_TABLE,
  QUANTITY_LIBRARY,
} from "./dimensionData.js";
import { formatDimension, countActiveBases, stringifyAst } from "./formatter.js";

/** Error saat rumus mengandung simbol yang belum memiliki data dimensi. */
export class UnknownVariableError extends Error {
  constructor(symbol) {
    super(`Variabel ${symbol} belum memiliki data dimensi.`);
    this.name = "UnknownVariableError";
    this.symbol = symbol;
  }
}

/** Error saat penjumlahan/pengurangan dilakukan antara dua dimensi yang berbeda. */
export class HeterogeneousError extends Error {
  constructor(leftDimension, rightDimension, operator) {
    super(
      "Penjumlahan/pengurangan antara besaran berbeda dimensi tidak diperbolehkan (tidak homogen)."
    );
    this.name = "HeterogeneousError";
    this.leftDimension = leftDimension;
    this.rightDimension = rightDimension;
    this.operator = operator;
  }
}

/** Error saat eksponen pada operator '^' bukan berupa angka konstan. */
export class InvalidExponentError extends Error {
  constructor() {
    super("Eksponen pada operator pangkat (^) harus berupa angka konstan, misalnya v^2.");
    this.name = "InvalidExponentError";
  }
}

// --- Renderer untuk stringifyAst (dipakai membangun teks langkah penyelesaian) ---

/** Merender variabel sebagai "[simbol]", dipakai pada baris substitusi simbol. */
const BRACKET_RENDERER = {
  renderVariable: (symbol) => `[${symbol}]`,
};

/**
 * Merender variabel sebagai dimensinya, dibungkus kurung hanya bila dimensi
 * majemuk DAN sedang berada dalam konteks perkalian/pembagian/pangkat
 * (bukan penjumlahan/pengurangan), dipakai pada baris substitusi dimensi.
 */
const DIMENSION_RENDERER = {
  renderVariable: (symbol, context) => {
    const entry = VARIABLE_TABLE[symbol];
    const dimension = entry.dimension;
    const text = formatDimension(dimension);
    const isCompound = countActiveBases(dimension) > 1;
    const shouldWrap =
      isCompound &&
      (context.parentOp === "*" || context.parentOp === "/" || context.parentOp === "^");
    return shouldWrap ? `(${text})` : text;
  },
};

// --- Aritmetika dimensi dasar ---

/** Mengecek dua objek dimensi sama persis pada seluruh dimensi pokok. */
function dimensionsEqual(a, b) {
  return BASE_DIMENSIONS.every((base) => a[base] === b[base]);
}

/** Menjumlahkan eksponen dua dimensi (dipakai untuk operator perkalian). */
function multiplyDimension(a, b) {
  const result = {};
  for (const base of BASE_DIMENSIONS) result[base] = a[base] + b[base];
  return result;
}

/** Mengurangkan eksponen dua dimensi (dipakai untuk operator pembagian). */
function divideDimension(a, b) {
  const result = {};
  for (const base of BASE_DIMENSIONS) result[base] = a[base] - b[base];
  return result;
}

/** Mengalikan seluruh eksponen dimensi dengan suatu angka (dipakai untuk operator pangkat). */
function powerDimension(a, n) {
  const result = {};
  for (const base of BASE_DIMENSIONS) result[base] = a[base] * n;
  return result;
}

/**
 * Mengambil nilai angka konstan dari node AST bila memungkinkan
 * (Number, atau UnaryMinus yang membungkus Number). Dipakai untuk
 * memvalidasi bahwa eksponen pada operator '^' adalah angka pasti.
 * @param {object} node
 * @returns {number|null}
 */
function extractConstantNumber(node) {
  if (node.type === "Number") return node.value;
  if (node.type === "UnaryMinus") {
    const inner = extractConstantNumber(node.value);
    return inner === null ? null : -inner;
  }
  return null;
}

/**
 * Mengambil data dimensi suatu simbol variabel dari tabel data.
 * @param {string} symbol
 * @returns {{M:number,L:number,T:number,I:number}}
 */
function lookupVariableDimension(symbol) {
  const entry = VARIABLE_TABLE[symbol];
  if (!entry) {
    throw new UnknownVariableError(symbol);
  }
  return entry.dimension;
}

/**
 * Menghitung dimensi akhir dari sebuah node AST secara rekursif.
 * Melempar UnknownVariableError bila ada simbol tak dikenal, atau
 * HeterogeneousError bila ada penjumlahan/pengurangan antar dimensi berbeda.
 * @param {object} ast
 * @returns {{M:number,L:number,T:number,I:number}}
 */
export function evaluateDimension(ast) {
  switch (ast.type) {
    case "Number":
      return { ...ZERO_DIMENSION };

    case "Variable":
      return { ...lookupVariableDimension(ast.symbol) };

    case "UnaryMinus":
      // Tanda minus tidak memengaruhi dimensi (dimensi -x sama dengan dimensi x).
      return evaluateDimension(ast.value);

    case "BinaryOp": {
      if (ast.op === "+" || ast.op === "-") {
        const left = evaluateDimension(ast.left);
        const right = evaluateDimension(ast.right);
        if (!dimensionsEqual(left, right)) {
          throw new HeterogeneousError(left, right, ast.op);
        }
        return left;
      }

      if (ast.op === "*") {
        return multiplyDimension(evaluateDimension(ast.left), evaluateDimension(ast.right));
      }

      if (ast.op === "/") {
        return divideDimension(evaluateDimension(ast.left), evaluateDimension(ast.right));
      }

      if (ast.op === "^") {
        const base = evaluateDimension(ast.left);
        const exponent = extractConstantNumber(ast.right);
        if (exponent === null) {
          throw new InvalidExponentError();
        }
        return powerDimension(base, exponent);
      }

      throw new Error(`Operator tidak dikenal: ${ast.op}`);
    }

    default:
      throw new Error(`Jenis node AST tidak dikenal: ${ast.type}`);
  }
}

/**
 * Mengumpulkan seluruh simbol variabel unik yang dipakai dalam sebuah AST,
 * berurutan sesuai kemunculan pertamanya, lengkap dengan info dimensinya.
 * @param {object} ast
 * @returns {{symbol:string, name:(string|null), dimension:(object|null), dimensionText:(string|null), known:boolean}[]}
 */
export function getUsedVariables(ast) {
  const symbols = [];
  const seen = new Set();

  function walk(node) {
    if (!node) return;
    if (node.type === "Variable") {
      if (!seen.has(node.symbol)) {
        seen.add(node.symbol);
        symbols.push(node.symbol);
      }
      return;
    }
    if (node.type === "UnaryMinus") {
      walk(node.value);
      return;
    }
    if (node.type === "BinaryOp") {
      walk(node.left);
      walk(node.right);
    }
  }

  walk(ast);

  return symbols.map((symbol) => {
    const entry = VARIABLE_TABLE[symbol];
    return {
      symbol,
      name: entry ? entry.name : null,
      dimension: entry ? entry.dimension : null,
      dimensionText: entry ? formatDimension(entry.dimension) : null,
      known: !!entry,
    };
  });
}

/**
 * Mencari simbol variabel pertama (urut kemunculan) yang tidak memiliki
 * data dimensi pada AST tertentu.
 * @param {object} ast
 * @returns {string|null}
 */
function findFirstUnknownVariable(ast) {
  const found = getUsedVariables(ast).find((v) => !v.known);
  return found ? found.symbol : null;
}

/**
 * Menghitung dimensi suatu ekspresi dan menghasilkan deskripsi tampilannya,
 * baik ketika berhasil (dimensi tunggal) maupun ketika tidak homogen
 * (ditampilkan apa adanya, mis. "LT⁻² + T").
 * @param {object} ast
 * @returns {{success:boolean, dimension:(object|null), displayText:string}}
 */
function describeDimensionOfExpression(ast) {
  try {
    const dimension = evaluateDimension(ast);
    return { success: true, dimension, displayText: formatDimension(dimension) };
  } catch (err) {
    if (err instanceof HeterogeneousError) {
      return {
        success: false,
        dimension: null,
        displayText: stringifyAst(ast, DIMENSION_RENDERER),
      };
    }
    throw err;
  }
}

/**
 * Membangun langkah penyelesaian bertahap ala "[F] = [m][a] = M(LT⁻²) = MLT⁻²"
 * untuk sebuah AST, diberi label untuk baris pertama (nama variabel ruas kiri,
 * atau teks ekspresi mentah bila tidak ada ruas kiri).
 * @param {object} ast
 * @param {string} label
 * @returns {{
 *   lines: string[],
 *   finalDimension: (object|null),
 *   isHeterogeneous: boolean,
 *   unknownVariable: (string|null),
 *   lastLineText: string,
 * }}
 */
function buildSteps(ast, label) {
  const unknownVariable = findFirstUnknownVariable(ast);
  if (unknownVariable) {
    return {
      lines: [`[${label}]`],
      finalDimension: null,
      isHeterogeneous: false,
      unknownVariable,
      lastLineText: "",
    };
  }

  const bracketText = stringifyAst(ast, BRACKET_RENDERER);
  const dimensionText = stringifyAst(ast, DIMENSION_RENDERER);
  const description = describeDimensionOfExpression(ast);

  const lines = [`[${label}]`, `= ${bracketText}`, `= ${dimensionText}`];
  let lastLineText = dimensionText;

  if (description.success) {
    const finalText = formatDimension(description.dimension);
    lines.push(`= ${finalText}`);
    lastLineText = finalText;
  }

  return {
    lines,
    finalDimension: description.success ? description.dimension : null,
    isHeterogeneous: !description.success,
    unknownVariable: null,
    lastLineText,
  };
}

/**
 * Mencari besaran fisika bernama (dari QUANTITY_LIBRARY) yang dimensinya
 * persis sama dengan dimensi yang diberikan. Dipakai untuk fitur interpretasi.
 * @param {{M:number,L:number,T:number,I:number}} dimension
 * @returns {string[]} daftar nama besaran yang cocok (bisa lebih dari satu, bisa kosong)
 */
export function findMatchingQuantities(dimension) {
  return QUANTITY_LIBRARY.filter((item) => dimensionsEqual(item.dimension, dimension)).map(
    (item) => item.name
  );
}

/**
 * Mencari besaran fisika bernama berdasarkan kata kunci nama (Fitur 1: "Cari Dimensi Besaran").
 * Pencarian tidak peka huruf besar/kecil dan juga mencocokkan alias.
 * @param {string} query
 * @returns {object[]} daftar entri QUANTITY_LIBRARY yang cocok
 */
export function searchQuantities(query) {
  const normalized = (query || "").trim().toLowerCase();
  if (!normalized) return [];
  return QUANTITY_LIBRARY.filter((item) => {
    if (item.name.toLowerCase().includes(normalized)) return true;
    return item.aliases.some((alias) => alias.includes(normalized));
  });
}

/**
 * Fungsi utama: menganalisis satu input rumus mentah dari pengguna dan
 * mengembalikan seluruh informasi yang dibutuhkan UI (langkah penyelesaian,
 * daftar variabel, validasi homogenitas, dan interpretasi).
 *
 * Melempar error (ParseError, TokenizeError, UnknownVariableError,
 * InvalidExponentError) dengan pesan berbahasa Indonesia yang siap
 * ditampilkan langsung ke pengguna bila terjadi kesalahan.
 *
 * @param {string} rawInput
 * @returns {object} hasil analisis, bentuknya berbeda tergantung ada '=' atau tidak
 */
export function analyzeFormula(rawInput) {
  const parsed = parseFormula(rawInput);

  if (parsed.hasEquals) {
    const unknownInLhs = findFirstUnknownVariable(parsed.lhs);
    const unknownInRhs = findFirstUnknownVariable(parsed.rhs);
    const firstUnknown = unknownInLhs || unknownInRhs;
    if (firstUnknown) {
      throw new UnknownVariableError(firstUnknown);
    }

    const rhsSteps = buildSteps(parsed.rhs, parsed.lhsRaw);
    const lhsDescription = describeDimensionOfExpression(parsed.lhs);

    const lhsDisplay = lhsDescription.success
      ? formatDimension(lhsDescription.dimension)
      : lhsDescription.displayText;
    const rhsDisplay = rhsSteps.lastLineText;

    const isHomogeneous =
      lhsDescription.success &&
      !rhsSteps.isHeterogeneous &&
      dimensionsEqual(lhsDescription.dimension, rhsSteps.finalDimension);

    const interpretation =
      !rhsSteps.isHeterogeneous && rhsSteps.finalDimension
        ? findMatchingQuantities(rhsSteps.finalDimension)
        : [];

    return {
      type: "equation",
      raw: parsed.raw,
      lhsRaw: parsed.lhsRaw,
      rhsRaw: parsed.rhsRaw,
      steps: rhsSteps.lines,
      variables: getUsedVariables(parsed.rhs),
      isHomogeneous,
      lhsDisplay,
      rhsDisplay,
      finalDimension: rhsSteps.finalDimension,
      interpretation,
    };
  }

  // Ekspresi tunggal tanpa tanda '='
  const unknownVariable = findFirstUnknownVariable(parsed.expr);
  if (unknownVariable) {
    throw new UnknownVariableError(unknownVariable);
  }

  const steps = buildSteps(parsed.expr, parsed.raw);
  const interpretation =
    !steps.isHeterogeneous && steps.finalDimension
      ? findMatchingQuantities(steps.finalDimension)
      : [];

  return {
    type: "expression",
    raw: parsed.raw,
    steps: steps.lines,
    variables: getUsedVariables(parsed.expr),
    isHeterogeneous: steps.isHeterogeneous,
    finalDimension: steps.finalDimension,
    finalDimensionText: steps.finalDimension ? formatDimension(steps.finalDimension) : null,
    interpretation,
  };
}
