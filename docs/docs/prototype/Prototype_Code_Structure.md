# Council of 1000 – Prototype Code Structure
### Prototype Development Architecture

---

# 🜂 Purpose

This document defines how the playable prototype should be structured inside the repository. The goal is to keep systems organized, modular, and expandable.

This structure should allow:

Easy iteration  
Clear separation of systems  
Future expansion  
Clean development workflow  

This is not final production architecture, but it should be clean enough to grow.

---

# 🜁 Architecture Philosophy

The prototype should follow:

**Simple modular architecture.**

Meaning:

UI separated from logic  
Logic separated from data  
Data separated from visuals  

Avoid mixing systems together.

---

# 🜄 Prototype App Location

Recommended structure:

/apps/prototype/

This separates the playable experience from:

docs  
lore  
contracts  
future systems  

---

# 🜃 Recommended Repo Structure

Recommended layout:

/apps

/apps/prototype

/apps/prototype/components

/apps/prototype/systems

/apps/prototype/data

/apps/prototype/styles

/apps/prototype/assets

---

# Folder Purpose Definitions

components/

UI elements.

Examples:

FactionSelector  
ChampionBuilder  
AbilityDraft  
BattleArena  
VictoryScreen  

systems/

Game logic.

Examples:

ChampionSystem  
DraftSystem  
CombatSystem  
TurnManager  
BattleResolver  

data/

Static data.

Examples:

abilities.json  
factions.json  
championStats.json  

styles/

UI styling.

Examples:

globals.css  
theme.css  

assets/

Images.

Examples:

icons  
backgrounds  
portraits  

---

# Component Architecture

Recommended component structure:

/components

LandingScreen.tsx

FactionSelection.tsx

ChampionCreation.tsx

StatAllocation.tsx

AbilityDraft.tsx

ChampionSummary.tsx

BattleArena.tsx

VictoryScreen.tsx

Each component should represent one screen.

Do not combine screens.

---

# System Architecture

Game logic should exist separately from UI.

Example:

/systems

ChampionEngine.ts

DraftEngine.ts

CombatEngine.ts

BattleScript.ts

TurnSystem.ts

Purpose:

UI calls systems.

Systems process logic.

Systems return results.

UI displays results.

This separation prevents future rewrites.

---

# Data Structure

Prototype should store simple JSON data.

Example:

/data/abilities.json

Example:

[
{
"name":"Blade Storm",
"description":"Deal 8 damage",
"type":"offense"
},

{
"name":"Guardian Field",
"description":"Gain shield",
"type":"defense"
}
]

Keep data editable.

Avoid hardcoding in UI.

---

# State Management (Prototype Level)

Simple state acceptable.

Example:

React state.

No need for Redux.

No backend required.

Example flow:

Player choices stored in memory.

Example structure:

player = {

faction:"Order",

stats:{},

abilities:[],

health:40

}

---

# Combat Script Structure

Tutorial battle should use:

Scripted sequence file.

Example:

/systems/BattleScript.ts

Example:

turns = [

{
turn:1,
playerAction:true,
enemyAction:true
},

{
turn:2,
playerAction:true,
enemyAction:true
}

]

Simple scripting allows expansion later.

---

# Ability Logic Structure

Ability behavior should exist in:

CombatEngine.ts

Example:

resolveAbility(ability, target){

if ability = Blade Storm:

target.health -= 8

return result

}

Keep simple.

No complex engine needed.

---

# Prototype Technology Recommendation

Recommended stack:

NextJS

React

Typescript

Tailwind (optional)

Reason:

Works with your existing site.

Easy deployment later.

Expandable.

---

# Development Order

Build in this order:

1 Landing Screen

2 Faction Selection

3 Champion Builder

4 Ability Draft

5 Champion Summary

6 Battle Arena

7 Victory Screen

Do not start with combat.

Start with flow.

---

# First Components To Build

Recommended first files:

LandingScreen.tsx

FactionSelection.tsx

ChampionCreation.tsx

AbilityDraft.tsx

BattleArena.tsx

VictoryScreen.tsx

These form the full playable loop.

---

# MVP Development Rule

Each system must be:

Playable before adding next system.

Meaning:

Faction select must work before Champion Builder.

Champion Builder must work before Draft.

Draft must work before Combat.

Combat must work before visuals.

Flow first.

Polish later.

---

# Prototype Completion Definition

Prototype build complete when:

Player can move through all screens.

Champion creation works.

Draft works.

Battle plays.

Victory displays.

No backend required.

---

# Future Structure Expansion

Later additions may include:

/apps/game-client

/apps/game-server

/contracts

/backend

/ai

None required now.

---

# Development Discipline Rule

If a feature delays:

Playable flow

It must wait.

Always protect momentum.

---

# Next Step

Begin building:

Landing Screen.

This becomes the first actual code entry point.

---