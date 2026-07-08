import { useMemo, useState } from "react";
import { RotateCcw, Sigma } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// VALIDATOR: hanya angka valid (integer, desimal dengan koma/titik, notasi ilmiah)
// ─────────────────────────────────────────────────────────────
// Normalisasi: ganti koma -> titik untuk pemrosesan internal
const normalizeInput = (raw) => raw.trim().replace(",", ".");

const VALID_NUMBER_RE = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/;

function isValidInput(raw) {
  return VALID_NUMBER_RE.test(normalizeInput(raw));
}

// ─────────────────────────────────────────────────────────────
// ANALISIS ANGKA PENTING
// ─────────────────────────────────────────────────────────────
function analyzeSignificantFigures(input) {
  const raw = input.trim();
  if (!raw) return null;
  if (!isValidInput(raw)) return { invalid: true };

  // Normalisasi: simpan versi display (dengan koma) dan versi hitung (dengan titik)
  const displayRaw = raw; // dipakai di charMap untuk visualisasi
  const normalized = normalizeInput(raw); // dipakai untuk analisis

  // Pisahkan tanda & eksponen
  const noSign = normalized.replace(/^[+-]/, "");
  const hasExponent = /[eE]/.test(noSign);
  const coefStr = hasExponent ? noSign.split(/[eE]/)[0] : noSign;
  const expStr = hasExponent ? noSign.split(/[eE]/)[1] : null;

  // Untuk display: gunakan versi asli (koma)
  const displayNoSign = displayRaw.replace(/^[+-]/, "");
  const displayCoefStr = hasExponent ? displayNoSign.split(/[eE]/)[0] : displayNoSign;

  const hasDecimalPoint = coefStr.includes(".");
  const hasTrailingDecimal = /\.$/.test(coefStr); // misal "100."

  // Kumpulkan digit-digit (tanpa titik desimal) beserta posisi aslinya di coefStr
  const digitEntries = []; // { char, posInCoef }
  for (let i = 0; i < coefStr.length; i++) {
    if (coefStr[i] !== ".") digitEntries.push({ char: coefStr[i], pos: i });
  }

  // Cari digit bukan-nol pertama
  const firstNonZeroIdx = digitEntries.findIndex((d) => d.char !== "0");

  if (firstNonZeroIdx === -1) {
    return {
      count: 0,
      charMap: buildCharMap(displayRaw, displayCoefStr, new Set(), expStr),
      steps: [{ n: 1, text: "Semua digit adalah nol — angka nol tidak memiliki angka penting.", type: "info" }],
      rules: rulesFor(hasDecimalPoint, false, 0),
      hasDecimalPoint,
      hasExponent,
    };
  }

  // Cari digit bukan-nol terakhir
  let lastNonZeroIdx = -1;
  for (let i = digitEntries.length - 1; i >= 0; i--) {
    if (digitEntries[i].char !== "0") { lastNonZeroIdx = i; break; }
  }

  // Tentukan angka penting per digit
  const sigSet = new Set();
  for (let i = 0; i < digitEntries.length; i++) {
    if (i < firstNonZeroIdx) continue; // nol di depan → tidak penting

    if (hasDecimalPoint) {
      // Ada titik desimal → semua digit dari firstNonZero ke akhir penting
      sigSet.add(i);
    } else {
      // Tanpa titik desimal → hanya sampai digit bukan-nol terakhir
      if (i <= lastNonZeroIdx) sigSet.add(i);
    }
  }

  const count = sigSet.size;

  // Hitung nol terikat (captive zeros) & nol akhir
  const captiveZeros = digitEntries
    .slice(firstNonZeroIdx, lastNonZeroIdx + 1)
    .filter((d) => d.char === "0").length;

  const trailingZerosTotal = digitEntries.length - 1 - lastNonZeroIdx;
  const trailingSig = hasDecimalPoint ? trailingZerosTotal : 0;
  const trailingNonSig = hasDecimalPoint ? 0 : trailingZerosTotal;
  const leadingZeros = firstNonZeroIdx;

  // ── Langkah-langkah penjelasan ──
  const steps = [];
  let stepNum = 1;

  if (leadingZeros > 0) {
    steps.push({
      n: stepNum++,
      text: `Abaikan ${leadingZeros} nol di depan (leading zero). Nol di depan angka bukan-nol pertama bukan angka penting.`,
      type: "skip",
    });
  } else {
    steps.push({
      n: stepNum++,
      text: "Tidak ada nol di depan yang perlu diabaikan.",
      type: "info",
    });
  }

  if (captiveZeros > 0) {
    steps.push({
      n: stepNum++,
      text: `Terdapat ${captiveZeros} nol yang diapit oleh angka bukan-nol (captive zero) → selalu angka penting.`,
      type: "sig",
    });
  }

  if (trailingSig > 0) {
    steps.push({
      n: stepNum++,
      text: `Ada tanda desimal pada bilangan ini → ${trailingSig} nol di belakang termasuk angka penting.`,
      type: "sig",
    });
  } else if (trailingNonSig > 0) {
    steps.push({
      n: stepNum++,
      text: `Tidak ada tanda desimal → ${trailingNonSig} nol di belakang BUKAN angka penting (nilainya ambigu tanpa titik desimal).`,
      type: "skip",
    });
  }

  if (hasExponent) {
    steps.push({
      n: stepNum++,
      text: `Bilangan menggunakan notasi ilmiah (×10${expStr}). Angka penting hanya dihitung dari bagian koefisien, bukan eksponen.`,
      type: "info",
    });
  }

  steps.push({
    n: stepNum++,
    text: `Total angka penting = ${count}.`,
    type: "result",
  });

  return {
    count,
    charMap: buildCharMap(displayRaw, displayCoefStr, sigSet, expStr, digitEntries, leadingZeros),
    steps,
    rules: rulesFor(hasDecimalPoint, captiveZeros > 0, trailingSig),
    hasDecimalPoint,
    hasExponent,
    digitEntries,
    sigSet,
  };
}

