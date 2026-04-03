"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONFERENCE_COLORS, StadiumType } from "@/lib/locations";
import { IMAGE_CREDITS } from "@/lib/imageCredits";

interface GameHeaderProps {
  id: number;
  name: string;
  type: StadiumType;
  round: number;
  totalRounds: number;
  totalScore: number;
}

export default function GameHeader({ id, name, type, round, totalRounds, totalScore }: GameHeaderProps) {
  const color = CONFERENCE_COLORS[type];
  const [imageError, setImageError] = useState(false);
  
  const credit = IMAGE_CREDITS[id];

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
    >
      <div className="flex items-center justify-between px-2">
        <span className="text-slate-400 text-xs tracking-widest uppercase font-bold">
          Round {round + 1} / {totalRounds}
        </span>
        <span className="text-slate-400 text-xs font-bold">
          Score: <span className="text-slate-800 text-sm ml-1">{totalScore.toLocaleString()}</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden mx-2">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: `${(round / totalRounds) * 100}%` }}
          animate={{ width: `${((round + 1) / totalRounds) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="py-1">
        <span
          className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-1 border"
          style={{ 
            backgroundColor: color + "15", 
            color: color,
            borderColor: color + "30"
          }}
        >
          {type}
        </span>
        <h2 className="text-2xl font-black text-slate-800">{name}</h2>
      </div>

      {/* Optional Stadium Image */}
      {!imageError && (
        <div className="mt-3 mx-2 rounded-xl overflow-hidden h-32 md:h-48 relative border border-slate-100 shadow-sm bg-slate-50 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/stadiums/${id}.jpg`}
            alt={name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {credit && (
            <div className="absolute bottom-0 right-0 max-w-full">
              <div className="bg-black/60 backdrop-blur-sm text-white/90 text-[10px] px-2 py-1 rounded-tl-lg m-0 text-right truncate">
                {credit.link ? (
                  <a 
                    href={credit.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 hover:underline transition-colors"
                  >
                    {credit.text}
                  </a>
                ) : (
                  <span>{credit.text}</span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
