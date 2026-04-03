"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Trophy, ChevronRight } from "lucide-react";
import { RoundResult } from "@/hooks/useGameState";

// -------- CountUp animation (also exported if needed) --------
export interface CountUpProps {
  target: number;
  className?: string;
  suffix?: string;
  duration?: number;
  style?: React.CSSProperties;
}

export function CountUp({ target, className, suffix = "", duration = 1000, style }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span className={className} style={style}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

// -------- ScoreDisplay (ResultCard in one round) --------
interface ScoreDisplayProps {
  result: RoundResult;
  onNext: () => void;
  isLast: boolean;
}

export default function ScoreDisplay({ result, onNext, isLast }: ScoreDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-lg space-y-4"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
        <MapPin size={18} className="text-red-500" />
        <span className="text-slate-800 font-black text-sm">{result.stadium.name}</span>
      </div>

      <div className="flex justify-between items-center py-2">
        <div className="text-center flex-1">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">距離</p>
          <CountUp
            target={result.distanceMiles}
            className="text-3xl font-black text-slate-800"
            suffix=" mi"
            duration={1200}
          />
        </div>
        <div className="h-12 w-px bg-slate-200" />
        <div className="text-center flex-1">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">獲得スコア</p>
          <CountUp
            target={result.score}
            className="text-3xl font-black text-blue-600"
            suffix=" pts"
            duration={1500}
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold flex items-center justify-center gap-2 mt-2 shadow-md shadow-slate-300"
      >
        {isLast ? (
          <>
            <Trophy size={18} className="text-yellow-400" />
            結果を見る
          </>
        ) : (
          <>
            次の問題へ
            <ChevronRight size={18} />
          </>
        )}
      </motion.button>
    </motion.div>
  );
}
