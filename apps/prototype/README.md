# Council of 1000 Prototype

This directory contains the first playable prototype (vertical slice) of Council of 1000.

The goal of this prototype is to validate the core gameplay loop before expanding into full game systems.

---

## Prototype Features

The prototype currently targets:

- Faction selection
- Champion creation
- Ability drafting
- Tutorial battle
- Arena combat presentation
- Victory completion flow

This prototype is intentionally limited in scope.

---

## Directory Structure

### components/

User interface screens and interactive elements.

Examples:
- Landing screen
- Faction selection
- Champion builder
- Draft interface
- Battle arena
- Victory screen

### systems/

Core gameplay logic.

Examples:
- Champion generation
- Draft selection logic
- Combat resolution
- Turn management

### data/

Game data used by systems.

Examples:
- abilities.json
- factions.json
- future stat definitions

### assets/

Visual resources.

Examples:
- Icons
- Backgrounds
- Portrait placeholders

### styles/

Visual styling.

Examples:
- Global styles
- Theme definitions
- Layout rules

---

## Prototype Design Reference

Prototype behavior is defined in:

/docs/prototype/

These documents define:

- Player flow
- Champion systems
- Draft mechanics
- Combat rules
- Arena presentation
- Code structure

The prototype should follow those documents closely.

---

## Development Rules

During prototype development:

Keep systems simple  
Prioritize playable flow  
Avoid premature optimization  
Avoid complex mechanics  
Focus on interaction first  

Playable always beats perfect.

---

## Current Development Status

Phase:
Architecture complete

Next Step:
Champion Builder implementation

Target:
First playable interaction loop
