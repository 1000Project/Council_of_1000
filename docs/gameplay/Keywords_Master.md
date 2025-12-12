# Keywords Master Reference  
_How Core Mechanics Are Encoded into Shortcut Language_

Keywords are short, consistent labels that compress complex rules into a single word or phrase.  
They exist to keep card text readable while retaining precise mechanical meaning.

This document explains **what keywords do**, **how they behave**, and **how they express Realm identity** in Council of 1000.

It is written for players, designers, and gameplay teams. A deeper, engine-only breakdown lives in the developer docs.

---

# 🜂 1. What Keywords Are (and Are Not)

A **keyword** is a rules label that:

- has a fixed, canonical meaning  
- always behaves the same way wherever it appears  
- may bundle multiple rules into a single word or phrase  

Keywords are **not** flavor text.  
They are rules.

When a card says it has **Strike**, **Wither**, or **Guard**, that is not just color — it is binding.

---

# 🜁 2. Keyword Categories

For clarity and implementation, keywords are grouped into four broad categories:

1. **Universal Keywords**  
   - available across all Realms  
   - define basic combat and interaction rules  

2. **Combat Keywords**  
   - modify how Units attack, block, and deal damage  

3. **Zone & Visibility Keywords**  
   - modify where and how cards exist (Field, hand, graveyard, exile, concealed, etc.)  

4. **Realm-Identity Keywords**  
   - unique to a Realm’s philosophy and mechanical identity  
   - the “signature moves” of Dominion, Veil, Ruin, Genesis, Paradox, Solace, and Null  

This document focuses on **what players and designers need to know**.  
Developer-specific timing, SBAs, and replacement-layer interactions are defined in the engine docs.

---

# 🜂 3. Universal Keywords  

These can appear in any Realm and form the **baseline toolkit** of the game.

### **Guard**  
> This Unit must be blocked first if able.

- Opponents cannot block around a Guard Unit if a legal block exists.  
- Multiple Guard Units follow normal block assignment rules; the attacker must respect all legal constraints.  

---

### **Strike**  
> This Unit deals combat damage before Units without Strike.

- If both attacker and blocker have Strike, damage is simultaneous between them.  
- Surviving Units then deal normal combat damage.  

---

### **Pierce**  
> Excess combat damage dealt to a Unit is dealt to the opposing Champion.

- Only combat damage can Pierce to a Champion.  
- If multiple blockers are involved, damage assignment follows the card’s specified order, then excess (if any) Pierces.

---

### **Ambush**  
> This Unit can attack the turn it enters the Field.

- Ignores the usual “summoning fatigue” rule.  
- Does not override other restrictions (Stun, Suppress, etc.).

---

### **Stun**  
> A Stunned Unit cannot attack, block, or activate abilities until it is unstunned or the effect ends.

Stun is a **state**, not a damage effect.

---

### **Root**  
> A Rooted Unit cannot attack and may have movement restrictions depending on the effect text.

Root affects **attacking** and often positioning; it does not inherently silence abilities unless stated.

---

### **Silence**  
> Remove this Unit’s printed abilities until end of turn or duration specified.

- Does not remove Realm alignment or card name.  
- Does not remove damage, buffs, or debuffs already applied.

---

### **Lifedrain**  
> When this Unit deals combat damage, its controller heals their Champion for that much.

If prevented or replaced damage occurs, Lifedrain respects the **final, applied amount**.

---

# 🜃 4. Combat Keywords  

These keywords live primarily in the **Combat Phase** and define how damage and blocking work.

### **Rally** (Dominion-associated, but can appear elsewhere)  
> When this Unit attacks, apply its Rally effect.

Rally commonly:
- buffs attacking Units  
- debuffs defenders  
- applies Dominion-style pressure  

---

### **Wither** (Primarily Ruin)  
> Damage dealt by this Unit permanently reduces Defense instead of only marking damage.

- Wither turns damage into **stat change**.  
- If Defense is reduced to 0, SBAs destroy the Unit.

---

### **Retaliate**  
> When this Unit is dealt combat damage, it deals damage back to the source (if still present).

Retaliate can trigger even when the Unit dies, depending on timing and card text.

---

### **Vanguard** (Often Solace)  
> This Unit takes damage meant for your Champion as long as it is able to.

Vanguard may be implemented as a redirecting replacement effect or as a static combat rule, depending on design.

---

# 🜄 5. Zone & Visibility Keywords  

These keywords define how cards **exist in space** and what information is visible.

### **Conceal / Concealed** (Veil-focused)  
> A Concealed card is hidden information, revealed only under specific conditions.

- Concealed Units may enter the Field face-down or as “unknown” to the opponent.  
- Effects specify when and how they are revealed (on attack, at end of turn, when targeted, etc.).

---

### **Exile**  
> Remove the card from normal zones; it no longer interacts with the game except by effects that reference exile.

Exile is a **harder removal** than graveyard and is often used by Null, Veil, and certain high-impact effects.

---

### **Suppress / Suppressed** (Null signature)  
> A Suppressed object exists but its abilities are disabled.

- Champion or Unit abilities may be turned off.  
- Some suppression also affects keywords or Realm-based bonuses.

---

### **Persist**  
> When this Unit would leave play, it returns to the Field or another specified zone instead.

Persist is usually limited (e.g., “returns once” or “returns with a penalty”).

---

# 🜅 6. Realm Identity Keywords (High-Level Overview)  

