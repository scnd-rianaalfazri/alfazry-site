import { useParams, Link } from "react-router-dom"
import { blogs } from "../data/blogs"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import RichText from "../components/layout/RichText"
import BackToTopButton from "../components/UI/BackToTopBottom.jsx"

export default function DetailBlog() {
  const { slug } = useParams()
  const post = blogs.find((b) => b.slug === slug)

  if (!post) {
    return (
      <div className="bg-space text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <section className="px-4 sm:px-6 md:px-10 py-8">
          <h1 className="font-display text-3xl font-bold mb-4">
            Postingan tidak ditemukan
          </h1>
          <Link to="/blog" className="text-cyan-300 hover:underline">
            ← Kembali ke daftar blog
          </Link>
        </section>
        <Footer />
      </div>
    )
  }

  const currentIndex = blogs.findIndex((b) => b.slug === slug)
  const postSebelumnya = blogs[currentIndex + 1]
  const postBerikutnya = blogs[currentIndex - 1]

  return (
    <div className="bg-space text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <article className="relative z-10 px-4 sm:px-6 md:px-10 py-8 max-w-3xl mx-auto">

        {/* Back Link */}
        <Link
          to="/blog"
          className="font-mono text-cyan-300 hover:underline text-sm mb-6 block"
        >
          ← Kembali ke daftar blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 font-mono text-[11px] text-cyan-300/80">
          {post.category && (
            <span className="px-2 py-0.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 uppercase tracking-wide">
              {post.category}
            </span>
          )}
          {post.date && <span className="text-white/40">{post.date}</span>}
          {post.readTime && <span className="text-white/30">· {post.readTime}</span>}
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-3xl md:text-5xl mb-6 text-gradient-violet leading-tight">
          {post.title}
        </h1>

        {/* Cover Image */}
        {post.coverImage && (
          <figure className="mb-8 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={post.coverImage}
              alt={post.title}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </figure>
        )}

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono text-violet-300 border border-violet-400/25 bg-violet-500/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="space-y-6">
          {post.content?.map((section, i) => {

            if (section.heading) {
              return (
                <h2
                  key={i}
                  className="font-hud text-xl md:text-2xl font-bold text-gradient-violet pt-2"
                >
                  <RichText text={section.heading} />
                </h2>
              )
            }

            if (section.quote) {
              return (
                <blockquote
                  key={i}
                  className="
                    border-l-2 border-violet-400/60
                    pl-5 py-1
                    italic text-white/80
                    text-base md:text-lg
                    [text-shadow:0_0_20px_rgba(139,59,255,0.25)]
                  "
                >
                  <RichText text={section.quote} />
                </blockquote>
              )
            }

            if (section.image) {
              return (
                <figure
                  key={i}
                  className="overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={section.image}
                    alt={section.caption || post.title}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                  {section.caption && (
                    <figcaption className="px-4 py-3 text-sm text-center text-white/60 bg-black/20">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              )
            }

            if (section.body) {
              const paragraphs = Array.isArray(section.body)
                ? section.body
                : [section.body]

              return (
                <div key={i} className="space-y-4">
                  {paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-white/70 leading-relaxed text-base md:text-lg"
                    >
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              )
            }

            return null
          })}
        </div>

        {/* Navigasi Post */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-14 pt-8 border-t border-white/10">
          {postSebelumnya ? (
            <Link
              to={`/blog/${postSebelumnya.slug}`}
              className="
                w-full sm:w-auto
                px-5 py-3
                rounded-xl
                font-hud
                bg-white/10
                border border-white/10
                hover:bg-white/20
                transition
                text-center
              "
            >
              ← {postSebelumnya.title}
            </Link>
          ) : (
            <div />
          )}

          {postBerikutnya && (
            <Link
              to={`/blog/${postBerikutnya.slug}`}
              className="
                w-full sm:w-auto
                px-5 py-3
                rounded-xl
                font-hud

                bg-gradient-to-r from-violet-500 to-violet-700
                border border-violet-400/40
                hover:scale-[1.02]

                text-white
                font-semibold

                transition
                text-center
                shadow-lg shadow-violet-600/30
              "
            >
              {postBerikutnya.title} →
            </Link>
          )}
        </div>

      </article>

      <BackToTopButton />
      <Footer />
    </div>
  )
}
