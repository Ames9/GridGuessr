"use client";

import { useState, useCallback } from "react";
import { Stadium, StadiumType, NFL_STADIUMS, NCAA_STADIUMS, ALL_STADIUMS } from "@/lib/locations";
import { haversineDistance, calcScore } from "@/lib/geoUtils";

export type GameMode = "NFL" | "NCAA" | "ALL";
export type GamePhase = "menu" | "playing" | "result" | "finished";
export type DifficultyMode = "rookie" | "pro" | "all-pro";

export interface LatLng {
  lat: number;
  lng: number;
}

export interface RoundResult {
  stadium: Stadium;
  userPin: LatLng;
  distanceMiles: number;
  score: number;
}

export interface GameState {
  mode: GameMode;
  difficulty: DifficultyMode;
  phase: GamePhase;
  round: number;       // 0-indexed
  totalRounds: number;
  questions: Stadium[];
  currentPin: LatLng | null;
  results: RoundResult[];
}

const TOTAL_ROUNDS = 3;

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function getPool(mode: GameMode): Stadium[] {
  if (mode === "NFL") return NFL_STADIUMS;
  if (mode === "NCAA") return NCAA_STADIUMS;
  return ALL_STADIUMS;
}

export function useGameState() {
  const [state, setState] = useState<GameState>({
    mode: "ALL",
    difficulty: "pro",
    phase: "menu",
    round: 0,
    totalRounds: TOTAL_ROUNDS,
    questions: [],
    currentPin: null,
    results: [],
  });

  const startGame = useCallback((mode: GameMode, difficulty: DifficultyMode = "pro") => {
    const pool = getPool(mode);
    const questions = pickRandom(pool, TOTAL_ROUNDS).map(q => ({
      ...q,
      name: `${q.name} (${q.team})`
    }));
    setState({
      mode,
      difficulty,
      phase: "playing",
      round: 0,
      totalRounds: TOTAL_ROUNDS,
      questions,
      currentPin: null,
      results: [],
    });
  }, []);

  const placePin = useCallback((lat: number, lng: number) => {
    setState((s) => ({ ...s, currentPin: { lat, lng } }));
  }, []);

  const confirmAnswer = useCallback(() => {
    setState((s) => {
      if (!s.currentPin) return s;
      const stadium = s.questions[s.round];
      const dist = haversineDistance(
        s.currentPin.lat, s.currentPin.lng,
        stadium.lat, stadium.lng
      );
      const score = calcScore(dist);
      const result: RoundResult = {
        stadium,
        userPin: s.currentPin,
        distanceMiles: Math.round(dist),
        score,
      };
      return { ...s, phase: "result", results: [...s.results, result] };
    });
  }, []);

  const nextRound = useCallback(() => {
    setState((s) => {
      const nextRound = s.round + 1;
      if (nextRound >= s.totalRounds) {
        return { ...s, phase: "finished" };
      }
      return { ...s, phase: "playing", round: nextRound, currentPin: null };
    });
  }, []);

  const restart = useCallback(() => {
    setState((s) => ({
      ...s,
      phase: "menu",
      round: 0,
      questions: [],
      currentPin: null,
      results: [],
    }));
  }, []);

  const totalScore = state.results.reduce((acc, r) => acc + r.score, 0);
  const currentQuestion = state.questions[state.round] ?? null;
  const currentResult = state.phase === "result" ? state.results[state.results.length - 1] : null;

  return {
    state,
    totalScore,
    currentQuestion,
    currentResult,
    startGame,
    placePin,
    confirmAnswer,
    nextRound,
    restart,
  };
}
