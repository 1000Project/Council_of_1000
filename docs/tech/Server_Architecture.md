# Server Architecture  
_The Authoritative Backend for the Council of 1000 Digital TCG_

This document establishes the official server-side architecture for Council of 1000.  
Unlike the client, which is purely visual and input-driven, the server is the source of **truth**, **security**, and **game integrity**.

All gameplay decisions, turn validations, card interactions, and match resolutions are determined by the server.

The server is built as:

- **Authoritative**  
- **Deterministic**  
- **Scalable**  
- **DDoS-resistant**  
- **Tamper-proof**  
- **Platform-agnostic**  

---

# 🜂 Core Responsibilities of the Server

The server handles:

1. **Matchmaking**  
2. **Deck validation**  
3. **Authoritative rules enforcement**  
4. **Turn sequencing**  
5. **Stack resolution**  
6. **Random number generation (secure RNG)**  
7. **Card effect execution**  
8. **Champion ability processing**  
9. **Influence & combat calculations**  
10. **Game state snapshots**  
11. **Disconnection handling**  
12. **Player account data & progression**  
13. **Security & cheat prevention**  
14. **Match logging for audits**  

The server never trusts the client.

---

# 🜁 High-Level Architecture

The server is divided into five major systems:

1. **Gateway Layer**  
2. **Match Engine**  
3. **Rules Engine**  
4. **State Machine & Stack Processor**  
5. **Persistence Layer**

Under load, these scale independently.

---

# 🜃 1. Gateway Layer  
_Entry point for all client connections._

Handles:

- WebSocket connections  
- HTTPS REST endpoints  
- Authentication  
- Rate-limiting  
- Anti-DDoS protections  
- Routing players to match servers  

### Technologies:
- NGINX / Envoy  
- OAuth2 / JWT tokens  
- WebSocket sharding  

Clients never connect directly to a match server — they pass through the gateway.

---

# 🜄 2. Match Engine  
_The dedicated real-time subsystem for processing matches._

Each active match runs on a **Match Instance**, which is:

- lightweight  
- isolated  
- deterministic  
- stateless except for the match state  

Each Match Instance:

- receives **PlayerActions**  
- validates legality  
- sends actions to the **Rules Engine**  
- updates the **Game State**  
- pushes updates to both players  

Match Engine also handles:

- turn timers  
- reconnection windows  
- concessions  
- detecting idle states  

### Example PlayerAction received:

{
"playerId": "P1",
"type": "PLAY_CARD",
"cardId": 128,
"targets": ["Unit_503"]
}


Match Engine forwards this to the Rules Engine for verification.

---

# 🜅 3. Rules Engine  
_The heart of game logic. Authoritative, deterministic, mandatory._

This subsystem ensures **fair play**.

The Rules Engine:

- validates every action  
- enforces turn structure  
- resolves keywords  
- executes triggered abilities  
- applies stat changes  
- checks victory conditions  
- interacts with the stack  
- evaluates targeting  
- applies replacement effects  
- runs RNG from secure seeds  

Nothing happens in a match unless the Rules Engine approves.

### Key Features:

#### **Deterministic Execution**
Same input → same output  
Ensures fairness & reproducibility.

#### **Secure RNG**
For outcomes such as:

- Paradox “Flux”  
- Random damage splits  
- Card draws  
- Token generation

Uses server-seeded, cryptographically secure RNG.

#### **Modular Keyword Scripts**
Each keyword has its own logic module:

- Decay  
- Guard  
- Flux  
- Scry  
- Spawn  
- Evolve  
- Focus  
- etc.

New mechanics can be added without rewriting the core engine.

---

# 🜆 4. Game State Machine  
_The authoritative snapshot of the match._

The game state includes:

- turn number  
- active player  
- Influence values  
- hand contents  
- deck sizes  
- discard piles  
- Units on board  
- Relics in play  
- Champion status (Resolve, abilities used)  
- Stack contents  
- Seat effects  
- Global modifiers  

