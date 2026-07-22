import { Link } from "react-router-dom"
import { InlineMath } from "react-katex"

// ============================================================
// RichText — render teks dengan format bold/italic/underline/link
// + rumus matematika inline, pakai sintaks ringan ala markdown,
// langsung di dalam string. Mendukung NESTING (format bisa
// digabung/bertumpuk satu sama lain).
// ============================================================
//
// Sintaks yang didukung:
//   **teks tebal**       -> <strong>
//   __teks garis bawah__ -> <u>
//   *teks miring*        -> <em>
//   [teks](url)          -> hyperlink (bisa diklik)
//   $rumus$               -> rumus matematika inline (KaTeX)
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
// Contoh nesting (boleh digabung/bertumpuk):
//   "**Rumus $F = ma$ ini penting**, jangan __dilewatkan__.
//    Baca juga [materi *Vektor*](/materi/vektor)."
//   -> bold berisi rumus, underline berdiri sendiri, link berisi
//      italic — semuanya diproses dengan benar.
//
// Contoh tanpa nesting (tetap didukung seperti sebelumnya):
//   "Fisika itu **penting** banget, apalagi kalau *dipahami*
//    bukan cuma __dihafal__. Kecepatan didefinisikan sebagai
//    $v = \\frac{d}{t}$."
//
// Catatan:
//   - Format boleh bertumpuk sebebas apapun (bold di dalam link,
//     italic di dalam bold, dst), KECUALI dua wrapper yang identik
//     bertumpuk langsung (misal bold di dalam bold) — itu di luar
//     kasus pemakaian normal dan tidak perlu didukung.
//   - Isi rumus ($...$) SENGAJA tidak ikut diproses ulang untuk
//     bold/italic/dll — isinya harus tetap sintaks LaTeX murni,
//     supaya tidak konflik/salah tangkap dengan token markdown.
//     Kalau perlu tebal di dalam rumus, pakai perintah LaTeX
//     bawaan: $\\mathbf{F = ma}$.
//   - Kalau `text` bukan string (sudah berupa angka/null/elemen
//     React lain), langsung ditampilkan apa adanya.
//   - Untuk rumus yang berdiri sendiri sebagai satu baris penuh
//     (display mode, lebih besar & di tengah), tetap pakai block
//     { type: "equation" } + <MathEquation />. $...$ di sini khusus
//     rumus pendek yang menyatu di tengah kalimat.
// ============================================================

const PATTERN_SOURCE =
  /\[(.+?)\]\((.+?)\)|\*\*(.+?)\*\*|__(.+?)__|\*(.+?)\*|\$(.+?)\$/

// Regex object di-share via module bisa saling menimpa `lastIndex`
// kalau dipakai bersamaan oleh parsing rekursif (nested), jadi tiap
// pemanggilan `parseRichText` bikin instance regex sendiri.
const createPattern = () => new RegExp(PATTERN_SOURCE.source, "g")

// Batas kedalaman rekursi, cuma jaga-jaga dari kasus ekstrem
// (misal ribuan level nesting) — pemakaian normal tidak akan
// pernah mendekati batas ini.
const MAX_NEST_DEPTH = 8

// Fallback saat sintaks rumus inline tidak valid — tampilkan
// rumus mentahnya dengan gaya redup, konsisten dengan MathEquation.jsx.
function renderInlineMathError(rawSource) {
  return function () {
    return (
      <span
        className="border-b border-dashed border-amber-400/50 text-amber-200/90 font-mono text-sm"
        title="Rumus tidak dapat ditampilkan, periksa kembali sintaksnya"
      >
        {rawSource}
      </span>
    )
  }
}

const isInternalLink = (url) => url.startsWith("/")

const linkClassName =
  "text-cyan-300 underline decoration-cyan-400/40 underline-offset-2 hover:text-cyan-200 hover:decoration-cyan-300 transition-colors"

// Parsing rekursif: tiap wrapper (bold/underline/italic/link) yang
// ketemu akan diproses ulang isinya lewat fungsi ini juga, jadi
// format bisa saling bertumpuk bebas. Rumus ($...$) SENGAJA jadi
// leaf/titik akhir — isinya tidak diproses ulang, tetap LaTeX murni.
function parseRichText(text, keyPrefix, depth = 0) {
  if (typeof text !== "string" || text === "") return null

  // Jaga-jaga dari nesting ekstrem/tidak wajar — tampilkan sisa
  // teks apa adanya daripada terus rekursi.
  if (depth >= MAX_NEST_DEPTH) return text

  const nodes = []
  let lastIndex = 0
  let localKey = 0
  let match

  const pattern = createPattern()

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const [, linkText, linkUrl, bold, underline, italic, math] = match
    const k = `${keyPrefix}-${localKey++}`

    if (linkText !== undefined) {
      const children = parseRichText(linkText, k, depth + 1)
      if (isInternalLink(linkUrl)) {
        nodes.push(
          <Link key={k} to={linkUrl} className={linkClassName}>
            {children}
          </Link>
        )
      } else {
        nodes.push(
          <a
            key={k}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {children}
          </a>
        )
      }
    } else if (bold !== undefined) {
      nodes.push(
        <strong key={k} className="font-semibold text-white">
          {parseRichText(bold, k, depth + 1)}
        </strong>
      )
    } else if (underline !== undefined) {
      nodes.push(
        <u
          key={k}
          className="underline decoration-cyan-400/70 underline-offset-2"
        >
          {parseRichText(underline, k, depth + 1)}
        </u>
      )
    } else if (italic !== undefined) {
      nodes.push(
        <em key={k} className="italic text-violet-200">
          {parseRichText(italic, k, depth + 1)}
        </em>
      )
    } else if (math !== undefined) {
      // Leaf — isi rumus TIDAK direkursi, dikirim mentah ke KaTeX.
      nodes.push(
        <InlineMath key={k} math={math} renderError={renderInlineMathError(match[0])} />
      )
    }

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export default function RichText({ text }) {
  if (text === null || text === undefined || text === "") return null

  if (typeof text !== "string") {
    return text
  }

  return <>{parseRichText(text, "rt")}</>
}
