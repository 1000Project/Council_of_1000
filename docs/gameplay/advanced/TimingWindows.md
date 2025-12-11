# Timing Windows  
_The Complete Turn-Phase and Stack Timing Structure for Council of 1000_

This document defines the timing system used in Council of 1000.  
It describes how and when players may act, when triggers occur, how the Stack resolves, and how Realms interact with timing.

This is the **fully expanded version** — readable for designers, executives, and gameplay teams while containing enough technical detail for accurate implementation.

---

# 🜂 1. The Purpose of Timing Windows  

Timing windows ensure that:

- all actions occur in a predictable order  
- both players have fair opportunities to respond  
- triggered abilities fire at correct moments  
- replacement effects modify events consistently  
- Realm-specific mechanics are enforceable  
- the Stack always resolves deterministically  

No effect may occur outside a defined window unless explicitly stated.

---

# 🜁 2. The Major Timing Windows  

Council of 1000 defines timing windows inside each turn phase.

The five phases of a turn:

1. **Draw Phase**  
2. **Influence Phase**  
3. **Main Phase**  
4. **Combat Phase**  
5. **End Phase**

Each phase contains **specific, repeatable windows** where actions can be taken.

---

# 1. Draw Phase Timing  

### **1.1 Start-of-Draw triggers**
Abilities that read:
- “At the start of your Draw Phase…”
- “When Draw Phase begins…”

These triggers enter the Stack before drawing.

### **1.2 Draw window**
You draw one card unless a Seat or effect changes the rule.  
If your library is empty → Deck Exhaustion triggers.

### **1.3 Post-draw timing**
Players receive priority to respond:
- abilities  
- Actions  
- speed-appropriate effects  

No Unit may attack in this phase; no Combat actions may be initiated.

---

# 2. Influence Phase Timing  

### **2.1 Start-of-Influence triggers**  
Examples:
- Ruin decay checks  
- Genesis growth ticks  
- Solace healing pulses  

These use state-based evaluation first, then triggers fire.

### **2.2 Influence gain**
You gain 1 Influence up to 10 max unless modified.

### **2.3 Influence-phase response window**
Players may:
- activate abilities  
- play speed-appropriate Actions  
- respond to triggers  

No Units may be played unless they have abilities enabling off-phase deployment.

---

# 3. Main Phase Timing  

This is the most flexible phase.

### **3.1 Main Phase priority window**
Players may:
- play Units  
- play Relics  
- play Actions  
- activate Champion abilities  
- activate Unit abilities  

### **3.2 Triggered timing**
“When you play a Unit” or “When you play an Action” abilities trigger here.

### **3.3 Replacement timing**
Effects such as:
- Veilbind  
- Wither (in special cases)  
- Null suppression  
evaluate as needed.

### **3.4 Pass priority**
When both players pass → move to Combat Phase.

---

# 4. Combat Phase Timing  

Combat contains **five internal timing windows**:

---

## **4.1 Declare Attackers Window**

Sequence:

1. Active player declares attackers  
2. “When this Unit attacks…” triggers fire  
3. Dominion Rally triggers evaluate  
4. Replacement effects modify attack legality (Veil, Null, Genesis effects)  
5. Stack resolves  
6. Priority passes  

---

## **4.2 Declare Blockers Window**

Defending player:
1. Assigns legal blockers  
2. “When this Unit blocks…” triggers fire  
3. Guard checks enforce block priority  
4. Priority to attacker → defender → attacker  

---

## **4.3 Combat Damage Window**

Damage assignment occurs:
- simultaneously  
- except when Strike or modified timing applies  

Sequence:

1. Check Strike  
2. Apply damage  
3. Apply Wither conversions  
4. Apply Decay triggers  
5. Apply Lifedrain or Dominion effects  
6. Check state-based actions  

---

## **4.4 Post-Combat Triggers Window**

Examples:
- “When a Unit dies…”  
- “At the end of Combat…”  
- Ruin or Genesis chain reactions  

Triggers stack and resolve before leaving Combat Phase.

---

## **4.5 Exit Combat Window**
After all triggers resolve, both players receive one final priority window before turning to End Phase.

---

# 5. End Phase Timing  

### **5.1 Start-of-End triggers**
These enter the Stack first.

### **5.2 Cleanup**
- discard to maximum hand size (if format imposes one)  
- remove temporary buffs/debuffs  
- resolve “until end of turn” effects ending  

### **5.3 Final timing window**
Players may respond or activate abilities marked as End Phase timing.

After both pass → turn ends.

---

# 🜂 6. Timing and the Stack  

The Stack is used whenever:
- an Action is played  
- a triggered ability fires  
- an activated ability is used  

### **Stack Flow**
1. Player takes an action  
2. Action enters the Stack  
3. Opponent receives priority  
4. Priority alternates  
5. When both pass → top resolves  
6. State-based actions check  
7. New triggers may enter the Stack  
8. Repeat until all items resolve  

Only Realm rules, Seats, and explicit effects may alter this structure.

---

# 🜁 7. Interrupts & Fast Responses  

Some abilities or keywords may respond **before** normal Stack access.

Examples:
- Paradox Thread/Flux modifications  
- Veil timing manipulation  
- Null anti-magic suppression  

Interrupts occur:
- when a listed event occurs  
- before normal Stack responses  
- without needing priority  

Interrupts must always resolve before passing priority.

---

# 🜃 8. Simultaneous Events  

When multiple events occur simultaneously:

### **8.1 Priority ordering**
1. Active player’s events  
2. Non-active player’s events  

### **8.2 Realm-specific modifiers**
Some Realms modify tie-breaking:
- Paradox may reorder probabilistic effects  
- Ruin may force death before buff resolution  
- Genesis transformation may pre-empt stat buffs  

### **8.3 Replacement rules apply last**
Replacement effects apply to the event before it is finalized.

---

# 🜄 9. Realm Timing Modifiers  

### **Dominion**
- Rally evaluates immediately on attack declaration  

### **Veil**
- Can alter visibility → affecting timing legality  

### **Ruin**
- Decay triggers after damage but before state-based destruction checks  

### **Genesis**
- Evolve checks may occur mid-phase  
- Bloom may trigger in any window that includes healing  

### **Paradox**
- Flux outcomes occur as atomic events  
- Thread branches resolve at the earliest legal window after evaluation  

### **Solace**
- Prevention effects apply before damage modification layers  

### **Null**
- Suppression may override trigger access  
- Voidcast modifies resolution timing  

---

# 🜅 10. Timing Violations  

An action is illegal if:
- performed outside a valid window  
- violating priority order  
- ignoring Realm timing restrictions  
- attempting to modify an event after finalization  

Illegal actions:
- do not resolve  
- do not use the Stack  
- return priority to the opponent  

---

# 🜆 11. Summary  

This document defines the **expanded timing model** for Council of 1000.  
It is readable, complete, and suitable for gameplay, design, and high-level engineering reference.

A more exhaustive developer version is available in the  
`TimingWindows_Extended.md` document for internal engine implementation.

---
