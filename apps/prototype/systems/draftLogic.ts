export type Ability = {
  id: string
  name: string
  description: string
  type: string
  power?: number
  heal?: number
  shield?: number
  buff?: number
}

export const shuffleAbilities = (abilities: Ability[]): Ability[] => {
  const shuffled = [...abilities]

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }

  return shuffled
}

export const getAvailableAbilities = (
  allAbilities: Ability[],
  chosenAbilityIds: string[]
): Ability[] => {
  return allAbilities.filter((ability) => !chosenAbilityIds.includes(ability.id))
}

export const getDraftOptions = (
  allAbilities: Ability[],
  chosenAbilityIds: string[],
  optionCount: number = 3
): Ability[] => {
  const availableAbilities = getAvailableAbilities(allAbilities, chosenAbilityIds)
  const shuffled = shuffleAbilities(availableAbilities)

  return shuffled.slice(0, optionCount)
}

export const canDraftContinue = (
  allAbilities: Ability[],
  chosenAbilityIds: string[],
  optionCount: number = 3
): boolean => {
  const availableAbilities = getAvailableAbilities(allAbilities, chosenAbilityIds)
  return availableAbilities.length >= optionCount
}
