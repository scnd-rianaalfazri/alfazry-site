// components/DimensionSteps.jsx
//
// Menampilkan langkah penyelesaian dimensi secara bertahap, satu baris per
// langkah, sesuai Fitur 3 (Tampilkan Langkah Penyelesaian). Baris terakhir
// ditonjolkan sebagai hasil akhir, atau ditandai peringatan bila rumus
// ternyata tidak homogen (tidak bisa disederhanakan lebih lanjut).

import React from "react";

/**
 * @param {{ steps: string[], isHeterogeneous: boolean }} props
 */
export default function DimensionSteps({ steps, isHeterogeneous }) {
  if (!steps || steps.length === 0) {
    return null;
  }

  const lastIndex = steps.length - 1;

  return (
    <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#111827]/60 p-4 backdrop-blur-md">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
        Langkah Penyelesaian
      </h3>

      <ol className="flex flex-col gap-1.5">
        {steps.map((line, index) => {
          const isLast = index === lastIndex;
          const isResultLine = isLast && !isHeterogeneous;
          const isFailureLine = isLast && isHeterogeneous;

          return (
            <li
              key={index}
              style={{ animationDelay: `${index * 90}ms` }}
              className={[
                "animate-[dimensionStepIn_320ms_ease-out_both]",
                "rounded-lg px-3 py-2 font-mono text-sm tracking-wide transition-colors",
                isResultLine
                  ? "border border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF] font-semibold"
                  : isFailureLine
                  ? "border border-amber-400/40 bg-amber-400/10 text-amber-300 font-semibold"
                  : "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.03]",
              ].join(" ")}
            >
              {line}
            </li>
          );
        })}
      </ol>

      {isHeterogeneous && (
        <p className="mt-3 text-xs leading-relaxed text-amber-300/80">
          Langkah berhenti di sini karena penjumlahan/pengurangan antar dimensi
          yang berbeda tidak dapat disederhanakan menjadi satu dimensi tunggal.
        </p>
      )}

      {/* Keyframe animasi masuk untuk setiap baris langkah, didefinisikan lokal
          agar komponen ini tetap mandiri tanpa perlu mengubah konfigurasi Tailwind. */}
      <style>{`
        @keyframes dimensionStepIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
