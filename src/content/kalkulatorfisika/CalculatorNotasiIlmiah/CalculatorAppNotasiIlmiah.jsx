import { useState } from "react"

const examples = ["3,2x10^5", "6,02x10^23", "1,5x10^-4"]

export default function CalculatorAppNotasiIlmiah() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState("toScientific")
  const [hasil, setHasil] = useState("")
  const [langkah, setLangkah] = useState("")
  const [orde, setOrde] = useState(null)
  const [error, setError] = useState("")

  const [coefficient, setCoefficient] = useState(null)
  const [exponent, setExponent] = useState(null)

  // Parse string berformat Indonesia ("1.234,56") menjadi number JS
  const parseID = (str) => {
    const cleaned = str
      .trim()
      .replace(/\./g, "") // hapus titik pemisah ribuan
      .replace(",", ".") // koma desimal -> titik (untuk parseFloat)
    return parseFloat(cleaned)
  }

  // Format number menjadi string berformat Indonesia, contoh: 3.45 -> "3,45"
  const formatID = (num, maxDecimals = 4) => {
    if (num === null || num === undefined || isNaN(num)) return "-"
    return num.toLocaleString("id-ID", { maximumFractionDigits: maxDecimals })
  }

  const convertToScientific = (num) => {
    if (num === 0) {
      return {
        result: "0 × 10⁰",
        coefficient: 0,
        exponent: 0,
        order: 0,
        steps: "1. Bilangan nol tetap ditulis sebagai 0 × 10⁰.",
      }
    }

    const exp = Math.floor(Math.log10(Math.abs(num)))
    const coef = num / Math.pow(10, exp)

    return {
      result: `${formatID(coef)} × 10^${exp}`,
      coefficient: coef,
      exponent: exp,
      order: exp,
      steps: `1. Cari posisi koma hingga tersisa satu angka non-nol di depan koma.
2. Pangkat (eksponen) = ${exp}
3. Koefisien = angka asli ÷ 10^${exp} = ${formatID(coef)}
4. Hasil = ${formatID(coef)} × 10^${exp}`,
    }
  }

  const convertToDecimal = (scientific) => {
    const cleaned = scientific
      .replace(/\s/g, "")
      .replace("×", "x")
      .replace("X", "x")

    // Koefisien boleh memakai koma (1,5) atau titik (1.5) sebagai desimal
    const match = cleaned.match(/^([+-]?\d+(?:[.,]\d+)?)x10\^?([+-]?\d+)$/)

    if (!match) {
      return {
        error: true,
        steps: "Contoh format yang benar: 3,2x10^5 atau 1,5x10^-4",
      }
    }

    const coef = parseFloat(match[1].replace(",", "."))
    const exp = parseInt(match[2])
    const result = coef * Math.pow(10, exp)

    return {
      result: formatID(result, 20),
      coefficient: coef,
      exponent: exp,
      order: exp,
      steps: `1. Koefisien = ${formatID(coef)}
2. Pangkat (eksponen) = ${exp}
3. Hitung: ${formatID(coef)} × 10^${exp}
4. Hasil = ${formatID(result, 20)}`,
    }
  }

  const hitung = () => {
    if (input.trim() === "") return

    setError("")

    if (mode === "toScientific") {
      const num = parseID(input)

      if (isNaN(num)) {
        setError("Input tidak valid. Masukkan angka, contoh: 123000 atau 1,5")
        setHasil("")
        setCoefficient(null)
        setExponent(null)
        setOrde(null)
        return
      }

      const res = convertToScientific(num)
      setHasil(res.result)
      setLangkah(res.steps)
      setOrde(res.order)
      setCoefficient(res.coefficient)
      setExponent(res.exponent)
    } else {
      const res = convertToDecimal(input)

      if (res.error) {
        setError("Format tidak dikenali")
        setHasil("")
        setLangkah(res.steps)
        setCoefficient(null)
        setExponent(null)
        setOrde(null)
        return
      }

      setHasil(res.result)
      setLangkah(res.steps)
      setOrde(res.order)
      setCoefficient(res.coefficient)
      setExponent(res.exponent)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") hitung()
  }

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700">
      <h1 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">
        🔢 Kalkulator Notasi Ilmiah
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
        Konversi antara bentuk desimal dan notasi ilmiah (a × 10ⁿ). Format desimal menggunakan tanda koma (,).
      </p>

      {/* Mode selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Mode Konversi
        </label>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setMode("toScientific")
              setInput("")
              setHasil("")
              setError("")
            }}
            className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${
              mode === "toScientific"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            Desimal → Ilmiah
          </button>

          <button
            onClick={() => {
              setMode("toDecimal")
              setInput("")
              setHasil("")
              setError("")
            }}
            className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${
              mode === "toDecimal"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            Ilmiah → Desimal
          </button>
        </div>
      </div>

      {/* Input */}
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        {mode === "toScientific" ? "Masukkan angka desimal" : "Masukkan notasi ilmiah"}
      </label>
      <input
        type="text"
        inputMode={mode === "toScientific" ? "decimal" : "text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={
          mode === "toScientific" ? "Contoh: 123000 atau 1,5" : "Contoh: 3,2x10^5"
        }
        className="w-full p-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {mode === "toDecimal" &&
          examples.map((ex) => (
            <button
              key={ex}
              onClick={() => setInput(ex)}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {ex}
            </button>
          ))}
      </div>

      <button
        onClick={hitung}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
      >
        Hitung
      </button>

      {error && (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">⚠️ {error}</p>
      )}

      {hasil && !error && (
        <div className="mt-6 space-y-3">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700">
            <h2 className="font-semibold mb-2 text-slate-700 dark:text-slate-200">Hasil</h2>

            {mode === "toScientific" ? (
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {formatID(coefficient)} × 10
                <sup>{exponent}</sup>
              </p>
            ) : (
              <p className="text-2xl font-bold text-slate-900 dark:text-white break-all">
                {hasil}
              </p>
            )}
          </div>

          {orde !== null && (
            <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-3">
              <p className="font-medium text-slate-700 dark:text-yellow-200">Orde Besaran</p>
              <p className="text-sm text-slate-600 dark:text-yellow-100/80">
                Bilangan ini berada pada orde 10<sup>{orde}</sup>
              </p>
            </div>
          )}

          <div className="p-4 rounded-lg bg-gray-100 dark:bg-slate-800">
            <h2 className="font-semibold mb-2 text-slate-700 dark:text-slate-200">
              Langkah Penyelesaian
            </h2>
            <pre className="whitespace-pre-wrap text-sm text-slate-600 dark:text-slate-300 font-sans">
              {langkah}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
