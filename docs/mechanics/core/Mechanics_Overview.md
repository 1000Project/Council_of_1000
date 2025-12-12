# Mechanics Overview  
_The Core Game Systems of the Council of 1000 TCG_

This document provides a clear, public-facing explanation of the foundational mechanics used in the Council of 1000 Trading Card Game. It is not an exhaustive rulebook, but a structured overview of how the game functions, the flow of play, resource systems, and the mechanical identity that differentiates Council of 1000 from other TCGs.

These systems are directly aligned with the Seven Realms, the Champion framework, and the broader Thousandfold lore.

---

# 🜂 Core Concepts

Council of 1000 is a **Champion-driven, Realm-based, lane-style tactical TCG** where players battle using Units, Actions, and Relics while managing Resolve and Influence — the game’s two fundamental resource systems.

Players win by reducing the opposing Champion’s **Resolve** to zero.

---

# 🜁 Player Resources

## **Resolve (Life Total / Willpower)**
Resolve represents a Champion’s metaphysical endurance — their ability to maintain their worldview against opposing philosophies.

- Each Champion begins with a set amount of Resolve (typically 30).  
- If Resolve reaches 0, the player loses.  
- Many Realms interact uniquely with Resolve:
  - Solace restores or shields it  
  - Dominion pressures it aggressively  
  - Ruin drains or corrupts it  
  - Paradox gambles with it  

Resolve ties game mechanics to lore: it is a direct measure of a Champion’s ideological strength.

---

## **Influence (Energy / Casting Resource)**  
Influence is the primary resource used to play cards and activate abilities.

- Each turn, players gain +1 maximum Influence, up to a cap.  
- Influence refreshes to full at the start of each turn.  
- Some Champions and Realms manipulate Influence curves:
  - Genesis accelerates growth  
  - Veil manipulates opponent access  
  - Ascendance optimizes efficiency  

Influence is the pacing mechanism that structures the game’s tempo.

---

# 🜂 Card Types

Council of 1000 uses three primary card types:

## **1. Units**  
Units represent followers, creatures, constructs, and metaphysical manifestations of a Realm’s philosophy.

Units have:

- Power  
- Guard / Shield states (depending on Realm)  
- Realm affinity  
- On-play effects  
- Death or sacrifice triggers  

Units are placed into **lanes** (below).

---

## **2. Actions**  
Instant or sorcery-style effects that produce one-time impacts.

Actions include:

- damage  
- buffs / debuffs  
- card draw  
- discard  
- Realm-specific effects  
- lane manipulation  
- Resolve or Influence interaction  

Actions do not persist on the battlefield.

---

## **3. Relics**  
Ongoing artifacts, enchantments, or constructs that generate continuous effects.

Relics may:

- provide passive buffs  
- create recurring triggers  
- alter lane rules  
- modify Influence or Resolve flow  
- interact with Units or Actions over time  

Some Relics are **Seat-bound**, connected to the Council’s metaphysical structure.

---

# 🜃 Lane System

Council of 1000 uses a **3-lane combat field**, similar to strategic board games and lane-based TCGs.

Each lane is a metaphysical “channel” representing the flow of conflict between philosophies.

## **Lane Rules:**

- Units are played into one of the three lanes.  
- Units attack directly opposite themselves.  
- If a lane has no opposing Unit, damage is dealt directly to Resolve.  
- Certain Realms specialize in lane control:
  - Dominion pushes dominance in lanes aggressively  
  - Veil manipulates lane visibility  
  - Ruin thrives in attrition-heavy lanes  
  - Paradox causes unpredictable lane shifts  

Lane structure adds tactical depth without overwhelming complexity.

---

# 🜁 Turn Structure

A turn in Council of 1000 proceeds through the following phases:

## **1. Refresh Phase**
- Influence resets to max  
- Exhausted Units ready  
- Ongoing effects resolve  

## **2. Draw Phase**
- Player draws 1 card  
- Veil and Paradox may alter this step  

## **3. Main Phase**
Players may:

- play Units  
- cast Actions  
- deploy Relics  
- activate Champion abilities  
- manipulate lanes (if card-allowed)

This is the primary decision-making phase.

## **4. Combat Phase**
- Units attack across lanes  
- Abilities may trigger  
- Resolve damage occurs if lanes are open  

Certain Realms modify combat rules (e.g., Dominion aggression or Solace shielding).

## **5. End Phase**
- Temporary effects expire  
- End-of-turn triggers resolve  
- Paradox may alter end-step timing  

---

# 🜂 Champion Abilities

Each Champion has:

- **1 Passive Ability** (always active)  
- **1–2 Activated Abilities** (cost Influence)  
- **1 Ultimate / Threshold Ability** (requires conditions)  

Champion abilities define the deck’s identity and pull the player into a specific playstyle.

Examples:

- Dominion Champion: Gain power when attacking consecutively  
- Solace Champion: Prevent Resolve loss for a turn  
- Veil Champion: Peek at the opponent’s hand or deck  
- Genesis Champion: Create growth tokens  
- Ruin Champion: Benefit when Units die  
- Ascendance Champion: Reward optimal sequencing  
- Paradox Champion: Randomized high-risk outcomes  

Champions are the core of the gameplay experience.

---

# 🜃 Keywords Overview

Each Realm has its own pool of mechanical keywords.  
Examples include:

- **Dominion:** Overrun, Momentum  
- **Solace:** Shield, Restore  
- **Veil:** Conceal, Trace  
- **Genesis:** Spawn, Grow  
- **Ruin:** Wither, Reclaim  
- **Ascendance:** Focus, Mastery  
- **Paradox:** Rift, Gamble  

A full keyword index exists in **docs/mechanics/Card_Types.md** and developer-specific docs.

---

# 🜁 Win Conditions

The primary win condition:

- **Reduce the opponent’s Resolve to 0.**

Secondary or alternate win conditions may emerge in expansions:

- Council Edicts  
- Seat Control mechanics  
- Paradox instability triggers  
- Saga-style Realms events  
- Champion victory conditions  
- “Ascension” threshold wins  

These are introduced sparingly to preserve core gameplay clarity.

---

# 🜂 Example of a Turn (Simple)

1. Refresh Influence  
2. Draw 1  
3. Play a Unit into the center lane  
4. Cast an Action to buff it  
5. Attack  
6. Deal 3 damage to opposing Resolve  
7. End turn  

The system is designed for fast tactical play with long-term strategic depth.

---

# 🜄 Design Philosophy Summary

Council of 1000’s mechanics are built on five principles:

1. **Champion-first gameplay**  
2. **Realm identity reflected in mechanics**  
3. **Tactical decision-making through lane combat**  
4. **Clear escalation through Influence growth**  
5. **Narrative integration with gameplay systems**

This overview serves as the foundational mechanical document for readers, partners, and Shido reviewers.

A deeper ruleset will live in the upcoming **Comprehensive Rulebook** for development use.

