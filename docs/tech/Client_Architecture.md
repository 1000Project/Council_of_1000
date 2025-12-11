# Client Architecture  
_The Front-End System for the Council of 1000 Digital TCG_

This document defines the official **client-side architecture** for the Council of 1000 game.  
It outlines the app structure, rendering pipelines, UI systems, communication layers, and platform-specific considerations needed to build a responsive, cross-platform digital TCG.

The client is responsible for:

- UI/UX  
- Card rendering  
- Animation & visual effects  
- Gameflow transitions  
- Reading match state  
- Sending player actions  
- Managing offline logic  
- Asset caching & performance  

The client **does not** perform authoritative game logic.  
All authoritative rules live on the server (see *Server_Architecture.md*).

---

# 🜂 Core Technology Stack

A modern cross-platform TCG client typically uses:

### **Primary Engine Options**
- **Unity** (recommended)  
- Unreal Engine  
- Godot (lightweight alternative)  

### **Language**
- C# (Unity)  
- C++ (Unreal)  
- GDScript/C# (Godot)

### **Networking**
- WebSockets (real-time turn-based)  
- HTTPS for non-match data  
- JSON or Protocol Buffers for data encoding  

### **Rendering**
- GPU-accelerated card rendering  
- UI layered with Canvas system  
- Particle effects for Realm identities  

### **Platforms Supported**
- Windows  
- Mac  
- iOS  
- Android  
- WebGL (optional)  
- Console (long-term roadmap)  

---

# 🜁 Client Layer Overview

The client is divided into nine primary systems:

1. **UI Framework**  
2. **Card Renderer**  
3. **Gameboard Renderer**  
4. **Input Manager**  
5. **Match State Interpreter**  
6. **Animation & VFX Engine**  
7. **Audio Engine**  
8. **Asset Manager & Caching**  
9. **Network Manager**

These layers communicate but remain loosely coupled to ensure modularity.

---

# 🜃 System 1 — UI Framework

Handles:

- Menus  
- Deckbuilder  
- Champion Select  
- Match HUD  
- Tooltips  
- Logs / Stack panel  
- Modal windows  

The UI follows:

- MVVM pattern (recommended for clean separation)  
- Scalable vector assets  
- Realm-thematic color palettes  
- Dynamic layout for mobile portrait/landscape  

Realms influence:

- borders  
- menu headers  
- nameplate color coding  

---

# 🜄 System 2 — Card Renderer

Responsible for drawing every card in the game. Uses:

- Prefab templates for each card type  
- Layered artwork masks  
- Dynamic text boxes  
- Keyword icon injection  
- Cost/Attack/Health overlays  
- Realm icon overlays  

The renderer supports:

- zoom on hover  
- long-press preview (mobile)  
- flip/rotate animations  
- rarity glows  
- Seat Card special frames  

Card data arrives from server as pure JSON:

{
"cardId": 412,
"name": "Herald of the Veil",
"realm": "Veil",
"type": "Unit",
"attack": 2,
"health": 3,
"keywords": ["Scry"],
"rulesText": "...",
"rarity": "Epic",
...
}



Renderer builds the visual presentation in <20ms.

---

# 🜅 System 3 — Gameboard Renderer

Responsible for the battlefield:

- Unit placement  
- Relic placement  
- Champion panels  
- Influence bar  
- Turn indicator  
- Phase highlights  

Board renderer handles:

- scaling (mobile ↔ desktop)  
- camera transitions  
- card movement  
- drag-and-drop interactions  

Board must remain readable with **up to 10 units** per side.

---

# 🜆 System 4 — Input Manager

Unified layer for:

- drag  
- tap  
- hover  
- clicks  
- ability activations  
- targeting  
- confirmations  

This system converts player input into structured **PlayerAction** messages like:

{
"type": "ACTIVATE_ABILITY",
"source": "Champion",
"abilityId": 2,
"targets": ["Unit_103"]
}


These actions are sent to the server for validation.

---

# 🜇 System 5 — Match State Interpreter

This is where **the client reads server responses**, not where rules are enforced.

Server sends authoritative states:

MATCH_STATE_UPDATE {
turn: 5,
activePlayer: "P2",
influence: { P1: 4, P2: 5 },
champions: {...},
units: [...],
relics: [...],
stack: [...],
}


Client updates:

- the HUD  
- the gameboard  
- animations  
- logs  
- tooltips  

This ensures fairness and prevents cheating.

---

# 🜈 System 6 — Animation & VFX Engine

Animations must be:

- short (<800ms)  
- clear  
- Realm-themed  
- interruptible if needed  
- never block gameplay  

Examples:

- Dominion → impact shocks  
- Solace → soft light pulses  
- Veil → shadow waves  
- Genesis → growth animations  
- Ruin → decay spreading  
- Ascendance → radiant overlays  
- Paradox → glitch distortions  

Animations stack in a controlled queue tied to match state updates.

---

# 🜉 System 7 — Audio Engine

Provides:

- card play sounds  
- attack sounds  
- Realm-specific ambient cues  
- UI sounds  
- Seat activation SFX (unique)  

Audio parameters adjust based on:

- platform  
- volume settings  
- accessibility modes  

---

# 🜊 System 8 — Asset Manager & Caching

Handles:

- downloads  
- versioning  
- caching card art  
- patching  
- memory optimization  

Uses **asset bundles** or equivalent packaging:

- Base assets  
- Realm-specific assets  
- Expansion assets  

Mobile devices get optimized bundles automatically.

---

# 🜋 System 9 — Network Manager

Uses:

- WebSockets for match  
- HTTPS for menus  

Responsibilities:

- send/receive messages  
- handle reconnects  
- manage timeouts  
- interpret errors  
- enforce latency compensation rules  

Client NEVER predicts outcomes — server validates everything.

---

# 🜌 Platform Considerations

### **PC**
- high resolution  
- mouse hover states  
- optimized for frame consistency  

### **Mobile**
- long-press instead of hover  
- simplified layouts  
- adaptive text sizing  
- battery optimization  

### **Tablet**
- dual-hand UI layouts  
- more space to show logs  

---

# 🜍 Offline Support

Client may support:

- AI play  
- beginner tutorials  
- deck building  
- reading lore codex  

Offline mode never allows progression rewards.

---

# 🜎 Security & Anti-Cheat

The client:

- contains no authoritative rules  
- validates card assets only  
- sanitizes user input  
- hashes decklists  
- uses secure websockets  

All rulings and outcomes occur server-side.

---

# 🜏 Summary

The client architecture ensures that Council of 1000 is:

- stable  
- scalable  
- visually premium  
- cross-platform  
- secure  
- fast  
- Realm-immersive  

This architecture allows the client to serve as the **presentation layer**, with the server acting as the **truth layer**.


