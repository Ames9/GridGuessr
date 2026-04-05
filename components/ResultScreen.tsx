"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { RoundResult, DifficultyMode } from "@/hooks/useGameState";
import { getRank } from "@/lib/geoUtils";
import { CountUp } from "@/components/ScoreDisplay";

interface ResultScreenProps {
  results: RoundResult[];
  totalScore: number;
  onRestart: () => void;
  difficulty: DifficultyMode;
}

export default function ResultScreen({ results, totalScore, onRestart, difficulty }: ResultScreenProps) {
  // Rookie mode: cap at Pro Bowler (Hall of Famer requires 14000+)
  const rankScore = difficulty === "rookie" ? Math.min(totalScore, 13999) : totalScore;
  const rank = getRank(rankScore);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="text-7xl"
        >
          {rank.emoji}
        </motion.div>
        
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">{rank.label}</h2>
          <CountUp
            target={totalScore}
            className="text-5xl font-black mt-2 inline-block"
            suffix=" pts"
            duration={2000}
            style={{ color: rank.color }}
          />
        </div>
      </div>

      {/* Per-round breakdown */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3 px-2">Round Breakdown</h3>
        <div className="space-y-2">
          {results.map((r, i) => (
            <div key={i} className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3 text-sm border border-slate-100">
              <div className="flex-1 min-w-0">
                <p className="text-slate-800 font-bold truncate">{r.stadium.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{r.distanceMiles} miles off</p>
              </div>
              <span className="text-blue-600 font-bold text-lg ml-3">{r.score.toLocaleString()} pts</span>
            </div>
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onRestart}
        className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-300 hover:bg-slate-900 transition-colors"
      >
        <RotateCcw size={18} />
        Play Again
      </motion.button>
    </motion.div>
  );
}
