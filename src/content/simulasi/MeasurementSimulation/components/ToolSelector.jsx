import React from "react";
import { TOOLS } from "../utils/measurementChecker";

// ============================================================
// ToolSelector
// Tombol untuk memilih salah satu dari tiga alat ukur.
// ============================================================
export default function ToolSelector({ selectedToolId, onSelectTool }) {
  const toolList = Object.values(TOOLS);

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {toolList.map((tool) => {
        const isActive = tool.id === selectedToolId;
        return (
          <button
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className={`flex-1 min-w-[120px] rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 border
              ${
                isActive
                  ? "border-purple-400 bg-purple-500/15 text-purple-200 shadow-[0_0_16px_rgba(192,132,252,0.35)]"
                  : "border-white/10 bg-zinc-900/60 text-zinc-300 hover:border-blue-400/50 hover:text-blue-200"
              }`}
          >
            <div>{tool.name}</div>
            <div className="text-[11px] font-normal text-zinc-500">
              Ketelitian {tool.precision}
            </div>
          </button>
        );
      })}
    </div>
  );
}
