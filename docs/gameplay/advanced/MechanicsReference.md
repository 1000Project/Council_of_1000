# Mechanics Reference  
_The Comprehensive Rules Framework for Council of 1000_

This document defines the complete mechanical structure of Council of 1000:  
how objects exist, how effects apply, how abilities behave, how rules are layered, and how the engine evaluates the game state.

It is written in **Hybrid Technical Voice** — precise enough for engineers, readable enough for executives and designers, and fully aligned with the identity of the Thousandfold Realm.

---

# 🜂 1. Core Game Objects  

Every element of gameplay is represented internally as a structured object with standardized properties.

Council of 1000 recognizes the following object categories:

### 1.1 Champion Objects
- Represent the player’s avatar  
- Possess Resolve, passive abilities, activated abilities, and signature abilities  
- Cannot enter the Void or be destroyed  
- May be modified by effects but cannot be removed from play  

### 1.2 Unit Objects
- Possess Power, Defense, abilities, statuses, and keywords  
- Exist on the Field  
- Can be damaged, healed, transformed, silenced, stunned, or destroyed  

### 1.3 Relic Objects
- Persistent global modifiers or ability sources  
- Occupy Field slots  
- May have ongoing or triggered effects  

### 1.4 Action Objects
- One-time effects  
- Enter the Stack → resolve → travel to the Void  

### 1.5 Seat Objects
- High-authority global rule modifiers  
- Apply rule-altering Auras or Edicts  
- Cannot be removed except by specialized effects  

### 1.6 Event Objects
- Timestamped internal engine messages  
- Drive triggers, responses, replacement opportunities, and rule checks  

---

# 🜁 2. Object Identity & Persistence  

Each object has:

- Unique ID  
- Realm identity  
- Timestamp (entering-play order)  
- Modification history  

Objects persist across state updates, except when:

- destroyed  
- exiled  
- transformed into another form  
- overwritten by replacement effects  

Transformation retains the original object's ID but replaces its properties with the new form.

---

# 🜃 3. Ability Types  

The game defines three primary ability categories:

### 3.1 Passive Abilities
- Always active  
- Do not use the Stack  
- Re-evaluated each state update  
- May modify global rules, stats, timing, costs, or event interpretation  

### 3.2 Activated Abilities
- Require costs (Influence, sacrificing Units, discarding cards, etc.)  
- Enter the Stack  
- Resolve only when priority is passed by both players  

### 3.3 Triggered Abilities
- Activate when a listed event occurs  
- Create Stack entries  
- Use “when,” “whenever,” or “at” language  

Triggered abilities cannot resolve instantaneously — they always create Stack items.

---

# 🜄 4. Effects  

Effects are instructions applied by abilities, actions, keywords, or rules.

Effects can:

- modify stats  
- change Resolve  
- summon Units  
- destroy Units  
- silence Units  
- move cards between zones  
- alter rules  
- create replacement windows  
- generate new events  

Effects are always:

- deterministic  
- timestamped  
- layered  
- reproducible  

This ensures replay compatibility and auditability.

---

# 🜅 5. Layer System (Rule Ordering)  

When multiple effects modify the same object or rule, modifiers apply in the following order:

### Layer 1 — Base Properties  
Printed values and static fundamentals.

### Layer 2 — Continuous Realm Modifiers  
Effects deriving from Realm identity (e.g., Bloom growth, Ruin decay interactions).

### Layer 3 — Continuous Buffs/Debuffs  
Relics, Champion auras, Seat modifiers, and similar persistent adjustments.

### Layer 4 — Keyword Modification  
Granting or removing Strike, Guard, Wither, Lifedrain, etc.

### Layer 5 — Ability Modification  
Silencing, disabling, copying, or rewriting abilities.

### Layer 6 — Rule-Altering Effects  
Timing changes, alternate win/loss conditions, Influence or draw-rule manipulation.

### Layer 7 — Final Replacement Effects  
Event-modifying effects (Wither converting damage, Sanctuary preventing damage, Voidcast exiling on resolution, etc.).

This order ensures deterministic resolution, preventing conflicts between simultaneous effect sources.

---

# 🜆 6. Targeting Rules  

Targeting follows strict legality at three points:

### 6.1 Declaration
When a spell or ability is put onto the Stack, its targets must:
- satisfy all targeting conditions  
- be visible and valid  
- not be explicitly untargetable  

### 6.2 Resolution
On resolution:
- if **all** targets are illegal → the effect fizzles  
- if **some** targets are illegal → the effect still resolves for remaining legal targets, if possible  

### 6.3 Replacement Windows
If a replacement effect modifies the event in a way that would change targets, new targets are not chosen unless the card text explicitly allows choosing new targets.

Units with **Veilbind**, **Root**, or Null-aligned suppressive effects may modify targeting legality or prevent future targeting.

---

# 🜇 7. State-Based Actions  

Before any player can take an action or a Stack item resolves, the engine performs a **state-based action check**.

Examples of state-based actions:

