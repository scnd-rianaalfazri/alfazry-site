import { AlertTriangle, XOctagon, CheckCircle2 } from "lucide-react"
import RichText from "./RichText"

// ============================================================
// Callout — kotak highlight buat catatan penting di dalam materi
// (peringatan, bahaya/kesalahan umum, atau info sukses/tips).
// ============================================================
//
// Cara pakai di file content materi (lewat block renderer):
//
//   {
//     type: "callout",
//     variant: "warning", // "danger" | "warning" | "success"
//     title: "Hati-hati!",
//     text: "Jangan lupa **konversi satuan** sebelum substitusi ke rumus.",
//   }
//
// Properti:
//   - variant -> "danger" | "warning" | "success" (default: "warning")
//   - title   -> judul singkat callout (opsional)
//   - text    -> isi callout (wajib). Boleh string tunggal, atau array
//                of string buat beberapa paragraf. Mendukung sintaks
//                RichText (**bold**, *italic*, __underline__, [link](url), $rumus$).
// ============================================================

const VARIANTS = {
  danger: {
    icon: XOctagon,
    label: "Bahaya",
    border: "border-rose-400/30",
    bg: "bg-rose-500/[0.07]",
    glow: "shadow-rose-500/10",
    accent: "from-rose-400 via-rose-500 to-red-400",
    iconWrap: "bg-rose-500/15 text-rose-300 border-rose-400/30",
    title: "text-rose-300",
    text: "text-rose-100/80",
  },
  warning: {
    icon: AlertTriangle,
    label: "Peringatan",
    border: "border-amber-400/30",
    bg: "bg-amber-500/[0.07]",
    glow: "shadow-amber-500/10",
    accent: "from-amber-300 via-amber-400 to-yellow-300",
    iconWrap: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    title: "text-amber-300",
    text: "text-amber-100/80",
  },
  success: {
    icon: CheckCircle2,
    label: "Berhasil",
    border: "border-emerald-400/30",
    bg: "bg-emerald-500/[0.07]",
    glow: "shadow-emerald-500/10",
    accent: "from-emerald-300 via-emerald-400 to-cyan-300",
    iconWrap: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    title: "text-emerald-300",
    text: "text-emerald-100/80",
  },
}

export default function Callout({ variant = "warning", title, text }) {
  const config = VARIANTS[variant] || VARIANTS.warning
  const Icon = config.icon

  if (!title && (text === null || text === undefined || text === "")) {
    return null
  }

  return (
    <div
      role="note"
      className={`
        relative overflow-hidden rounded-2xl border
        pl-5 pr-4 py-4 md:pl-6 md:pr-5 md:py-5
        backdrop-blur-sm
        shadow-lg
        ${config.border} ${config.bg} ${config.glow}
      `}
    >
      {/* Aksen garis gradasi di kiri, konsisten dengan gaya blockquote HUD */}
      <span
        className={`
          absolute left-0 top-4 bottom-4
          w-[3px] rounded-full
          bg-gradient-to-b ${config.accent}
        `}
      />

      <div className="flex items-start gap-3 md:gap-4">
        <span
          className={`
            flex-shrink-0
            flex items-center justify-center
            w-9 h-9 rounded-xl border
            ${config.iconWrap}
          `}
        >
          <Icon size={18} strokeWidth={2.25} />
        </span>

        <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
          {title && (
            <p
              className={`
                font-hud font-bold text-sm md:text-base
                uppercase tracking-wide
                ${config.title}
              `}
            >
              <RichText text={title} />
            </p>
          )}

          {Array.isArray(text) ? (
            <div className="space-y-2">
              {text.map((line, index) => (
                <p
                  key={index}
                  className={`text-sm md:text-[15px] leading-relaxed ${config.text}`}
                >
                  <RichText text={line} />
                </p>
              ))}
            </div>
          ) : (
            text && (
              <p className={`text-sm md:text-[15px] leading-relaxed ${config.text}`}>
                <RichText text={text} />
              </p>
            )
          )}
        </div>
      </div>
    </div>
  )
}
