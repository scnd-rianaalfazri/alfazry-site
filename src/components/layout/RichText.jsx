import { Link } from "react-router-dom"

// ============================================================
// RichText — render teks dengan format bold/italic/underline/link
// pakai sintaks ringan ala markdown, langsung di dalam string.
// ============================================================
//
// Sintaks yang didukung:
//   **teks tebal**       -> <strong>
//   __teks garis bawah__ -> <u>
//   *teks miring*        -> <em>
//   [teks](url)          -> hyperlink (bisa diklik)
//
// Link internal vs eksternal ditentukan otomatis dari urlnya:
//   [Lihat materi Vektor](/materi/vektor)   -> internal, pakai
//                                              React Router (SPA,
//                                              tanpa reload halaman)
//   [Wikipedia](https://wikipedia.org)      -> eksternal, buka
//                                              tab baru
//
// Aturan penentuan internal/eksternal:
//   - url diawali "/"                      -> internal
//   - url diawali "http://", "https://",
//     "mailto:", atau "tel:"               -> eksternal
//
// Contoh:
//   "Fisika itu **penting** banget, apalagi kalau *dipahami*
//    bukan cuma __dihafal__. Baca juga [materi Vektor](/materi/vektor)
//    atau [Wikipedia](https://wikipedia.org)."
//
// Catatan:
//   - Formatnya sengaja tidak mendukung nested (misal bold di
//     dalam italic, atau bold di dalam link) biar parsing tetap
//     simpel & aman dari bug.
//   - Kalau `text` bukan string (sudah berupa angka/null/elemen
//     React lain), langsung ditampilkan apa adanya.
// ============================================================

const PATTERN =
  /\[(.+?)\]\((.+?)\)|\*\*(.+?)\*\*|__(.+?)__|\*(.+?)\*/g

const isInternalLink = (url) => url.startsWith("/")

const linkClassName =
  "text-cyan-300 underline decoration-cyan-400/40 underline-offset-2 hover:text-cyan-200 hover:decoration-cyan-300 transition-colors"

export default function RichText({ text }) {
  if (text === null || text === undefined || text === "") return null

  if (typeof text !== "string") {
    return text
  }

  const nodes = []
  let lastIndex = 0
  let key = 0
  let match

  PATTERN.lastIndex = 0

  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const [, linkText, linkUrl, bold, underline, italic] = match

    if (linkText !== undefined) {
      if (isInternalLink(linkUrl)) {
        nodes.push(
          <Link key={key++} to={linkUrl} className={linkClassName}>
            {linkText}
          </Link>
        )
      } else {
        nodes.push(
          <a
            key={key++}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {linkText}
          </a>
        )
      }
    } else if (bold !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-white">
          {bold}
        </strong>
      )
    } else if (underline !== undefined) {
      nodes.push(
        <u
          key={key++}
          className="underline decoration-cyan-400/70 underline-offset-2"
        >
          {underline}
        </u>
      )
    } else if (italic !== undefined) {
      nodes.push(
        <em key={key++} className="italic text-violet-200">
          {italic}
        </em>
      )
    }

    lastIndex = PATTERN.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <>{nodes}</>
}
