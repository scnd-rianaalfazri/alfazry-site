import React, { useState, useMemo } from "react";

import ObjectSelector from "./ObjectSelector";
import ToolSelector from "./ToolSelector";
import MeasurementCanvas from "./MeasurementCanvas";
import ResultPanel from "./ResultPanel";
import MeasurementInput from "./MeasurementInput";
import ControlButtons from "./ControlButtons";

import { generateMeasurement, getRandomObjectId } from "../utils/measurementGenerator";
import { TOOLS, evaluateMeasurement } from "../utils/measurementChecker";

// ============================================================
// VirtualMeasurementLab
// Komponen utama simulasi "Virtual Measurement Lab".
// Menyatukan state (objek aktif, alat aktif, jawaban, hasil)
// dan menyusun layout 3 panel (kiri, tengah, kanan).
// ============================================================
export default function VirtualMeasurementLab() {
  // Objek yang sedang diukur (mulai dari objek acak)
  const [objectId, setObjectId] = useState(() => getRandomObjectId());
  // measurement = { id, name, shape, icon, trueValueCm, ... }
  const [measurement, setMeasurement] = useState(() =>
    generateMeasurement(objectId)
  );
  // Alat ukur yang sedang aktif
  const [toolId, setToolId] = useState("penggaris");
  // Nilai yang diketik siswa
  const [inputValue, setInputValue] = useState("");
  // Hasil pengecekan terakhir (null jika belum ditekan "Periksa")
  const [result, setResult] = useState(null);

  const activeTool = TOOLS[toolId];

  // ------------------------------------------------------------
  // Handlers
  // ------------------------------------------------------------

  function handleSelectObject(id) {
    setObjectId(id);
    setMeasurement(generateMeasurement(id));
    setInputValue("");
    setResult(null);
  }

  function handleSelectTool(id) {
    setToolId(id);
    setInputValue("");
    setResult(null);
  }

  function handleCheck() {
    if (!measurement) return;
    const evaluation = evaluateMeasurement(toolId, inputValue, measurement.trueValueCm);
    setResult({ ...evaluation, toolId });
  }

  function handleReset() {
    setMeasurement(generateMeasurement(objectId));
    setInputValue("");
    setResult(null);
  }

  function handleNextObject() {
    // Ambil objek acak, usahakan berbeda dari objek saat ini
    let nextId = getRandomObjectId();
    let guard = 0;
    while (nextId === objectId && guard < 10) {
      nextId = getRandomObjectId();
      guard++;
    }
    setObjectId(nextId);
    setMeasurement(generateMeasurement(nextId));
    setInputValue("");
    setResult(null);
  }

  const unit = useMemo(() => activeTool?.unit ?? "cm", [activeTool]);

  return (
    <div className="min-h-screen w-full bg-black text-white bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(168,85,247,0.10),transparent_40%)]">
      {/* Header */}
      <header className="border-b border-white/10 px-4 md:px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
              Alfazrian Fisika
            </p>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Virtual Measurement Lab
            </h1>
          </div>
          <div className="hidden sm:block text-right text-xs text-zinc-500">
            Latihan alat ukur &amp; ketelitian pengukuran
          </div>
        </div>
      </header>

      {/* Layout 3 panel */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-5">
        {/* PANEL KIRI: daftar objek */}
        <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4 h-fit">
          <ObjectSelector selectedObjectId={objectId} onSelectObject={handleSelectObject} />
        </section>

        {/* PANEL TENGAH: simulasi */}
        <section className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4">
            <ToolSelector selectedToolId={toolId} onSelectTool={handleSelectTool} />
          </div>

          <MeasurementCanvas measurement={measurement} toolId={toolId} />

          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4 flex flex-col gap-4">
            <MeasurementInput value={inputValue} onChange={setInputValue} unit={unit} />
            <ControlButtons
              onCheck={handleCheck}
              onReset={handleReset}
              onNext={handleNextObject}
            />

            {/* Status singkat langsung di bawah tombol, untuk feedback cepat */}
            {result && (
              <div
                className={`rounded-xl px-4 py-3 text-sm font-semibold border transition-all
                  ${
                    result.isCorrect
                      ? "border-green-400/40 bg-green-400/10 text-green-300"
                      : "border-rose-400/40 bg-rose-400/10 text-rose-300"
                  }`}
              >
                {result.isCorrect ? "✅ Benar!" : "❌ Belum tepat."}
              </div>
            )}
          </div>
        </section>

        {/* PANEL KANAN: instruksi & hasil */}
        <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4 h-fit">
          <ResultPanel
            measurement={measurement}
            toolName={activeTool?.name}
            unit={unit}
            result={result}
          />
        </section>
      </main>

      <footer className="text-center text-xs text-zinc-600 pb-6">
        Alfazrian Fisika · Simulasi latihan alat ukur
      </footer>
    </div>
  );
}
