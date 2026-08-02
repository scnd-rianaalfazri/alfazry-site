/**
 * Cincin orbit dekoratif: lingkaran redup + satu titik cahaya yang
 * berputar mengelilinginya. Ukuran dalam persen dari container induk
 * (yang berukuran aspect-square) supaya tetap responsif.
 */
export default function Orbit({ size = 60, glow = "rgba(34, 211, 238, 0.35)", duration = 26, reverse = false }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${size}%`,
        height: `${size}%`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        border: `1px solid ${glow}`,
        boxShadow: `0 0 24px ${glow} inset, 0 0 12px ${glow}`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          animation: `orbit-spin ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            left: "50%",
            top: -3,
            transform: "translateX(-50%)",
            background: glow,
            boxShadow: `0 0 10px 3px ${glow}`,
          }}
        />
      </div>
    </div>
  )
}
