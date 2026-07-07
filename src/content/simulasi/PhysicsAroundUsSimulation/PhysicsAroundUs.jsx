// PhysicsAroundUs.jsx
// Komponen utama simulasi interaktif "Physics Around Us" untuk Alfazrian Fisika.
// Mengatur seluruh state (benda ditemukan, pencarian, filter, misi) dan
// menyusun tata letak AAA-game-UI bertema futuristik dark/neon.

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Sparkles, X } from "lucide-react";

import Scene from "./Scene";
import InfoPanel from "./InfoPanel";
import ProgressBar from "./ProgressBar";
import MissionPanel from "./MissionPanel";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import { PHYSICS_OBJECTS, MISSIONS } from "./data/objects";

// Custom hook kecil untuk mendeteksi breakpoint desktop (lg: 1024px),
// dipakai InfoPanel untuk memilih animasi slide dari kanan vs dari bawah.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return isDesktop;
}

const MAIN_OBJECTS = PHYSICS_OBJECTS.filter((o) => !o.isEasterEgg);
const MAIN_OBJECT_IDS = new Set(MAIN_OBJECTS.map((o) => o.id));

export default function PhysicsAroundUs() {
  const isDesktop = useIsDesktop();

  const [openedIds, setOpenedIds] = useState(() => new Set());
  const [activeObject, setActiveObject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [missionIndex, setMissionIndex] = useState(0);
  const [quickCheckObject, setQuickCheckObject] = useState(null);

  // Membuka panel informasi + menandai benda sebagai "ditemukan"
  const handleSelectObject = useCallback((object) => {
    setActiveObject(object);
    setOpenedIds((prev) => {
      if (prev.has(object.id)) return prev;
      const next = new Set(prev);
      next.add(object.id);
      return next;
    });
  }, []);

  const handleClosePanel = useCallback(() => setActiveObject(null), []);

  const handleQuickCheck = useCallback((object) => {
    setQuickCheckObject(object);
  }, []);

  // Daftar benda yang tampil di grid, sudah difilter berdasarkan kategori
  const visibleObjects = useMemo(() => {
    if (activeCategory === "Semua") return PHYSICS_OBJECTS;
    return PHYSICS_OBJECTS.filter((o) => o.category === activeCategory);
  }, [activeCategory]);

  // Progress keseluruhan (hanya menghitung 12 benda utama, easter egg bonus)
  const foundCount = useMemo(() => {
    let count = 0;
    openedIds.forEach((id) => {
      if (MAIN_OBJECT_IDS.has(id)) count += 1;
    });
    return count;
  }, [openedIds]);

  // Misi aktif saat ini + progresnya
  const activeMission = MISSIONS[missionIndex % MISSIONS.length];
  const missionTargetIds = useMemo(
    () =>
      MAIN_OBJECTS.filter((o) => o.concepts.includes(activeMission.concept)).map(
        (o) => o.id
      ),
    [activeMission]
  );
  const missionProgress = useMemo(
    () => missionTargetIds.filter((id) => openedIds.has(id)).length,
    [missionTargetIds, openedIds]
  );
  const isMissionComplete =
    missionTargetIds.length > 0 && missionProgress === missionTargetIds.length;

  const handleNextMission = useCallback(() => {
    setMissionIndex((i) => i + 1);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-slate-100">
      {/* Latar belakang holografik: glow ambient + grid halus (relatif terhadap widget, bukan viewport) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Header */}
        <header className="mb-8 flex flex-col items-center text-center">
          <div className="mb-3 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cyan-300">
            <Atom size={13} />
            Physics Lab
          </div>
          <h2 className="bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-2xl font-bold tracking-tight text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.25)] sm:text-3xl lg:text-4xl">
            Physics Around Us
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            Temukan konsep fisika yang tersembunyi di sekitarmu.
          </p>
        </header>

        {/* Layout utama */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
          {/* Panel kiri: progress, misi, pencarian, filter */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-8 lg:self-start">
            <ProgressBar found={foundCount} total={MAIN_OBJECTS.length} />

            <MissionPanel
              mission={activeMission}
              progress={missionProgress}
              total={missionTargetIds.length}
              isComplete={isMissionComplete}
              onNextMission={handleNextMission}
            />

            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Kategori
              </p>
              <FilterBar
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </aside>

          {/* Area eksplorasi */}
          <main>
            <Scene
              objects={visibleObjects}
              openedIds={openedIds}
              activeId={activeObject?.id ?? null}
              searchQuery={searchQuery}
              onSelectObject={handleSelectObject}
            />
          </main>
        </div>
      </div>

      {/* Panel informasi (slide dari kanan di desktop, dari bawah di mobile) */}
      <InfoPanel
        object={activeObject}
        isDesktop={isDesktop}
        onClose={handleClosePanel}
        onQuickCheck={handleQuickCheck}
      />

      {/* Modal Quick Check ringan */}
      <QuickCheckModal
        object={quickCheckObject}
        onClose={() => setQuickCheckObject(null)}
      />
    </div>
  );
}

// Modal kecil untuk "Quick Check": mendorong pengguna mengingat kembali
// konsep yang baru saja ditemukan sebelum melanjutkan eksplorasi.
function QuickCheckModal({ object, onClose }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
  }, [object]);

  return (
    <AnimatePresence>
      {object && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl border border-purple-400/25 bg-slate-900/95 p-6 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-2 text-purple-300">
                <Sparkles size={16} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Quick Check
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="text-slate-500 hover:text-slate-300"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm text-slate-300">
              Coba sebutkan salah satu konsep fisika yang berkaitan dengan{" "}
              <span className="font-semibold text-cyan-300">{object.title}</span>{" "}
              {object.icon}, sebelum melihat jawabannya.
            </p>

            <AnimatePresence mode="wait">
              {revealed ? (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex flex-wrap gap-2 overflow-hidden"
                >
                  {object.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {concept}
                    </span>
                  ))}
                </motion.div>
              ) : (
                <motion.button
                  key="reveal-btn"
                  type="button"
                  onClick={() => setRevealed(true)}
                  className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 py-2.5 text-xs font-medium text-white shadow-[0_0_16px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.02]"
                >
                  Lihat Jawaban
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
