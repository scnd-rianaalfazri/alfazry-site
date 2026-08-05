import React, { useState } from "react";

import ObjectSelector from "./ObjectSelector";
import ToolSelector from "./ToolSelector";
import MeasurementCanvas from "./MeasurementCanvas";
import InfoPanel from "./InfoPanel";
import ControlButtons from "./ControlButtons";

import { generateMeasurement, getRandomObjectId } from "../utils/measurementGenerator";

// ============================================================
// VirtualMeasurementLab — v2
// Komponen utama. Simulasi ini adalah PENGGANTI alat ukur fisik
// saat alat asli tidak tersedia di praktikum — bukan kuis. Karena
// itu tidak ada input jawaban maupun pengecekan benar/salah; siswa
// cukup menggeser/memutar alat ukur SVG dan membaca skalanya sendiri,
// persis seperti memakai alat sungguhan.
// ============================================================
export default function VirtualMeasurementLab() {
  const [objectId, setObjectId] = useState(() => getRandomObjectId());
  const [measurement, setMeasurement] = useState(() => generateMeasurement(objectId));
  const [toolId, setToolId] = useState("penggaris");

  function handleSelectObject(id) {
    setObjectId(id);
    setMeasurement(generateMeasurement(id));
  }

  function handleSelectTool(id) {
    setToolId(id);
  }

  function handleReset() {
    setMeasurement(generateMeasurement(objectId));
  }

  function handleNextObject() {
    let nextId = getRandomObjectId();
    let guard = 0;
    while (nextId === objectId && guard < 10) {
      nextId = getRandomObjectId();
      guard++;
    }
    setObjectId(nextId);
    setMeasurement(generateMeasurement(nextId));
  }

  return (
    <div className="min-h-screen w-full bg-black text-white bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(168,85,247,0.10),transparent_40%)]">
      <header className="border-b border-white/10 px-4 md:px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase">Alfazrian Fisika</p>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Virtual Measurement Lab
            </h1>
          </div>
          <div className="hidden sm:block text-right text-xs text-zinc-500">
            Pengganti alat ukur saat praktikum
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-5">
        <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4 h-fit">
          <ObjectSelector selectedObjectId={objectId} onSelectObject={handleSelectObject} />
        </section>

        <section className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4">
            <ToolSelector selectedToolId={toolId} onSelectTool={handleSelectTool} />
          </div>

          <MeasurementCanvas measurement={measurement} toolId={toolId} />

          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4">
            <ControlButtons onReset={handleReset} onNext={handleNextObject} />
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-4 h-fit">
          <InfoPanel measurement={measurement} toolId={toolId} />
        </section>
      </main>

      <footer className="text-center text-xs text-zinc-600 pb-6">
        Alfazrian Fisika · Simulasi latihan alat ukur
      </footer>
    </div>
  );
}
