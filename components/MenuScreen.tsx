"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { GameMode } from "@/hooks/useGameState";

interface MenuScreenProps {
  onStart: (mode: GameMode) => void;
}

export default function MenuScreen({ onStart }: MenuScreenProps) {
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
        <p className="text-slate-400 text-xs uppercase tracking-widest mb-1 font-semibold">モードを選択</p>

        {(["NFL", "NCAA", "ALL"] as GameMode[]).map((mode) => (
          <motion.button
            key={mode}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onStart(mode)}
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
                {mode === "NFL" ? "🏈 NFLスタジアム" : mode === "NCAA" ? "🎓 カレッジフットボール" : "🌎 ミックス (全部)"}
              </span>
              <ChevronRight size={18} className="opacity-80 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>

      <div className="mt-6 text-center text-slate-400 text-sm max-w-xs leading-relaxed font-medium">
        3問ランダム出題。地図上をクリックしてスタジアムの位置を当ててください。
        距離が近いほど高スコア！(最高 5000点/問)
      </div>
    </motion.div>
  );
}
