import { useState } from "react"
import BlogCard from "../components/BlogCards"
import { blogs } from "../data/blogs"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const categories = [
    "Semua",
    ...Array.from(new Set(blogs.map((post) => post.category).filter(Boolean))),
  ]

  const filteredBlogs =
    activeCategory === "Semua"
      ? blogs
      : blogs.filter((post) => post.category === activeCategory)

  return (
    <div className="bg-space bg-grid text-white min-h-screen">
      <Navbar />

      <section className="relative z-10 p-6 md:p-10">

        <p className="font-mono uppercase tracking-[0.3em] text-cyan-300 text-[10px] sm:text-xs mb-3">
          Catatan &amp; Eksplorasi
        </p>

        <h1 className="font-display font-black text-3xl md:text-5xl mb-10 text-gradient-violet">
          BLOG
        </h1>

        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2
                  rounded-xl
                  text-xs md:text-sm
                  font-mono
                  border
                  transition-colors

                  ${
                    activeCategory === cat
                      ? "bg-violet-500/15 text-violet-300 border-violet-400/40"
                      : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {filteredBlogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {filteredBlogs.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        ) : (
          <div className="hud-frame border border-white/10 rounded-2xl p-10 text-center bg-white/5">
            <p className="text-white/50 font-mono text-sm">
              Belum ada postingan di kategori ini.
            </p>
          </div>
        )}

      </section>

      <Footer />
    </div>
  )
}
