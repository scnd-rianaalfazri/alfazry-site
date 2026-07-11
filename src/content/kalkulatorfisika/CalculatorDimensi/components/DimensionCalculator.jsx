// components/DimensionCalculator.jsx
//
// Komponen orkestrator utama Kalkulator Dimensi Fisika. Mengatur seluruh
// state (mode aktif, input, hasil, error) lewat useState, dan menyusun
// seluruh sub-komponen menjadi satu tampilan kalkulator yang utuh.
// Logic murni (parsing, perhitungan dimensi) sepenuhnya didelegasikan ke
// utils/dimensionMath.js — komponen ini hanya mengurus UI & alur state.

import React, { useState } from "react";
import DimensionInput from "./DimensionInput.jsx";
import FormulaExamples from "./FormulaExamples.jsx";
import VariableList from "./VariableList.jsx";
import DimensionSteps from "./DimensionSteps.jsx";
import DimensionResult from "./DimensionResult.jsx";
import { analyzeFormula, searchQuantities } from "../utils/dimensionMath.js";

/** Dua mode utama kalkulator ini. */
const MODES = {
  FORMULA: "formula",
  SEARCH: "search",
};

export default function DimensionCalculator() {
  const [mode, setMode] = useState(MODES.FORMULA);
  const [formulaInput, setFormulaInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Menjalankan analisis dimensi atas teks rumus tertentu, lalu
   * memperbarui state `result` atau `errorMessage` sesuai hasilnya.
   * @param {string} rawFormula
   */
  function runAnalysis(rawFormula) {
    const text = rawFormula.trim();

    if (!text) {
      setResult(null);
      setErrorMessage(null);
      return;
    }

    try {
      const analyzed = analyzeFormula(text);
      setResult(analyzed);
      setErrorMessage(null);
    } catch (err) {
      setResult(null);
      setErrorMessage(err.message || "Terjadi kesalahan tak terduga saat menganalisis rumus.");
    }
  }

  /** Dipanggil saat pengguna menekan Enter atau tombol "Hitung Dimensi". */
  function handleFormulaSubmit() {
    runAnalysis(formulaInput);
  }

  /** Dipanggil saat pengguna mengklik salah satu tombol contoh rumus (Fitur 8). */
  function handleExampleSelect(formula) {
    setFormulaInput(formula);
    runAnalysis(formula);
  }

  /** Berpindah mode kalkulator, sekaligus membersihkan error lama. */
  function handleModeChange(nextMode) {
    setMode(nextMode);
    setErrorMessage(null);
  }

  // Pencarian besaran (Fitur 1) berjalan realtime seiring pengguna mengetik.
  const quantityMatches =
    mode === MODES.SEARCH && searchInput.trim() ? searchQuantities(searchInput) : null;

  // Menentukan apakah langkah penyelesaian yang tampil berakhir pada
  // kondisi tidak homogen (dipakai DimensionSteps untuk gaya baris terakhir).
  const stepsAreHeterogeneous = result
    ? result.type === "equation"
      ? result.finalDimension === null
      : result.isHeterogeneous
    : false;

  return (
    <div className="w-full">
      {/* Tab pemilih mode: Hitung Dimensi Rumus vs Cari Dimensi Besaran */}
      <div className="mb-5 flex gap-2 rounded-xl border border-white/10 bg-[#0F172A]/60 p-1.5">
        <ModeTabButton
          label="Hitung Dimensi Rumus"
          isActive={mode === MODES.FORMULA}
          onClick={() => handleModeChange(MODES.FORMULA)}
        />
        <ModeTabButton
          label="Cari Dimensi Besaran"
          isActive={mode === MODES.SEARCH}
          onClick={() => handleModeChange(MODES.SEARCH)}
        />
      </div>

      {mode === MODES.FORMULA ? (
        <div className="flex flex-col gap-5">
          <DimensionInput
            id="formula-input"
            label="Masukkan Rumus"
            value={formulaInput}
            onChange={setFormulaInput}
            onSubmit={handleFormulaSubmit}
            placeholder="Misalnya: F=m*a atau (m*v²)/r"
            helperText="Tekan Enter untuk menghitung. Mendukung operator + - × / ^ dan tanda kurung ( )."
            autoFocus
          />

          <button
            type="button"
            onClick={handleFormulaSubmit}
            className="self-start rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Hitung Dimensi
          </button>

          <FormulaExamples onSelect={handleExampleSelect} activeFormula={formulaInput} />

          {errorMessage && <DimensionResult error={errorMessage} />}

          {result && !errorMessage && (
            <>
              <VariableList variables={result.variables} />
              <DimensionSteps steps={result.steps} isHeterogeneous={stepsAreHeterogeneous} />
              <DimensionResult result={result} />
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <DimensionInput
            id="quantity-search-input"
            label="Cari Besaran"
            value={searchInput}
            onChange={setSearchInput}
            placeholder="Misalnya: Energi, Gaya, Tekanan..."
            helperText="Ketik nama besaran fisika untuk melihat rumus dan dimensinya."
            autoFocus
          />

          {quantityMatches !== null && (
            <DimensionResult quantityMatches={quantityMatches} searchQuery={searchInput} />
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Tombol tab kecil untuk berpindah antar mode kalkulator.
 * @param {{ label: string, isActive: boolean, onClick: () => void }} props
 */
function ModeTabButton({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-[#00E5FF]/15 text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.25)]"
          : "text-slate-400 hover:text-slate-200",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
