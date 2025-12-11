# State-Based Actions (SBAs)  
_The Hidden Rule System That Keeps the Game Consistent_

State-Based Actions are automatic checks the game performs to maintain legality, fairness, and consistency.  
They require no player input, use no Stack, and cannot be responded to.

They occur **whenever**:

- a Stack item resolves  
- a trigger resolves  
- an event occurs  
- a phase changes  
- the game state updates  

SBAs ensure that Units die at the correct time, transformations occur correctly, death chains resolve correctly, and the game does not enter an illegal state.

---

# 🜂 1. What Are SBAs?

A **State-Based Action** is a rule that the engine checks continuously.  
If the condition is ever true, the effect is applied automatically.

Examples:

- A Unit with 0 Defense is destroyed  
- A Champion at 0 Resolve loses the game  
- A Unit with lethal damage is destroyed  
- A Unit that should transform does so  
- A Ruin Unit reaching decay threshold dies  
- A suppressed or disabled Unit loses associated abilities  
- A continuous effect that expired is removed  

SBAs enforce the rules even when players forget or do not notice.

---

# 🜁 2. When SBAs Occur

SBAs run **every time the game state changes**, including:

- after each Stack resolution  
- after each trigger resolution  
- after each event resolution  
- before any player receives priority  
- after combat damage  
- after replacement effects finalize  
- when a Unit enters or leaves play  
- when an object’s stats change  

SBA checks are **recursive**:

> If an SBA changes the state, SBA checks run again.

This continues until **no SBA modifies anything further**.

---

# 🜂 3. SBAs Related to Units  

### **3.1 Destroy Units with 0 or Less Defense**  
If a Unit’s Defense reaches 0 or below → destroy it.

### **3.2 Destroy Units with Lethal Damage**  
If damage ≥ Defense → destroy it.

### **3.3 Remove Illegal Attachments**  
If a Relic, buff, or debuff becomes illegal for its host → remove or destroy it.

### **3.4 Transformations**
Genesis transformations occur when a Unit meets criteria such as:
- Evolve threshold  
- Bloom threshold  
- post-death metamorphosis  

SBAs activate these automatically.

### **3.5 Suppression & Null States**
If a Unit is suppressed:
- passive abilities turn off  
- activated abilities turn off  

SBAs ensure suppression persists correctly.

### **3.6 Guardian/Guard Position Checks**
If a Realm or Seat rule invalidates Guard → SBA removes Guard state.

---

# 🜃 4. SBAs Related to Champions  

### **4.1 Champion Loss Condition**
If a Champion reaches **0 Resolve**, that player loses the game.

### **4.2 Champion Disabled States**
Some effects silence, suppress, or disable Champion abilities.

If the condition ends, SBA restores correct abilities.

### **4.3 Alternate Win/Loss Conditions**
Seat Cards or Realm Edicts may define alternate conditions:

Example:
- Dominion “Conquest Threshold”  
- Paradox Thread collapse  
- Genesis overgrowth conditions  

SBAs enforce these win/loss checks.

---

# 🜄 5. SBAs Related to Zones  

### **5.1 Illegal Zone Assignment**
If an object is in a zone it cannot legally occupy, move it to the correct zone.

Examples:

- Cards cannot remain exiled if effect duration expired  
- Concealed Units must reveal if timing window ends  
- Units that should be removed from play (suppressed null-forms) are exiled  

### **5.2 Cleanup of Temporary Effects**
Effects lasting:
- until end of turn  
- until end of Combat  
- until the next Phase  

…are removed at SBA timing.

### **5.3 Continuous Effect Expiration**
If an aura or duration effect ends, SBA removes it.

---

# 🜅 6. SBA Chain Reactions  

SBAs frequently trigger chains:

1. A Unit receives lethal damage  
2. SBA destroys that Unit  
3. Its death triggers fire  
4. Triggers cause new damage  
5. SBA processes the new lethal damage  
6. More Units die  
7. More triggers fire  
8. SBA runs again  

This continues until:

> **No SBAs are valid.**

This ensures deterministic resolution of complex board states, especially:

- Ruin decay cascades  
- Genesis evolve chains  
- Dominion rally interactions  
- Paradox Thread branch collapses  
- massive combat exchanges  

---

# 🜆 7. SBAs and the Stack  

SBAs occur **between** Stack events.

Important:

- SBAs do *not* use the Stack  
- SBAs can happen multiple times before a player gets priority  
- triggers cannot interrupt SBAs  
- SBAs must fully resolve before the game allows any action  

This prevents paradoxes and timing exploits.

---

# 🜇 8. Realm-Specific SBA Notes  

### Dominion  
- Rally modifications may create SBA stat rechecks  

### Veil  
- Concealment expiration handled by SBA  
- Displacement timing resolves through SBA  

### Ruin  
- Decay thresholds are SBA-bound  
- Wither reductions checked every SBA pass  

### Genesis  
- Evolve & Transform are SBA-driven events  
- Bloom chain-checks occur via SBA  

### Paradox  
- Thread collapse or branch finalization is SBA-driven  
- Flux outcomes may create SBA-required reevaluations  

### Solace  
- Persistent prevention layers expire at SBA checkpoints  

### Null  
- Suppression state cleanup  
- Void persistence enforcement  

---

# 🜈 9. Illegal SBA Conditions  

Actions that violate SBA rules cannot proceed:

- a dead Unit cannot attack  
- a suppressed object cannot activate abilities  
- an illegal attachment cannot remain attached  
- a Unit with temporary stats must revert if effect ends  
- a Champion with 0 Resolve cannot continue the game  

SBAs enforce these automatically.

---

# 🜉 10. Summary  

SBAs ensure that:

- Units die correctly  
- transformations occur  
- triggers activate properly  
- suppression, concealment, wither, decay, and evolve function  
- Realm identities express consistent mechanical rules  
- the Stack resolves fairly  
- the game engine remains stable and deterministic  

This is the gameplay-facing version.  
A full engine-level version is available in:

`StateBasedActions_Extended.md`

---
