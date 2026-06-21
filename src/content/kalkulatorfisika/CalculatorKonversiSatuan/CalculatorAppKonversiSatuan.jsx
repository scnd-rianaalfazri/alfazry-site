import { useState, useEffect } from "react"

export default function CalculatorKonversiSatuan() {
  const conversionData = {
    panjang: {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
    },

    massa: {
      mg: 0.000001,
      g: 0.001,
      kg: 1,
      ton: 1000,
    },

    waktu: {
      ms: 0.001,
      s: 1,
      menit: 60,
      jam: 3600,
      hari: 86400,
    },

    luas: {
      cm2: 0.0001,
      m2: 1,
      km2: 1000000,
    },

    volume: {
      cm3: 0.000001,
      m3: 1,
      liter: 0.001,
      mL: 0.000001,
    },

    tekanan: {
      Pa: 1,
      kPa: 1000,
      MPa: 1000000,
      bar: 100000,
      atm: 101325,
    },

    energi: {
      J: 1,
      kJ: 1000,
      MJ: 1000000,
      kal: 4.184,
    },

    daya: {
      W: 1,
      kW: 1000,
      MW: 1000000,
      HP: 745.7,
    },
  }

  const [kategori, setKategori] = useState("panjang")
  const [nilai, setNilai] = useState("")
  const [dari, setDari] = useState("m")
  const [ke, setKe] = useState("cm")

  const formatUnit = (unit) => {
    return unit
      .replace("2", "²")
      .replace("3", "³")
  }

  useEffect(() => {
    const options =
      kategori === "kecepatan"
        ? ["m/s", "km/jam"]
        : Object.keys(conversionData[kategori])

    setDari(options[0])
    setKe(options[1] || options[0])
  }, [kategori])

  const tukarSatuan = () => {
    setDari(ke)
    setKe(dari)
  }

  const hasilKonversi = () => {
    const n = parseFloat(nilai)

    if (isNaN(n)) return "0"

    if (kategori === "kecepatan") {
      if (dari === "m/s" && ke === "km/jam") {
        return (n * 3.6).toLocaleString()
      }

      if (dari === "km/jam" && ke === "m/s") {
        return (n / 3.6).toLocaleString()
      }

      return n.toLocaleString()
    }

    const baseValue = n * conversionData[kategori][dari]
    const result = baseValue / conversionData[kategori][ke]

    return Number(result.toPrecision(10)).toLocaleString()
  }

  const opsi =
    kategori === "kecepatan"
      ? ["m/s", "km/jam"]
      : Object.keys(conversionData[kategori])

  return (
    <div className="max-w-4xl mx-auto">

      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-6">

        <h1 className="text-3xl font-bold mb-2">
          Kalkulator Konversi Satuan
        </h1>

        <p className="text-zinc-500 mb-6">
          Konversi berbagai satuan fisika dengan cepat.
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 font-medium">
              Kategori
            </label>

            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full border rounded-xl p-3 dark:bg-zinc-800"
            >
              <option value="panjang">Panjang</option>
              <option value="massa">Massa</option>
              <option value="waktu">Waktu</option>
              <option value="luas">Luas</option>
              <option value="volume">Volume</option>
              <option value="kecepatan">Kecepatan</option>
              <option value="tekanan">Tekanan</option>
              <option value="energi">Energi</option>
              <option value="daya">Daya</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Nilai
            </label>

            <input
              type="number"
              value={nilai}
              onChange={(e) => setNilai(e.target.value)}
              placeholder="Masukkan nilai"
              className="w-full border rounded-xl p-3 dark:bg-zinc-800"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Dari
            </label>

            <select
              value={dari}
              onChange={(e) => setDari(e.target.value)}
              className="w-full border rounded-xl p-3 dark:bg-zinc-800"
            >
              {opsi.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {formatUnit(item)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Ke
            </label>

            <select
              value={ke}
              onChange={(e) => setKe(e.target.value)}
              className="w-full border rounded-xl p-3 dark:bg-zinc-800"
            >
              {opsi.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {formatUnit(item)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={tukarSatuan}
          className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          ⇄ Tukar Satuan
        </button>

        <div className="mt-8 bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 text-center">

          <p className="text-zinc-500 mb-2">
            Hasil Konversi
          </p>

          <h2 className="text-4xl font-bold">
            {hasilKonversi()} {formatUnit(ke)}
          </h2>

          {nilai && (
            <p className="mt-3 text-sm text-zinc-500">
              {nilai} {formatUnit(dari)} ={" "}
              {hasilKonversi()} {formatUnit(ke)}
            </p>
          )}
        </div>

      </div>
    </div>
  )
}