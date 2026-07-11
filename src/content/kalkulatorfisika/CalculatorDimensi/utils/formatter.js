// utils/formatter.js
//
// Kumpulan fungsi pemformatan tampilan (bukan logika perhitungan).
// Dipakai untuk:
//   - Mengubah objek dimensi {M,L,T,I} menjadi string seperti "ML²T⁻²"
//   - Mengubah angka pangkat menjadi superskrip unicode
//   - Mencetak ulang (pretty-print) AST rumus menjadi string bertanda kurung
//     siku "[m][a]" atau tersubstitusi dimensi "M(LT⁻²)" untuk fitur langkah penyelesaian

import { BASE_DIMENSIONS } from "./dimensionData.js";

const SUPERSCRIPT_DIGITS = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "-": "⁻",
};

/**
 * Mengubah angka menjadi notasi superskrip unicode, misalnya -2 -> "⁻²".
 * Jika angka bukan bilangan bulat (mis. 0.5), dikembalikan dalam bentuk "^0.5"
 * karena tidak ada karakter superskrip pecahan yang umum dipakai.
 * @param {number} n
 * @returns {string}
 */
export function superscript(n) {
  if (!Number.isInteger(n)) {
    return `^${n}`;
  }
  return String(n)
    .split("")
    .map((ch) => SUPERSCRIPT_DIGITS[ch] ?? ch)
    .join("");
}

/**
 * Menghitung berapa banyak dimensi pokok (M, L, T, I) yang eksponennya tidak nol.
 * Dipakai untuk menentukan apakah suatu dimensi perlu dibungkus tanda kurung
 * saat disubstitusikan ke dalam perkalian/pembagian, misalnya "(LT⁻²)" vs "M".
 * @param {{M:number,L:number,T:number,I:number}} dimension
 * @returns {number}
 */
export function countActiveBases(dimension) {
  return BASE_DIMENSIONS.filter((base) => dimension[base] !== 0).length;
}

/**
 * Mengecek apakah suatu objek dimensi sama sekali tidak berdimensi (semua eksponen 0).
 * @param {{M:number,L:number,T:number,I:number}} dimension
 * @returns {boolean}
 */
export function isDimensionless(dimension) {
  return BASE_DIMENSIONS.every((base) => !dimension[base]);
}

/**
 * Mengubah objek dimensi {M,L,T,I} menjadi string dimensi standar,
 * misalnya {M:1,L:2,T:-2,I:0} -> "ML²T⁻²".
 * Besaran tanpa dimensi (semua eksponen 0) dikembalikan sebagai "1".
 * @param {{M:number,L:number,T:number,I:number}} dimension
 * @returns {string}
 */
export function formatDimension(dimension) {
  if (isDimensionless(dimension)) return "1";

  let result = "";
  for (const base of BASE_DIMENSIONS) {
    const exponent = dimension[base];
    if (exponent === 0) continue;
    result += base;
    if (exponent !== 1) {
      result += superscript(exponent);
    }
  }
  return result;
}

/**
 * Membungkus string dimensi dengan tanda kurung jika dimensi tersebut merupakan
 * dimensi majemuk (lebih dari satu dimensi pokok aktif), misalnya "LT⁻²" -> "(LT⁻²)"
 * tetapi "M" tetap "M". Dipakai saat menyusun langkah substitusi perkalian/pembagian
 * agar tidak ambigu, seperti pada contoh "M(LT⁻²)".
 * @param {{M:number,L:number,T:number,I:number}} dimension
 * @returns {string}
 */
export function wrapIfCompound(dimension) {
  const text = formatDimension(dimension);
  return countActiveBases(dimension) > 1 ? `(${text})` : text;
}

/**
 * Memformat angka koefisien untuk ditampilkan, dengan beberapa kasus khusus
 * agar terasa alami secara matematis (0.5 -> "½", bilangan bulat tanpa desimal, dst).
 * @param {number} value
 * @returns {string}
 */
export function formatNumber(value) {
  if (value === 0.5) return "½";
  if (value === 0.25) return "¼";
  if (value === 0.75) return "¾";
  if (Number.isInteger(value)) return String(value);
  // Batasi hingga 4 angka di belakang koma, buang nol berlebih di akhir.
  return String(Number(value.toFixed(4)));
}

