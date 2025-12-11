# Combat Rules — Extended Developer Specification  
_Engine-Grade Combat Timing, Resolution Logic, and Deterministic Sequencing_

This document provides the **full technical specification** of combat.  
It is intended for engine programmers, competitive rules enforcement, QA automation, and deterministic replay validation.

The structure defined herein is canonical and must be preserved across all platforms and expansions.

---

# 🜂 1. Combat Phase Overview — Engine Structure  

Combat consists of multiple time-locked windows, each containing:

- legality checks  
- trigger extraction  
- replacement effect evaluation  
- Stack insertion  
- state-based action loops  
- deterministic event resolution  

The engine-level structure is:

```
COMBAT START
├─ Pre-Combat Replacement/Trigger Window
├─ DECLARE ATTACKERS
│   ├─ Legality Check
│   ├─ Attack Declaration Event
│   ├─ Attack Triggers Generated
│   ├─ Stack Window (Attack Triggers)
├─ PRE-BLOCK PRIORITY WINDOW
├─ DECLARE BLOCKERS
│   ├─ Legality Check
│   ├─ Block Declaration Event
│   ├─ Block Triggers Generated
│   ├─ Stack Window (Block Triggers)
├─ PRE-DAMAGE PRIORITY WINDOW
├─ COMBAT DAMAGE STEP
│   ├─ Strike Check
│   ├─ Damage Assignment
│   ├─ Replacement Window (Prevention, Wither, etc.)
│   ├─ Damage Event → Trigger Generation
│   ├─ SBA Loop (Lethal, Transform, Death)
├─ POST-DAMAGE PRIORITY WINDOW
├─ POST-COMBAT TRIGGERS
│   ├─ Trigger Queue
│   ├─ Stack Window
├─ END OF COMBAT CLEANUP
└─ COMBAT END
```

All windows must be executed in order for the engine to remain deterministic.

---

# 🜁 2. Declare Attackers — Engine Logic  

### 2.1 Attacker Legality Check  
A Unit must satisfy all conditions:

- controller is active player  
- not Stunned  
- not Rooted in a way that prevents attacking  
- not Suppressed  
- has been under controller’s control since start of turn unless it has **Ambush**  
- attack is not forbidden by Realm or Seat effects  

Engine denies illegal declarations with **ERROR_ILLEGAL_ATTACKER**.

### 2.2 Attack Declaration Event  
Once attackers are chosen:

```
Event_AttackersDeclared {
  attackers: [UnitIDs],
  controller: PlayerID,
  timestamp: T
}
```

### 2.3 Trigger Extraction  
The following trigger categories are extracted:

- OnAttack  
- OnDeclareAttackers  
- Dominion Rally triggers  
- visibility-based modifications (Veil)  
- transformation pre-checks (Genesis)  
- chain-prep triggers (Ruin Decay)  
- Paradox event pre-processing (Flux/Thread hooks)  

All extracted triggers enter the **Trigger Queue**.

### 2.4 Stack Insertion  
Triggers enter Stack in timestamp order:

1. Active player triggers  
2. Non-active player triggers  
3. Realm overrides applied  
4. Priority opens  

---

# 🜂 3. Pre-Block Priority — Engine Behavior  

Before blockers are declared:

- both players alternate priority  
- players may activate Fast abilities  
- players may modify combat state (buffs, debuffs, redirection, visibility changes, etc.)  
- players may NOT declare blockers prematurely  

Interrupts may occur here (Paradox Thread, Null Suppression, Veil timing shifts).

---

# 🜃 4. Declare Blockers — Engine Logic  

### 4.1 Blocker Legality Check  
A Unit may block only if:

- under defender’s control  
- not Stunned  
- not suppressed from blocking  
- obeying “must block if able” effects  
- obeying Guard constraint ordering  

---

### 4.2 Guard Enforcement Algorithm  
If any defending Unit has **Guard**, the engine enforces:

```
if (defender.hasGuardUnit && attacker.isBlockable):
    blockGuardUnitFirst()
```

Guard must be assigned before any other blocks unless attacker is immune to Guard or Guard is suppressed.

---

### 4.3 Block Declaration Event  

```
Event_BlockersDeclared {
  assignments: { AttackerID: [BlockerIDs] },
  controller: defendingPlayerID,
  timestamp: T
}
```

---

### 4.4 Block Trigger Extraction  

Extracted triggers include:

- OnBlock  
- OnDeclareBlockers  
- Dominion intercept modifications  
- Veil bind/displacement effects  
- Ruin “pre-decay” bindings  
- Genesis bloom checks  
- Null suppression windows  

Triggers enter the Stack and resolve before moving to damage.

---

# 🜄 5. Pre-Damage Priority Window  

Both players may:

- activate abilities  
- play Fast Actions  
- modify combat state  
- attempt to prevent or redirect damage  
- attempt to modify stats before lethal calculations  

All effects must respect event replacement ordering.

---

# 🜅 6. Combat Damage Step — Engine Algorithm  

The Combat Damage Step is the most timing-sensitive part of combat.

The engine executes the following multi-layered sequence:

---

## 6.1 Strike Layer  

If any participating Unit has **Strike**:

