# Council of 1000 – Implementation File Map
### First Web Prototype Build Plan

---

# 🜂 Purpose

This document defines the first file structure for the playable web prototype.

It exists to reduce confusion and make implementation predictable.

---

# Recommended App Structure

apps/prototype/

Inside that app:

components/  
systems/  
data/  
styles/  

---

# Initial Component Files

apps/prototype/components/LandingScreen.tsx

apps/prototype/components/FactionSelection.tsx

apps/prototype/components/ChampionBuilder.tsx

apps/prototype/components/AbilityDraft.tsx

apps/prototype/components/BattleArena.tsx

apps/prototype/components/VictoryScreen.tsx

---

# Initial Logic Files

apps/prototype/systems/draftLogic.ts

apps/prototype/systems/combatLogic.ts

apps/prototype/systems/playerState.ts

apps/prototype/systems/tutorialBattle.ts

---

# Initial Data Files

apps/prototype/data/abilities.json

apps/prototype/data/factions.json

apps/prototype/data/stats.json

apps/prototype/data/tutorial_enemy.json

---

# Initial Style Files

apps/prototype/styles/globals.css

apps/prototype/styles/theme.css

---

# Minimum Build Order

Step 1:
Create player state structure

Step 2:
Render LandingScreen

Step 3:
Render FactionSelection with data

Step 4:
Render ChampionBuilder with stat allocation

Step 5:
Render AbilityDraft with 3 rounds

Step 6:
Render BattleArena with tutorial enemy

Step 7:
Render VictoryScreen

---

# MVP Rule

No screen should depend on backend setup.

No screen should depend on blockchain integration.

No screen should depend on multiplayer systems.

---

# First Playable Goal

The first playable build is achieved when a user can move through all screens in one uninterrupted session.

---

# Next Step

Create the first implementation checklist.
