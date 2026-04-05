import abilitiesData from "../data/abilities.json"
import type { Player } from "./playerState"
import {
  getEnemyTurnAction,
  shouldReduceEnemyDamage
} from "./tutorialBattle"
import type { Ability } from "./draftLogic"

type BattleState = {
  turn: number
  playerHealth: number
  enemyHealth: number
  result: null | "victory" | "defeat"
}

const allAbilities = abilitiesData as Ability[]

export const getAbilityById = (abilityId: string): Ability | undefined => {
  return allAbilities.find((a) => a.id === abilityId)
}

export const applyPlayerAbility = (
  player: Player,
  battle: BattleState,
  abilityId: string
): BattleState => {

  const ability = getAbilityById(abilityId)

  if (!ability) return battle

  let enemyHealth = battle.enemyHealth
  let playerHealth = battle.playerHealth

  if (ability.power) {

    const statBonus = Math.floor(player.stats.power / 2)

    enemyHealth -= ability.power + statBonus

  }

  if (ability.heal) {

    playerHealth += ability.heal

    if (playerHealth > player.maxHealth) {
      playerHealth = player.maxHealth
    }

  }

  enemyHealth = Math.max(0, enemyHealth)

  return {
    ...battle,
    enemyHealth,
    playerHealth
  }
}

export const applyEnemyTurn = (
  battle: BattleState
): BattleState => {

  const enemyAction = getEnemyTurnAction(battle.turn)

  if (!enemyAction) return battle

  let damage = enemyAction.damage

  if (shouldReduceEnemyDamage(battle.playerHealth)) {

    damage = Math.max(1, Math.floor(damage / 2))

  }

  const playerHealth = Math.max(0, battle.playerHealth - damage)

  return {
    ...battle,
    playerHealth
  }
}

export const advanceTurn = (
  battle: BattleState
): BattleState => {

  return {
    ...battle,
    turn: battle.turn + 1
  }
}

export const checkVictory = (
  battle: BattleState
): BattleState => {

  if (battle.enemyHealth <= 0) {

    return {
      ...battle,
      result:"victory"
    }

  }

  if (battle.playerHealth <= 0) {

    return {
      ...battle,
      result:"defeat"
    }

  }

  return battle
}
