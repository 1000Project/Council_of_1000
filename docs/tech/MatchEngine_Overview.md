# Match Engine Overview  
_The Authoritative Flow Logic Behind Every Match_

The Match Engine is the deterministic subsystem responsible for executing every action, trigger, phase, and combat interaction in Council of 1000.  

It ensures that gameplay is:

- fair  
- predictable  
- repeatable  
- secure  
- mechanically consistent  
- aligned with Realm identity  

This document describes *how* the engine processes a match, from turn zero to final Resolve.

---

# 🜂 Architectural Position

The Match Engine sits between:

### **Input → (Rules Validation) → Match Engine → Game State → Client Render**

It is responsible for:

- interpreting validated player actions  
- running deterministic card scripts  
- resolving the stack  
- applying state changes  
- sending updates to both clients  

It **does not** manage UI or animations (client responsibility).

---

# 🜁 Core Concepts

The engine relies on five foundational constructs:

1. **Game State**  
2. **Events**  
3. **Triggers**  
4. **Stack**  
5. **Resolution Order**

Each is described below.

---

# 1. Game State

A complete snapshot of all match information:

- turn number  
- current phase  
- active player  
- Influence values  
- Champion Resolve  
- Units  
- Relics  
- Seat Cards  
- hand contents  
- library sizes  
- discard piles  
- pending triggers  
- stack contents  
- global effects  

Game State is *immutable* during execution — every update produces a new state object.

---

# 2. Events

Events are atomic occurrences that happen during a match.

Examples:

- CardPlayed  
- UnitSummoned  
- UnitDamaged  
- ChampionDamaged  
- AbilityActivated  
- AttackDeclared  
- UnitDied  
- StartPhase  
- EndPhase  
- InfluenceGained  

Events are the **input** that cause triggers to fire.

Each event is timestamped and appended to a log.

---

# 3. Triggers

Triggers are conditional effects that fire in response to events.

Each card may contain:

- **On Summon** triggers  
- **On Attack** triggers  
- **On Damage** triggers  
- **Start/End of Turn** triggers  
- **Death** triggers  
- **Realm-Conditional** triggers  
- **Keyword** triggers (Decay, Evolve, Flux, etc.)

Triggers follow these rules:

- they capture the event  
- they create a stack item  
- stack items resolve last-in-first-out  
- they may create new events  
- new events may create additional triggers  

---

# 4. Stack

The stack is a FIFO/LIFO hybrid resolving:

- triggered abilities  
- activated abilities  
- card effects  
- reactions  
- Paradox randomization  
- Genesis branching  
- Ruin decay chains  
- Ascendance sequencing  

### **Rules for the Stack**
1. New effects are placed on top  
2. Priority alternates between players  
3. When both pass, the top effect resolves  
4. Resolved effects may create new stack entries  
5. Victory conditions checked after each resolution  

### **Example Stack Sequence**

Player A casts “Surge of Genesis”

Player B responds with “Veil Counter”

Counter resolves → Surge is nullified

Surge’s secondary trigger still fires (Evolve)

Evolve creates new stack entry

Resolve top → Unit transforms


---

# 5. Resolution Order

Every ability resolves through the same pipeline:

### Step 1 — Validate legality  
Check:
- costs paid  
- targets exist  
- timing is correct  
- card isn’t silenced, disabled, or invalid  

### Step 2 — Apply costs  
Costs are applied *before* effects.  
Examples:
- lose Influence  
- sacrifice a Unit  
- discard cards  

### Step 3 — Apply effects  
Effects may:
- modify stats  
- summon Units  
- destroy or silence Units  
- adjust Resolve  
- modify hand, deck, graveyard  
- alter global rules  

### Step 4 — Generate events  
Events feed the trigger system.

### Step 5 — Check win/loss conditions  
After every effect.

### Step 6 — Evolve state  
Produce a new immutable state to broadcast.

---

# 🜂 Turn Structure (Engine-Level)

Turn phases processed by the engine:

1. **Draw Phase**
   - draw card  
   - DeckExhaustion event triggers if empty  

2. **Influence Phase**
   - gain 1 Influence (up to 10)  
   - triggers: “Start Influence Phase”  
   - resolve Decay effects (Ruin)  
   - resolve Genesis growth ticks  

3. **Main Phase**
   - play Units/Actions/Relics  
   - activate Champion abilities  
   - cast effects  

4. **Combat Phase**
   - declare attackers  
   - declare blockers  
   - combat damage  
   - death events → recursion  

5. **End Phase**
   - cleanup  
   - resolve end-of-turn triggers  
   - pass turn  

Turn change is an event: `TurnEnded`.

---

# 🜃 Combat Engine

Combat is deterministic.

### Step 1 — Declare Attackers  
- active player selects eligible Units  
- Champion cannot attack  
- Seat Cards may modify restrictions  

### Step 2 — Declare Blockers  
- defender chooses block assignments  
- Guard Units must be blocked first  
- multi-blocking may be enabled by Relics or abilities  

### Step 3 — Combat Resolution  
Damage applies simultaneously unless modified by keywords:

- **Strike** → first strike  
- **Wither** → reduces stats permanently  
- **Rally** → Dominion triggers  
- **Decay** → apply after damage  

### Step 4 — Post-Combat Events  
- UnitDied events  
- Resolve death triggers  
- Check Resolve of Champions  

---

# 🜄 RNG and Paradox

Paradox mechanics require secure RNG:

- Flux chooses random effects  
- Thread chooses probabilistic branches  
- Paradox Relics distort outcomes  

All RNG:

- uses server-side CSPRNG  
- is seeded per match  
- produces replayable results  
- is logged for audits  

Clients never generate randomness.

---

# 🜅 Champion Abilities in the Engine

Champions have three types of abilities:

1. **Passive**
   - applied continuously  
   - modify rules or stats  
   - checked each state update  

2. **Activated**
   - placed on the stack  
   - costs resolved first  
   - may target Units, players, or global state  

3. **Signature**
   - once per game or once per turn  
   - logged as a unique event  
   - large effects: board wipes, buffs, transformations  

---

# 🜆 Seat Cards in the Engine

Seat Cards operate at the **global layer**.

Effects include:

- altering Influence gain  
- changing card draw rules  
- modifying combat  
- creating passive global auras  
- adding alternate win conditions  

Seat Cards create persistent state modifiers with highest priority.

---

# 🜇 Error Handling

Invalid player actions are rejected with:

ERROR_INVALID_ACTION
ERROR_ILLEGAL_TARGET
ERROR_INSUFFICIENT_INFLUENCE
ERROR_TIMING_NOT_ALLOWED


Turn timers reduce by 2–5 seconds each invalid attempt to discourage spam.

---

# 🜈 Performance Constraints

Engine must:

- process a full stack resolution in <2ms  
- handle 200+ abilities per turn in late-game scenarios  
- support deterministic replay  
- produce <512-byte state diffs for network efficiency  

---

# 🜉 Deterministic Replays

Every match can be replayed from:

- initial seed  
- decklists  
- sequence of PlayerActions  

The engine guarantees deterministic outcomes.

This is critical for:

- tournaments  
- referees  
- debugging  
- integrity audits  

---

# 🜊 Summary

The Match Engine executes the real logic behind Council of 1000, ensuring:

- deterministic resolution  
- cheat-proof interactions  
- consistent rule enforcement  
- precise timing windows  
- controlled randomness  
- fair competitive play  
- scalability across expansions  

This engine is the **bridge** between card design and gameplay reality.

