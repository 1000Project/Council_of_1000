# Keywords by Realm  
_How Each Realm Expresses Its Philosophy Through Keyword Mechanics_

Each Realm in Council of 1000 has a **mechanical identity** that is expressed through its keyword suite.  
These keywords define how Units behave, how strategies emerge, and how the Realm communicates its worldview in gameplay.

This document lists all major Realm-aligned keywords and their high-level gameplay meanings.  
(Engine-level details appear in the developer spec.)

---

# 🜂 Dominion Keywords  
_Power, Control, Enforcement_

### **Rally**  
When this Unit attacks, apply its Rally effect.  
Often buffs allies or weakens defenders.

### **Intimidate**  
This Unit cannot be blocked by Units with lower Power unless an effect says otherwise.

### **Command**  
This Unit grants passive bonuses or rules to allied Units while on the Field.

### **Conquer**  
When this Unit damages a Champion, apply a lasting effect such as Resolve loss modifications or field-pressure effects.

### **Enforce**  
Opposing Units must attack or block if able. Dominion forces engagement.

---

# 🜁 Veil Keywords  
_Knowledge, Hidden Information, Manipulation_

### **Conceal**  
This card enters play hidden. It is revealed only when a specific condition is met.

### **Veilbind**  
Attach a debuff that restricts targeting, timing, or visibility.

### **Displace**  
Move a Unit or object to another legal position or zone without destroying it.

### **Scry**  
Look at the top card(s) of your deck and reorder or bottom-deck them.

### **Obscure**  
Effects that prevent targeting or make Units unselectable under certain conditions.

---

# 🜃 Ruin Keywords  
_Decay, Attrition, Corruption_

### **Wither**  
Damage dealt by this Unit permanently reduces Defense.

### **Decay**  
This Unit periodically loses Defense or triggers deterioration at defined timing windows.

### **Blight**  
Apply a persistent penalty when this Unit damages another.

### **Gravecall**  
Interact with Units in the graveyard; may resurrect them with penalties.

### **Corrupt**  
Alter a Unit or card in a destructive or degenerative way.

---

# 🜄 Genesis Keywords  
_Growth, Transformation, Adaptation_

### **Evolve**  
When specified conditions are met, transform this Unit into a stronger form.

### **Bloom**  
When healing occurs, apply additional growth effects.

### **Seed**  
This Unit is a precursor form that will grow or transform over time.

### **Regrow**  
Restore Defense or revive this Unit under certain triggers.

### **Cycle**  
Effects that cause repeatable transformation or regrowth at set intervals.

---

# 🜅 Paradox Keywords  
_Probability, Branching Futures, Controlled Uncertainty_

### **Flux**  
Choose or randomly resolve one of multiple outcomes (deterministic seed-based resolution).

### **Thread**  
Set up a branch that resolves later based on game state.

### **Echo**  
Replay or duplicate a past event, effect, or ability.

### **Fracture**  
Create a temporary split-state effect where multiple possible outcomes exist until collapse.

### **Cascade**  
A chain-reaction effect that evaluates probabilistic sequences.

---

# 🜆 Solace Keywords  
_Protection, Restoration, Preventive Measures_

### **Sanctify**  
Prevent or reduce incoming damage.

### **Renew**  
Heal or restore Defense/Resolve at defined timings.

### **Ward**  
Negate the next effect or prevent it from targeting this object.

### **Vanguard**  
This Unit takes damage intended for your Champion.

### **Purify**  
Remove debuffs or negative persistent effects.

---

# 🜇 Null Keywords  
_Suppression, Anti-Magic, Void_

### **Suppress**  
Disable this Unit’s abilities; some suppression disables keywords as well.

### **Voidcast**  
Exile an Action or effect instead of resolving it.

### **Nullify**  
Cancel or delete an ability, effect, or keyword.

### **Silence**  
Remove all printed abilities for a limited duration.

### **Erase**  
Remove a Unit or card entirely from the game’s normal zones.

---

# 🜈 Summary  

Each Realm’s keyword suite defines:

- its mechanical identity  
- its strategic playstyle  
- its flavor and thematic presence  
- how Units behave under pressure  
- how interactions stack, transform, decay, or evolve  

This file provides readable, designer-friendly descriptions.  
Engine timing, replacement interactions, and SBA hooks are defined in:

`Keywords_Engine_Spec.md`  
`Keywords_TimingInteractions.md`  
`Keywords_SBA_Interactions.md`  
`Keywords_Replacement_Interactions.md`

---
