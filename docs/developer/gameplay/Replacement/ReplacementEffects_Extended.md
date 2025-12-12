# Replacement Effects — Extended Developer Specification  
_Engine-Level Rules for Event Modification, Prevention, and Deterministic Rewriting_

This document defines the **complete internal ruleset** governing replacement effects, prevention effects, redirection, and event rewriting in Council of 1000.

It is intended for engine programmers, QA automation, deterministic replay systems, and competitive rules arbitration.

The structures here MUST be consistent across all platforms and expansions.

---

# 🜂 1. Replacement Effects — Engine Definition  

A **replacement effect** is an effect that changes the outcome of an event **before** it occurs.

Key properties:

- Replacement effects DO NOT use the Stack  
- They cannot be responded to  
- They are atomic and cannot be interrupted  
- They modify, redirect, or prevent an event-in-flight  
- A replacement effect is evaluated at the precise moment the event would occur  

Replacement effects operate at the **event preparation layer**, not the resolution layer.

---

# 🜁 2. Replacement Evaluation Algorithm  

Whenever an event E would occur, the engine performs:

```
function evaluateReplacements(event E):
    R = all active replacement effects applicable to E
    used = empty set

    while R not empty:
        controller = controllerOfAffectedObject(E)
        selected = controller chooses replacement from R
        applyReplacement(selected, E)
        add selected to used
        remove from R any replacement in used
        recompute R with updated E
    return E
```

Important notes:

- Replacement applies ONE AT A TIME  
- Controller decides ordering when multiple effects exist  
- Replacements cannot reapply themselves  
- Replacements can create **new events**, which then restart evaluation  

This is mandatory for determinism.

---

# 🜂 3. Event Categories Eligible for Replacement  

Replacement effects may apply to any of the following event types:

### 3.1 **Damage Events**
- change amount  
- convert type (e.g., Wither)  
- prevent damage  
- redirect damage  
- change the target  

### 3.2 **Death / Destruction Events**
- transform instead of destroy  
- exile instead of die  
- shuffle into deck instead of graveyard  
- heal to 1 instead of destruction  

### 3.3 **Draw Events**
- draw more  
- draw fewer  
- draw becomes scry  
- draw becomes discard-then-draw  
- draw becomes probabilistic (Paradox Thread/Flux)  

### 3.4 **Summon Events**
- replace Unit with token  
- replace summon with stun  
- replace summon with evolve check  

### 3.5 **Movement Events**
- entering graveyard replaced with exile  
- entering exile replaced with void modification  
- entering field replaced with concealment  

### 3.6 **Zone Transitions**
Any movement between:  
- deck  
- hand  
- field  
- graveyard  
- exile  
- suppress/void zones  
may be replaced.

---

# 🜃 4. Replacement Timing Layers  

Replacement effects occur in a strict sequence of timing layers:

### **Layer 1: Effect Identification**
Determine all active replacements that match the event.

### **Layer 2: Ordering**
Controller of the affected object chooses which replacement to apply first.

### **Layer 3: Apply Replacement**
Replacement modifies the event object or substitutes a new event.

### **Layer 4: Recompute Valid Replacements**
Some replacements invalidate others; others become newly valid.

### **Layer 5: Prevention Layer**
Once replacement resolves, the engine checks for prevention effects.

### **Layer 6: Finalization**
The modified event proceeds to resolution.

### **Layer 7: Trigger Layer**
Triggers fire after the event resolves.

This layered sequence cannot be altered unless an Edict or Seat rewrites event priority.

---

# 🜄 5. Replacement-Triggered Event Substitution  

A replacement effect may:

- **modify** the event (e.g., change damage)  
- **substitute** the event (e.g., transform instead of die)  
- **cancel** the event (e.g., prevent draw, prevent damage)  
- **generate a new event** (e.g., scry instead of draw)  

Rules:

- If a replacement substitutes an event with another event, the new event undergoes its own replacement evaluation.  
- Substitution must maintain event type clarity for deterministic replay.  
- The engine must log replacement substitution chains.  

Example:

> “If this Unit would be destroyed, transform it into _Ashborn Revenant_ instead.”

Destruction is replaced with a Summon event.

---

# 🜅 6. Prevention Effects — Engine Behavior  

