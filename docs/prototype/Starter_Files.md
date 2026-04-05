# Council of 1000 – Starter Files
### First Files To Create For Implementation

---

# 🜂 Purpose

This document defines the first files that should be created when implementation begins.

These files form the smallest possible working prototype shell.

---

# First Required Files

apps/prototype/App.tsx

apps/prototype/components/LandingScreen.tsx

apps/prototype/components/FactionSelection.tsx

apps/prototype/components/ChampionBuilder.tsx

apps/prototype/components/AbilityDraft.tsx

apps/prototype/components/BattleArena.tsx

apps/prototype/components/VictoryScreen.tsx

apps/prototype/systems/playerState.ts

apps/prototype/systems/draftLogic.ts

apps/prototype/systems/combatLogic.ts

apps/prototype/systems/tutorialBattle.ts

apps/prototype/styles/globals.css

apps/prototype/styles/theme.css

---

# File Creation Order

1 App.tsx

2 playerState.ts

3 LandingScreen.tsx

4 FactionSelection.tsx

5 ChampionBuilder.tsx

6 draftLogic.ts

7 AbilityDraft.tsx

8 tutorialBattle.ts

9 combatLogic.ts

10 BattleArena.tsx

11 VictoryScreen.tsx

12 styles

---

# Why This Order Works

App.tsx defines the shell.

playerState.ts defines shared state.

LandingScreen creates first visible success.

FactionSelection and ChampionBuilder create player identity.

Draft and combat systems then attach to real data.

Battle and victory complete the loop.

---

# Build Discipline Rule

Do not create extra files until these work.

The prototype should remain lean.

---

# MVP Definition

Once these files exist and connect correctly, the project becomes playable.

---

# Next Step

Implementation starter checklist using these exact files.
