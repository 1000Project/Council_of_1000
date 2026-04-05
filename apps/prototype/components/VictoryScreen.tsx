import abilitiesData from "../data/abilities.json"
import type { Ability } from "../systems/draftLogic"
import type { Player } from "../systems/playerState"

type Props = {
  player: Player
}

const allAbilities = abilitiesData as Ability[]

export default function VictoryScreen({ player }: Props) {
  const draftedAbilities = player.abilities
    .map((abilityId) => allAbilities.find((ability) => ability.id === abilityId))
    .filter(Boolean) as Ability[]

  return (
    <div>
      <h2>Victory</h2>

      <p>Your champion has proven worthy.</p>

      <div style={{ marginTop: "24px" }}>
        <h3>Champion Summary</h3>

        <p>
          <strong>Faction:</strong> {player.faction ?? "Unchosen"}
        </p>

        <div>
          <h4>Stats</h4>
          <ul>
            <li>Power: {player.stats.power}</li>
            <li>Vitality: {player.stats.vitality}</li>
            <li>Speed: {player.stats.speed}</li>
            <li>Focus: {player.stats.focus}</li>
            <li>Resilience: {player.stats.resilience}</li>
          </ul>
        </div>

        <div>
          <h4>Abilities</h4>

          {draftedAbilities.length === 0 ? (
            <p>No abilities drafted.</p>
          ) : (
            <ul>
              {draftedAbilities.map((ability) => (
                <li key={ability.id}>
                  <strong>{ability.name}</strong> — {ability.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p>
          <strong>Health:</strong> {player.currentHealth} / {player.maxHealth}
        </p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <p>The Council watches.</p>
      </div>
    </div>
  )
}
