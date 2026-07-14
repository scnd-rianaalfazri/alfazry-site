import React from "react";

// ============================================================
// ResultPanel
// Panel kanan: instruksi singkat + ringkasan hasil pengukuran
// (objek, alat, jawaban siswa, jawaban benar, status).
// ============================================================

// Penjelasan cara membaca skala, ditampilkan saat jawaban belum tepat.
const READING_GUIDE = {
  penggaris:
    "Cara membaca penggaris: sejajarkan angka 0 dengan ujung kiri benda, lalu baca garis skala yang berimpit dengan ujung kanan benda. Setiap garis kecil bernilai 1 mm (0,1 cm).",
  jangka_sorong:
    "Cara membaca jangka sorong: baca angka cm terakhir yang dilewati garis 0 skala nonius (skala utama), lalu cari garis skala nonius yang paling sejajar dengan skala utama untuk 2 angka desimal berikutnya.",
  mikrometer:
    "Cara membaca mikrometer: baca skala utama pada sleeve (garis atas = mm penuh, garis bawah = 0,5 mm), lalu tambahkan angka pada skala thimble yang sejajar dengan garis datum, dikalikan 0,01 mm.",
};

export default function ResultPanel({ measurement, toolName, unit, result }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-sm font-semibold tracking-widest text-purple-300/80 uppercase mb-2">
          Instruksi
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Pilih objek dan alat ukur di sebelah kiri. Geser / putar alat ukur pada
          area simulasi untuk membantu membaca skala, lalu masukkan hasil
          pembacaanmu pada kolom di bawah dan tekan{" "}
          <span className="text-cyan-300 font-medium">Periksa</span>.
        </p>
      </div>

      <div className="h-px bg-white/10" />

      <div>
        <h2 className="text-sm font-semibold tracking-widest text-cyan-300/80 uppercase mb-3">
          Hasil
        </h2>

        <dl className="grid grid-cols-2 gap-y-2 gap-x-3 text-sm">
          <dt className="text-zinc-500">Objek</dt>
          <dd className="text-zinc-200 font-medium">
            {measurement ? measurement.name : "-"}
          </dd>

          <dt className="text-zinc-500">Alat Ukur</dt>
          <dd className="text-zinc-200 font-medium">{toolName || "-"}</dd>

          <dt className="text-zinc-500">Jawaban Siswa</dt>
          <dd className="text-zinc-200 font-medium">
            {result && result.studentValue !== null && result.studentValue !== undefined
              ? `${result.studentValue} ${unit}`
              : "-"}
          </dd>

          <dt className="text-zinc-500">Jawaban Benar</dt>
          <dd className="text-zinc-200 font-medium">
            {result ? `${result.correctValue} ${unit}` : "-"}
          </dd>

          <dt className="text-zinc-500">Status</dt>
          <dd>
            {!result && <span className="text-zinc-500">Belum diperiksa</span>}
            {result && result.isCorrect && (
              <span className="text-green-400 font-semibold">✅ Benar!</span>
            )}
            {result && result.studentValue !== null && !result.isCorrect && (
              <span className="text-rose-400 font-semibold">❌ Belum tepat.</span>
            )}
            {result && result.studentValue === null && (
              <span className="text-amber-400 font-semibold">
                ⚠️ Masukkan angka terlebih dahulu.
              </span>
            )}
          </dd>
        </dl>

        {result && !result.isCorrect && (
          <div className="mt-4 rounded-xl border border-amber-400/30 bg-amber-400/5 p-3 text-xs leading-relaxed text-amber-200/90">
            💡 {READING_GUIDE[result.toolId] || ""}
          </div>
        )}
      </div>
    </div>
  );
}
