# Council of 1000 – App Architecture
### Prototype Web Application Structure

---

# 🜂 Purpose

This document defines how the prototype application should be organized at the top level.

The goal is to keep screen flow, player state, and gameplay systems simple and predictable.

This is the architectural shell for the first playable build.

---

# Core App Philosophy

The prototype should use:

Single app flow  
Single active screen  
Single player state object  
Separate battle state  
Simple screen transitions  

This is a web prototype, not a full production client.

---

# Top-Level App Responsibilities

The main app must:

Track current screen

Store player state

Pass player data into screens

Receive screen actions

Advance flow to next screen

The main app should not contain combat rules or draft logic directly.

Those belong in systems files.

---

# Recommended Flow Model

The app should use a simple screen state.

Example:

landing  
faction  
builder  
draft  
battle  
victory  

Only one screen is active at a time.

---

# Top-Level File

Primary entry file:

apps/prototype/App.tsx

This file acts as:

Flow controller  
State container  
Screen switcher  

---

# App State Model

The app should manage two primary states:

## Player State

Tracks permanent prototype choices.

Example:

player = {
  faction: null,
  stats: {},
  abilities: [],
  health: 40
}

## Battle State

Tracks temporary battle data.

Example:

battle = {
  turn: 1,
  playerHealth: 40,
  enemyHealth: 35,
  result: null
}

Battle state should only be active during battle.

---

# Screen Routing Pattern

Simple conditional rendering is enough.

Example logic:

If currentScreen is landing:
Render LandingScreen

If currentScreen is faction:
Render FactionSelection

If currentScreen is builder:
Render ChampionBuilder

If currentScreen is draft:
Render AbilityDraft

If currentScreen is battle:
Render BattleArena

If currentScreen is victory:
Render VictoryScreen

No external router required for MVP.

---

# Screen Transition Rules

Transitions should happen only when valid.

Examples:

LandingScreen
→ can always advance

FactionSelection
→ only after faction chosen

ChampionBuilder
→ only after points fully allocated

AbilityDraft
→ only after 3 abilities chosen

BattleArena
→ only after victory

VictoryScreen
→ final state

This prevents broken flow.

---

# Screen Contract Pattern

Each screen should receive only the data and actions it needs.

Recommended pattern:

Props in  
User action happens  
Screen calls callback  
App updates state  
App advances screen  

Example:

FactionSelection receives:
- factions data
- selected faction
- onConfirm callback

ChampionBuilder receives:
- stats data
- current player stats
- onConfirm callback

Keep contracts small.

---

# Data Loading Strategy

Prototype data should load from:

apps/prototype/data/abilities.json  
apps/prototype/data/factions.json  
apps/prototype/data/stats.json  
apps/prototype/data/tutorial_enemy.json  

Data may be imported directly for MVP.

No API layer required.

---

# System Integration Pattern

UI components should call systems.

Examples:

AbilityDraft uses:
draftLogic.ts

BattleArena uses:
combatLogic.ts
tutorialBattle.ts

ChampionBuilder may use:
playerState.ts

This keeps logic out of UI.

---

# Suggested File Responsibilities

## App.tsx
Owns screen flow and shared state.

## playerState.ts
Defines player object defaults and updates.

## draftLogic.ts
Returns draft options and stores chosen abilities.

## combatLogic.ts
Applies ability effects and damage changes.

## tutorialBattle.ts
Loads and controls enemy turn script.

---

# Error Prevention Rules

The app should prevent:

Advancing with no faction

Advancing with invalid stat build

Advancing with fewer than 3 drafted abilities

Entering victory without battle result

Broken flow is prototype failure.

---

# MVP App Layout

At minimum the app should include:

Header area (optional)

Main screen container

Transition area

Background/theme styling

Prototype can remain single-page.

---

# State Update Principles

State updates should be:

Predictable  
Centralized  
Minimal  

Avoid spreading player state across many components.

Keep one source of truth.

---

# Future Expansion Hooks

Later architecture may add:

Persistent save system

Multi-route navigation

Server sync

Wallet connection

Inventory state

Matchmaking state

None required for MVP.

---

# MVP Completion Criteria

App architecture is complete when:

All screens connect

Player state persists across screens

Battle state functions correctly

Prototype runs start to finish in one session

---

# Next Step

Create the first implementation starter files.

App.tsx becomes the first build target.