1. Strike damage is assigned  
2. Replacement checks apply to Strike damage  
3. Strike damage is applied  
4. SBA loop runs  
5. Surviving Units assign normal damage  

This layer ensures deterministic Strike sequencing.

---

## 6.2 Normal Damage Layer  

### 6.2.1 Damage Assignment  
For each attacker:

```
DamageAssignment {
  attackerID: X,
  targetID: Y,
  amount: attacker.power
}
```

Blockers assign damage according to their power.

---

## 6.2.2 Replacement Window (Engine-Level)  
Before damage is applied, engine checks:

- Prevention effects  
- Damage conversion (Wither, Solace)  
- Damage redirection  
- Realm overrides (Paradox Flux-based modifications)  
- Null suppression removing modifiers  

### Replacement Ordering:
1. Controller of affected object chooses order  
2. Apply replacement #1  
3. Reevaluate damage  
4. Apply replacement #2  
5. Continue until no valid replacements remain  

---

## 6.2.3 Damage Application  

A **DamageEvent** is generated:

```
Event_DamageApplied {
  source: EntityID,
  target: EntityID,
  amount: N,
  damageType: CombatDamage,
  timestamp: T
}
```

This event is atomic and cannot be interrupted.

---

## 6.2.4 Trigger Extraction  

Triggers include:

- OnDamage  
- OnUnitDamaged  
- OnChampionDamaged  
- Wither conversions  
- Dominion rally surges  
- Ruin Decay triggers  
- Genesis “Bloom-on-healing” retrochecks  
- Paradox probabilistic branch triggers  

Triggers enter the queue in order.

---

## 6.2.5 State-Based Action Loop  

After each damage instance:

Engine checks for:

- lethal damage  
- 0 Defense  
- 0 Resolve win condition  
- transformation conditions (Genesis Evolve)  
- decayed Units hitting death thresholds (Ruin)  
- suppression cleanup (Null)  

Loop continues until no further SBA applies.

---

# 🜆 7. Post-Damage Priority  

Players alternate priority again.

During this window:

- triggered abilities resolve  
- players may cast Fast Actions  
- players may activate abilities affecting post-combat state  
- death triggers finalize  

This window must resolve fully before post-combat triggers.

---

# 🜇 8. Post-Combat Trigger Window  

This includes:

- “When a Unit dies…”  
- “At the end of Combat…”  
- Ruin chain reactions  
- Solace recovery pulses  
- Paradox outcome stabilization  
- Genesis evolution final checks  

Triggers are extracted → queued → inserted into the Stack.

All must resolve before cleanup.

---

# 🜈 9. End of Combat Cleanup — Engine Operations  

Cleanup consists of:

- removing temporary modifiers (“until end of Combat”)  
- clearing combat-only buffs  
- finalizing stat changes  
- resetting combat flags  
- releasing forced-attack or forced-block states  
- final SBA pass  

After Cleanup, no further combat interactions are allowed.

---

# 🜉 10. Multi-Blockers & Multi-Attackers — Engine Rules  

### 10.1 Multi-Blockers  
If a Unit blocks multiple attackers:

```
damageDistribution = evenlyDistributedUnlessSpecified()
```

If a multi-blocker dies mid-step, remaining damage is recalculated.

### 10.2 Multi-Attackers  
Some effects allow a Unit to attack multiple times or multiple targets.

The engine treats each attack declaration as an independent combat chain.

---

# 🜊 11. Forced Combat Behavior  

### 11.1 Forced Attack  
Units with “must attack if able” are evaluated during Declare Attackers.

### 11.2 Forced Block  
Units with “must block if able” are evaluated during Declare Blockers.

Forced behaviors override voluntary assignments but cannot force illegal actions.

---

# 🜋 12. Illegal Combat Timing — Engine Enforcement  

Engine rejects illegal actions with appropriate codes:

- **ERROR_ILLEGAL_ATTACKER**  
- **ERROR_ILLEGAL_BLOCKER**  
- **ERROR_INVALID_DAMAGE_TARGET**  
- **ERROR_CANNOT_MODIFY_FINALIZED_EVENT**  
- **ERROR_TIMING_NOT_ALLOWED**  

No cost is paid.  
No Stack item is created.  
Priority reverts to opponent.

---

# 🜌 13. Deterministic Replay Requirements  

Combat events must serialize with:

- attacker & blocker assignments  
- damage events  
- replacement application order  
- trigger queue states  
- SBA cascades  
- RNG seeds (for Paradox)  
- timestamps  
- state diffs  

Replays must produce identical results across all platforms and patches.

---

# 🜍 14. Performance Constraints  

Combat engine must:

- resolve full combat steps < 3ms under load  
- support 300+ concurrent triggers  
- serialize combat diffs in < 512 bytes  
- isolate recursion in Ruin/Genesis chain reactions  

If timing exceeds constraints, engine applies internal optimization flags.

---

# 🜎 15. Summary  

This document serves as the **complete engine-grade combat specification** for Council of 1000.  
It defines precise timing, deterministic structure, replacement sequencing, SBA loops, and Realm overrides.

This version is required for:

- gameplay engine developers  
- judge arbitration  
- deterministic replay systems  
- advanced QA automation  
- high-fidelity simulation testing  
- balance engineering  

Updates to this document must be version-controlled and reflected in all engine modules.

---
