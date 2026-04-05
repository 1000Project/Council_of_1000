# Council of 1000 – Ability Draft System
### Prototype Ability Selection Mechanic

---

# 🜂 Purpose

The Ability Draft System introduces meaningful decision-making after champion creation. This system forces players to make permanent choices that shape how their champion performs in combat.

The draft system should feel:

Strategic  
Simple  
Permanent  
Rewarding  

This is the first true gameplay decision system.

---

# 🜁 Design Philosophy

The draft system follows the principle:

**Limited choices create meaningful decisions.**

Players should never feel overwhelmed but should feel responsible for their selections.

The draft is not about finding perfect builds.

It is about choosing a direction.

---

# 🜄 Draft Structure

The prototype uses:

3 Draft Rounds.

Each round presents:

3 randomized abilities.

Player selects:

1 ability per round.

Final result:

3 abilities total.

---

# Draft Flow

Champion Creation Complete

→ Draft Round 1

→ Draft Round 2

→ Draft Round 3

→ Champion Identity Screen

---

# Draft Round Layout

Display should include:

Draft Round Indicator:

Example:

Draft Round 1 of 3

Three ability cards displayed.

Each ability card shows:

Ability Name  
Short Description  
Ability Type (optional)  
Icon placeholder  

Example layout:

[ Ability A ]  
[ Ability B ]  
[ Ability C ]

Player selects one.

Selection locks.

Next round begins.

---

# Ability Categories (Prototype Level)

To maintain variety, abilities may be grouped into basic types:

Offense:
Damage dealing abilities.

Defense:
Shield or mitigation abilities.

Control:
Turn or stat manipulation.

Utility:
Special effects.

Prototype does not require strict balancing.

Variety is sufficient.

---

# Ability Example Pool

Example prototype abilities:

Blade Storm  
Deal damage to enemy.

Guardian Field  
Gain temporary shield.

Mind Break  
Reduce enemy resilience.

Swift Strike  
Act first next turn.

Iron Skin  
Reduce incoming damage.

Arc Pulse  
Deal energy damage.

Focus Channel  
Increase next ability effect.

Chaos Mark  
Apply unstable effect.

Resolve  
Recover health.

These can be stored in a simple list.

---

# Ability Data Structure Example

Example ability object:

ability = {

name: "Blade Storm",

description: "Deal 8 damage.",

type: "offense"

}

Prototype does not require complex data.

---

# Ability Selection Rules

Each draft round:

System randomly selects:

3 different abilities.

Player chooses one.

Rules:

No duplicates in same round.

Player cannot skip.

Player cannot reroll.

Selection is permanent.

---

# Random Selection Logic (Simple Version)

Prototype method:

Randomly select 3 abilities from ability pool.

Example:

abilitiesPool = [A,B,C,D,E,F,G,H]

Random selection:

Round presents:

B, E, G

Player chooses E.

Add E to champion abilities.

Proceed.

Simple random selection is acceptable.

---

# Player Feedback

When player selects ability:

Ability card highlights.

Other cards fade.

Selection locks.

Short confirmation message example:

"Ability acquired."

Then transition.

---

# Draft Completion Result

After 3 rounds:

Champion now has:

3 abilities.

Example:

Champion:

Faction: Order

Abilities:

Blade Storm  
Guardian Field  
Resolve  

Player proceeds to Champion Identity Screen.

---

# MVP Ability Count Recommendation

Prototype pool:

12–18 abilities.

This provides enough variation.

Example:

12 abilities allows many combinations.

No need for hundreds yet.

---

# MVP Ability Complexity Rule

Abilities should remain simple.

Acceptable:

Deal damage  
Gain shield  
Heal  
Modify next turn  

Avoid:

Multi-phase effects  
Complex triggers  
Stacking systems  
Combo chains  

Complexity comes later.

---

# Failure States

Invalid conditions:

Player tries to proceed without choosing.

Duplicate ability appears.

Ability not stored correctly.

Confirm button should only appear after selection.

---

# MVP Completion Criteria

Draft System complete when:

3 rounds function.

Random abilities appear.

Player selects correctly.

Champion gains 3 abilities.

Player moves to next screen.

---

# Future Expansion Hooks

Possible additions later:

Reroll tokens.

Draft modifiers.

Faction weighted abilities.

Rare abilities.

Legendary abilities.

Synergy bonuses.

Ability upgrades.

None required for MVP.

---

# Design Discipline Rule

The draft must remain:

Fast.

3 rounds should take:

1–2 minutes total.

If longer:

Too complex.

---

# Next System

Tutorial Battle System.

This is where abilities become visible gameplay.

---