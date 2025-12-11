# Advanced Keywords  
_The Complete Technical Specification for All Keywords in Council of 1000_

This document defines **all universal, combat, status, Realm-specific, Champion/Seat, and replacement-related keywords**, including deterministic behavior, timing interactions, and conflict resolution.  
It is written in **Hybrid Technical Voice** — readable for designers & executives, but precise for engine developers.

---

# 🜂 1. Keyword Architecture  

Keywords fall into three universal rule categories:

### **1. Continuous Keywords**  
Always active and recalculated whenever the game state updates.  
Examples: **Guard, Intimidate, Bloom**.

### **2. Triggered Keywords**  
Activate only when a specific event occurs.  
Examples: **Decay, Rally, Flux**.

### **3. Replacement / Prevention Keywords**  
Modify events before they occur.  
Examples: **Wither, Veilbind, Sanctuary**.

Each keyword belongs to one of these archetypes and may generate:

- static modifiers  
- triggered abilities  
- state-based actions  
- conditional effects  
- realm-identity rule expressions  

Keywords must always evaluate deterministically.

---

# 🜁 2. Universal Keywords  

These keywords appear across all Realms.

## **Strike**  
This Unit deals combat damage before Units without Strike.  
If both Units have Strike → damage is simultaneous.

## **Guard**  
Enemies must assign at least one blocker to this Unit before any non-Guard Units.

## **Pierce**  
Excess combat damage dealt to Units is applied to the opposing Champion’s Resolve.

## **Ambush**  
This Unit may attack the turn it enters the field.

## **Silence**  
Remove all abilities (including keywords).  
Continuous buffs/debuffs stay unless ability-derived.

## **Stun**  
The stunned Unit cannot attack or activate abilities until the stun ends.

## **Root**  
This Unit cannot be moved, returned, or repositioned.

---

# 🜄 3. Combat Keywords  

## **Vanguard**  
The first source of damage this Unit would take each turn is prevented.

## **Lifedrain**  
Your Champion heals Resolve equal to damage this Unit deals.

## **First Respond**  
This Unit may respond to specific triggers even without priority, before normal stack access.

---

# 🜃 4. Status Keywords  

Statuses exist independently of a Unit’s abilities. They may stack unless specified.

### **Burning**  
At the start of your Influence Phase, this Unit takes X damage.

### **Frozen**  
This Unit skips its next Combat Phase participation.

### **Weakened**  
Temporary stat reduction that ends at the next End Phase unless extended by effects.

---

# 🜁 5. Realm Keyword Systems (Complete Implementation)  

---

## ⭐ **DOMINION — Force, conquest, battlefield aggression**

### **Rally**  
Triggers when this Unit attacks *with at least one ally*.  
Each additional attacker increases the Rally count.

### **Intimidate**  
Units with lower Power cannot block this Unit.

---

## ⭐ **VEIL — Knowledge, deception, perception manipulation**

### **Veilbind**  
Prevent a Unit from activating abilities until End Phase.

### **Scry X**  
Look at the top X cards of your library; reorder or send any to the Void.

---

## ⭐ **RUIN — Entropy, decay, permanent destruction**

### **Decay**  
Triggered keyword.  
When this Unit deals damage → apply **permanent -1/-1** to the damaged Unit.

### **Wither**  
Replacement keyword.  
Converts damage dealt into permanent stat reduction.

---

## ⭐ **GENESIS — Growth, evolution, metamorphosis**

### **Evolve**  
When this Unit meets its listed condition, transform into its next form.

### **Bloom**  
Whenever this Unit is healed or buffed → gain +1/+1 or the specified effect.

---

## ⭐ **PARADOX — Probability distortion, branching outcomes**

### **Flux**  
Choose a random outcome from the listed effect set.  
Uses server-side deterministic RNG.

### **Thread**  
Branch the effect outcome based on weighted probabilities.

---

## ⭐ **SOLACE — Order, healing, Resolve stability**

### **Sanctify**  
Prevent the next X damage to your Champion.

### **Hymn**  
Triggered global buff for allied Units based on conditions.

---

## ⭐ **NULL — Anti-magic, void manipulation**

### **Voidcast**  
Exile target Action as it resolves.

### **Suppress**  
Prevent target Unit from gaining abilities this turn.

---

# 🜇 6. Replacement Keywords (Deep Rules)  

If multiple replacement effects attempt to modify the same event:

1. Controller chooses which applies first.  
2. Apply the first replacement in full.  
3. Re-evaluate remaining replacements for legality.  
4. Apply remaining replacements sequentially.  

If an event changes such that a replacement no longer applies, ignore it.

---

# 🜈 7. Keyword Conflict Resolution  

Examples:

### **Strike vs Vanguard**  
Vanguard’s damage prevention applies before Strike damage is dealt.

### **Wither + Lifedrain**  
Damage converts to Wither reduction, but Lifedrain still resolves based on damage dealt.

### **Silence vs Evolve**  
Silence removes the evolution ability; Evolve cannot trigger while Silenced.

### **Flux inside a replacement window**  
All Flux outcomes must occur *after* the replacement effect is applied.

---

# 🜉 8. Summary  

This document defines the complete operational keyword system used by the Council of 1000 ruleset.  
These definitions unify mechanical identity, competitive clarity, and deterministic engine behavior across all gameplay contexts.

Keywords are foundational to deck construction, combat interaction, Realm identity, and server-side match resolution.

---




