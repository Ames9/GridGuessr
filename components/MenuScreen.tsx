"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { GameMode, DifficultyMode } from "@/hooks/useGameState";

interface MenuScreenProps {
  onStart: (mode: GameMode, difficulty: DifficultyMode) => void;
}

const DIFFICULTIES: { value: DifficultyMode; label: string; desc: string }[] = [
  { value: "rookie",  label: "Rookie",  desc: "State labels shown" },
  { value: "pro",     label: "Pro",     desc: "Standard" },
  { value: "all-pro", label: "All-Pro", desc: "(under construction)" },
];

export default function MenuScreen({ onStart }: MenuScreenProps) {
  const [difficulty, setDifficulty] = useState<DifficultyMode>("pro");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="flex flex-col items-center gap-8 py-10"
    >
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight text-slate-800 mb-2">
          GridGuesser
        </h1>
        <p className="text-slate-500 text-sm tracking-wider uppercase font-semibold">NFL & College Football Stadium Geography</p>
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-sm mt-4">
        {/* Difficulty selector */}
        <div className="w-full">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-2 font-semibold text-center">Difficulty</p>
          <div className="flex rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            {DIFFICULTIES.map((d) => (
              <button
                key={d.value}
                onClick={() => setDifficulty(d.value)}
                className={`flex-1 py-2.5 px-2 text-sm font-bold transition-all ${
                  difficulty === d.value
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                <div>{d.label}</div>
                <div className={`text-[10px] font-normal mt-0.5 ${difficulty === d.value ? "text-slate-300" : "text-slate-400"}`}>
                  {d.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        <p className="text-slate-400 text-xs uppercase tracking-widest mb-1 font-semibold">Select Mode</p>

        {(["NFL", "NCAA", "ALL"] as GameMode[]).map((mode) => (
          <motion.button
            key={mode}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onStart(mode, difficulty)}
            className="w-full py-4 px-6 rounded-2xl font-bold text-white text-lg relative overflow-hidden group shadow-lg shadow-slate-200"
            style={{
              background:
                mode === "NFL"
                  ? "linear-gradient(135deg, #2563eb, #60a5fa)"
                  : mode === "NCAA"
                  ? "linear-gradient(135deg, #7c3aed, #a855f7)"
                  : "linear-gradient(135deg, #0f766e, #14b8a6)",
            }}
          >
            <span className="relative z-10 flex items-center justify-between">
              <span>
                {mode === "NFL" ? "🏈 NFL Stadiums" : mode === "NCAA" ? "🎓 College Football Stadiums" : "🌎 Mixed"}
              </span>
              <ChevronRight size={18} className="opacity-80 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>

      <div className="mt-6 text-center text-slate-400 text-sm max-w-xs leading-relaxed font-medium">
        3 random locations. Click the map to guess the stadium's location.
        The closer you are, the higher your score! (Max 5,000 pts/round)
      </div>

      <div className="w-full max-w-sm rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-xs text-slate-500 space-y-1">
        <p className="font-bold text-blue-500 tracking-wide">📢 2026/4/6 Update</p>
        <ul className="list-disc list-inside space-y-0.5 leading-relaxed">
          <li>Added <span className="font-semibold">Rookie</span> mode — state labels on the map</li>
          <li>Added <span className="font-semibold">All-Pro</span> mode (coming soon)</li>
          <li>Map zoom increased to <span className="font-semibold">32x</span></li>
        </ul>
        <p className="text-slate-400 pt-1">
          Thanks to the suggestion by <span className="font-semibold text-slate-500">MC79</span>{" "}
          (<a href="https://twitter.com/_mc79" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@_mc79</a>)!
        </p>
      </div>
    </motion.div>
  );
}
