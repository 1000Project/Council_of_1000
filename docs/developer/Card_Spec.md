# Card Specification  
Standard Data Format for Council of 1000 Cards

This document defines the canonical data structure for cards in the Council of 1000 TCG.

It is intended for:

- engine developers
- tooling / editor developers
- data entry / content teams
- future blockchain integration

This specification is format-agnostic. Examples use JSON.

------------------------------------------------------------
CORE CONCEPTS
------------------------------------------------------------

Every card defines:

- Identity (id, name, type, realm)
- Playability (cost, requirements)
- Stats (for Units and Champions)
- Effects (rules text, triggers, targets)
- Rarity / Set info

------------------------------------------------------------
BASE CARD SCHEMA
------------------------------------------------------------

All cards share:

{
  "id": "string",
  "name": "string",
  "card_type": "Champion | Unit | Action | Relic | Seat",
  "realm": "Dominion | Solace | Veil | Genesis | Ruin | Ascendance | Paradox",
  "rarity": "Common | Rare | Epic | Legendary | Mythic",
  "set_code": "string",
  "collector_number": "string",
  "influence_cost": 0,
  "traits": [],
  "tags": [],
  "rules_text": "string",
  "flavor_text": "string",
  "art_id": "string",
  "is_legendary": false,
  "is_canonical": false,
  "dev_notes": ""
}

------------------------------------------------------------
CHAMPION SCHEMA
------------------------------------------------------------

{
  "card_type": "Champion",
  "resolve": 30,
  "starting_influence": 1,
  "max_influence": 10,

  "passive_ability": {
    "name": "string",
    "text": "string",
    "effects": []
  },

  "active_abilities": [
    {
      "id": "string",
      "name": "string",
      "influence_cost": 2,
      "cooldown": 0,
      "timing": "MainPhase | AnyTime | CombatOnly",
      "effects": []
    }
  ],

  "ultimate_ability": {
    "name": "string",
    "condition": "string",
    "effects": []
  }
}

------------------------------------------------------------
UNIT SCHEMA
------------------------------------------------------------

{
  "card_type": "Unit",
  "power": 3,
  "health": 3,
  "speed": 1,
  "lane_restrictions": [],
  "summon_effects": [],
  "death_effects": [],
  "keywords": [],
  "abilities": []
}

------------------------------------------------------------
ACTION SCHEMA
------------------------------------------------------------

{
  "card_type": "Action",
  "speed": "Fast | Slow | Reaction",
  "targets": [],
  "effects": []
}

------------------------------------------------------------
RELIC SCHEMA
------------------------------------------------------------

{
  "card_type": "Relic",
  "durability": null,
  "slot": "Global | Lane | Champion",
  "ongoing_effects": [],
  "triggered_effects": [],
  "destruction_condition": "string"
}

------------------------------------------------------------
SEAT SCHEMA (OPTIONAL)
------------------------------------------------------------

{
  "card_type": "Seat",
  "seat_rank": "Minor | Major | High",
  "council_domain": "string",
  "attachment_rules": "ChampionOnly | RealmOnly | Global",
  "ongoing_effects": [],
  "council_edicts": []
}

------------------------------------------------------------
EFFECT STRUCTURE
------------------------------------------------------------

Effects are atomic engine operations.

{
  "effect_type": "Damage | Heal | Draw | Discard | Buff | Debuff | Spawn | Move | ModifyResource | Custom",
  "magnitude": 3,
  "targets": [],
  "duration": "Instant | EndOfTurn | Permanent | Custom",
  "conditions": [],
  "metadata": {}
}

------------------------------------------------------------
TARGET SPECIFICATION
------------------------------------------------------------

{
  "side": "Self | Opponent | Any",
  "card_type": "Champion | Unit | Relic | Seat | Any",
  "location": "Hand | Deck | Battlefield | Discard | Exile | Any",
  "lane": "Any | Left | Center | Right",
  "selection": "Single | Multiple | All | Random",
  "constraints": []
}

------------------------------------------------------------
CONDITION SPECIFICATION
------------------------------------------------------------

{
  "condition_type": "Turn | Phase | State | Resource | Realm | Custom",
  "operator": "== | != | > | < | >= | <=",
  "left": "string",
  "right": "number | string | boolean"
}

------------------------------------------------------------
KEYWORDS (INTERNAL)
------------------------------------------------------------

"keywords": [
  "Shield",
  "Overrun",
  "Wither"
]

Keywords map to internal rules:

{
  "id": "Wither",
  "rules_text": "Damage dealt by this Unit reduces Health permanently.",
  "effects_template": [
    {
      "effect_type": "Damage",
      "metadata": {
        "damage_type": "Permanent"
      }
    }
  ]
}

------------------------------------------------------------
EXAMPLE CARDS
------------------------------------------------------------

UNIT EXAMPLE:

{
  "id": "CORE-021",
  "name": "Ironfront Captain",
  "card_type": "Unit",
  "realm": "Dominion",
  "rarity": "Common",
  "set_code": "CORE",
  "collector_number": "021",
  "influence_cost": 2,
  "traits": ["Soldier", "Frontline"],
  "tags": ["Aggro", "EarlyGame"],
  "rules_text": "When Ironfront Captain attacks, it gains +1 Power until end of turn.",
  "flavor_text": "Hold the line. Break theirs.",
  "power": 2,
  "health": 2,
  "speed": 1
}

ACTION EXAMPLE:

{
  "id": "CORE-052",
  "name": "Bulwark of Solace",
  "card_type": "Action",
  "realm": "Solace",
  "rarity": "Rare",
  "set_code": "CORE",
  "collector_number": "052",
  "influence_cost": 3,
  "rules_text": "Give a friendly Unit Shield and restore 3 Resolve."
}

CHAMPION EXAMPLE:

{
  "id": "CORE-001",
  "name": "Kael, Architect of Rifts",
  "card_type": "Champion",
  "realm": "Paradox",
  "rarity": "Mythic",
  "resolve": 30,
  "starting_influence": 1,
  "max_influence": 10,
  "passive_ability": {
    "name": "Fractured Outcomes",
    "text": "Your random-target Actions resolve twice."
  }
}

------------------------------------------------------------
SUMMARY
------------------------------------------------------------

This specification defines:

- The base schema for all cards
- Specialized schemas for Champions, Units, Actions, Relics, and Seats
- The effect system
- Targeting rules
- Internal keyword structure

This is the reference for engine implementation, editors, validators, and on-chain metadata in the future.