// Urutan prioritas operator, dipakai untuk menentukan kapan tanda kurung
// perlu ditambahkan saat mencetak ulang (pretty-print) AST.
const PRECEDENCE = { "+": 1, "-": 1, "*": 2, "/": 2 };

/**
 * Mencetak ulang (pretty-print) satu node AST menjadi string, dengan leaf
 * (Number/Variable) dirender melalui fungsi kustom yang diberikan pemanggil.
 * Dipakai dimensionMath.js untuk menghasilkan dua gaya tampilan:
 *   - "[m][a]"     -> renderVariable menampilkan "[simbol]"
 *   - "M(LT⁻²)"    -> renderVariable menampilkan dimensi tersubstitusi
 *
 * renderVariable/renderNumber menerima argumen kedua berupa konteks
 * `{ parentOp }` yaitu operator dari node induk langsung (atau null bila
 * berada di posisi paling luar). Konteks ini dipakai misalnya oleh
 * dimensionMath.js untuk memutuskan kapan dimensi majemuk perlu dibungkus
 * kurung: hanya saat parentOp adalah '*', '/', atau '^' — bukan saat '+'/'-',
 * supaya "a+t" tetap tampil sebagai "LT⁻² + T", bukan "(LT⁻²) + T".
 *
 * @param {object} node - Node AST dari expressionParser.js
 * @param {{
 *   renderVariable: (symbol: string, context: {parentOp: (string|null)}) => string,
 *   renderNumber?: (value: number, context: {parentOp: (string|null)}) => string,
 * }} renderers
 * @returns {string}
 */
export function stringifyAst(node, renderers) {
  const renderNumber = renderers.renderNumber || ((value) => formatNumber(value));

  /**
   * Merender node sebagai anak langsung dari operator biner `parentOp`,
   * meneruskan konteks untuk keperluan pembungkusan dimensi majemuk,
   * dan menambah tanda kurung struktural bila urutan operasi mengharuskan.
   */
  function renderChild(child, parentOp, side) {
    const rendered = renderNode(child, parentOp);

    if (child.type === "UnaryMinus") {
      return `(${rendered})`;
    }

    if (child.type === "BinaryOp" && child.op !== "^") {
      const childPrec = PRECEDENCE[child.op];
      const parentPrec = PRECEDENCE[parentOp];
      const needsParens =
        childPrec < parentPrec ||
        (childPrec === parentPrec &&
          side === "right" &&
          (parentOp === "-" || parentOp === "/"));
      return needsParens ? `(${rendered})` : rendered;
    }

    return rendered;
  }

  /**
   * Merender basis dari operator pangkat (mis. basis dari v² adalah v),
   * dengan konteks parentOp='^' agar dimensi majemuk ikut dibungkus kurung,
   * ditambah kurung struktural bila basisnya sendiri berupa ekspresi.
   */
  function renderExponentBase(baseNode) {
    const rendered = renderNode(baseNode, "^");
    if (baseNode.type === "BinaryOp" || baseNode.type === "UnaryMinus") {
      return `(${rendered})`;
    }
    return rendered;
  }

  function renderNode(n, parentOp) {
    switch (n.type) {
      case "Number":
        return renderNumber(n.value, { parentOp: parentOp ?? null });

      case "Variable":
        return renderers.renderVariable(n.symbol, { parentOp: parentOp ?? null });

      case "UnaryMinus":
        return `-${renderNode(n.value, null)}`;

      case "BinaryOp": {
        if (n.op === "^") {
          const base = renderExponentBase(n.left);
          if (n.right.type === "Number" && Number.isInteger(n.right.value)) {
            return `${base}${superscript(n.right.value)}`;
          }
          const exponentStr = renderNode(n.right, "^");
          return `${base}^${exponentStr}`;
        }

        const left = renderChild(n.left, n.op, "left");
        const right = renderChild(n.right, n.op, "right");

        if (n.op === "*") return `${left}${right}`;
        if (n.op === "/") return `${left}/${right}`;
        // '+' dan '-' diberi spasi agar mudah dibaca, mis. "LT⁻² + T"
        return `${left} ${n.op} ${right}`;
      }

      default:
        return "";
    }
  }

  return renderNode(node, null);
}