Each Realm has a **keyword suite** that expresses its philosophy.  
This section names the patterns without going into every edge-case; individual Realm docs can expand further.

---

## 🜂 Dominion — Power, Control, Enforcement  

Common themes:
- enforcing attacks and blocks  
- punishing hesitation  
- battlefield presence and intimidation  

Example Dominion-aligned keywords:

### **Intimidate**  
> This Unit cannot be blocked by Units with lower Power (or specified condition).

---

### **Command**  
> While this Unit is on the Field, specified allied Units gain a bonus or rule.

---

### **Conquer**  
> When this Unit deals damage to a Champion, apply a lasting territorial or Resolve-based effect.

---

## 🜁 Veil — Knowledge, Perception, Hidden Information  

Common themes:
- concealment  
- manipulation of draws and targets  
- fog-of-war style tactics  

Example Veil-aligned keywords:

### **Veilbind**  
> Attach an ongoing debuff or restriction to a Unit, often tied to visibility, targeting, or timing.

---

### **Scry**  
> Look at the top card(s) of your deck, optionally putting them back in any order or moving some to the bottom.

---

### **Displace**  
> Move a Unit or card to another legal zone or position without destroying it.

---

## 🜃 Ruin — Decay, Attrition, Corruption  

Common themes:
- permanent stat loss  
- deterioration over time  
- value extraction from death  

Example Ruin-aligned keywords:

### **Decay**  
> At specified timings, this Unit loses Defense or triggers a deterioration effect.

---

### **Blight**  
> When this Unit damages another, apply a lasting penalty (stat loss, trigger lock, etc.).

---

### **Gravecall**  
> Interact with Units in the graveyard, often bringing them back with penalties.

---

## 🜄 Genesis — Growth, Transformation, Adaptation  

Common themes:
- transform rather than die  
- scaling stats  
- healing as a resource  

Example Genesis keywords:

### **Evolve**  
> When certain conditions are met, transform this Unit into a stronger form.

---

### **Bloom**  
> When you heal or restore, apply additional growth effects.

---

### **Seed**  
> A weaker form that is intended to grow, hatch, or become something stronger later.

---

## 🜅 Paradox — Probability, Branching Futures, Controlled Chaos  

Common themes:
- branching outcomes  
- controlled randomness  
- conditional forks based on prior events  

Example Paradox keywords:

### **Flux**  
> Choose or randomly resolve one of several defined outcomes.

---

### **Thread**  
> Set up a conditional branch that will resolve one way or another at a later timing based on state.

---

### **Echo**  
> Copy or replay a past effect or event under defined constraints.

---

## 🜆 Solace — Protection, Restoration, Prevention  

Common themes:
- damage prevention  
- healing  
- safety nets and stabilizers  

Example Solace keywords:

### **Sanctify**  
> Prevent or reduce incoming damage, often with a cap.

---

### **Renew**  
> Restore Defense or Resolve at specific triggers (end of turn, on death, etc.).

---

### **Ward**  
> The next effect that would target this object is prevented or negated.

---

## 🜇 Null — Suppression, Void, Anti-Magic  

Common themes:
- turning things off  
- exiling or voiding cards  
- preventing interactions  

Example Null keywords:

### **Voidcast**  
> Exile an Action or effect instead of letting it resolve; may also exile the source.

---

### **Nullify**  
> Counter or erase an effect, ability, or keyword, often permanently.

---

### **Silence** (shared, but especially thematic in Null)  
> Remove abilities from a Unit, as described earlier.

---

# 🜆 7. How Keywords Interact with Rules

Key rules for all keywords:

1. **Keywords are rules text.**  
   If a keyword appears on a card, it is as binding as a written paragraph.

2. **Card text can override default keyword behavior.**  
   If a card specifically redefines how a keyword behaves on that card, the card wins.

3. **Realms flavor the usage of keywords.**  
   - Ruin heavily uses Wither and Decay  
   - Genesis uses Evolve and Bloom  
   - Paradox uses Flux and Thread  
   - Null uses Suppress, Voidcast, and Nullify  

4. **Keywords must be consistent.**  
   The same keyword cannot mean different things on different cards.

5. **Timing is defined elsewhere.**  
   Keywords plug into:
   - Timing Windows  
   - Combat Rules  
   - Replacement Effects  
   - State-Based Actions  

   Those documents define *when* keyword effects can happen; keywords define *what* happens.

---

# 🜇 8. Reading Keyword-Rich Cards

When reading a card with multiple keywords:

1. Start with its **Realm identity**  
2. Note any **Universal/Combat Keywords** (Strike, Guard, Pierce, Ambush, etc.)  
3. Note any **Realm Keywords** (Decay, Bloom, Flux, Veilbind, etc.)  
4. Treat each keyword as **explicit rules text**  
5. When in doubt, check:
   - Match Engine Overview  
   - Combat Rules  
   - Replacement Effects  
   - State-Based Actions  

Those docs explain the environment that keywords live in.

---

# 🜈 9. Summary  

Keywords are the shorthand language that bind together:

- Realms  
- Champions  
- Units  
- Relics  
- Actions  
- Core engine rules  

This document gives designers, playtesters, and players a readable overview of what each keyword family is *meant* to do.

The full engine-level behavior — including timing layers, SBA hooks, and replacement/prevention integration — is defined in:

`/docs/gameplay/developer/keywords/Keywords_Engine_Spec.md`  
and related developer docs.

---

