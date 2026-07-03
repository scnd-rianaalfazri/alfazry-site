import { useState, useMemo } from "react";
import {
  RotateCcw,
  Sigma,
  Info,
} from "lucide-react";

export default function CalculatorAppAngkaPenting() {

  const [input, setInput] = useState("");

  //----------------------------------------------------
  // Menghitung angka penting
  //----------------------------------------------------

  function calculateSignificantFigures(value) {

    if (!value.trim()) {
      return {
        count: 0,
        digits: [],
        steps: [],
        rules: [],
      };
    }

    let text = value.trim();

    // hilangkan tanda +
    if (text.startsWith("+"))
      text = text.substring(1);

    // hilangkan tanda -
    if (text.startsWith("-"))
      text = text.substring(1);

    // notasi ilmiah
    if (/e/i.test(text)) {
      text = text.split(/e/i)[0];
    }

    const hasDecimal = text.includes(".");

    const digits = [];

    for (let i = 0; i < text.length; i++) {

      if (text[i] === ".") continue;

      digits.push({
        char: text[i],
        significant: false,
      });

    }

    const pureDigits = digits.map(d => d.char);

    //--------------------------------------------------
    // Cari digit pertama bukan nol
    //--------------------------------------------------

    let firstNonZero = -1;

    for (let i = 0; i < pureDigits.length; i++) {

      if (pureDigits[i] !== "0") {

        firstNonZero = i;
        break;

      }

    }

    //--------------------------------------------------

    if (firstNonZero === -1) {

      return {
        count: 0,
        digits,
        steps: [
          "Bilangan hanya terdiri dari nol."
        ],
        rules: [
          "Tidak terdapat angka penting."
        ]
      };

    }

    //--------------------------------------------------
    // Kasus ada koma desimal
    //--------------------------------------------------

    if (hasDecimal) {

      for (let i = firstNonZero; i < digits.length; i++) {

        digits[i].significant = true;

      }

    }

    //--------------------------------------------------
    // Tidak ada koma
    //--------------------------------------------------

    else {

      let lastNonZero = -1;

      for (let i = digits.length - 1; i >= 0; i--) {

        if (digits[i].char !== "0") {

          lastNonZero = i;
          break;

        }

      }

      for (let i = firstNonZero; i <= lastNonZero; i++) {

        digits[i].significant = true;

      }

    }

    //--------------------------------------------------

    const count = digits.filter(
      d => d.significant
    ).length;

    //--------------------------------------------------

    const steps = [];

    steps.push(
      `Digit bukan nol pertama berada pada posisi ${firstNonZero + 1}.`
    );

    if (hasDecimal) {

      steps.push(
        "Karena memiliki tanda desimal, semua digit setelah digit pertama yang bukan nol termasuk angka penting."
      );

    }

    else {

      steps.push(
        "Karena tidak memiliki tanda desimal, nol di belakang tidak dihitung sebagai angka penting."
      );

    }

    //--------------------------------------------------

    const rules = [

      "Semua angka bukan nol merupakan angka penting.",

      "Nol di depan angka bukan nol bukan angka penting.",

      hasDecimal
        ? "Nol di belakang setelah tanda desimal termasuk angka penting."
        : "Nol di belakang tanpa tanda desimal bukan angka penting."

    ];

    return {

      count,
      digits,
      steps,
      rules,

    };

  }

  //----------------------------------------------------

  const result = useMemo(() => {

    return calculateSignificantFigures(input);

  }, [input]);

  //----------------------------------------------------

  function resetCalculator() {

    setInput("");

  }

  //----------------------------------------------------

  function renderHighlightedNumber() {

    if (!input) return null;

    let index = 0;

    return (

      <div className="flex flex-wrap text-3xl font-mono">

        {input.split("").map((c, i) => {

          if (c === ".") {

            return (
              <span key={i}>
                .
              </span>
            );

          }

          const digit = result.digits[index++];

          return (

            <span
              key={i}
              className={
                digit.significant
                  ? "text-emerald-400 font-bold"
                  : "text-gray-500"
              }
            >
              {c}
            </span>

          );

        })}

      </div>

    );

  }

  //----------------------------------------------------

  return (

    <div className="max-w-5xl mx-auto p-6">

      <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-700">

        {/* HEADER */}

        <div className="p-6 border-b border-slate-700">

          <div className="flex items-center gap-3">

            <Sigma
              className="text-cyan-400"
              size={34}
            />

            <div>

              <h1 className="text-2xl font-bold text-white">

                Kalkulator Angka Penting

              </h1>

              <p className="text-slate-400">

                Hitung jumlah angka penting beserta penjelasannya.

              </p>

            </div>

          </div>

        </div>

        {/* BODY */}

        <div className="p-6 space-y-6">

          <div>

            <label className="text-slate-300 block mb-2">

              Masukkan Bilangan

            </label>

            <input
              type="text"
              placeholder="Contoh : 0.0045600"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              className="w-full rounded-xl
              bg-slate-800
              border border-slate-700
              text-white
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500"
            />

          </div>

          {/* HASIL */}

          <div className="bg-slate-800 rounded-2xl p-6">

            <div className="text-slate-400 mb-2">

              Jumlah Angka Penting

            </div>

            <div className="text-5xl font-bold text-cyan-400">

              {result.count}

            </div>

          </div>

          {/* Highlight */}

          <div className="bg-slate-800 rounded-2xl p-6">

            <div className="text-slate-400 mb-3">

              Visualisasi Angka Penting

            </div>

            {renderHighlightedNumber()}

          </div>

          {/* Tombol */}

          <div className="flex gap-4">

            <button
              onClick={resetCalculator}
              className="flex items-center gap-2
              bg-slate-700
              hover:bg-slate-600
              px-5
              py-3
              rounded-xl
              text-white"
            >
              <RotateCcw size={18} />

              Reset

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}