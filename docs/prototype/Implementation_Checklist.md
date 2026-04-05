# Council of 1000 – Prototype Implementation Checklist
### Step-by-Step Build Order

---

# 🜂 Purpose

This document defines the exact order the prototype should be built.

Follow this order to avoid rework and broken dependencies.

Rule:

Never build out of order.

---

# Phase 1 — App Foundation

Goal:
Create a basic working web app shell.

Tasks:

Create prototype app folder:

apps/prototype/

Create folders:

components  
systems  
data  
styles  

Verify data files exist:

abilities.json  
factions.json  
stats.json  
tutorial_enemy.json  

Completion Criteria:

Project structure exists.

---

# Phase 2 — Player State System

Goal:

Create a simple central player state.

Create:

apps/prototype/systems/playerState.ts

Player state should track:

Faction  
Stats  
Abilities  
Health  

Example structure:

player = {

faction:null,

stats:{},

abilities:[],

health:40

}

Completion Criteria:

Player state can be modified.

---

# Phase 3 — Landing Screen

Goal:

First visible screen.

Create:

apps/prototype/components/LandingScreen.tsx

Must include:

Game title

Lore text

Enter button

Button should:

Move to faction screen.

Completion Criteria:

Clicking button changes screen.

---

# Phase 4 — Faction Selection

Goal:

Player chooses faction.

Create:

apps/prototype/components/FactionSelection.tsx

Must:

Load factions.json

Render faction cards

Allow selection

Confirm choice

Store faction in player state.

Completion Criteria:

Faction saves correctly.

---

# Phase 5 — Champion Builder

Goal:

Stat allocation working.

Create:

apps/prototype/components/ChampionBuilder.tsx

Must:

Load stats.json

Display stat controls

Track points remaining

Allow increases/decreases

Prevent invalid allocation

Store stats in player state.

Completion Criteria:

Stats correctly saved.

---

# Phase 6 — Ability Draft System

Goal:

3 round ability selection.

Create:

apps/prototype/components/AbilityDraft.tsx

Create:

apps/prototype/systems/draftLogic.ts

Must:

Randomly select 3 abilities

Display choices

Allow selection

Remove unused options

Repeat 3 rounds

Store selected abilities.

Completion Criteria:

Player ends with 3 abilities.

---

# Phase 7 — Combat System

Goal:

Tutorial battle works.

Create:

apps/prototype/components/BattleArena.tsx

Create:

apps/prototype/systems/combatLogic.ts

Create:

apps/prototype/systems/tutorialBattle.ts

Must:

Load tutorial enemy

Track health

Resolve abilities

Execute enemy script

Advance turns

Trigger victory.

Completion Criteria:

Battle resolves correctly.

---

# Phase 8 — Victory Screen

Goal:

End experience cleanly.

Create:

apps/prototype/components/VictoryScreen.tsx

Must show:

Victory text

Faction

Stats

Abilities

Completion Criteria:

Victory displays correctly.

---

# Phase 9 — Flow Controller

Goal:

Connect screens.

Create simple screen manager:

App.tsx

Tracks current screen.

Example states:

landing

faction

builder

draft

battle

victory

Completion Criteria:

Player can move through entire flow.

---

# Phase 10 — First Playable Build

Goal:

Full prototype flow works.

Player should be able to:

Enter game

Pick faction

Build champion

Draft abilities

Fight battle

Win

See victory.

Completion Criteria:

Playable from start to finish.

---

# Prototype Discipline Rules

Do NOT add:

Animations

Wallets

Multiplayer

NFT logic

Blockchain

UI polish

Balance systems

Those come AFTER playability.

---

# First Success Definition

Success is:

Playable flow.

Not polish.

---

# Next Development Stage

After first playable build:

Visual improvements

Combat effects

Lore panels

Champion portraits

Arena polish

Then blockchain layer.

---

# Final Rule

Playable beats perfect.
Always.
