# Council of 1000 – Combat Logic System
### Prototype Ability Resolution Rules

---

# 🜂 Purpose

This document defines how abilities affect combat during the prototype battle. It connects the Draft System to the Tutorial Battle by defining how ability data from abilities.json translates into combat results.

This system must remain simple, predictable, and expandable.

---

# 🜁 Combat System Goal

Combat must:

Be easy to understand  
Resolve quickly  
Be visually clear  
Avoid complex stacking  
Support scripted tutorial flow  

Prototype combat is about clarity, not depth.

---

# 🜄 Core Combat Stats

Prototype combat tracks only:

Player Health  
Enemy Health  
Ability Effects  
Turn Number  

No advanced systems required.

Example starting values:

Player Health: 40  
Enemy Health: 35  

---

# Combat Data Example

Example combat state:

battle = {

turn: 1,

playerHealth: 40,

enemyHealth: 35,

playerAbilities: [],

enemyScript: []

}

Simple structure preferred.

---

# Ability Resolution Types

Prototype abilities fall into simple categories:

Offense:
Reduce enemy health.

Defense:
Reduce incoming damage.

Utility:
Restore health or buff next action.

Control:
Minor effects only.

Each ability should resolve instantly.

---

# Damage Resolution

Offensive ability example:

Blade Storm:
Deal 8 damage.

Resolution:

enemyHealth -= ability.power

Health must not go below zero.

Example:

enemyHealth = max(0, enemyHealth)

---

# Healing Resolution

Healing example:

Resolve:
Restore 6 health.

Resolution:

playerHealth += ability.heal

Optional cap:

playerHealth cannot exceed starting value.

Example:

playerHealth = min(maxHealth, playerHealth)

---

# Defense Resolution

Defense abilities reduce next enemy damage.

Example:

Guardian Field:
Reduce next enemy damage by 5.

Implementation:

Store temporary shield value:

playerShield = 5

Enemy attack:

damage = enemyDamage - playerShield

damage = max(0, damage)

Reset shield after use.

---

# Buff Resolution

Buff example:

Focus Channel:
Increase next ability damage by 3.

Implementation:

Store:

damageBuff = 3

Next player ability:

finalDamage = ability.power + damageBuff

Reset buff after use.

---

# Enemy Damage Script

Enemy damage should be scripted.

Example:

enemyTurns = [

{turn:1, damage:6},

{turn:2, damage:6},

{turn:3, damage:4},

{turn:4, damage:3},

{turn:5, damage:0}

]

This ensures player victory.

No AI required.

---

# Turn Flow Resolution

Each turn follows:

Player chooses ability.

Ability resolves.

Enemy performs scripted action.

Health updates.

Turn increases.

Example:

Turn 1:

Player uses Blade Storm.

Enemy loses 8.

Enemy deals 6.

Player loses 6.

Turn ends.

---

# Combat Log Output

Combat should generate readable results.

Example:

Turn 1:

Blade Storm deals 8 damage.

Enemy attacks for 6 damage.

Turn 2:

Resolve restores 6 health.

Enemy attacks for 4 damage.

Combat log increases immersion.

---

# Ability Usage Rules

Prototype rules:

Abilities may be reused.

No cooldowns required.

No resource cost required.

No charges required.

This keeps prototype simple.

Future versions may add:

Cooldowns  
Energy costs  
Charges  

Not needed now.

---

# Victory Detection

Victory occurs when:

enemyHealth == 0

Immediately trigger:

Victory screen.

Do not continue turns.

---

# Defeat Prevention

Prototype must prevent defeat.

If player health becomes too low:

Reduce enemy damage.

Example:

If playerHealth < 10:

enemyDamage = 2

This ensures tutorial success.

---

# Combat State Example

Example final state:

battle = {

turn:5,

playerHealth:22,

enemyHealth:0,

result:"victory"

}

---

# MVP Combat Completion Criteria

Combat logic complete when:

Abilities modify health.

Damage resolves correctly.

Healing works.

Defense reduces damage.

Turns progress correctly.

Victory triggers.

---

# Future Expansion Hooks

Future combat systems may include:

Cooldowns.

Energy systems.

Status effects.

Turn priority.

Combo chains.

Ability upgrades.

PvP engine.

None required for MVP.

---

# Combat Design Discipline Rule

If a mechanic makes combat harder to understand:

Remove it.

Prototype success depends on clarity.

---

# System Integration Points

Combat Logic connects to:

Draft System → provides abilities

Champion Builder → provides stats (future use)

Battle System → manages turns

Arena System → displays results

---

# Next Step

Prototype readiness verification.

After this document exists, all core systems are defined.

Development can begin.
