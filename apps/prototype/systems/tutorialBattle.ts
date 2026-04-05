import tutorialEnemyData from "../data/tutorial_enemy.json"

export type TutorialEnemyAction = {
  turn: number
  action: string
  damage: number
  description: string
}

export type TutorialEnemy = {
  name: string
  faction: string
  description: string
  health: number
  difficulty: string
}

export type TutorialBattleData = {
  enemy: TutorialEnemy
  behavior: {
    type: string
    goal: string
    ai: boolean
  }
  turnScript: TutorialEnemyAction[]
  safetyRules: {
    preventPlayerLoss: boolean
    minimumPlayerHealth: number
    reduceDamageIfLowHealth: boolean
  }
  prototypeNotes: string[]
}

const battleData = tutorialEnemyData as TutorialBattleData

export const getTutorialBattleData = (): TutorialBattleData => {
  return battleData
}

export const getTutorialEnemy = (): TutorialEnemy => {
  return battleData.enemy
}

export const getEnemyTurnAction = (
  turn: number
): TutorialEnemyAction | undefined => {
  return battleData.turnScript.find((step) => step.turn === turn)
}

export const getInitialBattleState = () => {
  return {
    turn: 1,
    playerHealth: 40,
    enemyHealth: battleData.enemy.health,
    result: null as null | "victory" | "defeat"
  }
}

export const shouldReduceEnemyDamage = (playerHealth: number): boolean => {
  return (
    battleData.safetyRules.reduceDamageIfLowHealth &&
    playerHealth <= battleData.safetyRules.minimumPlayerHealth
  )
}
