# Council of 1000 – Tutorial Battle System
### Prototype Combat Introduction

---

# 🜂 Purpose

The Tutorial Battle introduces players to the Council of 1000 combat experience. Its purpose is not challenge, but understanding and engagement.

The tutorial must:

Teach turn structure  
Demonstrate abilities  
Show visual combat flow  
Make player feel powerful  
End in guaranteed victory  

This is an onboarding experience.

---

# 🜁 Design Philosophy

The tutorial battle follows one rule:

**The player must feel competent and successful.**

This means:

No failure states.

No complex mechanics.

No randomness affecting outcome.

Victory is scripted.

The purpose is confidence, not difficulty.

---

# 🜄 Battle Structure

The tutorial consists of:

4–6 turns.

Recommended:

5 turns.

Example structure:

Turn 1:
Player attacks.

Turn 2:
Enemy attacks.

Turn 3:
Player uses special ability.

Turn 4:
Enemy weakens.

Turn 5:
Player wins.

This structure demonstrates flow.

---

# Combat Layout

Display should include:

Player Champion (left)

Enemy Champion (right)

Health bars.

Turn indicator.

Combat log.

Ability buttons.

Example layout:

PLAYER        ENEMY

[ Champion ]  [ Enemy ]

Health Bar    Health Bar

Ability Bar

Combat Log

End Turn Button

---

# Combat Stats (Prototype Level)

Combat should track only:

Health.

Damage.

Ability usage.

Prototype does not require:

Critical hits.

Status effects.

Damage types.

Complex modifiers.

---

# Health Values

Recommended:

Player Health:
40

Enemy Health:
35

These values allow demonstration of multiple turns.

---

# Turn Flow

Each turn follows:

Turn Start

Player Action Phase

Action Resolution

Enemy Action Phase

Health Update

Turn End

Next Turn

Simple structure is important.

---

# Player Actions

Player may:

Use one ability per turn.

Abilities should appear as buttons.

Example:

Blade Storm  
Guardian Field  
Resolve  

Player clicks ability.

Ability activates.

Result displays.

---

# Enemy Behavior

Enemy actions are scripted.

Example behavior:

Turn 1:
Enemy basic attack.

Turn 2:
Enemy attack.

Turn 3:
Enemy reduced power.

Turn 4:
Enemy weak attack.

Turn 5:
Enemy defeated.

Enemy does not need AI.

Scripted sequence is enough.

---

# Ability Resolution

Prototype ability effects:

Damage ability:
Reduce enemy health.

Defense ability:
Reduce next enemy damage.

Heal ability:
Increase player health.

Utility ability:
Display effect only.

Example resolution:

Blade Storm:
Enemy loses 8 health.

Guardian Field:
Next enemy attack reduced.

Resolve:
Player gains 6 health.

No stacking required.

---

# Combat Log

Combat log displays actions.

Example:

Turn 1:

Blade Storm deals 8 damage.

Enemy strikes for 6 damage.

Turn 2:

Guardian Field activated.

Enemy deals 3 damage.

Combat log increases immersion.

---

# Turn Indicator

Display:

Turn 1

Turn 2

Turn 3

Player always knows progression.

---

# Victory Condition

Victory occurs when:

Enemy health reaches zero.

Final turn should feel decisive.

Example:

Final ability reduces enemy to zero.

Victory message displays.

---

# Defeat Condition

Prototype has no defeat state.

If player health drops too low:

Enemy damage should reduce.

Player must always win.

This is intentional.

---

# Visual Feedback

Combat should show:

Health bar changes.

Damage numbers.

Ability activation highlight.

Turn transition.

Acceptable:

Simple animation.

Unnecessary:

Complex 3D visuals.

---

# Arena Presentation

Arena should show:

Simple background.

Example:

Stone arena.

Energy circle.

Council chamber.

Placeholder acceptable.

Focus is flow.

---

# Player Interaction Requirements

Player must:

Select ability.

Advance turn.

See results.

Flow must feel interactive.

Avoid autoplay.

---

# MVP Combat Engine Rules

Combat system complete when:

Turns advance correctly.

Abilities trigger.

Health updates.

Enemy actions trigger.

Victory triggers.

Player reaches completion.

---

# Combat Data Example

Example structure:

battle = {

turn:1,

playerHealth:40,

enemyHealth:35,

playerAbilities:[
"Blade Storm",
"Guardian Field",
"Resolve"
]

}

Simple structure preferred.

---

# Post Battle Transition

After victory:

Display:

Victory message.

Champion summary.

Prototype completion message.

Example:

"Your champion has earned recognition."

Possible teaser:

"The Council watches."

---

# MVP Completion Criteria

Tutorial battle complete when:

Player can use abilities.

Turns advance.

Health changes.

Enemy defeated.

Victory screen appears.

---

# Future Expansion Hooks

Future additions may include:

AI enemies.

Status effects.

Damage scaling.

Ability cooldowns.

Turn priority.

Combo effects.

PvP engine.

None required for MVP.

---

# Development Discipline Rule

Combat must remain:

Understandable in 30 seconds.

If player needs explanation:

Too complex.

---

# Next System

Arena Experience Presentation.

(Visual and presentation layer definition)

---
