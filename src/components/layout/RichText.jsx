// ============================================================
// RichText — render teks dengan format bold/italic/underline
// pakai sintaks ringan ala markdown, langsung di dalam string.
// ============================================================
//
// Sintaks yang didukung:
//   **teks tebal**       -> <strong>
//   __teks garis bawah__ -> <u>
//   *teks miring*        -> <em>
//
// Contoh:
//   "Fisika itu **penting** banget, apalagi kalau *dipahami*
//    bukan cuma __dihafal__."
//
// Catatan:
//   - Formatnya sengaja tidak mendukung nested (misal bold di
//     dalam italic) biar parsing tetap simpel & aman dari bug.
//   - Kalau `text` bukan string (sudah berupa angka/null/elemen
//     React lain), langsung ditampilkan apa adanya.
// ============================================================

const PATTERN = /\*\*(.+?)\*\*|__(.+?)__|\*(.+?)\*/g

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

    const [, bold, underline, italic] = match

    if (bold !== undefined) {
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
