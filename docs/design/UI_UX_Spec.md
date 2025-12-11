# UI / UX Specification  
_The Visual & Interaction Framework for Council of 1000_

This document defines the user interface and user experience standards for Council of 1000.  
Its purpose is to ensure clarity, readability, thematic consistency, platform adaptability, and competitive integrity.

Council of 1000 uses a UI philosophy that unites **TCG clarity**, **Realm identity**, and **modern digital responsiveness**.

---

# 🜂 Core UX Principles

The UX is guided by three foundational principles:

### **1. Clarity Above All**
Players must always know:
- What phase they’re in  
- Whose turn it is  
- How much Influence they have  
- What cards can be played  
- What abilities are available  
- What triggered effects are waiting to resolve  

Clarity is non-negotiable.

### **2. Philosophical Identity**
Every UI element subtly reinforces Realm identity through:
- color  
- iconography  
- sound design  
- animation rhythm  

### **3. Competitive Readiness**
UI must support:
- fast decision-making  
- readable logs  
- distinct animations  
- clean stack resolution  
- accessibility modes  
- mobile scaling  

---

# 🜁 Realm-Based Color Palette

Each Realm has a canonical color pairing used throughout cards, menus, borders, and effects.

| Realm | Primary | Secondary | Tertiary / Accent |
|-------|---------|-----------|------------------|
| Dominion | Deep Crimson | Iron Black | Gold |
| Solace | Soft White | Sky Blue | Pearl / Light Gold |
| Veil | Indigo | Shadow Gray | Violet |
| Genesis | Verdant Green | Amber | Bioluminescent Teal |
| Ruin | Rot-Brown | Ash Gray | Sickly Green |
| Ascendance | Radiant Gold | White | Sapphire |
| Paradox | Fractal Blue | Void Purple | Shifting Pink/Green |

Neutral cards use desaturated tones.

These colors appear in:
- name bars  
- cost circles  
- border highlights  
- ability icons  
- menu themes  

---

# 🜂 Main HUD (Match Screen)

The battlefield UI is divided into clear regions:


| Champion Panel | Influence Bar | Champion Panel |
| Player Hand (bottom) |
| Your Board | Opponent’s |
| (Units + Relics) | Board |
| Phase Indicator | Stack / Log | End Turn Button |


### **Champion Panel**
Displays:
- Champion portrait  
- Resolve  
- Passive ability icon  
- Activated ability icons  
- Signature ability UI lock/unlock  

### **Influence Bar**
Top center:
- Displays current Influence  
- Shows cap (10)  
- Highlights when enough Influence is available to play specific cards  

### **Phase Indicator**
Smoothly transitions:
- Draw  
- Influence  
- Main  
- Combat  
- End  

Color-coded by Realm for turn-owner clarity.

### **Stack / Log**
Expandable sidebar showing:
- triggered effects  
- pending actions  
- ability resolutions  
- combat steps  

---

# 🜃 Hand UI

Cards in hand must be:

- large enough to read card names  
- fan out dynamically  
- highlight when playable  
- gently shake/pulse when important triggers occur  

Hover (desktop) or long-press (mobile) shows:
- full-size preview  
- zoomed text  
- keyword tooltips  

---

# 🜄 Board Layout

### **Units**
Appear on a horizontal line.  
Attack = bottom left, Health = bottom right.

Units highlight:
- red when attacking  
- blue when blocking  
- white when targeted  
- gold when gaining buffs  

### **Relics**
Placed behind Units.  
Durability or persistent icons appear in top-right of the Relic frame.

### **Summoning Flow**
Newly summoned Units animate via:
- Realm-themed entrance  
- Quick fade-in → settle  

Genesis Units: growth / vine / light creation  
Ruin Units: rot spreading  
Dominion Units: impact landing  
Veil Units: emerge from shadow  
Paradox Units: glitch / warp  
Ascendance Units: radiant flare  
Solace Units: soft glow  

---

# 🜅 Champion Abilities UI

Champion abilities appear in a dedicated sidebar.

Three buttons:

1. **Passive (non-clickable)**  
2. **Ability 1** — clickable  
3. **Ability 2** — clickable  
4. **Signature Ability** — appears locked until conditions met  

Locked abilities show:

- Influence requirement  
- Additional conditions  
- Gated visual (chains, seals, etc.)

Animations:
- Ability activation sends a Realm-colored pulse across the board  

---

# 🜆 Seat Card UI

Seat Cards alter the battlefield and must feel **monumental**.

Activation triggers:

- widescreen banner  
- Realm sigil flash  
- perspective shift animation  
- camera zoom-out slightly (digital)  

Seat effects appear in a persistent panel at the top or side of the board.

---

# 🜇 Tooltip & Keyword System

Hovering or pressing a keyword automatically reveals:

- definition  
- Realm-specific notes  
- mechanical examples  

Keywords always appear:

- bolded  
- color-coded by Realm  

Example:

- **Decay (Ruin)**  
- **Focus (Ascendance)**  
- **Flux (Paradox)**  

---

# 🜈 Menu UX Flows

### **Main Menu**
- Play  
- Deck Builder  
- Champions  
- Collection  
- Shop  
- Lore Codex  
- Settings  

Menus use Realm identity colors based on the last selected Champion.

### **Deck Builder**
Three-panel design:

Left: Champion + Realm Info
Center: Card List / Search
Right: Deck Details / Stats


Supports:
- drag & drop  
- real-time deck legality checks  
- synergy highlights  

### **Lore Codex**
Unlockable entries for:
- Realms  
- Champions  
- Seats  
- Events  
- History  

Interactive 3D or animated Realm sigils recommended.

---

# 🜉 Accessibility Requirements

UI must support:

- colorblind modes (all 3 types)  
- motion reduction  
- large text mode  
- simplified card frames  
- keyboard-only navigation  
- mobile-first scaling  

No essential information may rely solely on color.

---

# 🜊 Animation Design Principles

Animations should be:

- short (<800ms)  
- readable in competitive play  
- thematic to Realm  
- never obscure game state  

Examples:

- Dominion = impact shockwaves  
- Solace = soft particle glow  
- Veil = shadow ripple  
- Genesis = organic growth  
- Ruin = decay spread  
- Ascendance = harmonic radiance  
- Paradox = fractal distortion  

---

# 🜋 Sound Design Guidelines

Each Realm has a unique audio signature:

- Dominion — metal, drums, heavy percussion  
- Solace — chimes, soft harmonics  
- Veil — whispers, reversed tones  
- Genesis — synth-organic hybrid  
- Ruin — cracks, erosion, low drones  
- Ascendance — bell tones, symmetry chimes  
- Paradox — glitched harmonics  

UI feedback tones:
- soft for selection  
- sharp for errors  
- bold for ability activations  

---

# 🜌 Summary

The UI/UX specification ensures Council of 1000 provides:

- intuitive interactions  
- visually distinct Realms  
- competitive clarity  
- scalable design for digital and mobile  
- immersive audiovisual identity  
- consistent card presentation  
- smooth gameflow  

This document serves as the visual and interaction backbone for all future development.



