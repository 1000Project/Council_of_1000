# Combat Rules  
_The Comprehensive Gameplay Combat Specification_

Combat is a deterministic sequence of timing windows that govern how Units attack, block, deal damage, and apply post-combat effects.  
This document provides the **full expanded combat specification**, readable for competitive players, designers, and gameplay developers.

This version focuses on clarity and completeness while remaining consistent with the Thousandfold Realm and the established Match Engine.

---

# 🜂 1. Overview of Combat  

Combat occurs once per turn during the **Combat Phase**.  
Only the **active player** may declare attackers; the defending player declares blockers.

Combat consists of five main windows:

1. **Declare Attackers**  
2. **Attack Triggers / Pre-Block Priority**  
3. **Declare Blockers**  
4. **Combat Damage**  
5. **Post-Combat Triggers & Cleanup**

All combat interactions resolve deterministically and respect the global timing and Stack rules.

---

# 🜁 2. Declare Attackers  

### 2.1 Eligible Attackers  
A Unit may attack if:

- it is on the Field  
- it is not Stunned  
- it has been under your control since the start of your turn unless it has **Ambush**  
- combat restrictions (Root, Suppression, Seat effects) do not prevent it  

### 2.2 Declaring Attackers  
The active player simultaneously declares any number of attacking Units.

### 2.3 Attack Triggers  
After attackers are declared:

- “When this Unit attacks…” triggers fire  
- Dominion **Rally** triggers evaluate  
- Genesis, Paradox, or Ruin keywords may check additional conditions  

These triggers are added to the Stack.

### 2.4 Pre-Block Priority  
Players may respond before blockers are declared.

---

# 🜃 3. Declare Blockers  

### 3.1 Eligible Blockers  
A Unit may block if:

- it is untapped / not exhausted by effects  
- it is not Stunned, Suppressed, or Rooted in a way that prevents blocking  
- combat restrictions do not prevent it  

### 3.2 Assigning Blockers  
The defending player assigns blocking Units to attacking Units.

A single Unit may block only one attacker unless an ability says otherwise.

### 3.3 Guard Enforcement  
If a defending player controls a Unit with **Guard**, they must assign a blocker to that Unit first if possible.

### 3.4 Block Triggers  
After blockers are declared:

- “When this Unit blocks…” triggers fire  
- Realm-based modifiers apply (e.g., Veil timing effects, Ruin Decay prep logic)  
- Stack priority opens again  

---

# 🜄 4. Combat Damage  

### 4.1 Damage Assignment  
Damage is assigned simultaneously unless Strike modifies timing.

#### 4.1.1 Strike  
- Units with Strike deal damage first  
- If both have Strike, damage is simultaneous among them  
- Survivors then deal normal damage  

### 4.2 Damage Resolution Sequence  
Damage resolution follows this strict order:

1. **Assign damage** according to attacker/blocker relationships  
2. **Apply damage to Units and Champions**  
3. **Apply damage-prevention effects (Sanctify, Vanguard, etc.)**  
4. **Apply replacement effects (Wither converts damage → stat reduction)**  
5. **Apply post-damage triggers (Decay, Lifedrain, etc.)**  
6. **Run state-based actions (destroy Units with lethal damage)**  

### 4.3 Excess Damage  
If an attacker has **Pierce**, excess damage dealt to a Unit is applied to the defending Champion’s Resolve.

---

# 🜅 5. Post-Combat  

After combat damage and state-based actions resolve:

### 5.1 Post-Combat Triggers  
Examples:

- “When a Unit dies…”  
- “At the end of Combat…”  
- Ruin chain reactions  
- Genesis evolve checks  
- Null suppression expiration checks  

These enter the Stack in timestamp order.

### 5.2 Priority Window  
Both players may act again.

### 5.3 End-of-Combat Window  
Once both players pass priority, Combat Phase ends and the turn enters End Phase.

---

# 🜆 6. Special Combat Mechanics  

### 6.1 Multi-Blockers  
Some effects or keywords allow a Unit to block multiple attackers.

Rule:
- A multi-blocker assigns its damage evenly unless card text specifies otherwise.

### 6.2 Forced Attack / Forced Block  
Some effects require a Unit to attack or block if able.

- Forced attack effects override voluntary choices  
- Forced block effects apply only if a legal block exists  
- Root or Suppression may negate compulsory behavior  

### 6.3 Cannot Attack / Cannot Block  
Explicit restrictions override all other conditions.

### 6.4 Realm-Specific Combat Modifiers  

#### Dominion  
- Rally chains may generate stacking buffs  
- Intimidate modifies block legality  

#### Veil  
- Veilbind may disable combat abilities  
- Visibility-based timing may alter legal blocking  

#### Ruin  
- Wither/Decay alter survivability mid-combat  
- Some Ruin effects accelerate death timing  

#### Genesis  
- Bloom may trigger mid-combat via healing sources  
- Evolve may occur during post-combat SBA checks  

#### Paradox  
- Flux outcomes may create post-damage modifications  
- Thread may branch damage outcomes deterministically  

#### Solace  
- Prevention windows often apply before damage is finalized  

#### Null  
- Suppression may disable combat abilities before assignments  
- Void-based effects may exile Actions attempting to modify combat  

---

# 🜇 7. Simultaneous Combat Events  

Simultaneous events are decomposed using:

### 7.1 Active Player Priority Rule  
Active player’s events resolve first when ambiguous.

### 7.2 Identity-Driven Overrides  
Example:
- Ruin’s death timing often precedes non-lethal triggers  
- Genesis transformations may finalize before buffs  
- Paradox may reorder probabilistic branches  

### 7.3 SBA Enforcement  
State-based actions MUST run after every damage step before new effects can fire.

---

# 🜈 8. Post-Combat Cleanup  

Cleanup includes:

- removing temporary buffs/debuffs  
- ending “until end of Combat” effects  
- resolving end-of-Combat triggers  
- prepping Units for next phase  

No further combat actions may occur after Cleanup.

---

# 🜉 9. Illegal Combat Actions  

Actions are illegal if they:

- violate timing rules  
- declare attackers or blockers incorrectly  
- target illegal Units  
- attempt to override forced behavior contrary to rules  
- attempt to modify finalized damage  

Illegal actions are canceled with no cost and no Stack entry.

---

# 🜊 10. Summary  

Combat in Council of 1000 is deterministic, timing-driven, and Realm-sensitive.  
Every step is governed by explicit windows to ensure fairness, competitive clarity, and engine consistency.

This fully expanded version supports:
- gameplay design  
- balance teams  
- competitive rules explanation  
- Shido investor and executive review  

A developer-extended version with engine-level timing is available in  
`CombatRules_Extended.md`.

---
