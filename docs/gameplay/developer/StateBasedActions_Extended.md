# State-Based Actions (SBAs) — Extended Developer Specification  
_Engine-Level Automatic State Enforcement, Illegal State Correction, and Recursion Control_

This document defines the **complete internal SBA system** for Council of 1000, including ordering, recursion limits, death chains, Realm-specific overrides, and deterministic replay requirements.

SBAs are the “hidden engine” rules that maintain legality and prevent paradoxes.

This system MUST behave identically across all clients, servers, and patches.

---

# 🜂 1. SBA Execution Model — High-Level Overview  

State-Based Actions:

- do not use the Stack  
- cannot be responded to  
- run automatically with every state change  
- must fully resolve before players receive priority  
- recur until no further SBAs apply  

The engine uses the following loop:

```
function runSBALoop():
    repeat:
        changed = false
        for each SBA in SBA_LIST:
            if SBA.isTrue(gameState):
                apply(SBA)
                changed = true
                logSBA(SBA)
        if changed == false:
            break
```

This loop guarantees deterministic resolution of complex board states.

---

# 🜁 2. SBA Trigger Conditions — Complete List  

The engine checks the following SBA conditions **in order**:

---

## **2.1 Unit Lethality Checks**

### 2.1.1 Defense ≤ 0  
Destroy Unit.

### 2.1.2 Damage ≥ Defense  
Destroy Unit.

### 2.1.3 Lethality from Wither  
If Wither permanently reduces Defense to 0 → destroy Unit.

### 2.1.4 Ruin Decay Threshold  
If Unit reaches decay threshold → destroy Unit.

---

## **2.2 Champion Loss Conditions**

### 2.2.1 Champion Resolve ≤ 0  
The controller loses the game.

### 2.2.2 Realm-Based Alternate Loss  
Used for:
- Dominion Conquest Threshold  
- Paradox Thread Collapse  
- Genesis Overgrowth Corruption  

SBAs enforce these loss conditions without Stack interaction.

---

## **2.3 Transformations and Form Changes**

### 2.3.1 Genesis Evolve  
If evolve condition is true → transform Unit.

### 2.3.2 Genesis Transformation  
If death would occur and transformation rule applies → SBA initiates transformation.

### 2.3.3 Ruin Corruption Transform  
If decay threshold met → transform instead of destroy (if effect exists).

### 2.3.4 Null-Suppressed Reversion  
When suppression ends → revert Unit to unsuppressed state.

Transformation SBAs must finalize the new object before next SBA pass.

---

## **2.4 Attachment Legality**

### 2.4.1 Illegal Relics  
Destroy or detach relics attached to illegal host targets.

### 2.4.2 Disabled Auras  
If an aura is inactive due to suppression → remove or suspend effect.

### 2.4.3 Expired Duration Effects  
If a duration effect ended → SBA removes it.

---

## **2.5 Zone Legality**

### 2.5.1 Illegal Zone Occupancy  
If object cannot legally exist in its current zone → move it to closest legal zone.

Examples:

- cards stuck in “concealed” beyond allowed window → reveal  
- suppressed void-forms that should not persist → exile  
- Units that should be removed from field after effect expires → move to graveyard  

### 2.5.2 Exile/GY Correction  
If effect requires card to move to exile but ended early → SBA ensures proper destination.

---

## **2.6 Realm-Specific SBA Enforcement**

### Dominion  
- Rally stat recalculations  
- Intimidate suppression re-evaluation  
- Forced-attack state clearance  

### Veil  
- Concealment expiration  
- Displacement correction  
- Targeting legality rechecks  

### Ruin  
- Decay thresholds  
- Corruption stat deterioration  
- Aura death-order modifications  

### Genesis  
- Evolve rechecks  
- Transformation finalization  
- Bloom chain effects  

### Paradox  
- Thread branch finalization  
- Flux tree collapse events  
- probabilistic SBA ordering stabilizations  

### Solace  
- prevention layer expiration  
- regeneration SBA ticks  

### Null  
- suppression state enforcement  
- voidcast persistence checks  
- cancellation of disabled abilities  

These identity-driven conditions MUST occur in the exact listed order to prevent nondeterministic states.

---

# 🜂 3. SBA Ordering Rules  

SBAs MUST be processed in the following global order:

```
1. Lethal Damage
2. Defense ≤ 0
3. Ruin Decay
4. Transformations (Genesis, Ruin, Null, Solace)
5. Champion Resolve Checks
6. Illegal Attachments
7. Zone Legality Corrections
8. Duration/Effect Expiration
9. Realm-Specific Identity SBAs (in fixed identity order)
```

