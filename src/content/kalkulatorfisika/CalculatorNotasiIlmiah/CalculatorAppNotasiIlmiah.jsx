import { useState } from "react"

const examples = [
  { coef: "3,2", exp: "5" },
  { coef: "6,02", exp: "23" },
  { coef: "1,5", exp: "-4" },
]

const SUPERSCRIPT_MAP = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "-": "⁻", "+": "",
}

// Mengubah angka eksponen biasa menjadi karakter superscript, contoh: -4 -> "⁻⁴"
const toSuperscript = (num) =>
  String(num)
    .split("")
    .map((ch) => SUPERSCRIPT_MAP[ch] ?? ch)
    .join("")

// Menulis "10^n" dalam bentuk "10ⁿ" (superscript asli)
const pow10Text = (exp) => `10${toSuperscript(exp)}`

export default function CalculatorAppNotasiIlmiah() {
  const [mode, setMode] = useState("toScientific")

  // Mode: Desimal -> Ilmiah
  const [input, setInput] = useState("")

  // Mode: Ilmiah -> Desimal (input terpisah: koefisien & pangkat)
  const [coefInput, setCoefInput] = useState("")
  const [expInput, setExpInput] = useState("")

  const [hasil, setHasil] = useState("")
  const [langkah, setLangkah] = useState("")
  const [orde, setOrde] = useState(null)
  const [error, setError] = useState("")

  const [coefficient, setCoefficient] = useState(null)
  const [exponent, setExponent] = useState(null)

  const [shiftSteps, setShiftSteps] = useState([])

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

  const generateShiftSteps = (num) => {
    if (num === 0) return ["0"]

    const exp = Math.floor(Math.log10(Math.abs(num)))
    const steps = []

    let current = num

    steps.push(formatID(current, 10))

    if (exp > 0) {
      for (let i = 0; i < exp; i++) {
        current /= 10
        steps.push(formatID(current, 10))
      }
    }

    return steps
  }

  const convertToScientific = (num) => {
    if (num === 0) {
      return {
        result: `0 × ${pow10Text(0)}`,
        coefficient: 0,
        exponent: 0,
        order: 0,
        steps: `1. Bilangan nol tetap ditulis sebagai 0 × ${pow10Text(0)}.`,
      }
    }

    const exp = Math.floor(Math.log10(Math.abs(num)))
    const coef = num / Math.pow(10, exp)

    return {
      result: `${formatID(coef)} × ${pow10Text(exp)}`,
      coefficient: coef,
      exponent: exp,
      order: exp,
      steps: `1. Cari posisi koma hingga tersisa satu angka non-nol di depan koma.
2. Pangkat (eksponen) = ${exp}
3. Koefisien = angka asli ÷ ${pow10Text(exp)} = ${formatID(coef)}
4. Hasil = ${formatID(coef)} × ${pow10Text(exp)}`,
    }
  }

  // Sekarang menerima koefisien & pangkat sebagai nilai terpisah (bukan parsing teks gabungan)
  const convertToDecimal = (coef, exp) => {
    const result = coef * Math.pow(10, exp)

    return {
      result: formatID(result, 20),
      coefficient: coef,
      exponent: exp,
      order: exp,
      steps: `1. Koefisien = ${formatID(coef)}
2. Pangkat (eksponen) = ${exp}
3. Hitung: ${formatID(coef)} × ${pow10Text(exp)}
4. Hasil = ${formatID(result, 20)}`,
    }
  }

  const resetHasil = () => {
    setHasil("")
    setLangkah("")
    setCoefficient(null)
    setExponent(null)
    setOrde(null)
    setShiftSteps([])
  }

  const hitung = () => {
    setError("")

    if (mode === "toScientific") {
      if (input.trim() === "") return
      const num = parseID(input)

      if (isNaN(num)) {
        setError("Input tidak valid. Masukkan angka, contoh: 123000 atau 1,5")
        resetHasil()
        return
      }

      const res = convertToScientific(num)
      setShiftSteps(generateShiftSteps(num))
      setHasil(res.result)
      setLangkah(res.steps)
      setOrde(res.order)
      setCoefficient(res.coefficient)
      setExponent(res.exponent)
    } else {
      if (coefInput.trim() === "" || expInput.trim() === "" || expInput === "-") {
        setError("Lengkapi koefisien dan pangkat terlebih dahulu")
        resetHasil()
        return
      }

      const coef = parseID(coefInput)
      const exp = parseInt(expInput, 10)

      if (isNaN(coef) || isNaN(exp)) {
        setError("Koefisien atau pangkat tidak valid")
        resetHasil()
        return
      }

      if (Math.abs(coef) < 1 || Math.abs(coef) >= 10) {
        setError("Koefisien harus memenuhi syarat 1 ≤ a < 10, contoh: 3,2 (bukan 32 atau 0,32)")
        resetHasil()
        return
      }

      const res = convertToDecimal(coef, exp)
      setHasil(res.result)
      setLangkah(res.steps)
      setOrde(res.order)
      setCoefficient(res.coefficient)
      setExponent(res.exponent)
    }
  }

  // Validasi syarat koefisien notasi ilmiah: 1 ≤ |a| < 10
  const coefNum = mode === "toDecimal" ? parseID(coefInput) : null
  const coefTouched = coefInput.trim() !== ""
  const coefValid = !coefTouched || (!isNaN(coefNum) && Math.abs(coefNum) >= 1 && Math.abs(coefNum) < 10)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") hitung()
  }

  const copyResult = () => {
    navigator.clipboard.writeText(hasil)
  }

  // --- Keypad pangkat (eksponen) ---
  const addExpDigit = (digit) => {
    if (expInput.replace("-", "").length >= 3) return // batasi 3 digit
    setExpInput((prev) => prev + digit)
  }

  const toggleExpSign = () => {
    setExpInput((prev) => (prev.startsWith("-") ? prev.slice(1) : prev === "" ? "-" : "-" + prev))
  }

  const backspaceExp = () => {
    setExpInput((prev) => prev.slice(0, -1))
  }

  const clearExp = () => setExpInput("")

  const switchMode = (next) => {
    setMode(next)
    setInput("")
    setCoefInput("")
    setExpInput("")
    setError("")
    resetHasil()
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
            onClick={() => switchMode("toScientific")}
            className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${
              mode === "toScientific"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            Desimal → Ilmiah
          </button>

          <button
            onClick={() => switchMode("toDecimal")}
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

      {/* MODE: Desimal -> Ilmiah */}
      {mode === "toScientific" && (
        <>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Masukkan angka desimal
          </label>
          <input
            type="text"
            inputMode="decimal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Contoh: 123000 atau 1,5"
            className="w-full p-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
      )}

      {/* MODE: Ilmiah -> Desimal */}
      {mode === "toDecimal" && (
        <>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Masukkan notasi ilmiah
          </label>

          {/* Preview superscript live */}
          <div className="mb-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              {coefInput.trim() === "" ? "…" : coefInput}
            </span>
            <span className="text-xl font-bold text-slate-900 dark:text-white mx-1">×</span>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              10
              <sup className="text-blue-600 dark:text-blue-400">
                {expInput.trim() === "" || expInput === "-" ? "?" : expInput}
              </sup>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                Koefisien
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={coefInput}
                onChange={(e) => setCoefInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Contoh: 3,2"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 dark:bg-slate-800 dark:text-white ${
                  coefTouched && !coefValid
                    ? "border-red-400 dark:border-red-500 focus:ring-red-400"
                    : "border-slate-300 dark:border-slate-700 focus:ring-blue-500"
                }`}
              />
              <p
                className={`mt-1 text-xs ${
                  coefTouched && !coefValid
                    ? "text-red-500 dark:text-red-400"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {coefTouched && !coefValid ? "⚠️ Harus 1 ≤ a < 10" : "Syarat: 1 ≤ a < 10"}
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                Pangkat (eksponen)
              </label>
              <div className="w-full p-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white font-mono">
                {expInput === "" ? <span className="text-slate-400 dark:text-slate-500">10ⁿ</span> : `10${toSuperscript(expInput)}`}
              </div>
            </div>
          </div>

          {/* Keypad pangkat */}
          <div className="mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
              Papan tombol pangkat
            </p>
            <div className="grid grid-cols-5 gap-1.5">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((d) => (
                <button
                  key={d}
                  onClick={() => addExpDigit(d)}
                  className="py-2 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
                >
                  {d}
                </button>
              ))}
              <button
                onClick={toggleExpSign}
                className="py-2 rounded-md bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-white font-medium text-sm hover:bg-slate-300 dark:hover:bg-slate-500"
              >
                ±
              </button>
              <button
                onClick={backspaceExp}
                className="col-span-2 py-2 rounded-md bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-white font-medium text-sm hover:bg-slate-300 dark:hover:bg-slate-500"
              >
                ⌫ Hapus
              </button>
              <button
                onClick={clearExp}
                className="col-span-2 py-2 rounded-md bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 font-medium text-sm hover:bg-red-200 dark:hover:bg-red-900/60"
              >
                C
              </button>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {mode === "toDecimal" &&
          examples.map((ex) => (
            <button
              key={`${ex.coef}-${ex.exp}`}
              onClick={() => {
                setCoefInput(ex.coef)
                setExpInput(ex.exp)
              }}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {ex.coef} × 10{toSuperscript(ex.exp)}
            </button>
          ))}
      </div>

      <button
        onClick={hitung}
        disabled={mode === "toDecimal" && coefTouched && !coefValid}
        className="w-full py-3 bg-blue-600 disabled:bg-blue-600/40 disabled:cursor-not-allowed text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
      >
        Hitung
      </button>

      <button
        onClick={() => {
          setInput("")
          setCoefInput("")
          setExpInput("")
          setError("")
          resetHasil()
        }}
        className="w-full mt-2 py-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
      >
        Reset
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

          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Koefisien</p>
              <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                {formatID(coefficient)}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Eksponen</p>
              <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                10<sup>{exponent}</sup>
              </p>
            </div>
          </div>

          {mode === "toScientific" &&
            shiftSteps.length > 1 && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                <h3 className="font-semibold mb-4 text-slate-700 dark:text-slate-200">
                  Pergeseran Koma
                </h3>

                <div className="flex flex-col items-center gap-2">
                  <div className="space-y-4">
                    {shiftSteps.map((step, index) => {
                      const isLast =
                        index === shiftSteps.length - 1

                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center"
                        >
                          <div
                            className={`w-full max-w-md rounded-xl p-4 transition-all ${
                              isLast
                                ? "bg-green-100 dark:bg-green-900/30 border border-green-500"
                                : "bg-slate-100 dark:bg-slate-800"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-mono text-xl font-bold">
                                {step}
                              </span>

                              {isLast ? (
                                <span className="text-green-600 font-semibold">
                                  ✓ Bentuk Notasi Ilmiah
                                </span>
                              ) : (
                                <span className="text-blue-500 text-sm">
                                  Geser ke-{index + 1}
                                </span>
                              )}
                            </div>
                          </div>

                          {!isLast && (
                            <div className="text-blue-500 text-2xl py-1">
                              ↓
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-4 text-center text-sm text-slate-500">
                  Koma digeser sebanyak{" "}
                  <span className="font-bold text-blue-500">
                    {shiftSteps.length - 1}
                  </span>{" "}
                  kali
                </div>
                <div className="mt-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 p-4">
                  <p className="font-medium text-blue-600">
                    Kesimpulan
                  </p>

                  <p className="text-sm mt-2">
                    Koma digeser sebanyak{" "}
                    <span className="font-bold">
                      {Math.abs(exponent)}
                    </span>{" "}
                    kali sehingga eksponen yang diperoleh adalah{" "}
                    <span className="font-bold">
                      {exponent}
                    </span>.
                  </p>
                </div>
              </div>
              
          )}

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

          <button onClick={copyResult} className="mt-3 text-sm text-blue-600 dark:text-blue-400">
            📋 Salin Hasil
          </button>
        </div>
      )}
    </div>
  )
}
