import React from "react";
import { TOOLS } from "../utils/measurementTools";

// ============================================================
// InfoPanel
// Panel kanan. Menggantikan ResultPanel lama — tidak ada lagi
// jawaban siswa / jawaban benar / status, karena simulasi ini
// dipakai sebagai pengganti alat ukur fisik, bukan alat evaluasi.
// Cukup menampilkan objek & alat yang aktif, plus tips membaca skala.
// ============================================================
export default function InfoPanel({ measurement, toolId }) {
  const tool = TOOLS[toolId];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-sm font-semibold tracking-widest text-purple-300/80 uppercase mb-2">
          Cara Pakai
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Pilih objek di sebelah kiri, lalu pilih alat ukur. Geser badan
          penggaris, geser rahang jangka sorong, atau putar thimble mikrometer
          langsung pada area simulasi sampai alat pas menempel di kedua ujung
          benda — persis seperti memakai alat aslinya.
        </p>
      </div>

      <div className="h-px bg-white/10" />

      <div>
        <h2 className="text-sm font-semibold tracking-widest text-cyan-300/80 uppercase mb-3">
          Sedang Digunakan
        </h2>

        <dl className="grid grid-cols-2 gap-y-2 gap-x-3 text-sm">
          <dt className="text-zinc-500">Objek</dt>
          <dd className="text-zinc-200 font-medium">
            {measurement ? `${measurement.icon} ${measurement.name}` : "-"}
          </dd>

          <dt className="text-zinc-500">Alat Ukur</dt>
          <dd className="text-zinc-200 font-medium">{tool?.name || "-"}</dd>

          <dt className="text-zinc-500">Ketelitian</dt>
          <dd className="text-zinc-200 font-medium">{tool?.precision || "-"}</dd>
        </dl>
      </div>

      <div className="h-px bg-white/10" />

      <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-3 text-xs leading-relaxed text-cyan-200/90">
        💡 <span className="font-semibold">Tips membaca {tool?.name}:</span>{" "}
        {tool?.readingTip}
      </div>
    </div>
  );
}
