# Timing Windows — Extended Developer Specification  
_Engine-Grade Rule Timing, Sequencing, and Deterministic Event Resolution_

This document defines the **full internal timing system** for Council of 1000:  
how all events are ordered, how all triggers fire, how the Stack resolves, how simultaneous events are broken down, and how Realms alter timing legality.

This is the *maximal* version intended for:
- engine programmers  
- QA automation  
- rules arbitration  
- deterministic replay validation  
- competitive judge documentation  

---

# 🜂 1. Fundamental Timing Principles  

### 1.1 Determinism  
All timing windows must produce identical results given identical initial conditions.

### 1.2 Priority  
Players alternate opportunities to act at every timing window.

### 1.3 Stack Resolution  
All non-passive effects use the Stack.  
The Stack always resolves **last-in-first-out**.

### 1.4 Replacement-First Rule  
Any event that can be replaced or prevented must check for replacement effects *before* execution.

### 1.5 Trigger Queue Resolution  
All triggered abilities caused by a single event enter a queue in timestamp order.

### 1.6 State-Based Action Precedence  
State-based actions MUST resolve before any player receives priority.

### 1.7 Realm Timing Overrides  
Each Realm may introduce micro-timing behaviors, but never remove core windows unless a Seat or Edict explicitly rewrites turn structure.

---

# 🜁 2. Turn Structure — Engine Breakdown  

A turn consists of the following engine-level timing windows.

```
TURN START
├─ Start-of-Turn Replacement Window
├─ Turn-Begin Triggers
├─ DRAW PHASE
│   ├─ Start-of-Draw Triggers
│   ├─ Replacement: Draw Modification
│   ├─ Draw Event
│   ├─ Post-Draw Trigger Queue
│   └─ Priority Window
├─ INFLUENCE PHASE
│   ├─ Start-of-Influence Triggers
│   ├─ Realm State Actions (Decay/Bloom/etc.)
│   ├─ Influence Gain Window
│   └─ Priority Window
├─ MAIN PHASE
│   ├─ Pre-Main Triggers
│   ├─ Priority & Action Window
│   ├─ Summon Timing
│   ├─ Activation Timing
│   ├─ Trigger Queue
│   └─ Pass-to-Combat Check
├─ COMBAT PHASE
│   ├─ Declare Attackers Window
│   ├─ Attackers Triggers
│   ├─ Pre-Block Priority
│   ├─ Declare Blockers Window
│   ├─ Block Triggers
│   ├─ Pre-Damage Priority
│   ├─ Combat Damage Resolution
│   ├─ Post-Damage State Actions
│   ├─ Post-Combat Triggers
│   └─ Post-Combat Priority Window
├─ END PHASE
│   ├─ Start-of-End Triggers
│   ├─ Cleanup & Duration Expiry
│   ├─ Final Priority Window
│   └─ End-of-Turn Triggers
└─ TURN END
```

This structure must be preserved exactly for deterministic replay.

---

# 🜃 3. Stack Timing  

### 3.1 Stack Items  
Stack items consist of:
- Actions  
- Activated Abilities  
- Triggered Abilities  
- Replacement Effect Results  

### 3.2 Stack Resolution Steps  
When the Stack resolves a single item:

1. Validate legality  
2. Check replacement windows  
3. Execute effect  
4. Generate events  
5. Add triggers to queue  
6. Run state-based actions  
7. Reopen priority  

### 3.3 Priority Flow  
```
ACTIVE PLAYER → NON-ACTIVE PLAYER → ACTIVE PLAYER → …
```
When both pass consecutively → **resolve top item**.

### 3.4 Locked Timing  
Certain abilities cannot be responded to:
- Immediate interrupts  
- Replacement-danger windows  
- Seat-imposed rule edits  

These must be labeled explicitly in card text.

---

# 🜄 4. Trigger Timing  

### 4.1 Trigger Queue  
Any event may generate *zero or more* triggered abilities.  
All triggers caused by the same event:

- enter the queue simultaneously  
- are ordered by controller  
- then by timestamp  

### 4.2 Trigger Types  
- **State-Based Triggers** — fire immediately after SBA checks  
- **Event Triggers** — fire when specific actions occur  
- **Condition Triggers** — fire when boolean states become true  

### 4.3 Trigger Resolution  
Once added to the queue, each trigger becomes a **Stack object** when its turn comes up.

Triggers NEVER bypass the Stack unless explicitly labeled *Immediate*.

---

# 🜅 5. Replacement & Prevention Timing  

### 5.1 Replacement Check  
Any time an event would occur, the engine checks for possible replacements.

Order:

