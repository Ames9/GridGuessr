"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useGameState } from "@/hooks/useGameState";
import MenuScreen from "@/components/MenuScreen";
import GameHeader from "@/components/GameHeader";
import ScoreDisplay from "@/components/ScoreDisplay";
import ResultScreen from "@/components/ResultScreen";
import GridMap from "@/components/GridMap";
import { MapPin } from "lucide-react";

export default function Home() {
  const {
    state,
    totalScore,
    currentQuestion,
    currentResult,
    startGame,
    placePin,
    confirmAnswer,
    nextRound,
    restart,
  } = useGameState();

  const isPlaying = state.phase === "playing";
  const isResult = state.phase === "result";
  const isFinished = state.phase === "finished";
  const isMenu = state.phase === "menu";
  const isLast = state.round === state.totalRounds - 1;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Background blobs (subtle) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 py-6 flex flex-col gap-4 flex-1">
        {/* Top bar */}
        <div className="flex items-center justify-between px-2">
          <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            GridGuesser
          </span>
          {!isMenu && (
            <button
              onClick={restart}
              className="text-slate-400 hover:text-slate-600 text-sm font-bold transition-colors flex items-center gap-1"
            >
              ✕ メニュー
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {/* MENU */}
          {isMenu && (
            <motion.div key="menu">
              <MenuScreen onStart={startGame} />
            </motion.div>
          )}

          {/* GAME */}
          {(isPlaying || isResult) && currentQuestion && (
            <motion.div
              key={`game-${state.round}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-4"
            >
              <GameHeader
                id={currentQuestion.id}
                name={currentQuestion.name}
                type={currentQuestion.type}
                round={state.round}
                totalRounds={state.totalRounds}
                totalScore={totalScore}
              />

              {/* Map */}
              <GridMap
                onPinPlace={placePin}
                currentPin={state.currentPin}
                result={currentResult}
                interactive={isPlaying}
              />

              {/* Confirm button or Result card */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={confirmAnswer}
                    disabled={!state.currentPin}
                    className="
                      px-8 py-3 rounded-xl font-bold text-white
                      bg-gradient-to-r from-blue-600 to-blue-500
                      disabled:opacity-30 disabled:cursor-not-allowed
                      hover:from-blue-500 hover:to-blue-400
                      transition-all shadow-lg shadow-blue-900/30
                      flex items-center gap-2
                    "
                  >
                    <MapPin size={16} />
                    ここに確定！
                  </button>
                </motion.div>
              )}

              {isResult && currentResult && (
                <ScoreDisplay
                  result={currentResult}
                  onNext={nextRound}
                  isLast={isLast}
                />
              )}
            </motion.div>
          )}

          {/* FINISHED */}
          {isFinished && (
            <motion.div
              key="finished"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
                  <ResultScreen
                    results={state.results}
                    totalScore={totalScore}
                    onRestart={restart}
                  />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center text-slate-400 pb-6 pt-4 text-[10px] font-medium space-y-1">
        <p>GridGuesser — NFL & College Football Stadium Geography Quiz</p>
        <p>2026-04-04 ver 1.0 | <a href="https://ames-nfl.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">ames-nfl.com</a></p>
      </footer>
    </div>
  );
}
