// MissionPanel.jsx
// Menampilkan misi aktif ("Temukan benda dengan konsep X"), progres misi,
// dan perayaan confetti sederhana saat misi selesai.

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Target, PartyPopper, ArrowRight } from "lucide-react";

const CONFETTI_COLORS = ["#22d3ee", "#a855f7", "#38bdf8", "#f0abfc", "#818cf8"];

// Menghasilkan konfigurasi confetti acak sekali saja (stabil selama render list)
function buildConfettiPieces(count = 24) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.4,
    duration: 1.4 + Math.random() * 0.9,
    rotate: Math.random() * 360,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    size: 6 + Math.random() * 6,
  }));
}

/**
 * @param {Object} props
 * @param {{ id: string, concept: string, label: string }} props.mission
 * @param {number} props.progress - Jumlah target yang sudah ditemukan
 * @param {number} props.total - Jumlah target pada misi ini
 * @param {boolean} props.isComplete
 * @param {() => void} props.onNextMission
 */
export default function MissionPanel({
  mission,
  progress,
  total,
  isComplete,
  onNextMission,
}) {
  const confetti = React.useMemo(
    () => (isComplete ? buildConfettiPieces() : []),
    [isComplete, mission.id]
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-purple-400/20 bg-white/[0.03] p-4 backdrop-blur-xl">
      {/* Confetti overlay */}
      <AnimatePresence>
        {isComplete && (
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            {confetti.map((piece) => (
              <motion.span
                key={piece.id}
                initial={{ y: -20, x: `${piece.left}%`, opacity: 1, rotate: 0 }}
                animate={{
                  y: "160%",
                  opacity: [1, 1, 0],
                  rotate: piece.rotate,
                }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  ease: "easeIn",
                }}
                style={{
                  position: "absolute",
                  width: piece.size,
                  height: piece.size * 0.4,
                  backgroundColor: piece.color,
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300">
          <Target size={16} />
        </span>

        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
            Mission
          </p>

          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.p
                key="mission-label"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-1 text-sm text-slate-200"
              >
                {mission.label}
              </motion.p>
            ) : (
              <motion.div
                key="mission-complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-1 flex items-center gap-2 text-sm font-semibold text-emerald-300"
              >
                <PartyPopper size={16} />
                Mission Complete
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-2 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={false}
                animate={{ width: `${(progress / total) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={[
                  "h-full rounded-full",
                  isComplete
                    ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
                    : "bg-gradient-to-r from-cyan-400 to-purple-500",
                ].join(" ")}
              />
            </div>
            <span className="font-mono text-[11px] text-slate-400">
              {progress}/{total}
            </span>
          </div>

          {isComplete && (
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={onNextMission}
              className="mt-3 flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1.5 text-xs font-medium text-white shadow-[0_0_14px_rgba(168,85,247,0.4)] transition-transform hover:scale-105"
            >
              Misi Berikutnya
              <ArrowRight size={13} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
