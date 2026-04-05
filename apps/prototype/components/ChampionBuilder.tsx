import { useMemo, useState } from "react"
import statsData from "../data/stats.json"
import type { PlayerStats } from "../systems/playerState"

type StatDefinition = {
  id: string
  name: string
  description: string
  min: number
  max: number
  prototypeWeight: string
}

type ChampionRules = {
  startingPoints: number
  minimumPerStat: number
  maximumPerStat: number
  allocationRules: string[]
}

type StatsFile = {
  stats: StatDefinition[]
  championRules: ChampionRules
  prototypeNotes: string[]
}

type Props = {
  onConfirm: (stats: PlayerStats) => void
}

const typedStatsData = statsData as StatsFile

export default function ChampionBuilder({ onConfirm }: Props) {
  const statList = typedStatsData.stats
  const rules = typedStatsData.championRules

  const initialStats = useMemo(() => {
    const base: Record<string, number> = {}

    statList.forEach((stat) => {
      base[stat.id] = rules.minimumPerStat
    })

    return base as PlayerStats
  }, [statList, rules.minimumPerStat])

  const [stats, setStats] = useState<PlayerStats>(initialStats)

  const usedPoints = Object.values(stats).reduce((sum, value) => sum + value, 0)
  const remainingPoints = rules.startingPoints - usedPoints

  const increaseStat = (statId: keyof PlayerStats) => {
    if (remainingPoints <= 0) return
    if (stats[statId] >= rules.maximumPerStat) return

    setStats({
      ...stats,
      [statId]: stats[statId] + 1
    })
  }

  const decreaseStat = (statId: keyof PlayerStats) => {
    if (stats[statId] <= rules.minimumPerStat) return

    setStats({
      ...stats,
      [statId]: stats[statId] - 1
    })
  }

  const canConfirm = remainingPoints === 0

  return (
    <div>
      <h2>Build Your Champion</h2>

      <p>Spend all points to complete your champion.</p>

      <p>
        <strong>Points Remaining:</strong> {remainingPoints}
      </p>

      <div>
        {statList.map((stat) => {
          const statId = stat.id as keyof PlayerStats
          const currentValue = stats[statId]

          return (
            <div key={stat.id}>
              <h3>{stat.name}</h3>
              <p>{stat.description}</p>

              <div>
                <button onClick={() => decreaseStat(statId)}>-</button>
                <span style={{ margin: "0 12px" }}>{currentValue}</span>
                <button onClick={() => increaseStat(statId)}>+</button>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: "24px" }}>
        <p>Your champion creation is permanent.</p>

        <button disabled={!canConfirm} onClick={() => onConfirm(stats)}>
          Confirm Champion Build
        </button>
      </div>
    </div>
  )
}