// Membangun peta karakter untuk visualisasi warna
function buildCharMap(raw, coefStr, sigSet, expStr, digitEntries = [], leadingZeros = 0) {
  const chars = [];
  const signChar = raw.startsWith("+") || raw.startsWith("-") ? raw[0] : null;

  if (signChar) chars.push({ ch: signChar, type: "sign" });

  let digitIdx = 0;
  for (let i = 0; i < coefStr.length; i++) {
    const ch = coefStr[i];
    if (ch === "." || ch === ",") {
      // koma atau titik → tanda desimal
      chars.push({ ch, type: "decimal" });
    } else {
      const isSig = sigSet.has(digitIdx);
      const isLeading = digitIdx < leadingZeros;
      chars.push({ ch, type: isSig ? "sig" : isLeading ? "leading" : "nonsig" });
      digitIdx++;
    }
  }

  if (expStr !== null) {
    chars.push({ ch: "e", type: "exp" });
    for (const c of expStr) chars.push({ ch: c, type: "exp" });
  }

  return chars;
}

function rulesFor(hasDecimal, hasCaptive, trailingSig) {
  return [
    "Semua digit bukan nol (1–9) selalu angka penting.",
    "Nol di depan angka bukan-nol pertama (leading zero) bukan angka penting.",
    hasCaptive
      ? "✓ Nol di antara dua angka bukan-nol (captive zero) → angka penting."
      : "Nol di antara dua angka bukan-nol (captive zero) → angka penting.",
    hasDecimal
      ? "✓ Ada tanda desimal → nol di belakang termasuk angka penting."
      : "Tanpa tanda desimal → nol di belakang bukan angka penting (gunakan notasi ilmiah untuk memperjelas).",
  ];
}

