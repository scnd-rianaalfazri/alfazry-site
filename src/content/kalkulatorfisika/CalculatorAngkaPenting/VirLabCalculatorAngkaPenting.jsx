import { useMemo, useState } from "react";
import { RotateCcw, Sigma } from "lucide-react";

function analyzeSignificantFigures(input) {
  let raw = input.trim();
  if (!raw) return {count:0,display:[],steps:[],rules:[]};

  raw = raw.replace(/^[+-]/,"");
  if (/e/i.test(raw)) raw = raw.split(/e/i)[0];

  const hasDecimal = raw.includes(".");
  const decimalExplicit = /\.$/.test(raw);

  const chars=[];
  for (const c of raw){
    if(c!==".") chars.push({char:c,sig:false});
  }
  const digits=chars.map(x=>x.char);

  let first=-1;
  for(let i=0;i<digits.length;i++){
    if(digits[i]!="0"){first=i;break;}
  }
  if(first===-1){
    return {count:0,display:chars,steps:["Bilangan hanya terdiri dari nol."],
    rules:["Tidak ada angka penting."]};
  }

  if(hasDecimal||decimalExplicit){
    for(let i=first;i<chars.length;i++) chars[i].sig=true;
  }else{
    let last=-1;
    for(let i=chars.length-1;i>=0;i--){
      if(chars[i].char!="0"){last=i;break;}
    }
    for(let i=first;i<=last;i++) chars[i].sig=true;
  }

  return {
    count:chars.filter(x=>x.sig).length,
    display:chars,
    steps:[
      "Abaikan semua nol di depan.",
      hasDecimal||decimalExplicit
      ?"Karena memiliki tanda desimal, semua digit mulai dari digit bukan nol pertama adalah angka penting."
      :"Karena tidak memiliki tanda desimal, nol di belakang tidak dihitung sebagai angka penting."
    ],
    rules:[
      "Semua angka bukan nol adalah angka penting.",
      "Nol di depan bukan angka penting.",
      "Nol di antara dua angka bukan nol adalah angka penting.",
      hasDecimal||decimalExplicit
      ?"Nol di belakang setelah tanda desimal adalah angka penting."
      :"Nol di belakang tanpa tanda desimal bukan angka penting."
    ]
  };
}

export default function VirLabKalkulatorAngkaPenting(){
  const [value,setValue]=useState("");
  const result=useMemo(()=>analyzeSignificantFigures(value),[value]);

  let idx=0;
  return(
    <div className="max-w-4xl mx-auto p-6">
      <div className="rounded-3xl bg-slate-900 border border-slate-700 shadow-xl">
        <div className="p-6 border-b border-slate-700 flex items-center gap-3">
          <Sigma className="text-cyan-400"/>
          <div>
            <h1 className="text-2xl font-bold text-white">Kalkulator Angka Penting</h1>
            <p className="text-slate-400">Hitung jumlah angka penting beserta penjelasannya.</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <input
            className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-white"
            placeholder="Contoh: 0.0045600"
            value={value}
            onChange={e=>setValue(e.target.value)}
          />

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-slate-400">Jumlah Angka Penting</p>
            <h2 className="text-5xl font-bold text-cyan-400">{result.count}</h2>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="mb-3 text-slate-400">Visualisasi</p>
            <div className="text-3xl font-mono">
              {value.split("").map((c,i)=>{
                if(c===".") return <span key={i}>.</span>;
                const d=result.display[idx++];
                return <span key={i} className={d?.sig?"text-emerald-400 font-bold":"text-slate-500"}>{c}</span>;
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-slate-800 p-5">
              <h3 className="font-semibold text-white mb-3">Langkah</h3>
              <ol className="list-decimal ml-5 text-slate-300 space-y-2">
                {result.steps.map((s,i)=><li key={i}>{s}</li>)}
              </ol>
            </div>

            <div className="rounded-2xl bg-slate-800 p-5">
              <h3 className="font-semibold text-white mb-3">Aturan</h3>
              <ul className="list-disc ml-5 text-slate-300 space-y-2">
                {result.rules.map((r,i)=><li key={i}>{r}</li>)}
              </ul>
            </div>
          </div>

          <button
            onClick={()=>setValue("")}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-700 hover:bg-slate-600 px-5 py-3 text-white">
            <RotateCcw size={18}/> Reset
          </button>
        </div>
      </div>
    </div>
  );
}
