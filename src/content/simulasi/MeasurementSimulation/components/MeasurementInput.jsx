import React from "react";

// ============================================================
// MeasurementInput
// Input angka untuk hasil pengukuran siswa, satuan mengikuti
// alat ukur yang sedang dipilih (cm untuk penggaris & jangka
// sorong, mm untuk mikrometer).
// ============================================================
export default function MeasurementInput({ value, onChange, unit }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
        Hasil Pengukuran
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          step="0.01"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0.00"
          className="w-full rounded-lg border border-cyan-400/30 bg-zinc-900/80 px-3 py-2.5 text-lg font-semibold text-cyan-200 outline-none transition-all focus:border-cyan-400 focus:shadow-[0_0_14px_rgba(34,211,238,0.35)]"
        />
        <span className="min-w-[36px] rounded-lg bg-zinc-800 px-3 py-2.5 text-center text-sm font-semibold text-purple-300 border border-purple-400/30">
          {unit}
        </span>
      </div>
    </div>
  );
}