- Units with Defense ≤ 0 are destroyed and sent to the Void  
- Units with lethal damage marked are destroyed  
- Effects with expired durations are removed  
- Units in impossible states (e.g., Stunned + forced attack) are resolved via timestamps and Realm rules  
- Realm conditions (Genesis grow triggers, Ruin decay triggers) are applied if their conditions are persistent  
- Champions at 0 Resolve cause immediate loss  

State-based actions:
- do not use the Stack  
- are checked automatically whenever the game state changes  

---

# 🜈 8. Replacement & Prevention Effects  

Replacement and prevention effects modify events before they occur.

### Replacement Effects
These change “what would happen” into “what happens instead.”

Examples:
- **Wither** – converts damage dealt into permanent stat reduction  
- **Voidcast** – exiles an Action instead of letting it resolve  
- **Null Suppression** – causes an ability not to trigger, or modifies what it does  

### Prevention Effects
These stop an event from happening.

Examples:
- **Sanctify** – prevent the next X damage  
- **Barrier**-style effects – prevent destruction once  

### Ordering When Multiple Apply
If multiple replacement or prevention effects could apply to the same event:

1. The controller of the affected object or event chooses a replacement/prevention effect to apply first.  
2. Apply that effect in full.  
3. Recalculate whether the event still exists in a modifiable form.  
4. Apply any remaining valid replacement/prevention effects in sequence.  

Prevented events:
- do not trigger “when this happens” abilities  
- may still trigger “if this would happen” abilities, if such conditions are explicitly written

---

# 🜉 9. Priority, Timing & the Stack  

Council of 1000 uses an explicit Stack and priority system.

### 9.1 Priority
Priority is the right to take actions:
- casting Units  
- playing Actions  
- activating abilities  
- passing  

The **active player** (whose turn it is) gets priority first in each major timing window.

### 9.2 Stack Basics
- When a spell or ability is played, it goes on top of the Stack  
- Players then receive priority to respond  
- When both players pass consecutively, the top Stack item resolves  
- After resolution, state-based actions are checked, then priority passes again  

### 9.3 Timing Windows by Phase
Within each turn phase (Draw, Influence, Main, Combat, End), there are defined windows where players can act or respond.

Realm-specific effects may create additional windows or constraints, but they never remove core timing windows unless a Seat or Edict explicitly alters turn structure.

---

# 🜊 10. Realm Identity & Mechanical Expression  

Each Realm enforces thematic and mechanical identity that influences:

- which effects are more common  
- how abilities manifest  
- what kind of replacement/prevention logic appears  
- how timing interacts with that Realm’s core philosophy  

### Dominion
- Emphasizes Rally chains, aggression, combat-focused buffs  
- Frequently interacts with Combat and Main Phase windows  

### Veil
- Emphasizes information control, Scry effects, Veilbind manipulation  
- Interacts strongly with targeting and visibility-based rules  

### Ruin
- Emphasizes Decay, Wither, ruinous status conditions  
- Strong interaction with state-based actions and destruction rules  

### Genesis
- Emphasizes Evolve, Bloom, growth-driven stat changes  
- Heavy interaction with transformation rules and base property Layers  

### Paradox
- Emphasizes Flux, Thread, probabilistic branching  
- Interacts with timing and resolution logic while remaining fully deterministic at engine level  

### Solace
- Emphasizes healing, Resolve protection, Sanctify-style prevention  
- Heavy interaction with prevention layers and Champion state  

### Null
- Emphasizes suppression, anti-magic, Voidcast, ability denial  
- Strong interaction with replacement effects, ability cancellation, and targeting restrictions  

Realm identity does **not** override core rules unless explicitly stated in a Seat, Relic, or global Edict effect.

---

# 🜋 11. Champion & Seat Authority  

Champions and Seats represent two tiers of authority in the rules.

### 11.1 Champion Authority
Champions:
- define starting Resolve  
- provide Realm identity  
- grant passive and activated abilities  
- may add rule modifications localized to the controlling player’s side of the Field  

### 11.2 Seat Authority
Seats:
- create global or match-wide rules  
- may alter turn structure, draw rules, win/loss conditions, or combat constraints  
- have the highest rule precedence short of explicit rulebook overrides  

If a Seat effect conflicts with a normal card effect, the Seat effect prevails unless another Seat or Edict explicitly overrides it.

---

# 🜌 12. Illegal Actions & Rule Enforcement  

An action is illegal if:

- costs cannot be paid  
- all required targets are invalid  
- timing is not allowed  
- it attempts to break Realm restrictions  
- it would produce an impossible or undefined game state  

Illegal actions, when detected:
- are canceled  
- do not pay costs  
- do not create Stack entries  

In tournament or official play:
- judges may rewind the game state to the last known legal position  
- repeated illegal actions may result in penalties as dictated by tournament policy  

---

# 🜍 13. Summary  

This Mechanics Reference defines the **structural, logical, and layered rules** of Council of 1000.  
It is designed to support:

- deterministic, replayable matches  
- competitive fairness  
- reproducible engine implementations  
- clear Realm-based mechanical expression  

Together with `AdvancedKeywords.md`, this document forms the technical backbone of gameplay in the Thousandfold Realm.

---
