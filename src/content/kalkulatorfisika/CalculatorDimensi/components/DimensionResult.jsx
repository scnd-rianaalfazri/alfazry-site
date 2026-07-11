// components/DimensionResult.jsx
//
// Menampilkan hasil akhir analisis, dalam tiga kemungkinan bentuk:
//   1. Pesan error (Fitur 10) - variabel tak dikenal, sintaks tidak valid, dst.
//   2. Hasil pencarian besaran berdasarkan nama (Fitur 1)
//   3. Hasil analisis rumus: dimensi akhir + interpretasi (Fitur 2/9),
//      atau validasi homogenitas persamaan (Fitur 4/9)

import React from "react";

/**
 * Membangun teks interpretasi seperti "ML²T⁻² adalah dimensi Energi atau Usaha."
 * @param {string} dimensionText
 * @param {string[]} matches
 * @returns {string|null}
 */
function buildInterpretationText(dimensionText, matches) {
  if (!matches || matches.length === 0) return null;
  return `${dimensionText} adalah dimensi ${matches.join(" atau ")}.`;
}

/** Blok pesan error, dipakai untuk seluruh jenis kegagalan (Fitur 10). */
function ErrorBlock({ message }) {
  return (
    <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4">
      <p className="flex items-start gap-2 text-sm text-red-300">
        <span className="mt-0.5">⚠</span>
        <span>{message}</span>
      </p>
    </div>
  );
}

/** Blok hasil pencarian besaran berdasarkan nama (Fitur 1). */
function QuantitySearchResults({ matches, query }) {
  if (matches.length === 0) {
    return (
      <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#111827]/60 p-4 text-sm text-slate-400">
        Tidak ada besaran yang cocok dengan pencarian "{query}".
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {matches.map((item) => (
        <div
          key={item.name}
          className="rounded-2xl border border-[#00E5FF]/25 bg-[#111827]/60 p-4 backdrop-blur-md"
        >
          <h3 className="text-lg font-semibold text-slate-100">{item.name}</h3>

          <div className="mt-3 flex flex-col gap-1 text-sm">
            <p className="text-slate-400">
              Rumus: <span className="font-mono text-slate-200">{item.formula}</span>
            </p>
            <p className="text-slate-400">
              Dimensi:{" "}
              <span className="font-mono text-lg font-semibold text-[#00E5FF]">
                {Object.keys(item.dimension).length ? formatQuantityDimension(item) : ""}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Kecil: memformat dimensi milik entri QUANTITY_LIBRARY untuk ditampilkan.
 * (Entri sudah membawa objek dimensi {M,L,T,I}; diformat ulang secara lokal
 * agar QuantitySearchResults tidak perlu bergantung ke formatter.js hanya
 * untuk satu pemakaian kecil ini.)
 */
function formatQuantityDimension(item) {
  const order = ["M", "L", "T", "I"];
  const superscriptMap = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵" };
  const isDimensionless = order.every((base) => !item.dimension[base]);
  if (isDimensionless) return "1";

  let text = "";
  for (const base of order) {
    const exp = item.dimension[base];
    if (!exp) continue;
    text += base;
    if (exp !== 1) {
      text += String(exp)
        .split("")
        .map((ch) => superscriptMap[ch] ?? ch)
        .join("");
    }
  }
  return text;
}

/** Blok validasi homogenitas untuk rumus berbentuk persamaan (Fitur 4). */
function EquationValidation({ result }) {
  const { isHomogeneous, lhsDisplay, rhsDisplay } = result;
  const comparisonSymbol = isHomogeneous ? "=" : "≠";

  return (
    <div
      className={[
        "rounded-2xl border p-4 backdrop-blur-md",
        isHomogeneous
          ? "border-emerald-400/40 bg-emerald-400/10"
          : "border-red-500/40 bg-red-500/10",
      ].join(" ")}
    >
      <p
        className={[
          "flex items-center gap-2 text-sm font-semibold",
          isHomogeneous ? "text-emerald-300" : "text-red-300",
        ].join(" ")}
      >
        <span>{isHomogeneous ? "✓" : "❌"}</span>
        <span>{isHomogeneous ? "Persamaan homogen" : "Tidak homogen"}</span>
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 font-mono text-lg">
        <span className="font-semibold text-slate-100">{lhsDisplay}</span>
        <span
          className={isHomogeneous ? "text-emerald-400" : "text-red-400"}
        >
          {comparisonSymbol}
        </span>
        <span className="font-semibold text-slate-100">{rhsDisplay}</span>
      </div>
    </div>
  );
}

/** Blok hasil dimensi akhir untuk rumus tanpa tanda '=' (Fitur 2). */
function ExpressionFinalResult({ result }) {
  if (result.isHeterogeneous) {
    return (
      <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4">
        <p className="text-sm font-semibold text-red-300">❌ Tidak homogen</p>
        <p className="mt-2 text-center font-mono text-lg text-slate-100">
          {result.steps[result.steps.length - 1].replace(/^=\s*/, "")}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/5 p-4 text-center backdrop-blur-md">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
        Hasil
      </p>
      <p className="mt-2 font-mono text-2xl font-bold text-[#00E5FF]">
        {result.finalDimensionText}
      </p>
    </div>
  );
}

/** Blok interpretasi hasil ke nama besaran yang dikenal (Fitur 9). */
function InterpretationBlock({ dimensionText, matches }) {
  const text = buildInterpretationText(dimensionText, matches);
  if (!text) return null;

  return (
    <div className="rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
        Interpretasi
      </p>
      <p className="mt-1.5 text-sm text-slate-200">{text}</p>
    </div>
  );
}

/**
 * Komponen utama hasil. Salah satu dari `error`, `quantityMatches`, atau
 * `result` diisi tergantung mode kalkulator yang sedang aktif.
 * @param {{
 *   error?: string|null,
 *   quantityMatches?: object[]|null,
 *   searchQuery?: string,
 *   result?: object|null,
 * }} props
 */
export default function DimensionResult({ error, quantityMatches, searchQuery, result }) {
  if (error) {
    return <ErrorBlock message={error} />;
  }

  if (quantityMatches) {
    return <QuantitySearchResults matches={quantityMatches} query={searchQuery} />;
  }

  if (!result) return null;

  if (result.type === "equation") {
    const dimensionTextForInterpretation = result.isHomogeneous ? result.rhsDisplay : null;
    return (
      <div className="flex flex-col gap-3">
        <EquationValidation result={result} />
        {dimensionTextForInterpretation && (
          <InterpretationBlock
            dimensionText={dimensionTextForInterpretation}
            matches={result.interpretation}
          />
        )}
      </div>
    );
  }

  // type === 'expression'
  return (
    <div className="flex flex-col gap-3">
      <ExpressionFinalResult result={result} />
      {!result.isHeterogeneous && (
        <InterpretationBlock
          dimensionText={result.finalDimensionText}
          matches={result.interpretation}
        />
      )}
    </div>
  );
}