### State Updates

Every update is packaged like:

MATCH_STATE_UPDATE {
stateId: 992118,
activePlayer: "P1",
phase: "MAIN",
board: { units: [...], relics: [...] },
champions: {...},
stack: [...],
rngSalt: "94ad718..."
}


Clients visually interpret this but **cannot alter it**.

### State Snapshots
Every significant change produces a snapshot for:

- reconnection  
- match resume  
- audit logs  
- tournament integrity  

---

# 🜇 5. Stack Processor  
_Resolves simultaneous and triggered effects._

Council of 1000 uses a **priority stack** similar to MTG but optimized for clarity.

Stack rules:

1. Last-in, first-out  
2. Trigger windows open at specific timing points  
3. Players receive priority to respond  
4. When both pass, stack resolves  
5. After resolution, new triggers may appear  

Example stack:

P1 casts “Genesis Surge”
P2 reacts with “Veil Counter”
Surge is countered → Evolve triggers


Server resolves each step atomically.

---

# 🜈 6. Persistence Layer  
_Handles long-term storage and meta systems._

Stores:

- player accounts  
- MMR / ranking  
- inventory & collection  
- packs opened  
- currency  
- cosmetics  
- Champion progression  
- deck lists  
- match history  

Database options:

- PostgreSQL  
- MongoDB (for flexible deck schemas)  
- Redis (matchmaking queues & caching)  

### Deck Security
Server validates deck lists before every match:

- correct card counts  
- no banned cards  
- Realm legality  
- no duplicates beyond limit  
- hash verification  

---

# 🜉 Matchmaking Architecture

Works through a dedicated **Matchmaking Service**:

- builds queues for players  
- groups by MMR  
- supports Casual, Ranked, Draft, Sealed  
- includes bot fallback for new players or low-pop hours  

Search radius widens over time to prevent infinite waits.

Matchmaking Service returns:

{
"matchId": "A881-5521",
"server": "match-node-14.shard-2",
"players": ["P1", "P2"]
}


---

# 🜊 Disconnection Handling

If a player disconnects:

1. Timer begins (e.g., 90 seconds)  
2. Client attempts auto-reconnect  
3. Match Engine holds the state  
4. After timeout → opponent wins  

If server crashes (rare):

- snapshot restores the match  
- players resume exactly where they left off  

---

# 🜋 Anti-Cheat Systems

Server enforces:

- **No client-side calculations**  
- Verified RNG  
- Input sanitization  
- Rate limiting  
- Decklist rebinding per match  
- State hashing per action  
- Secure WebSocket channels  
- Action timestamp validation  

Audit logs store every important match event.

---

# 🜌 Scalability Model

Server architecture supports:

- horizontal scaling  
- match sharding  
- load balancers  
- autoscaling groups  
- region routing  
- disaster recovery clusters  

Projected scalability:  
**100,000+ concurrent matches** with proper allocation.

---

# 🜍 Technologies & Deployment

Recommended stack:

- **Go** or **TypeScript/Node.js** for Match Engine  
- **Rust** for Rules Engine (high-performance, deterministic)  
- **Redis** for queues & caching  
- **PostgreSQL** for persistence  
- **Kubernetes** for orchestration  
- **Docker** for containerization  
- **NGINX / Envoy** for gateway  
- **AWS / GCP / Azure** or on-chain VRF for RNG  

---

# 🜎 Monitoring & Telemetry

Server must track:

- latency per action  
- frame delay  
- match durations  
- error rates  
- CPU/memory use  
- matchmaking wait times  
- Rules Engine exceptions  

Tools:

- Prometheus  
- Grafana  
- ELK Stack  

---

# 🜏 Summary

The Server Architecture ensures:

- authoritative rules  
- cheat-proof gameplay  
- secure RNG  
- reliable matchmaking  
- scalable performance  
- deterministic resolution  
- replayability  
- tournament integrity  
- long-term maintainability  

This is the **technical backbone** of Council of 1000.

