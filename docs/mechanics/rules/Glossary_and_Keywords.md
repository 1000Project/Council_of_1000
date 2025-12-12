# GLOSSARY & KEYWORDS
Version: 0.1  
Status: Draft  
File: Glossary_and_Keywords.md  

---

## 1. Purpose of This Document
This document defines the **standard rules terms and gameplay keywords** used across The 1000.  
It exists to:
- Remove ambiguity in card text  
- Keep wording consistent across expansions  
- Support both tabletop and digital implementation  

This is a **mechanics reference**, not a lore piece.

---

## 2. Core Game Terms

### 2.1 Player
A human or AI participant in the game.  
Controls a Champion, a deck, and all associated zones and permanents.

### 2.2 Champion
The primary leader/avatar of a player.  
- Chosen before the game begins  
- Defines Realm alignment and some deck restrictions  
- May have static and triggered abilities

### 2.3 Realm
A metaphysical alignment or philosophical faction.  
- Each Champion belongs to exactly one Realm  
- Many cards reference “your Champion’s Realm” or “same-Realm” units  

### 2.4 Faction
A more specific ideological or organizational tag.  
- Optional in deck construction  
- Often used in synergy cards (“buff all [Faction] units”)  

### 2.5 Card
Any physical or digital card object, including:
- Units  
- Tactics  
- Assets / Relics / Locations  
- Seat cards (if the format uses them)  

---

## 3. Zones

### 3.1 Deck
Face-down, ordered pile from which you draw cards.  
- Only the number of cards is public  
- Order is unknown, except to the rules engine when shuffling/searching

### 3.2 Hand
Private cards in your possession.  
- Only you can see them  
- Hand size may be limited by rules or card effects

### 3.3 Battlefield
Public zone where Units, Assets, Relics, Locations, and Seats remain in play.  
Often referred to as “the board.”

### 3.4 Champion Zone
Public zone reserved for Champions, if not treated as standard battlefield objects.  
- Some formats may merge this with the battlefield

### 3.5 Discard
Face-up pile of used, destroyed, or expended cards.  
Frequently referenced as “your discard pile” or “your graveyard.”

### 3.6 Exile
Public zone for cards removed from normal play.  
- Cards in exile are considered **out of the game** unless a card specifically references exile.

### 3.7 Stack
Temporary public zone where spells and abilities wait to resolve.  
- Last in, first out  
- Uses the priority system defined in the Rules Engine

---

## 4. Card States

### 4.1 Ready
The default active state of a card on the battlefield.  
- A Ready card can attack (if allowed) and use abilities that require readiness.

### 4.2 Exhausted
A card that has been used for an action and is currently unavailable for most new actions.
- Often represented by rotating/tapping the card  
- Exhausted cards cannot attack or activate [Exhaust]-cost abilities again that turn unless a card explicitly readies them.

### 4.3 Silenced
A Silenced card has its rules text ignored, except for:
- Realm, Faction, and basic type information  
- Any explicit rules that say they still apply while Silenced  

Static, triggered, and activated abilities are all disabled while the card remains Silenced.

### 4.4 Transformed
A card that has changed into another face or form.  
- Uses new name, stats, and rules text while transformed  
- Still counts as the same **card object** for ownership and ID purposes

### 4.5 Hidden / Revealed
- **Hidden**: Information about a card (such as its identity) is not public.  
- **Revealed**: Card identity is shown to all players, either temporarily or until it changes zones.

---

## 5. Timing and Priority

### 5.1 Turn
A complete cycle of phases controlled by one player (the active player).

### 5.2 Phase
A subdivision of a turn, such as Start, Draw, Main, Combat, End.  
Cards and abilities may specify which phases they can be used in.

### 5.3 Step
A finer division of a phase used for:
- Trigger windows  
- Cleanup  
- Specific rules interactions  

### 5.4 Priority
The right to act at a given time.  
- The active player gets priority first each phase  
- After a spell or ability is added to the Stack, priority passes to the next player  

---

## 6. General Rules Terms

### 6.1 Control / Controller
- **Control**: To make decisions for a card or object in play  
- **Controller**: The player currently controlling the card  
Owner and controller can be different players.

### 6.2 Owner
The player whose deck the card started in.  
Ownership never changes, even if control does.

### 6.3 Play
To **play** a card means:
- Move it from its current zone (usually Hand) to its destination zone (usually Stack or Battlefield)  
- Pay all required costs  
- Declare required targets  