// ─────────────────────────────────────────────────────────────
// KOMPONEN UTAMA
// ─────────────────────────────────────────────────────────────
export default function VirLabKalkulatorAngkaPenting() {
  const [value, setValue] = useState("");
  const result = useMemo(() => analyzeSignificantFigures(value), [value]);

  const isEmpty = value.trim() === "";
  const isInvalid = !isEmpty && result?.invalid;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="rounded-3xl bg-slate-900 border border-slate-700 shadow-xl">
        {/* Header */}
        <div className="p-6 border-b border-slate-700 flex items-center gap-3">
          <Sigma className="text-cyan-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">Kalkulator Angka Penting</h1>
            <p className="text-slate-400 text-sm">
              Hitung jumlah angka penting beserta penjelasan langkah-langkahnya.
            </p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Masukkan bilangan
            </label>
            <input
              className={`w-full rounded-xl bg-slate-800 border p-3 text-white font-mono text-lg focus:outline-none focus:ring-2 ${
                isInvalid
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-700 focus:ring-cyan-500"
              }`}
              placeholder="Contoh: 0,0045600  atau  3,20e5"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            {/* Peringatan tidak valid */}
            {isInvalid && (
              <div className="mt-2 flex items-start gap-2 rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3">
                <span className="text-red-400 text-lg">⚠️</span>
                <div>
                  <p className="text-red-400 font-medium text-sm">Input tidak valid</p>
                  <p className="text-red-300/80 text-xs mt-0.5">
                    Masukkan angka yang valid. Contoh: <code className="bg-slate-700 px-1 rounded">0,0045600</code>,{" "}
                    <code className="bg-slate-700 px-1 rounded">1200,</code>, atau{" "}
                    <code className="bg-slate-700 px-1 rounded">3,20e5</code>.
                    Jangan masukkan huruf, satuan, atau simbol selain <code className="bg-slate-700 px-1 rounded">, + - e</code>.
                  </p>
                </div>
              </div>
            )}

            {/* Hint saat kosong */}
            {isEmpty && (
              <p className="mt-2 text-xs text-slate-500">
                Mendukung integer, desimal dengan koma (misal <code>3,2</code>), dan notasi ilmiah (misal <code>3,2e5</code>).
              </p>
            )}
          </div>

          {/* Hasil & visualisasi — hanya tampil jika valid */}
          {result && !result.invalid && (
            <>
              {/* Jumlah angka penting */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="col-span-1 rounded-2xl bg-slate-800 p-5 flex flex-col justify-center">
                  <p className="text-slate-400 text-sm mb-1">Jumlah Angka Penting</p>
                  <p className="text-5xl font-bold text-cyan-400">{result.count}</p>
                </div>

                <div className="col-span-1 sm:col-span-2 rounded-2xl bg-slate-800 p-5">
                  <p className="text-slate-400 text-sm mb-3">Visualisasi</p>
                  <div className="text-3xl font-mono tracking-widest flex flex-wrap items-center gap-0.5">
                    {result.charMap.map((entry, i) => {
                      if (entry.type === "sig")
                        return (
                          <span key={i} className="text-emerald-400 font-bold underline underline-offset-4">
                            {entry.ch}
                          </span>
                        );
                      if (entry.type === "leading")
                        return <span key={i} className="text-slate-500">{entry.ch}</span>;
                      if (entry.type === "nonsig")
                        return <span key={i} className="text-amber-400">{entry.ch}</span>;
                      if (entry.type === "decimal")
                        return <span key={i} className="text-cyan-400 font-bold">{entry.ch}</span>;
                      if (entry.type === "sign")
                        return <span key={i} className="text-slate-400">{entry.ch}</span>;
                      if (entry.type === "exp")
                        return <span key={i} className="text-purple-400 text-xl">{entry.ch}</span>;
                      return <span key={i} className="text-white">{entry.ch}</span>;
                    })}
                  </div>

                  {/* Legenda */}
                  <div className="mt-3 flex flex-wrap gap-3 text-xs">
                    <LegendDot color="text-emerald-400" label="Angka penting" />
                    <LegendDot color="text-amber-400" label="Bukan angka penting" />
                    <LegendDot color="text-slate-500" label="Nol di depan" />
                    <LegendDot color="text-cyan-400" label="Tanda desimal" />
                    {result.hasExponent && <LegendDot color="text-purple-400" label="Eksponen" />}
                  </div>
                </div>
              </div>

              {/* Langkah & Aturan */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-slate-800 p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-cyan-400">📋</span> Langkah Penyelesaian
                  </h3>
                  <ol className="space-y-2">
                    {result.steps.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            s.type === "result"
                              ? "bg-cyan-500 text-white"
                              : s.type === "sig"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : s.type === "skip"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {s.n}
                        </span>
                        <span
                          className={`text-sm ${
                            s.type === "result"
                              ? "text-cyan-300 font-semibold"
                              : s.type === "sig"
                              ? "text-emerald-300"
                              : s.type === "skip"
                              ? "text-amber-300"
                              : "text-slate-300"
                          }`}
                        >
                          {s.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-cyan-400">📖</span> Aturan Angka Penting
                  </h3>
                  <ul className="space-y-2">
                    {result.rules.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-0.5 text-slate-500">•</span>
                        <span className={r.startsWith("✓") ? "text-emerald-300" : ""}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Reset */}
          <button
            onClick={() => setValue("")}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-700 hover:bg-slate-600 px-5 py-3 text-white text-sm transition-colors"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <span className="flex items-center gap-1 text-slate-400">
      <span className={`font-bold font-mono ${color}`}>■</span>
      {label}
    </span>
  );
}
