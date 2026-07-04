import { useEffect, useState } from "react"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`
        fixed
        bottom-6
        right-6
        z-50

        w-12
        h-12

        rounded-full

        border
        border-white/10

        bg-black/60
        backdrop-blur-xl

        text-violet-300
        text-xl

        shadow-[0_0_20px_rgba(139,59,255,0.25)]

        transition-all
        duration-300

        hover:scale-110
        hover:border-violet-400
        hover:shadow-[0_0_25px_rgba(139,59,255,0.4)]

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
        />
        </svg>
    </button>
  )
}