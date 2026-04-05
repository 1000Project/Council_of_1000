# Council of 1000 – Component Specifications
### Web Prototype UI Definitions

---

# 🜂 Purpose

This document defines the required UI components for the first playable web prototype.

The prototype should be built as a simple web application using a component-based structure.

Recommended stack:

React  
NextJS  
Typescript  

The goal is speed, clarity, and clean iteration.

---

# Core Prototype Components

The prototype requires the following screen components:

LandingScreen  
FactionSelection  
ChampionBuilder  
AbilityDraft  
BattleArena  
VictoryScreen  

Each component should handle one screen only.

---

# 1 — LandingScreen

## Purpose

Introduce the game tone and start the prototype.

## Must Display

Game title

Short lore teaser

Primary call-to-action button

## Suggested Content

Title:
Council of 1000

Teaser:
"From a thousand champions, only the worthy ascend."

Button:
Enter the Realm

## Required Actions

On click:
Move to FactionSelection

---

# 2 — FactionSelection

## Purpose

Allow player to choose one faction.

## Must Display

List of factions from:

apps/prototype/data/factions.json

Each faction card should show:

Name  
Motto  
Description  
Theme color  

## Required Actions

Player selects one faction

Player confirms choice

On confirm:
Move to ChampionBuilder

## Required Rules

No progression without selection

Selection is stored in player state

---

# 3 — ChampionBuilder

## Purpose

Allow player to allocate champion stat points.

## Must Display

Stat list from:

apps/prototype/data/stats.json

Each stat should show:

Name  
Description  
Current value  
Increase / decrease controls  

Also display:

Points remaining

Confirm button

## Required Actions

Player distributes points

On confirm:
Move to AbilityDraft

## Required Rules

Cannot confirm until all points are spent

Cannot exceed stat max

Cannot go below stat min

---

# 4 — AbilityDraft

## Purpose

Allow player to draft 3 starting abilities.

## Must Display

3 draft rounds

Each round shows 3 abilities from:

apps/prototype/data/abilities.json

Each card should show:

Name  
Description  
Type  

Also display:

Current draft round

Chosen abilities so far

## Required Actions

Player selects 1 ability per round

After round 3:
Move to BattleArena

## Required Rules

No duplicate abilities

No rerolls in MVP

Selections stored in player state

---

# 5 — BattleArena

## Purpose

Run tutorial battle and display combat.

## Must Display

Player champion

Enemy champion from:

apps/prototype/data/tutorial_enemy.json

Health bars

Turn counter

Ability buttons

Combat log

## Required Actions

Player clicks one ability each turn

Combat resolves

Enemy script executes

Victory triggers

## Required Rules

Battle must follow scripted tutorial flow

Player cannot lose

Abilities may be reused in MVP

---

# 6 — VictoryScreen

## Purpose

Reward completion and summarize champion.

## Must Display

Victory message

Faction

Stats

Drafted abilities

Optional teaser text

## Suggested Text

"Your champion has proven worthy."

## Required Actions

End prototype

Optional future placeholder button allowed

---

# Shared State Requirements

Prototype should maintain one central player state object.

Suggested structure:

player = {
  faction: null,
  stats: {},
  abilities: [],
  health: 40
}

Battle state may remain separate.

Suggested battle structure:

battle = {
  turn: 1,
  playerHealth: 40,
  enemyHealth: 35,
  result: null
}

---

# MVP UI Development Rule

Each component must work before moving to the next.

Build order:

LandingScreen  
FactionSelection  
ChampionBuilder  
AbilityDraft  
BattleArena  
VictoryScreen  

Do not begin polishing until all screens work.

---

# Future Expansion Hooks

Later component additions may include:

ChampionSummary  
MainMenu  
FactionLorePanel  
DeckView  
ArenaMatchmaking  
WalletConnect  

None required for MVP.

---

# Completion Criteria

Component spec complete when all required screens are defined and implementation can begin without guessing.

---

# Next Step

Implementation file map.