This ordering ensures:

- death happens before transformations unless explicitly overridden  
- transformations happen before duration cleanups  
- Zone fixes do not interrupt lethal sequencing  
- SBA loops remain deterministic  

This is critical for competitive integrity.

---

# 🜁 4. SBA Loop and Recursion Management  

SBAs may trigger recursively:

Example sequence:

1. A Unit takes lethal damage  
2. SBA destroys Unit  
3. Unit’s death triggers fire  
4. Trigger deals damage to another Unit  
5. SBA destroys second Unit  
6. Second death triggers fire  
7. SBA loop runs again  

**The engine must re-run SBA checks after each state mutation.**

### Recursion Limit:
Engine must support **at least 200 SBA passes** without risk of crash or overflow.

If more than 200 passes occur in a single frame:

```
raise ERROR_SBA_RECURSION_LIMIT
force resolution using timestamp priority order
```

Used for extreme Ruin/Genesis/Paradox chain events.

---

# 🜃 5. SBA and the Stack — Interaction Rules  

### 5.1 SBAs occur BEFORE priority.  
After any Stack resolution, SBA checks begin immediately.

### 5.2 SBAs do NOT use or enter the Stack.  
Players cannot respond.

### 5.3 SBA-triggered events DO generate triggers.  
Example:
- A Unit dies (SBA) → OnDeath triggers enter the Stack.

### 5.4 Stack cannot open until SBA loop completes.  
This ensures deterministic resolution.

---

# 🜄 6. SBA and Replacement Effects  

SBAs resolve **after** replacement and prevention windows.

Example:

A Unit takes 5 damage.
- Replacement converts damage → Wither  
- Prevention reduces damage → 3  
- Final event resolves  
- SBA checks lethal → true → destroy Unit  

SBAs cannot modify events mid-replacement.

---

# 🜅 7. SBA and Simultaneous Events  

When simultaneous events occur:

1. Decompose all events into atomic event list  
2. Apply event-level replacement  
3. Resolve events in timestamp order  
4. Run SBA loop  
5. Insert resulting triggers  
6. Run SBA loop again if triggers cause further state changes  

SBAs MUST ALWAYS run **after** all simultaneous event decomposition.

---

# 🜆 8. Illegal SBA States and Engine Enforcement  

SBAs must correct illegal states.

### Illegal State Examples:

- A Unit with 0 Defense still on field  
- A Champion at 0 Resolve still in game  
- A suppressed Unit still showing active abilities  
- A decayed Ruin Unit not destroyed  
- A concealed Unit outside legal timing  
- A relic on an incompatible Unit  
- A Unit transformed but not replaced in the object table  

### Engine Correction Requirements:

When SBA corrects an illegal state, it must:

1. apply correction  
2. log correction  
3. re-run SBA loop  
4. ensure deterministic state equivalence  

If correction cannot be completed:

```
raise ERROR_ILLEGAL_STATE_CORRECTION_FAILURE
force game reset via last stable snapshot
```

---

# 🜇 9. Deterministic Replay Requirements  

Engine must serialize:

- SBA passes  
- SBA type invoked  
- state before and after each SBA  
- timestamp metadata  
- recursion chain index  
- death ordering  
- transformation ordering  

Replay must reconstruct the **exact** sequence of SBA evaluations.

Serialization Example:

```
SBA_Log = [
  {sbaID: LethalCheck, target: Unit32, result: Destroyed, time: 18:04:22.122},
  {sbaID: EvolveCheck, target: Unit07, result: Transformed, time: 18:04:22.130},
  ...
]
```

---

# 🜈 10. Engine Performance Requirements  

SBA engine must:

- resolve each pass < 0.1 ms under load  
- handle 300+ state changes per turn  
- track death chains up to 100 Units  
- process Realm SBA overrides without timing drift  
- integrate with Stack and replacement engine without blocking  

If performance exceeds thresholds:

- engine enters optimization mode  
- dynamic SBA batching may occur (must still remain deterministic)  

---

# 🜉 11. Summary  

This document defines the **complete, engine-grade SBA system** for Council of 1000, including:

- lethal damage handling  
- transformations  
- zone legality  
- decay  
- bloom  
- suppression  
- recursion management  
- Realm-specific SBA behaviors  
- deterministic replay logging  
- ordering rules  
- illegal state correction  

This system is foundational to the digital rules engine and MUST remain stable across all updates.

---
