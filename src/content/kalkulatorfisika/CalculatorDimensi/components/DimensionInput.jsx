// components/DimensionInput.jsx
//
// Komponen input teks generik dengan gaya neon/glassmorphism, dipakai ulang
// baik untuk kotak pencarian besaran (Fitur 1) maupun kotak input rumus
// (Fitur 2-5). Bersifat "controlled input" sepenuhnya lewat props.

import React from "react";

/**
 * @param {{
 *   id: string,
 *   label: string,
 *   value: string,
 *   onChange: (value: string) => void,
 *   onSubmit?: () => void,
 *   placeholder?: string,
 *   helperText?: string,
 *   autoFocus?: boolean,
 * }} props
 */
export default function DimensionInput({
  id,
  label,
  value,
  onChange,
  onSubmit,
  placeholder,
  helperText,
  autoFocus = false,
}) {
  /** Menangani submit form (baik lewat tombol maupun tombol Enter). */
  function handleSubmit(event) {
    event.preventDefault();
    if (onSubmit) onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-xl border border-[#00E5FF]/25 bg-[#0F172A]/80 px-4 py-3 pr-10 font-mono text-base text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#00E5FF] focus:shadow-[0_0_18px_rgba(0,229,255,0.35)]"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Hapus input"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-[#00E5FF]"
          >
            ✕
          </button>
        )}
      </div>

      {helperText && (
        <p className="mt-1.5 text-xs text-slate-500">{helperText}</p>
      )}
    </form>
  );
}
