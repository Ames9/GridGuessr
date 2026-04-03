/**
 * Haversine formula — calculates great-circle distance between two GPS points.
 * Returns distance in miles.
 */
export function haversineDistance(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Calculate score (0–5000) based on distance in miles.
 * Perfect: 0 mi → 5000 pts
 * Scoring curve: exponential decay
 */
export function calcScore(distanceMiles: number): number {
  if (distanceMiles <= 0) return 5000;
  // Exponential decay: score = 5000 * e^(-distance/500)
  // At 0 mi → 5000, at 500 mi → ~1839, at 1500 mi → ~249
  const score = Math.round(5000 * Math.exp(-distanceMiles / 500));
  return Math.max(0, Math.min(5000, score));
}

/**
 * Return a rank label based on total score (max 15000 for 3 rounds).
 */
export function getRank(totalScore: number): { label: string; emoji: string; color: string } {
  if (totalScore >= 14000) return { label: "Hall of Famer",   emoji: "🌟", color: "#f59e0b" };
  if (totalScore >= 11000) return { label: "Pro Bowler",      emoji: "🏆", color: "#10b981" };
  if (totalScore >= 7500)  return { label: "Starter",         emoji: "🏈", color: "#3b82f6" };
  if (totalScore >= 4000)  return { label: "Depth",           emoji: "📋", color: "#8b5cf6" };
  return                          { label: "Practice Squad",  emoji: "😅", color: "#ef4444" };
}