### 6.4 Cast
In this game’s terminology, **play** and **cast** can be treated as equivalent unless a mode or card explicitly differentiates them.

### 6.5 Destroy
To move a permanent from the battlefield to the discard pile as a result of damage, lethal effect, or explicit “destroy” instruction.

### 6.6 Sacrifice
To move a permanent you control from the battlefield to your discard pile as the cost or effect of a card you control.  
You cannot sacrifice what you do not control.

### 6.7 Discard
To move a card from your hand to your discard pile.

### 6.8 Mill
To move cards from the top of a player’s deck directly into their discard pile.

---

## 7. Keywords (Abilities & Flags)

> Naming is placeholder where not fully finalized. These are **rules bundles** referenced by a single word on cards.

### 7.1 Guard
**Guard**  
- This unit can intercept attacks directed at another eligible target controlled by the same player.  
- When an enemy declares an attack, the defending player may assign a Guard unit as the defender instead, following combat rules.

### 7.2 Rally
**Rally**  
- When this unit enters the battlefield, you may grant a temporary buff (such as +X/+X or increased stats) to another friendly unit or group of units.  
- Exact effect will be specified on the card (“Rally: Other same-Realm units you control get +1/+0 this turn”).

### 7.3 Pierce
**Pierce**  
- Excess combat damage dealt by this unit to a blocking unit may be assigned to the defending Champion or player.  
- Pierce only matters in combat calculations.

### 7.4 Initiative
**Initiative**  
- Units with Initiative deal their combat damage before units without Initiative.  
- If a unit without Initiative is destroyed by early damage, it does not deal its own combat damage (unless a card or rule says otherwise).

### 7.5 Rush
**Rush**  
- This unit can attack on the same turn it enters the battlefield.  
- Ignores any usual “summoning sickness” or “can’t attack the turn it enters” restriction.

### 7.6 Vigil
**Vigil**  
- This unit does not Exhaust when it attacks or defends (or exhaust rules are modified for this card as specified).  
- It remains Ready for abilities or further interactions afterward.

### 7.7 Ward
**Ward**  
- The first time this card would be targeted by an enemy effect each turn, counter that effect.  
- After Ward prevents an effect, it is considered used for that turn unless the card says otherwise.

### 7.8 Resurrect
**Resurrect X**  
- Return a unit with resource cost **X or less** from your discard pile to the battlefield under your control.  
- If no X is given, the default will be defined in the card text (“Resurrect: Return a unit from your discard to the battlefield”).

### 7.9 Empower
**Empower [condition]**  
- If the stated condition is met when you play this card (or when it resolves), apply an additional effect or improved values.  
- Example: “Empower — If you control a Seat, draw 1 card.”

### 7.10 Channel
**Channel**  
- You may Exhaust this card and pay its Channel cost to produce a repeatable effect.  
- Often appears on Assets, Relics, or Locations.

### 7.11 Seatbound
**Seatbound**  
- This card’s full effect only activates if you control a Seat or if you have claimed a Council Seat in the current mode.  
- Without a Seat, Seatbound cards may be weaker or partially disabled.

---

## 8. Keyword Categories

### 8.1 Combat Keywords
- Guard  
- Pierce  
- Initiative  
- Rush  
- Vigil  

### 8.2 Utility / Support Keywords
- Rally  
- Channel  
- Empower  

### 8.3 Defensive Keywords
- Ward  
- Seatbound (conditional power scaling)  

### 8.4 Graveyard / Exile Interaction
- Resurrect  
- Mill (general term, not always printed as a keyword)  

---

## 9. Wording Conventions

### 9.1 “You” and “Your”
- “You” refers to the controller of the card.  
- “Your Champion” refers to the Champion you currently control.

### 9.2 “Same-Realm”
“Same-Realm” means:
- Shares the same Realm as your Champion  
Unless a card specifically overrides this definition.

### 9.3 “Friendly” and “Enemy”
- **Friendly**: controlled by you or your teammates (in team formats).  
- **Enemy**: controlled by opposing players.

### 9.4 “This Turn” vs “Until End of Turn”
- **This turn** and **until end of turn** are equivalent phrases and both end at the Cleanup step of the End Phase.

---

## 10. Implementation Notes
- Each keyword must have a **single authoritative definition** here.  
- Cards may not redefine keywords; they may only reference them or combine them with additional rules.  
- Digital implementation should expose a **tooltip** or **hover text** for each keyword referencing this document.

