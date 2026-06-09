import { useState, useEffect } from "react";

const SimulasiTekananHidrostatis = () => {
  const [tinggiAir, setTinggiAir] = useState(12);
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset((prev) => prev + 2);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const rho = 1000;
  const g = 9.8;

  const tekanan = rho * g * tinggiAir;

  const tinggiPixel = (tinggiAir / 20) * 400;

  const panjangAtas = Math.max(20, tinggiAir * 2);
  const panjangTengah = Math.max(40, tinggiAir * 5);
  const panjangBawah = Math.max(60, tinggiAir * 8);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="bg-white rounded-3xl shadow-xl border border-sky-100 p-6">

        <h2 className="text-3xl font-bold text-sky-600 mb-2">
          🌊 Simulasi Tekanan Hidrostatis
        </h2>

        <p className="text-slate-600 mb-6">
          Geser slider untuk mengubah tinggi air dan amati perubahan tekanan.
        </p>

        {/* Slider */}
        <div className="mb-8">
          <label className="font-semibold text-slate-700">
            Tinggi Air: {tinggiAir.toFixed(1)} m
          </label>

          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={tinggiAir}
            onChange={(e) => setTinggiAir(Number(e.target.value))}
            className="w-full mt-3 accent-sky-500"
          />
        </div>

        <div className="flex justify-center gap-10 flex-wrap">

          {/* Penggaris */}
          <div className="relative h-[420px] w-16">

            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className="absolute flex items-center text-xs text-slate-500"
                style={{
                  bottom: `${(i / 20) * 400}px`,
                }}
              >
                <div className="w-5 border-t border-slate-500"></div>
                <span className="ml-1">{i} m</span>
              </div>
            ))}

          </div>

          {/* Area Simulasi */}
          <div className="relative">

            {/* Tabung */}
            <div className="relative w-64 h-[420px] overflow-hidden border-4 border-slate-400 rounded-b-3xl bg-sky-50">

              {/* Air */}
              <div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-sky-800 to-cyan-400 transition-all duration-700"
                style={{
                  height: `${tinggiPixel}px`,
                }}
              >

                {/* Gelombang */}
                <svg
                  className="absolute top-0 left-0 w-[200%] h-10"
                  style={{
                    transform: `translateX(-${waveOffset}px)`,
                  }}
                >
                  <path
                    d="
                    M0 20
                    Q25 0 50 20
                    T100 20
                    T150 20
                    T200 20
                    T250 20
                    T300 20
                    T350 20
                    T400 20
                    V40 H0 Z
                  "
                    fill="rgba(255,255,255,0.35)"
                  />
                </svg>

              </div>

              {/* Ikan */}
              <div
                className="absolute text-4xl transition-all duration-700"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: `${Math.max(20, tinggiPixel - 70)}px`,
                }}
              >
                🐟
              </div>

              {/* Titik Pengamatan */}
              <div
                className="absolute left-12 transition-all duration-700"
                style={{
                  bottom: `${Math.max(20, tinggiPixel - 80)}px`,
                }}
              >
                <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>

              {/* Panah Tekanan */}
              <div
                className="absolute right-3 flex items-center transition-all duration-700"
                style={{
                  bottom: `${Math.max(20, tinggiPixel - 80)}px`,
                }}
              >
                <div
                  className="bg-red-500 rounded-full"
                  style={{
                    width: `${20 + tinggiAir * 4}px`,
                    height: "10px",
                  }}
                ></div>

                <span className="text-red-600 text-2xl ml-1">
                  ➜
                </span>
              </div>

              {/* Lubang Atas */}
              <div className="absolute right-0 top-[100px]">
                <div className="w-3 h-3 bg-white rounded-full translate-x-1/2"></div>
              </div>

              {/* Lubang Tengah */}
              <div className="absolute right-0 top-[200px]">
                <div className="w-3 h-3 bg-white rounded-full translate-x-1/2"></div>
              </div>

              {/* Lubang Bawah */}
              <div className="absolute right-0 top-[300px]">
                <div className="w-3 h-3 bg-white rounded-full translate-x-1/2"></div>
              </div>

            </div>

            {/* SEMBURAN AIR */}

            {/* Atas */}
            <svg
              className="absolute top-[90px] left-full overflow-visible"
              width={panjangAtas}
              height="60"
            >
              <path
                d={`M0 10 Q${panjangAtas / 2} 0 ${panjangAtas} 25`}
                fill="none"
                stroke="#7dd3fc"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            {/* Tengah */}
            <svg
              className="absolute top-[190px] left-full overflow-visible"
              width={panjangTengah}
              height="80"
            >
              <path
                d={`M0 10 Q${panjangTengah / 2} -5 ${panjangTengah} 40`}
                fill="none"
                stroke="#7dd3fc"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            {/* Bawah */}
            <svg
              className="absolute top-[290px] left-full overflow-visible"
              width={panjangBawah}
              height="120"
            >
              <path
                d={`M0 10 Q${panjangBawah / 2} -15 ${panjangBawah} 70`}
                fill="none"
                stroke="#7dd3fc"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

          </div>

        </div>

        {/* Data */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">

          <div className="bg-sky-50 rounded-2xl p-5 text-center">
            <h3 className="text-slate-500">
              Tinggi Air
            </h3>

            <p className="text-3xl font-bold text-sky-600">
              {tinggiAir.toFixed(1)} m
            </p>
          </div>

          <div className="bg-cyan-50 rounded-2xl p-5 text-center">
            <h3 className="text-slate-500">
              Tekanan Hidrostatis
            </h3>

            <p className="text-3xl font-bold text-cyan-600">
              {tekanan.toLocaleString()} Pa
            </p>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-5 text-center">
            <h3 className="text-slate-500">
              Kategori
            </h3>

            <p className="text-3xl font-bold text-indigo-600">
              {tinggiAir < 5
                ? "Rendah"
                : tinggiAir < 12
                ? "Sedang"
                : "Tinggi"}
            </p>
          </div>

        </div>

        {/* Rumus */}
        <div className="mt-8 bg-slate-100 rounded-2xl p-5">

          <h3 className="font-bold mb-3">
            Rumus Tekanan Hidrostatis
          </h3>

          <p className="text-xl mb-3">
            P = ρ × g × h
          </p>

          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>P = tekanan hidrostatis (Pa)</li>
            <li>ρ = massa jenis fluida (1000 kg/m³)</li>
            <li>g = gravitasi (9,8 m/s²)</li>
            <li>h = tinggi kolom air (m)</li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default SimulasiTekananHidrostatis;