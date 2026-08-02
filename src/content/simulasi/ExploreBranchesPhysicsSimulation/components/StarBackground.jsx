import { useEffect, useRef } from "react"

/**
 * Latar galaksi: canvas bintang berkedip + nebula blur + partikel melayang.
 * Sengaja pakai canvas (bukan ratusan node DOM) supaya tetap ringan.
 */
export default function StarBackground() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio)
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio)

    const STAR_COUNT = Math.min(220, Math.floor((width * height) / 9000))
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.25,
      twinkleSpeed: Math.random() * 0.015 + 0.004,
      phase: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.05,
      driftY: (Math.random() - 0.5) * 0.05,
      hue: Math.random() > 0.82 ? "violet" : Math.random() > 0.5 ? "cyan" : "white",
    }))

    function resize() {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }
    window.addEventListener("resize", resize)

    let t = 0
    function draw() {
      t += 1
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        star.x += star.driftX
        star.y += star.driftY
        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0

        const twinkle = Math.sin(t * star.twinkleSpeed + star.phase) * 0.35 + 0.65
        const alpha = star.baseAlpha * twinkle

        let color = "255,255,255"
        if (star.hue === "violet") color = "178,107,255"
        if (star.hue === "cyan") color = "34,211,238"

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color},${alpha})`
        ctx.shadowColor = `rgba(${color},${alpha})`
        ctx.shadowBlur = star.r * 3
        ctx.arc(star.x, star.y, star.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Nebula blur besar, mengikuti palet identitas situs */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(139,59,255,0.35), transparent 65%)" }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[65%] h-[65%] rounded-full blur-3xl opacity-30 animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.28), transparent 65%)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[40%] h-[40%] rounded-full blur-3xl opacity-20 animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(178,107,255,0.25), transparent 70%)",
          animationDelay: "-6s",
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