Prevention effects are **not** replacement effects.  
They run AFTER all valid replacements resolve.

Rules:

- Prevention may reduce damage to zero  
- Prevention never modifies event type  
- Prevention cannot convert or redirect damage  
- Prevention effects do not trigger unless event successfully occurs  

Priority:

1. Replacement modifies event  
2. Prevention reduces or nullifies event  
3. Event resolves  
4. Triggers fire  

---

# 🜆 7. Redirection Effects  

Redirection effects are a special subtype of replacement with constraints:

- They may change the target of an event  
- They cannot modify the event type  
- They must maintain legality after redirection  
- They cannot cause infinite loops  

Example:

> “If an ally Champion would take damage, another ally Unit takes it instead.”

Engine performs:

```
check legality(target')
event.target = target'
```

If redirection fails legality checks, the original event proceeds.

---

# 🜇 8. Recursive Replacement Detection  

To prevent infinite loops, the engine enforces:

### **Rule: A replacement effect may only apply once per event per effect instance.**

This prevents:

- Wither loops  
- negative heal recursion  
- Solace → Ruin cancellation ping-pong  
- Paradox branch reentry loops  

Engine uses an internal set:

```
usedReplacements = {effectIDs}
```

Any attempt to apply an already-used replacement to the same event is ignored.

---

# 🜈 9. Simultaneous Events and Replacement  

If multiple events occur simultaneously:

### 9.1 Event Decomposition  
Each event is unpacked into independent atomic events.

### 9.2 Replacement Evaluation Order  
1. Active player’s events  
2. Non-active player’s events  
3. Realm overrides (Paradox, Ruin, Null may reorder internally)  

### 9.3 Independent Replacement Processing  
Each event runs replacement evaluation independently.

If replacement events generate new simultaneous events, decomposition restarts.

---

# 🜉 10. Realm-Specific Replacement Architectures  

### Dominion  
- Damage → intimidation  
- Attack requirements replaced with forced action  

### Veil  
- Draw → scry  
- Summon → concealment  
- Target event → displacement  

### Ruin  
- Damage → Wither  
- Death → decay  
- Healing → corruption  

### Genesis  
- Death → transformation  
- Summon → evolve  
- Healing → Bloom growth  

### Paradox  
- Any event → probabilistic branch (Thread)  
- Draw → random outcomes (Flux)  
- Damage → branch divergence  

Paradox events must remain deterministic with seed-based replay.

### Solace  
- Damage → prevention  
- Death → salvation effects  
- Summon → healing-trigger variants  

### Null  
- Any effect → suppression or voidcast  
- Trigger generation → silenced  
- Zone movement → exile replacement  

Null replacement is absolute unless overridden by a Seat.

---

# 🜊 11. Replacement Failure Modes  

A replacement effect may fail if:

- the new event is illegal  
- the target is invalid  
- the object is gone before resolution  
- the replacement contradicts static rules  
- Null suppression overrides it  
- the effect was already applied to this event  

When a replacement fails:

- engine attempts next valid replacement  
- if none remain → event proceeds unmodified  

No trigger is created for failed replacements.

---

# 🜋 12. Deterministic Replay Requirements  

Replacement logic must serialize:

- original event  
- replacement effects applied  
- ordering chosen by controller  
- substituted events  
- final resulting event  
- RNG seeds (Paradox only)  
- event timing metadata  

Replay must reconstruct the identical event sequence.

Engine must store:

```
replacementLog = [
  { eventID, replacementID, orderIndex, resultingEvent }
]
```

This ensures competitive integrity.

---

# 🜌 13. Performance Requirements  

The replacement engine must:

- apply all replacements within < 1ms  
- handle 500+ replacement checks per turn under load  
- prevent infinite recursion  
- serialize event diffs in < 256 bytes  
- isolate replacement logic from crash paths  

Failure to meet performance constraints must raise internal engine flags for optimization.

---

# 🜍 14. Summary  

This document defines the **complete engine-grade rules** for:

- replacement effects  
- prevention effects  
- event redirection  
- event substitution  
- recursive replacement handling  
- deterministic replay logic  
- Realm-identity replacement mechanisms  

This file governs how the engine rewrites events and MUST remain absolutely stable across versions.

Updates require version tagging, test suite expansion, and compatibility verification.

---

