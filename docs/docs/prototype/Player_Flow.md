# Council of 1000 – Player Flow
### Prototype Interaction Path

---

# 🜂 Purpose

This document defines the exact player journey through the prototype from entry to completion.

This flow represents the first playable experience of Council of 1000 and should be followed closely during implementation.

The goal is a smooth onboarding experience that introduces identity, choice, and combat.

---

# 🜁 Player Experience Philosophy

The prototype flow is designed to:

Create curiosity  
Force meaningful decisions  
Create ownership  
Demonstrate gameplay  
End with accomplishment  

Every screen should feel intentional.

---

# 🜄 Complete Player Flow

Player enters experience:

Landing Screen  
→ Faction Selection  
→ Champion Creation Choice  
→ Stat Allocation (if custom)  
→ Ability Draft Round 1  
→ Ability Draft Round 2  
→ Ability Draft Round 3  
→ Champion Identity Screen  
→ Tutorial Battle  
→ Victory Screen  

End of prototype.

---

# 🜃 Screen Breakdown

---

# Screen 1 — Landing Screen

Purpose:

Introduce prototype and start experience.

Content:

Council of 1000 title  
Brief atmospheric text

Example:

"From a thousand champions, only the worthy rise."

Start Prototype button.

Possible secondary text:

"Every decision is permanent."

Player Action:

Press Start.

Result:

Move to faction selection.

---

# Screen 2 — Faction Selection

Purpose:

Create player identity.

Display:

6 faction cards.

Order  
Entropy  
Knowledge  
Power  
Void  
Balance  

Each shows:

Faction name  
Symbol placeholder  
Short description  

Example:

Order:
"Structure creates strength."

Entropy:
"Chaos reveals truth."

Player Action:

Select faction.

System Response:

Confirm selection.

Warning message:

"This choice cannot be changed."

Player confirms.

Result:

Proceed to Champion Creation.

---

# Screen 3 — Champion Creation Choice

Purpose:

Allow player to choose build method.

Display:

Two options:

Random Champion  
Custom Champion  

Descriptions:

Random:
"Fate chooses your strengths."

Custom:
"Shape your own power."

Player Action:

Select path.

Result:

Random → Generate stats → Go to draft

Custom → Go to stat allocation screen

---

# Screen 4 — Stat Allocation (Custom Only)

Purpose:

Give ownership through decisions.

Display:

Champion Points total.

Example:

25 Champion Points.

Stats:

Strength  
Speed  
Willpower  
Intellect  
Resilience  
Influence  
Luck  

Controls:

Plus / Minus buttons.

Rules:

Cannot exceed point pool.

Live preview updates.

Player Action:

Allocate points.

Press Confirm.

Warning:

"Allocation cannot be changed."

Result:

Proceed to ability draft.

---

# Screen 5 — Ability Draft Round Structure

Purpose:

Create meaningful ability choices.

Structure repeated 3 times.

Display:

Round indicator:

Draft Round 1 of 3

Three ability cards displayed.

Each shows:

Ability Name  
Short description  
Simple icon placeholder  

Example:

Blade Storm  
Deal area damage.

Guardian Field  
Gain temporary shield.

Mind Break  
Reduce enemy willpower.

Player Action:

Select one ability.

System Response:

Lock selection.

Proceed to next round.

---

# Screen 6 — Champion Identity Screen

Purpose:

Reward player for creation.

Display:

Champion Summary:

Faction  
Stats  
Abilities  

Example:

Champion ID:
Prototype Champion #001

Faction:
Order

Primary Stat:
Willpower

Abilities:
Blade Storm
Guardian Field
Divine Strike

Flavor text example:

"Forged in discipline, tempered in conflict."

Player Action:

Press Enter Arena.

Result:

Tutorial battle begins.

---

# Screen 7 — Tutorial Battle

Purpose:

Demonstrate gameplay.

Structure:

4–6 turn scripted combat.

Display:

Player champion  
Enemy champion  

Health bars.

Turn indicator:

Turn 1

Action log example:

"Blade Storm deals 8 damage."

Enemy actions scripted.

Player always wins.

Important:

Player must feel powerful.

Player Action:

Advance turns.

Result:

Victory state.

---

# Screen 8 — Victory Screen

Purpose:

End experience with emotional hook.

Display:

Victory message.

Example:

"Your champion has proven worthy."

Champion summary shown again.

Possible teaser text:

"The Council awaits."

Player Action:

End prototype.

Future option placeholder:

"Continue Journey" (inactive)

---

# Flow Timing Targets

Ideal experience time:

5–10 minutes.

Target pacing:

Faction selection:
30 seconds

Champion creation:
1–2 minutes

Draft:
2–3 minutes

Battle:
2–3 minutes

Completion:
30 seconds

Fast engagement is critical.

---

# Player Emotion Targets

Flow should produce:

Curiosity → Identity → Ownership → Power → Victory → Anticipation

If achieved, prototype succeeds.

---

# UI Transition Philosophy

Transitions should feel:

Smooth  
Intentional  
Minimal  

Acceptable:

Fade transitions  
Card highlights  
Health bar animation  

Unnecessary:

Complex cinematics.

---

# MVP Flow Completion Definition

Flow is complete when:

Player can reach victory without developer assistance.

---

# Next Implementation Target

Champion Builder UI.

---