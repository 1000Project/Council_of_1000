import { useState } from "react"
import { createNewPlayer, type Player } from "./systems/playerState"

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
        <section>
          <h1>Council of 1000</h1>
          <p>From a thousand champions, only the worthy ascend.</p>
          <button onClick={goToFaction}>Enter the Realm</button>
        </section>
      )}

      {currentScreen === "faction" && (
        <section>
          <h2>Faction Selection</h2>
          <p>Faction screen placeholder</p>
          <button onClick={goToBuilder}>Continue to Champion Builder</button>
        </section>
      )}

      {currentScreen === "builder" && (
        <section>
          <h2>Champion Builder</h2>
          <p>Champion builder placeholder</p>
          <button onClick={goToDraft}>Continue to Ability Draft</button>
        </section>
      )}

      {currentScreen === "draft" && (
        <section>
          <h2>Ability Draft</h2>
          <p>Ability draft placeholder</p>
          <button onClick={goToBattle}>Continue to Battle</button>
        </section>
      )}

      {currentScreen === "battle" && (
        <section>
          <h2>Tutorial Battle</h2>
          <p>Battle arena placeholder</p>
          <button onClick={goToVictory}>Trigger Victory</button>
        </section>
      )}

      {currentScreen === "victory" && (
        <section>
          <h2>Victory</h2>
          <p>Your champion has proven worthy.</p>
          <pre>{JSON.stringify(player, null, 2)}</pre>
        </section>
      )}
    </main>
  )
}
