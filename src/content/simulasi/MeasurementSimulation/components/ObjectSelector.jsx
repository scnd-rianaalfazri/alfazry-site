import React from "react";
import { OBJECTS } from "../utils/measurementGenerator";

// ============================================================
// ObjectSelector
// Panel kiri: menampilkan daftar objek yang bisa diukur.
// Mengklik salah satu objek akan membangkitkan ukuran acak baru
// untuk objek tersebut (ditangani di VirtualMeasurementLab).
// ============================================================
export default function ObjectSelector({ selectedObjectId, onSelectObject }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold tracking-widest text-cyan-400/80 uppercase mb-1">
        Daftar Objek
      </h2>

      {OBJECTS.map((obj) => {
        const isActive = obj.id === selectedObjectId;
        return (
          <button
            key={obj.id}
            onClick={() => onSelectObject(obj.id)}
            className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300
              border ${
                isActive
                  ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                  : "border-white/10 bg-zinc-900/60 hover:border-purple-400/50 hover:bg-zinc-800/70"
              }`}
          >
            <span className="text-2xl drop-shadow">{obj.icon}</span>
            <div className="flex flex-col">
              <span
                className={`font-medium ${
                  isActive ? "text-cyan-300" : "text-zinc-200"
                }`}
              >
                {obj.name}
              </span>
              <span className="text-xs text-zinc-500">
                Ukur objek ini dengan alat pilihanmu
              </span>
            </div>

            {/* Indikator aktif */}
            {isActive && (
              <span className="ml-auto h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.8)]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