1. Identify all eligible replacements  
2. Determine controller(s)  
3. Controller selects ordering  
4. Apply first replacement  
5. Reevaluate event  
6. Apply next valid replacements  

### 5.2 Prevention Check  
Prevention always occurs **after replacement effects** but before the event resolves.

### 5.3 Nested Replacements  
If a replacement effect creates a new event:
- the new event must also check replacement windows  
- infinite loops must be prevented by static caps (engine rule)  

---

# 🜆 6. State-Based Timing  

State-based actions (SBAs) are automatic checks that run:

- after any Stack item resolves  
- after any trigger resolves  
- after any event concludes  
- before any player receives priority  

### 6.1 Standard SBAs include:
- Units with Defense ≤ 0 are destroyed  
- Units with lethal damage are destroyed  
- Buff/debuff durations expire  
- Units transformed by Realm effects finalize their new state  
- Check Champion Resolve (loss condition)  
- Check for infinite timing loops  
- Genesis evolve conditions validate  
- Ruin decay thresholds apply  
- Null suppression states take effect  

### 6.2 SBA Loop  
SBAs are repeatedly checked until *no further state changes occur*.

---

# 🜇 7. Simultaneous Events  

When multiple events occur simultaneously, they are broken down:

### 7.1 Event Ordering  
1. Active player’s events  
2. Non-active player’s events  

### 7.2 Trigger Explosion Rule  
If a simultaneous event triggers multiple abilities, each group of abilities is resolved in independent trigger queues.

### 7.3 Perfect Information Rule  
All simultaneous events must be resolved using:
- timestamps  
- ordering rules  
- Realm overrides  

Nothing may interrupt a simultaneous event until it is fully decomposed.

---

# 🜈 8. Realm Timing Overrides — Full Specification  

### Dominion  
- Rally triggers occur at **Declaration of Attackers**.  
- Dominion abilities may create *additional Combat priority windows*.  

### Veil  
- May add **visibility checks** that modify action legality mid-window.  
- Some Veil abilities permit **timing displacement**, altering when triggers fire.  

### Ruin  
- Decay triggers occur **after damage but before SBA lethal checks**.  
- Some Ruin effects may reorder death timing.  

### Genesis  
- Evolve conditions are evaluated **whenever the Unit’s state changes**.  
- Transformations must complete before SBA re-check.  

### Paradox  
- Flux outcomes resolve as **atomic events**.  
- Thread branching must resolve at **the earliest legal window**.  
- RNG must be deterministic per match seed.  

### Solace  
- Prevention effects always resolve **before damage conversion layers**.  
- Sanctuary effects may insert **phase-specific prevention windows**.  

### Null  
- Suppression may cancel triggers during the timing window that generated them.  
- Voidcast may rewrite resolution timing to effectively “skip” a Stack window.  

---

# 🜉 9. Illegal Timing & Violations  

### 9.1 Illegal Timing Includes:
- playing an Action outside its allowed window  
- activating abilities without priority  
- modifying a resolved event  
- targeting after replacement finalization  
- attempting to interrupt an uninterruptible effect  

### 9.2 Illegal Action Handling
- effect is canceled  
- no costs are paid  
- Stack does not gain an item  
- priority returns to opponent  

### 9.3 Tournament Enforcement  
Judges may:
- rewind the game  
- apply penalties  
- override ambiguous player behavior  

---

# 🜊 10. Deterministic Replay Timing Specification  

For replays to be deterministic:

- all events must produce identical outcomes  
- all triggers must be ordered identically  
- RNG seeds must match match ID + turn index  
- state transitions must be timestamp-stable  
- simultaneous events must decompose identically  
- SBA cascades must occur in identical sequence  
- Realm modifiers must be applied in order  

Replay logs must include:
- event list  
- trigger queues  
- replacement ordering choices  
- RNG branches  
- state diffs  
- timestamp metadata  

---

# 🜋 11. Engine Timing Constraints  

The engine must ensure:

### 11.1 Stack Resolution Speed  
Each Stack resolution < 2ms under load.

### 11.2 Max Trigger Density  
Support for 500+ triggers in peak Ruin/Genesis/Paradox interactions.

### 11.3 Network Efficiency  
Each timing diff < 512 bytes when serialized.

### 11.4 Error Isolation  
Invalid timing cannot crash the resolution pipeline.

---

# 🜌 12. Summary  

This document defines the **complete, internal, engine-grade timing system** for Council of 1000.  
It is the canonical reference for:

- gameplay programmers  
- competitive rules officials  
- engine QA automation  
- deterministic replay validation  
- Realm identity implementation  
- Stack & timing integrity  

This file should be updated only when timing rules evolve at the engine level.

---

