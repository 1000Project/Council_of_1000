# RULES ENGINE OVERVIEW
Version: 0.1  
Status: Draft  
File: Rules_Engine_Overview.md  

---

## 1. Purpose of This Document
This document defines the **core rules engine** of The 1000.  
It provides the structural foundation for gameplay, timing, object states, and interactions.  
This is not a full rulebook — it is the *backbone* that all gameplay rules, card specs, and expansions rely on.

---

## 2. Core Game Objects

### 2.1 Game
- A game consists of:
  - 2+ players
  - Turn structure
  - Priority system
  - Resource system
  - Shared public zones (e.g., Stack)
  - Optional Seats (format-dependent)

### 2.2 Player
Each player has:
- A Champion  
- A deck  
- Hand  
- Battlefield  
- Discard pile  
- Exile zone  
- Resource pool  
- Life total  
- Player state flags (priority, active player, etc.)

### 2.3 Champion
- A unique leader per player
- Bound to exactly one **Realm**
- May include Faction tags, class tags, and abilities
- Has stats defined in Champion Spec

### 2.4 Card
All non-Champion cards share:
- Name  
- Type  
- Realm, faction, subtype tags  
- Cost  
- Rules text  
- Current controller  
- Current zone  
- State flags (tapped, silenced, transformed, etc.)

---

## 3. Zones

### 3.1 Player Zones
- **Deck** (private, ordered)  
- **Hand** (private)  
- **Battlefield** (public)  
- **Champion Zone** (public)  
- **Discard** (public)  
- **Exile** (public)

### 3.2 Shared Zone
- **Stack** (public)  
  - Temporary area where spells/effects wait to resolve

---

## 4. Card Types (High-Level)
- **Champion**  
- **Unit**  
- **Tactic** (one-shot event)  
- **Asset / Relic / Location** (persistent permanents)  
- **Seat** (format-dependent)

The rules engine only cares about:
- Where the card enters  
- What states it can have  
- When abilities can be used  

Full definitions live in Card_Spec.

---

## 5. Turn Structure

### 5.1 Standard Turn (Template)
1. **Start Phase**
   - Upkeep triggers
   - Resource refresh

2. **Draw Phase**
   - Draw 1 card
   - Resolve draw triggers

3. **Main Phase**
   - Play cards
   - Activate abilities
   - Declare actions

4. **Combat Phase**
   - Declare attackers
   - Declare defenders
   - Resolve combat
   - Post-combat triggers

5. **End Phase**
   - End-step triggers
   - Cleanup (discard to max hand size, reset temporary effects)

Exact naming and sequencing may be refined in Gameplay Rules.

---

## 6. Priority & The Stack

### 6.1 Priority Order
- Active player  
- Non-active players in turn order  

### 6.2 Stack Rules
- When a spell or activated ability is played:
  - It is placed on the **Stack**
  - Priority passes
- When all players pass consecutively:
  - Top object on the Stack **resolves**
- Resolution:
  - Check targets  
  - Apply effects  
  - Move the card/ability to its appropriate zone  

---

## 7. Resource System (Abstract)

### 7.1 Resource Pool
- Each player has a resource pool (name TBD)
- Used to pay costs for cards and abilities

### 7.2 Generation & Refresh
- Each turn, players refresh or gain resource (TBD in gameplay tuning)

### 7.3 Cost Modification
The engine supports:
- Cost reductions  
- Cost increases  
- Alternate costs  
- Surcharges  

These apply in a consistent order (defined in Advanced Cost Rules).

---

## 8. Damage & Life

### 8.1 Damage
Damage may be dealt to:
- Champions
- Units
- Players (if separate from Champion)
- Assets/Seats (if permitted)

Damage persistence:
- Default: **non-persistent** (clears end of turn)
- Formats/cards may override

### 8.2 Life & Defeat
A player loses if:
- Life reaches 0 or below  
- They cannot draw from an empty deck  
- A card or rule causes defeat  

A player wins when all opponents lose, unless format specifies alternative victory conditions.

---

## 9. Targeting Rules

### 9.1 Legal Targets
- Targets must be legal when chosen  
- If all targets are illegal on resolution → effect fizzles  

### 9.2 Partial Resolution
- If some targets remain legal → resolve only those targets

---

## 10. States & Modifiers

### 10.1 Common Card States
- Ready / Untapped  
- Exhausted / Tapped  
- Silenced  
- Transformed  
- Hidden / Revealed  

### 10.2 Layers (Advanced)
When multiple effects modify the same property, they apply in a deterministic order:
1. Base values  
2. Set/replacement effects  
3. Additive modifiers  
4. Multiplicative modifiers  
5. Copy effects  
6. Final adjustments  

---

## 11. Deckbuilding Hooks (Engine-Level)
The engine requires decks to meet:
- Minimum card count  
- Maximum card count  
- Copy limit per card  
- Realm alignment rules (based on Champion)  
- Optional Faction restrictions  
- Format-specific rules for sideboards  

Full details appear in Deckbuilding_Guidelines.md.

---

## 12. Formats & Modes

### 12.1 Standard
- Champion + deck  
- Seats disabled unless format adds them

### 12.2 Multiplayer
- Supports FFA and team-based rules

### 12.3 Seat/Council Formats
- Seats act as persistent battlefield objects  
- May influence win conditions  

---

## 13. Engine Events (Hooks for Devs)
- OnGameStart  
- OnTurnStart  
- OnPhaseChange  
- OnDraw  
- OnPlay  
- OnEnterBattlefield  
- OnDestroy  
- OnExile  
- OnAttack  
- OnDefend  
- OnDamage  
- OnWin  
- OnLoss  

Events support triggers, logging, replay, and external implementation (e.g., server authoritative logic).

---

## 14. Implementation Notes
The engine must be:
- Deterministic  
- Server-authoritative  
- Replay-loggable  
- Suitable for on-chain randomness (VRF) where required  
