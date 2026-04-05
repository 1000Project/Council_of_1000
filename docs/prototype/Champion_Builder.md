# Council of 1000 – Champion Builder System
### Prototype Character Creation Design

---

# 🜂 Purpose

The Champion Builder is the first major interaction system in the prototype. Its purpose is to create emotional ownership by allowing the player to either accept fate or define their own strengths.

This system establishes player identity before combat begins.

---

# 🜁 Design Goals

The Champion Builder must:

Feel meaningful  
Be simple to understand  
Create permanent decisions  
Be fast to complete  
Lead naturally into drafting  

The builder should feel important without becoming complicated.

---

# 🜄 Champion Creation Paths

Players must choose between two options:

Random Champion  
Custom Champion

This choice is permanent.

This reinforces identity investment.

---

# Random Champion Path

Purpose:

Allow fast entry for players who prefer speed or surprise.

System behavior:

Game randomly distributes Champion Points across all stats.

Example:

Champion Points Pool:
25

Possible output:

Strength: 4  
Speed: 3  
Willpower: 6  
Intellect: 2  
Resilience: 5  
Influence: 3  
Luck: 2  

Rules:

All stats must total Champion Point pool.

Minimum stat value:
1

Maximum stat value:
No cap required for prototype.

Player cannot modify random result.

Player proceeds directly to draft.

---

# Custom Champion Path

Purpose:

Give players control over identity.

Player receives Champion Points.

Prototype value:

25 points.

Stats available:

Strength  
Speed  
Willpower  
Intellect  
Resilience  
Influence  
Luck  

Total stats must equal point pool.

---

# Stat Definitions (Prototype Level)

Stats currently provide identity only.

Mechanical effects may be added later.

Strength:
Physical impact potential.

Speed:
Turn responsiveness.

Willpower:
Mental resistance.

Intellect:
Ability complexity.

Resilience:
Durability.

Influence:
Control potential.

Luck:
Variance modifier.

For prototype these serve descriptive purposes only.

---

# Stat Allocation Rules

Player starts with:

0 points assigned.

Player distributes:

25 Champion Points.

Controls required:

Increase button  
Decrease button  

Rules:

Cannot exceed total pool.

Cannot go negative.

UI should show:

Remaining points.

Example:

Points Remaining: 7

When points reach zero:

Confirm button activates.

---

# Confirmation Step

Player must confirm allocation.

Warning message example:

"Your champion cannot be changed after this point."

Player confirms.

Champion stats lock.

Player proceeds to ability draft.

---

# Champion Data Structure (Prototype Example)

Example structure:

champion = {

faction: "Order",

stats: {
strength:5,
speed:4,
willpower:6,
intellect:3,
resilience:4,
influence:2,
luck:1
},

abilities: []

}

This structure should remain simple.

No persistence required.

---

# UI Layout Recommendation

Suggested layout:

Champion Stats Panel (left)

Stat controls (center)

Champion summary preview (right)

Bottom:

Confirm button.

Mobile responsive version:

Stack vertically.

Stats → Controls → Confirm.

---

# Visual Feedback

UI should show:

Stat changes immediately.

Points remaining update live.

Confirm button disabled until valid.

Selected stats highlighted.

Optional:

Primary stat highlight.

---

# Primary Stat Detection

System may optionally detect highest stat.

Example:

Highest stat:

Willpower.

Champion Tag:

"Will-Bound"

This is optional but useful for identity.

---

# Champion Identity Tag (Optional Prototype Feature)

After allocation:

System may generate:

Champion designation.

Example:

"The Disciplined"
"The Unbreakable"
"The Swift"

This can be based on:

Highest stat
Faction

Not required but recommended.

---

# Failure States

Invalid conditions:

Points remaining above zero.

Points exceeding pool.

Negative stat.

Confirm button must remain disabled.

---

# MVP Completion Criteria

Champion Builder complete when:

Player can choose Random or Custom.

Stats generate correctly.

Custom allocation works.

Point tracking functions.

Champion locks after confirmation.

Player proceeds to draft.

---

# Future Expansion Hooks

Possible future additions:

Stat effects on combat.

Stat scaling.

Talent trees.

Champion classes.

Equipment modifiers.

These are not part of MVP.

---

# Next System

Ability Draft System.

---
