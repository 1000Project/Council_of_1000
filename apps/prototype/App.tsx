import { useState } from "react"
import LandingScreen from "./components/LandingScreen"
import FactionSelection from "./components/FactionSelection"
import ChampionBuilder from "./components/ChampionBuilder"
import AbilityDraft from "./components/AbilityDraft"
import BattleArena from "./components/BattleArena"
import VictoryScreen from "./components/VictoryScreen"
import {
  createNewPlayer,
  setFaction,
  setStats,
  addAbility,
  type Player,
  type PlayerStats
} from "./systems/playerState"

type Screen =
  | "landing"
  | "faction"
  | "builder"
  | "draft"
  | "battle"
  | "victory"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing")
  const [player, setPlayer] = useState<Player>(createNewPlayer())

  const goToFaction = () => {
    setCurrentScreen("faction")
  }

  const goToBuilder = () => {
    setCurrentScreen("builder")
  }

  const goToDraft = () => {
    setCurrentScreen("draft")
  }

  const goToBattle = () => {
    setCurrentScreen("battle")
  }

  const goToVictory = () => {
    setCurrentScreen("victory")
  }

  return (
    <main>
      {currentScreen === "landing" && (

  <LandingScreen onEnter={goToFaction} />

)}

      {currentScreen === "faction" && (

  <FactionSelection
    onConfirm={(factionId)=>{

      const updatedPlayer = setFaction(player,factionId)

      setPlayer(updatedPlayer)

      goToBuilder()

    }}
  />

)}
{currentScreen === "builder" && (
  <ChampionBuilder
    onConfirm={(stats: PlayerStats) => {
      const updatedPlayer = setStats(player, stats)

      setPlayer(updatedPlayer)
      goToDraft()
    }}
  />
)}

      {currentScreen === "draft" && (
  <AbilityDraft
    onConfirm={(abilityIds: string[]) => {
      let updatedPlayer = player

      abilityIds.forEach((abilityId) => {
        updatedPlayer = addAbility(updatedPlayer, abilityId)
      })

      setPlayer(updatedPlayer)
      goToBattle()
    }}
  />
)}}

      {currentScreen === "battle" && (
  <BattleArena
    player={player}
    onVictory={() => {
      goToVictory()
    }}
  />
)}

      {currentScreen === "victory" && (
  <VictoryScreen player={player} />
)}
    </main>
  )
}
