import { useMemo, useState } from "react"
import type { Player } from "../systems/playerState"
import type { Ability } from "../systems/draftLogic"
import { getTutorialEnemy } from "../systems/tutorialBattle"
import {
  applyEnemyTurn,
  applyPlayerAbility,
  advanceTurn,
  checkVictory,
  getAbilityById
} from "../systems/combatLogic"

type BattleState = {
  turn: number
  playerHealth: number
  enemyHealth: number
  result: null | "victory" | "defeat"
}

type Props = {
  player: Player
  onVictory: () => void
}

export default function BattleArena({ player, onVictory }: Props) {
  const enemy = getTutorialEnemy()

  const [battle, setBattle] = useState<BattleState>({
    turn: 1,
    playerHealth: player.currentHealth,
    enemyHealth: enemy.health,
    result: null
  })

  const [combatLog, setCombatLog] = useState<string[]>([
    `${enemy.name} enters the arena.`
  ])

  const playerAbilities = useMemo(() => {
    return player.abilities
      .map((abilityId) => getAbilityById(abilityId))
      .filter(Boolean) as Ability[]
  }, [player.abilities])

  const handleAbilityClick = (abilityId: string) => {
    if (battle.result) return

    const ability = getAbilityById(abilityId)
    if (!ability) return

    let updatedBattle = applyPlayerAbility(player, battle, abilityId)

    const playerLog = buildPlayerActionLog(ability)
    const newLog: string[] = [playerLog]

    updatedBattle = checkVictory(updatedBattle)

    if (updatedBattle.result === "victory") {
      setBattle(updatedBattle)
      setCombatLog((prev) => [...prev, ...newLog, "Victory achieved."])
      onVictory()
      return
    }

    updatedBattle = applyEnemyTurn(updatedBattle)

    const enemyLog = buildEnemyActionLog(enemy.name, battle.playerHealth, updatedBattle.playerHealth)
    newLog.push(enemyLog)

    updatedBattle = checkVictory(updatedBattle)

    if (!updatedBattle.result) {
      updatedBattle = advanceTurn(updatedBattle)
    }

    setBattle(updatedBattle)
    setCombatLog((prev) => [...prev, ...newLog])

    if (updatedBattle.result === "victory") {
      onVictory()
    }
  }

  return (
    <div>
      <h2>Tutorial Battle</h2>

      <p>Turn {battle.turn}</p>

      <div style={{ marginBottom: "24px" }}>
        <h3>Your Champion</h3>
        <p>
          Health: {battle.playerHealth} / {player.maxHealth}
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h3>{enemy.name}</h3>
        <p>
          Health: {battle.enemyHealth} / {enemy.health}
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h3>Abilities</h3>

        {playerAbilities.map((ability) => (
          <div key={ability.id} style={{ marginBottom: "12px" }}>
            <strong>{ability.name}</strong>
            <p>{ability.description}</p>
            <button
              onClick={() => handleAbilityClick(ability.id)}
              disabled={battle.result !== null}
            >
              Use {ability.name}
            </button>
          </div>
        ))}
      </div>

      <div>
        <h3>Combat Log</h3>
        <ul>
          {combatLog.map((entry, index) => (
            <li key={`${entry}-${index}`}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function buildPlayerActionLog(ability: Ability): string {
  if (ability.power) {
    return `${ability.name} hits the enemy.`
  }

  if (ability.heal) {
    return `${ability.name} restores health.`
  }

  if (ability.shield) {
    return `${ability.name} strengthens your defense.`
  }

  if (ability.buff) {
    return `${ability.name} empowers your next action.`
  }

  return `${ability.name} is used.`
}

function buildEnemyActionLog(
  enemyName: string,
  previousHealth: number,
  currentHealth: number
): string {
  const damageTaken = previousHealth - currentHealth

  if (damageTaken <= 0) {
    return `${enemyName} fails to deal damage.`
  }

  return `${enemyName} deals ${damageTaken} damage.`
  }
