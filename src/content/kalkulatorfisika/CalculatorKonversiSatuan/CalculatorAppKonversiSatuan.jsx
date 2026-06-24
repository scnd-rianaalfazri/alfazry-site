import { useState, useEffect } from "react"

const kategoriList = [
  { id: "panjang", label: "Panjang", icon: "📏" },
  { id: "massa", label: "Massa", icon: "⚖️" },
  { id: "waktu", label: "Waktu", icon: "⏱️" },
  { id: "luas", label: "Luas", icon: "🔲" },
  { id: "volume", label: "Volume", icon: "🧪" },
  { id: "kecepatan", label: "Kecepatan", icon: "🚀" },
  { id: "tekanan", label: "Tekanan", icon: "🌡️" },
  { id: "energi", label: "Energi", icon: "⚡" },
  { id: "daya", label: "Daya", icon: "🔋" },
]

export default function CalculatorKonversiSatuan() {
  const conversionData = {
    panjang: { mm: 0.001, cm: 0.01, m: 1, km: 1000 },
    massa: { mg: 0.000001, g: 0.001, kg: 1, ton: 1000 },
    waktu: { ms: 0.001, s: 1, menit: 60, jam: 3600, hari: 86400 },
    luas: { cm2: 0.0001, m2: 1, km2: 1000000 },
    volume: { cm3: 0.000001, m3: 1, liter: 0.001, mL: 0.000001 },
    tekanan: { Pa: 1, kPa: 1000, MPa: 1000000, bar: 100000, atm: 101325 },
    energi: { J: 1, kJ: 1000, MJ: 1000000, kal: 4.184 },
    daya: { W: 1, kW: 1000, MW: 1000000, HP: 745.7 },
  }

  const [kategori, setKategori] = useState("panjang")
  const [nilai, setNilai] = useState("")
  const [dari, setDari] = useState("m")
  const [ke, setKe] = useState("cm")

  // Parse string berformat Indonesia ("1.234,56") menjadi number JS
  const parseID = (str) => {
    if (str === "" || str === null || str === undefined) return NaN
    const cleaned = str
      .toString()
      .trim()
      .replace(/\./g, "")
      .replace(",", ".")
    return parseFloat(cleaned)
  }

  // Format number menjadi string berformat Indonesia
  const formatID = (num, maxDecimals = 6) => {
    if (num === null || num === undefined || isNaN(num)) return "-"
    return num.toLocaleString("id-ID", { maximumFractionDigits: maxDecimals })
  }

  const formatUnit = (unit) => unit.replace("2", "²").replace("3", "³")

  useEffect(() => {
    const options =
      kategori === "kecepatan" ? ["m/s", "km/jam"] : Object.keys(conversionData[kategori])

    setDari(options[0])
    setKe(options[1] || options[0])
  }, [kategori])

  const tukarSatuan = () => {
    setDari(ke)
    setKe(dari)
  }

  const n = parseID(nilai)
  const inputValid = nilai.trim() !== "" && !isNaN(n)

  const hitungHasil = () => {
    if (!inputValid) return null

    if (kategori === "kecepatan") {
      if (dari === "m/s" && ke === "km/jam") return n * 3.6
      if (dari === "km/jam" && ke === "m/s") return n / 3.6
      return n
    }

    const baseValue = n * conversionData[kategori][dari]
    return baseValue / conversionData[kategori][ke]
  }

  const hasilNumber = hitungHasil()
  const hasilTampil =
    hasilNumber === null ? "-" : formatID(Number(hasilNumber.toPrecision(10)))

  const opsi =
    kategori === "kecepatan" ? ["m/s", "km/jam"] : Object.keys(conversionData[kategori])

  const kategoriAktif = kategoriList.find((k) => k.id === kategori)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 text-zinc-900 dark:text-white">
          📐 Kalkulator Konversi Satuan
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">
          Konversi berbagai satuan fisika dengan cepat. Gunakan tanda koma (,) untuk desimal.
        </p>

        {/* Pemilihan kategori */}
        <label className="block mb-2 font-medium text-sm text-zinc-700 dark:text-zinc-300">
          Kategori
        </label>
        <div className="flex flex-wrap gap-2 mb-6">
          {kategoriList.map((item) => (
            <button
              key={item.id}
              onClick={() => setKategori(item.id)}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5 ${
                kategori === item.id
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </div>

        {/* Input nilai */}
        <label className="block mb-2 font-medium text-sm text-zinc-700 dark:text-zinc-300">
          Nilai
        </label>
        <input
          type="text"
          inputMode="decimal"
          value={nilai}
          onChange={(e) => setNilai(e.target.value)}
          placeholder="Contoh: 12,5"
          className="w-full border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 mb-1 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="h-5 mb-4">
          {nilai.trim() !== "" && !inputValid && (
            <p className="text-sm text-red-500">⚠️ Masukkan angka yang valid, contoh: 12,5</p>
          )}
        </div>

        {/* Dari -> Ke */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-3 items-end">
          <div>
            <label className="block mb-2 font-medium text-sm text-zinc-700 dark:text-zinc-300">
              Dari
            </label>
            <select
              value={dari}
              onChange={(e) => setDari(e.target.value)}
              className="w-full border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 dark:bg-zinc-800 dark:text-white"
            >
              {opsi.map((item) => (
                <option key={item} value={item}>
                  {formatUnit(item)}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={tukarSatuan}
            title="Tukar satuan"
            className="h-12 w-12 mx-auto md:mx-0 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium transition-colors flex items-center justify-center"
          >
            ⇄
          </button>

          <div>
            <label className="block mb-2 font-medium text-sm text-zinc-700 dark:text-zinc-300">
              Ke
            </label>
            <select
              value={ke}
              onChange={(e) => setKe(e.target.value)}
              className="w-full border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 dark:bg-zinc-800 dark:text-white"
            >
              {opsi.map((item) => (
                <option key={item} value={item}>
                  {formatUnit(item)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hasil */}
        <div className="mt-8 bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-500 dark:text-zinc-400 mb-2 text-sm flex items-center justify-center gap-1.5">
            <span>{kategoriAktif?.icon}</span> Hasil Konversi {kategoriAktif?.label}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white break-all">
            {hasilTampil} {hasilNumber !== null && formatUnit(ke)}
          </h2>

          {inputValid && (
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              {formatID(n)} {formatUnit(dari)} = {hasilTampil} {formatUnit(ke)}
            </p>
          )}

          {!inputValid && nilai.trim() === "" && (
            <p className="mt-3 text-sm text-zinc-400 dark:text-zinc-500">
              Masukkan nilai untuk melihat hasil konversi
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
