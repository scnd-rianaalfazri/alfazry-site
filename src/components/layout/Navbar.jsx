import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const menuItems = [
    { name: "Materi", path: "/materi" },
    { name: "Simulasi", path: "/simulasi" },
    { name: "Kalkulator", path: "/kalkulatorfisika" },
    { name: "Blog", path: "/blog" },
  ]

  return (
    <header
      className="
        sticky
        top-4
        z-50
        px-4
        transition-all
        duration-300
      "
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          rounded-2xl
          border
          border-white/10
          overflow-hidden
          transition-all
          duration-300

          ${
            isScrolled
              ? `
                bg-black/70
                backdrop-blur-2xl
                shadow-[0_0_50px_rgba(34,211,238,0.12)]
              `
              : `
                bg-black/50
                backdrop-blur-xl
                shadow-[0_0_30px_rgba(34,211,238,0.08)]
              `
          }
        `}
      >
        {/* Navbar Main */}
        <div
          className={`
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            transition-all
            duration-300

            ${isScrolled ? "py-3" : "py-4"}
          `}
        >
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1
              className={`
                font-bold
                tracking-tight
                transition-all
                duration-300

                ${
                  isScrolled
                    ? "text-lg sm:text-xl"
                    : "text-xl sm:text-2xl"
                }
              `}
            >
              Alfazrian
              <span
                className="
                  text-cyan-400
                  drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]
                "
              >
                Site
              </span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-white/70">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="
              md:hidden
              flex
              flex-col
              justify-center
              gap-1.5
              p-2
            "
          >
            <span
              className={`
                block
                h-0.5
                w-6
                bg-white
                transition-all
                duration-300

                ${
                  isOpen
                    ? "rotate-45 translate-y-2"
                    : ""
                }
              `}
            />

            <span
              className={`
                block
                h-0.5
                w-6
                bg-white
                transition-all
                duration-300

                ${
                  isOpen
                    ? "opacity-0"
                    : ""
                }
              `}
            />

            <span
              className={`
                block
                h-0.5
                w-6
                bg-white
                transition-all
                duration-300

                ${
                  isOpen
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }
              `}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out

            ${
              isOpen
                ? "max-h-96"
                : "max-h-0"
            }
          `}
        >
          <nav className="border-t border-white/10 bg-black/20 px-4 py-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-white/70
                    transition-all
                    duration-300

                    hover:bg-white/5
                    hover:text-cyan-400
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}