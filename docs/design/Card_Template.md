# Card Template Specification  
_The Standardized Structure and Required Fields for All Cards_

This document defines the official template used for all card types in the Council of 1000 TCG.  
Its purpose is to ensure consistency across:

- design  
- development  
- templating systems  
- expansions  
- UI/UX  
- card rendering  

All cards — whether Champion, Unit, Action, Relic, or Seat — follow this universal structure with type-specific variations.

---

# 🜂 Universal Card Anatomy

Every card contains the following core components:

1. **Name**  
2. **Realm**  
3. **Card Type**  
4. **Subtype** (optional)  
5. **Influence Cost**  
6. **Rules Text**  
7. **Keywords** (optional)  
8. **Rarity**  
9. **Flavor Text** (optional)  
10. **Artist Credit** (optional)  
11. **Expansion Symbol**  
12. **Collector Number**

These components appear in a consistent order across all card frames.

---

# 🜁 Visual Frame Structure

Below is the visual hierarchy of a standard card frame:

+------------------------------------------------+
| NAME BAR |
+------------------------------------------------+
| REALM ICON | CARD TYPE / SUBTYPE |
+------------------------------------------------+
| ARTWORK PANEL |
| (Aspect-ratio locked) |
+------------------------------------------------+
| INFLUENCE COST | KEYWORDS (icons) |
+------------------------------------------------+
| RULES TEXT BOX |
| (abilities, effects, conditions, costs, etc.) |
+------------------------------------------------+
| FLAVOR TEXT (optional) |
+------------------------------------------------+
| RARITY • EXPANSION SYMBOL • COLLECTOR NUMBER |
+------------------------------------------------+


Champion cards have additional sections described later.

---

# 🜂 Universal Fields (Detailed)

### **Name**
The card’s identity.  
Must reflect Realm philosophy for Units and Relics.

### **Realm**
One of the Seven Realms:
- Dominion  
- Solace  
- Veil  
- Genesis  
- Ruin  
- Ascendance  
- Paradox  

Neutral cards list **Neutral**.

### **Card Type**
One of:
- Champion  
- Unit  
- Action  
- Relic  
- Seat  

### **Subtype** (optional)
Subtype categories include:
- Soldier, Construct, Spirit, Beast, Machine, Mutation  
- Ritual, Doctrine, Device, Edifice  
- Seat (for Seat Cards only)  
- Champion-specific subtypes (rare)

### **Influence Cost**
Top-right position.  
Indicates the Influence required to play the card.

(Champion cards do not have a cost.)

### **Rules Text**
Clear, structured, mechanically actionable text:

- triggered abilities  
- activated abilities  
- continuous effects  
- conditions  
- targeting rules  
- scaling text  

### **Keywords**
Words with independent rules definitions.  
E.g., Focus, Decay, Guard, Flux, Spawn.

### **Rarity**
- Common  
- Rare  
- Epic  
- Legendary  
- Mythic  

### **Flavor Text** *(optional)*
Non-mechanical lore, quotations, or world-building elements.

### **Expansion Symbol**
Indicates set origin.

### **Collector Number**
Appears as:  
`[###]/[Total]`  
e.g. `045/212`

---

# 🜃 Champion Card Template

Champions have a unique frame and fields:

### **Name**  
### **Realm**  
### **Card Type: Champion**  
### **Subtype** (if applicable)  
### **Resolve** *(instead of health)*  
### **Passive Ability**  
### **Activated Ability 1**  
### **Activated Ability 2** *(optional)*  
### **Signature Ability**  
### **Rarity (Rare–Mythic)**  
### **Expansion Symbol + Collector Number**

**Champions begin in play at the start of every game** and cannot be destroyed — only their **Resolve** can reach zero.

---

# 🜄 Unit Card Template

Units share the universal fields, plus:

### **Attack**  
Representing offensive power.

### **Health**  
Representing durability.

Displayed at bottom-left and bottom-right corners respectively.

### **Ability Text**  
Describes effects such as:
- On-attack  
- On-block  
- On-summon  
- On-death  

### **Keywords**  
E.g.:
- Guard  
- Strike  
- Evolve  
- Decay  
- Flux  

### **Typical Stats**
1/1 up to 10/10, with expansions introducing greater variance.

---

# 🜅 Action Card Template

Actions are instantaneous effects.

Fields:

- **Influence Cost**  
- **Rules Text**  
- **Effect Icon** *(optional UI element)*  

Actions must follow clear templating rules:

- One effect per sentence  
- Conditions before effects  
- Costs bolded  
- Targets explicitly stated  

---

# 🜆 Relic Card Template

Relics are persistent effects with no Attack/Health.

Fields:

- **Influence Cost**  
- **Static or triggered effects**  
- **Durability (optional)**  
- **Subtype** (Device, Doctrine, Artifact, Structure, etc.)

Relics occupy a unique place in design — they anchor long-term strategies.

---

# 🜇 Seat Card Template

Seat Cards represent metaphysical seats of Council authority.

They use a unique template:

### **Name**  
### **Realm (or Neutral)**  
### **Card Type: Seat**  
### **Influence Cost or Special Summoning Rule**  
### **World-Altering Effect**  
### **Legendary/Mythic Only**  
### **Flavor Text (optional but encouraged)**  

Seat Cards should feel monumental and narrative-defining.

---

# 🜈 Rules Text Formatting Guidelines

To maintain clarity:

- Use **bold** for costs (`**Pay 2 Influence**:`)  
- Use italics for conditions (`_If this Unit has Evolve…_`)  
- Use keywords consistently  
- Keep sentences short  
- Trigger format: “**When** [condition], **[effect].**”  

Examples:

- **When** this Unit attacks, **gain +1 Attack** this turn.  
- **Pay 3 Influence:** Draw 2 cards.  
- **Decay** (At the end of each turn, this Unit loses 1 Health.)  

---

# 🜉 Iconography Guidelines (Preview)

Each Realm uses a unique icon family:

- Dominion → angular blades, martial sigils  
- Solace → shields, halos, curved lines  
- Veil → runes, eyes, layered shadows  
- Genesis → spirals, branching motifs  
- Ruin → cracked circles, rot patterns  
- Ascendance → geometric harmony sigils  
- Paradox → shifting fractal glyphs  

These icons appear:

- in the name bar  
- near cost indicators  
- in keyword symbols  

(Full icon sheet defined in `/ui/realm_icons.png` — placeholder.)

---

# 🜊 Template Constraints for Digital UI

All cards must:

- maintain 3:4 aspect ratio  
- keep font sizes legible at 1080p and 4K  
- allow scaling for mobile  
- avoid overcrowding rules text  
- enable color-blind palette swap  
- reserve lower-left corner for Attack  
- reserve lower-right corner for Health  
- reserve upper-right corner for Influence Cost  

These constraints ensure cross-platform readability.

---

# 🜋 Summary

The Card Template Specification defines the standard layout and data structure for all cards in the Council of 1000 TCG, ensuring:

- visual consistency  
- mechanical clarity  
- UI/UX compatibility  
- lore alignment  
- long-term scalability  

This document serves as the foundation for designers, artists, developers, and expansion teams to create cards that feel unified across years of content.


