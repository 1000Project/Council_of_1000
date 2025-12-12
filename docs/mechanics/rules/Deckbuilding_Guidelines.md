# DECKBUILDING GUIDELINES
Version: 0.1  
Status: Draft  
File: Deckbuilding_Guidelines.md  

---

## 1. Purpose of This Document
These guidelines define how players construct legal decks for all formats of **The 1000**.  
This is a mechanical document — not flavor, not philosophy — and sets the rules enforced at game start across all modes.

---

## 2. Core Deck Requirements

### 2.1 Deck Size
Minimum and maximum card counts (format-dependent):
- **Standard Format**
  - Minimum: **40 cards**
  - Maximum: **60 cards**
- **Other formats**
  - Defined in the Format Spec and may override these numbers.

### 2.2 Copy Limit
- Maximum of **3 copies** of any single non-Champion card.
- Champion cards:
  - **1 per deck**, must match the Champion chosen for gameplay.
- Unique cards (if printed):
  - **1 copy limit** (enforced by card tag).

---

## 3. Champion Alignment Rules

### 3.1 Realm Requirement
A deck must align with the player's **Champion's Realm**.

Default rule:
- At least **60%** of the non-Champion cards must share the **same Realm** as the Champion.

### 3.2 Off-Realm Cards
- Off-Realm cards are allowed but limited:
  - Maximum: **40%** of the deck OR **16 cards** (whichever is lower).
- Certain formats may tighten or loosen this restriction.

### 3.3 Forbidden Cards by Realm
- If a card is explicitly banned by a Realm or Faction mechanic, it cannot be included.
- Bans and restrictions are defined in **Realm Rules** and **Faction Rules** documents.

---

## 4. Faction Constraints (Optional Ruleset)

### 4.1 When Factions Are Active
If the format uses **Factions**:
- A deck may include cards from any Faction **unless the Faction explicitly forbids mixing**.
- Some Champions may impose:
  - Faction-only deck restrictions
  - Faction percentage minimums
  - Faction exclusion rules

### 4.2 Faction Percentage Model
Standard faction-controlled formats use:
- **Minimum 25%** cards matching the Champion’s Faction (if the Champion has one)
- Other Factions capped at **25% each**
- Neutral cards have no limit unless specified by format

### 4.3 Multi-Faction Cards
Multi-Faction cards count as belonging to all their listed Factions for deckbuilding purposes.

---

## 5. Card Type Balance (Recommended, Not Required)

These are **guidelines**, not hard rules — provided for deckbuilding clarity in competitive formats:

- Units: 18–30 cards  
- Tactics (Spells/Events): 8–16 cards  
- Assets/Relics/Locations: 4–12 cards  

Formats may enforce minimums or maximums depending on meta environment.

---

## 6. Resource Curve Expectations (Advisory)

Not a rule — but competitive shaping guidance the engine expects players to follow:

- Low-cost (1–2 resource): 10–16 cards  
- Mid-cost (3–4 resource): 10–16 cards  
- High-cost (5–7 resource): 4–10 cards  
- Ultra-cost (8+ resource): 0–3 cards  

Decks outside these envelopes are legal but must meet all other engine requirements.

---

## 7. Seat Format Deckbuilding (Optional)

If using **Seat / Council Mode**:

### 7.1 Seat Eligibility
Some cards may include:
- “Seat-legal only”
- “Council-only”
- “Campaign-only”

Such cards **cannot** be used in Standard unless explicitly permitted.

### 7.2 Seat Cards in Decks
If Seat Cards are playable by deck:
- Limit: **1 Seat Card per deck**
- Seat Cards may not be duplicated
- Seat Cards count as Assets for type interactions unless otherwise defined

---

## 8. Sideboards (Format-Dependent)

### 8.1 Standard Sideboard
- **Up to 10 cards**
- No more than 3 copies of any card across main deck + sideboard combined
- Sideboards may only be used between games of a match

### 8.2 Restricted Formats
Some formats disable sideboards entirely.

---

## 9. Banned & Restricted Card Policies

### 9.1 Banned Cards
If a card is banned:
- It cannot appear in deck, sideboard, or Champion slot.

### 9.2 Restricted (1-copy) Cards
If a card is restricted:
- Only **1 copy** allowed across main deck + sideboard.

### 9.3 Realm/Faction Bans
Realms or Factions may impose their own banlists through expansion or narrative design.

---

## 10. Illegal Decks (Engine Enforcement)
A deck is illegal if:
- It violates deck size rules  
- It violates copy limits  
- It violates Realm alignment minimums  
- It uses forbidden Realm/Faction cards  
- It includes banned cards  
- It violates format-specific rules

Illegal decks:
- **Cannot be queued** in digital play  
- In physical tournaments, must be corrected before play begins  

---

## 11. Format Overrides
Formats may change:
- Deck size  
- Copy limits  
- Realm/Faction requirements  
- Sideboard rules  
- Seat rules  
- Banned/restricted lists  

Format definitions live in **Format_Spec.md**.

---

## 12. Implementation Notes
- Deck legality is validated **before** shuffling or drawing cards  
- Digital implementation should provide:
  - Deck legality checker  
  - Realm/Faction percentage calculator  
  - Constraint explanation for invalid decks  

