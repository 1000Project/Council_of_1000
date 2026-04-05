import { useMemo, useState } from "react"
import abilitiesData from "../data/abilities.json"
import {
  getDraftOptions,
  type Ability
} from "../systems/draftLogic"

type Props = {
  onConfirm: (abilityIds: string[]) => void
}

const TOTAL_ROUNDS = 3

export default function AbilityDraft({ onConfirm }: Props) {
  const allAbilities = abilitiesData as Ability[]

  const [chosenAbilityIds, setChosenAbilityIds] = useState<string[]>([])
  const [round, setRound] = useState<number>(1)

  const currentOptions = useMemo(() => {
    return getDraftOptions(allAbilities, chosenAbilityIds, 3)
  }, [allAbilities, chosenAbilityIds, round])

  const handleChoose = (abilityId: string) => {
    const updatedChosen = [...chosenAbilityIds, abilityId]

    if (round >= TOTAL_ROUNDS) {
      onConfirm(updatedChosen)
      return
    }

    setChosenAbilityIds(updatedChosen)
    setRound(round + 1)
  }

  return (
    <div>
      <h2>Draft Your Abilities</h2>

      <p>
        Round {round} of {TOTAL_ROUNDS}
      </p>

      <p>Choose one ability. Your decision is permanent.</p>

      <div>
        {currentOptions.map((ability) => {
          return (
            <div key={ability.id} style={{ marginBottom: "16px" }}>
              <h3>{ability.name}</h3>
              <p>{ability.description}</p>
              <p>
                <strong>Type:</strong> {ability.type}
              </p>

              <button onClick={() => handleChoose(ability.id)}>
                Choose {ability.name}
              </button>
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>Chosen Abilities</h3>

        {chosenAbilityIds.length === 0 && <p>No abilities chosen yet.</p>}

        {chosenAbilityIds.length > 0 && (
          <ul>
            {chosenAbilityIds.map((abilityId) => (
              <li key={abilityId}>{abilityId}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
