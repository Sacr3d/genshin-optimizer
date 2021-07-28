import { BonusStats } from "../Types/stats"

export function mergeStats(initialStats: BonusStats, stats: BonusStats | undefined) {
  if (!stats) return
  return Object.entries(stats).forEach(([key, val]: any) => {
    if (key === "modifiers") {
      initialStats.modifiers = initialStats.modifiers ?? {}
      for (const [statKey, modifier] of (Object.entries(val) as any)) {
        initialStats.modifiers[statKey] = initialStats.modifiers[statKey] ?? {}
        for (const [mkey, multiplier] of (Object.entries(modifier) as any))
          initialStats.modifiers[statKey][mkey] = (initialStats.modifiers[statKey][mkey] ?? 0) + multiplier
      }
    } else {
      if (initialStats[key] === undefined) initialStats[key] = val
      else if (typeof initialStats[key] === "number") initialStats[key] += val
    }
  })
}