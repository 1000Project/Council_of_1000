# Council of 1000 – Prototype Screen Flow
### Player Interaction Path

---

# 🜂 Purpose

This document defines how the player moves through the prototype from start to finish.

This is the navigation backbone of the playable experience.

Every screen must have a clear entry and exit.

---

# Prototype Flow Overview

Player journey:

Landing Screen  
→ Faction Selection  
→ Champion Builder  
→ Ability Draft  
→ Tutorial Battle  
→ Victory Screen  

Simple.
Linear.
No branching paths.

---

# Screen 1 — Landing Screen

Purpose:

Introduce world tone and begin player entry.

Display:

Game title  
Short lore teaser  
Enter button  

Example text:

"1000 champions rise.
Only one path leads to ascension."

Button:

ENTER THE REALM

Action:

Moves player to Faction Selection.

---

# Screen 2 — Faction Selection

Purpose:

Player chooses alignment.

Display:

Faction cards

Each shows:

Faction name  
Theme  
Visual color  
Short philosophy  

Example layout:

3 large faction cards.

Player clicks one.

Confirmation required:

"Your allegiance cannot be changed."

Buttons:

Confirm  
Go Back

Action:

Moves to Champion Builder.

---

# Screen 3 — Champion Builder

Purpose:

Player allocates stat points.

Display:

Stat bars:

Power  
Vitality  
Speed  
Focus  
Resilience  

Display:

Points remaining.

Rules:

Must spend all points.

Cannot exceed max.

Cannot confirm until valid.

Buttons:

Confirm Build

Warning:

"Champion creation is permanent."

Action:

Moves to Ability Draft.

---

# Screen 4 — Ability Draft

Purpose:

Player builds starting ability kit.

Structure:

3 draft rounds.

Each round:

Show 3 ability cards.

Player picks one.

Other two disappear.

Draft rounds:

Round 1 → pick 1 of 3  
Round 2 → pick 1 of 3  
Round 3 → pick 1 of 3  

Total:

3 abilities.

Display:

Ability name  
Type  
Effect  
Visual rarity color  

Action:

Moves to Tutorial Battle.

---

# Screen 5 — Tutorial Battle

Purpose:

Hook player through interaction.

Player must win.

Display:

Arena background.

Left side:

Player champion.

Right side:

Arena Construct.

Bottom:

Ability buttons.

Combat flow:

Player selects ability.

Animation plays.

Damage resolves.

Enemy acts.

Turn continues.

4–6 turns total.

Victory scripted.

Action:

Moves to Victory Screen.

---

# Screen 6 — Victory Screen

Purpose:

Reward completion.

Display:

Victory message.

Champion summary:

Faction  
Stats  
Abilities  

Optional display:

Rank badge.

Button:

Return to Realm (future)

Prototype button:

End Prototype

---

# Navigation Rules

Prototype must:

Never confuse player.

Always show next action.

Never allow dead ends.

No menus required.

Linear experience only.

---

# Required Screens List

Prototype must include:

LandingScreen
FactionSelection
ChampionBuilder
AbilityDraft
BattleArena
VictoryScreen

---

# MVP Completion Criteria

Prototype navigation complete when:

Player can start.

Player can build champion.

Player can draft abilities.

Player can fight battle.

Player can win.

Player reaches victory screen.

That equals playable prototype.

---

# Next Step

Component definition.
