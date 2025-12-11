# Replacement Effects  
_How Events Are Modified, Prevented, or Transformed in Council of 1000_

Replacement effects are rules that **change what an event would do** before it happens.  
They are a foundational layer of the game engine, ensuring deterministic gameplay while enabling advanced card interactions.

This expanded document explains replacement effects in a clear, readable way suitable for designers, competitive players, and gameplay teams.

---

# 🜂 1. What Is a Replacement Effect?

A replacement effect **modifies an event before it occurs**.

Examples:
- “If this Unit would take damage, reduce it by 2.”  
- “If you would draw a card, draw two instead.”  
- “If an enemy Unit would attack, Stun it instead.”  
- “If this Unit would die, transform it instead.”  

Replacement effects do **not** use the Stack.  
They apply automatically whenever their condition is met.

---

# 🜁 2. Replacement vs. Prevention vs. Triggers

### **Replacement effects change the event itself**  
Example:  
- Damage becomes Wither  
- Death becomes transformation  
- Draw becomes scry  

### **Prevention effects stop an event from happening**  
Example:  
- “Prevent the next 3 damage dealt to this Champion.”  

### **Triggers happen after an event occurs**  
Example:  
- “When this Unit takes damage, gain 1 Influence.”  

In order of application:

1. **Replacement effects**  
2. **Prevention effects**  
3. **The event occurs**  
4. **Triggers fire in response**  

This sequence preserves rule clarity and prevents contradictions.

---

# 🜂 3. When Replacement Effects Apply

A replacement effect applies when:

- an event matches its condition  
- the effect is active  
- the object is in a zone where its effect is valid  
- the event has not already been replaced or prevented  

Replacement effects check conditions **immediately before** the event would occur.

Example:

> “If this Unit would be destroyed, instead Heal it to 1 Defense.”

This replaces the destruction event.

---

# 🜃 4. Multiple Replacement Effects

When more than one replacement effect can modify an event:

### ✔ The controller of the affected object chooses the order.  
This ensures fairness and consistency.

Example:

A Unit is about to take 5 damage, and it has:

- “If this Unit would take damage, prevent 2.”  
- “If this Unit would take damage, convert it to Wither.”

The controller chooses which applies first:

1. Convert to Wither → Wither 5, then prevent 2 → Wither 3  
OR  
2. Prevent 2 → damage becomes 3 → convert to Wither 3  

Both sequences are legal but produce different outcomes.

---

# 🜄 5. Replacement Effects Cannot Loop

A replacement effect cannot re-replace an event that was already replaced by itself.

Example:

> “If this Unit would take damage, it takes 2 more instead.”

This cannot cause infinite loops such as:

- replace 3 → apply replacement → becomes 5 → replacement sees 5 → becomes 7 → etc.

The engine applies a **once-per-event-per-effect rule** to prevent recursion.

---

# 🜅 6. Common Types of Replacement Effects  

### 6.1 Damage Modification  
- Reduce damage  
- Increase damage  
- Convert damage to Wither  
- Redirect damage to another target  

### 6.2 Destruction Replacement  
- “If this would die, transform it.”  
- “If this would be destroyed, return it to hand.”  
- “If this Unit would be destroyed, exile it instead.”

### 6.3 Draw Replacement  
- “If you would draw a card, draw two instead.”  
- “If an opponent would draw, they discard then draw.”  
- “If you would draw, Scry instead.”

### 6.4 Summoning Replacement  
- “If you would summon a Unit, create a token copy instead.”  
- “If an enemy Unit would be summoned, Stun it.”

### 6.5 Movement Replacement  
- “If this would leave the Field, exile it instead.”  
- “If a Unit would enter your graveyard, shuffle it into your deck.”

---

# 🜆 7. Replacement Effects by Realm Identity  

Each Realm has characteristic replacements:

### Dominion  
- Damage becomes intimidation  
- Forced attacks replace voluntary assignments  

### Veil  
- Draw becomes scry  
- Targeting becomes displacement  
- Summoning becomes concealment  

### Ruin  
- Damage becomes Wither  
- Death becomes decay  
- Healing becomes corruption  

### Genesis  
- Death becomes transformation  
- Summoning becomes evolve checks  
- Healing becomes Bloom triggers  

### Paradox  
- Draw becomes probabilistic outcomes  
- Damage becomes branch events  
- Any event may be recursively evaluated under Thread/Flux logic  

### Solace  
- Damage becomes prevention  
- Death becomes salvation or restoration  

### Null  
- All effects may be replaced with suppression  
- Actions may be replaced with void exile  
- Trigger generation may be replaced with silencing  

---

# 🜇 8. Priority and Replacement Effects  

Replacement effects **never** use the Stack.  
They:

- apply instantly  
- do not allow responses  
- cannot be interrupted  
- evaluate before costs or actions finalize  

Players gain priority **after** replacement effects resolve, not during.

---

# 🜈 9. Replacement and Simultaneous Events  

If multiple events occur simultaneously:

- each event checks replacement windows independently  
- ordering follows active player → non-active player  
- Realm modifiers may alter event decomposition  

Example:

Three Units take lethal damage simultaneously under a Ruin Aura:

- all three damage events process replacement  
- Wither conversions apply independently  
- Decay triggers load after SBA pass  

---

# 🜉 10. Replacement Violations  

A replacement effect cannot:

- modify an event that has already resolved  
- modify an event that has already been replaced  
- modify a cost  
- modify an illegal action  
- modify a trigger that has already entered the Stack  

If a card tries to override any of these rules, the effect fails.

---

# 🜊 11. Summary  

Replacement effects provide the foundation for:

- damage modification  
- destruction transformation  
- draw rewriting  
- event redirection  
- Realm-identity mechanics  

This expanded document defines the gameplay-facing rules.  
A deeper engine-level version is available in:

`ReplacementEffects_Extended.md`

---
