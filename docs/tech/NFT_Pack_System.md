# NFT Pack System  
_The Verifiable Backbone Behind Every Pack_

The NFT Pack System is responsible for minting booster packs, generating secure randomness, enforcing rarity distributions, and producing collectible NFT cards in Council of 1000.

It ensures that pack openings are:

- fair  
- tamper-proof  
- publicly auditable  
- replayable for verification  
- economically consistent  
- independent from gameplay balance  

This document describes *how* packs are opened and resolved, from creation to final NFT delivery.

---

# 🜂 Architectural Position

The Pack System sits between:

### **Blockchain → VRF → Pack Logic → NFT Minting → Client Reveal**

It is responsible for:

- creating pack NFTs  
- requesting VRF randomness  
- applying rarity tables  
- minting NFT cards  
- burning opened packs  
- emitting reveal events  

It **does not** manage gameplay rules or card balance.

---

# 🜁 Core Constructs

The system revolves around four primary components:

1. **Pack NFTs**  
2. **VRF Randomness**  
3. **Rarity Tables**  
4. **Minting Output**

Each is described below.

---

# 1. Pack NFTs

Pack NFTs represent sealed boosters that contain randomized card outcomes.

Each pack includes:

- pack type (Standard, Premium, Realm, Seat)  
- expansion set  
- VRF request seed  
- rarity table reference  
- reveal state  

Packs may be bought, sold, or transferred.  
Once opened, the pack NFT is burned permanently.

---

# 2. VRF Randomness

VRF (Verifiable Random Function) guarantees that pack contents are:

- unpredictable  
- cryptographically secure  
- immune to manipulation  
- verifiable on-chain  
- reproducible for audits  

### Pack Opening Flow

1. Player calls `openPack(packId)`  
2. Contract requests a VRF value  
3. VRF fulfills with randomness + proof  
4. Contract verifies the proof  
5. Rarity tables determine outcomes  
6. NFTs mint to the player  
7. Pack NFT burns  
8. Reveal events emitted  

VRF replaces all client-side or server-side randomness.

---

# 3. Rarity Tables

Each expansion defines its own rarity distribution.

Typical structure:

- **Common**  
- **Rare**  
- **Epic**  
- **Legendary**  
- **Mythic**  
- **Seat** (ultra-limited)

### Example Weighting

- 65% Common  
- 22% Rare  
- 10% Epic  
- 2% Legendary  
- 0.5% Mythic  
- <0.1% Seat  

Rarity tables are permanent once published.

---

# 4. Minting Logic

Minting logic maps VRF randomness to specific NFT outputs.

Process:

1. VRF produces random values  
2. Each value is checked against rarity weights  
3. A specific card is selected within that rarity tier  
4. ERC-1155 or ERC-721 NFTs mint to the player  
5. Pack NFT is burned  

Every mint event is logged and traceable.

---

# 🜃 Pack Types

Council of 1000 supports multiple pack types:

- **Standard Pack** — baseline rarity distribution  
- **Premium Pack** — higher Epic/Legendary odds  
- **Seat Pack** — guaranteed Legendary with ultra-rare Seat chances  
- **Realm Pack** — themed toward a specific Realm  

Each pack type uses a unique rarity structure and slot formula.

---

# 🜄 Crafting and Burning

Players may burn duplicate NFTs to craft higher-tier collectibles.

Example recipes:

- 5 Common → 1 Rare  
- 3 Rare → 1 Epic  
- 2 Epic → 1 Legendary  

Crafting affects collectibles only.  
Gameplay card availability is controlled by the server, not NFT supply.

---

# 🜅 Anti-Bot and Anti-Whale Controls

The Pack System implements safeguards such as:

- rate limits on pack openings  
- non-replayable VRF requests  
- protection from “reroll sniping”  
- wallet reputation checks (optional)  
- system-wide pause functions  

These ensure fair distribution and economic stability.

---

# 🜆 Storage and Metadata

NFT metadata is stored on:

- **IPFS**  
- **Arweave**

Each card includes:

- name  
- rarity  
- set  
- artwork reference  
- collector number  

Gameplay stats remain server-side and are not pulled from metadata.

---

# 🜇 Marketplace Integration

NFT cards and packs can be:

- bought  
- sold  
- auctioned  
- transferred  

Collectors benefit from:

- verifiable scarcity  
- transparent provenance  
- optional royalty-enabled ecosystems  

Seat Cards serve as prestige items with historical ownership tracking.

---

# 🜈 Client Responsibilities

The client handles:

- reveal animations  
- inventory updates  
- displaying rarity frames  
- syncing with blockchain events  

The client does **not** determine results.  
It only renders outcomes confirmed by the chain.

---

# 🜉 Security Guarantees

The system ensures:

- no duplicate mints  
- no manipulated outcomes  
- verifiable VRF usage  
- immutable mint logs  
- deterministic replayability  

Auditability is built in at every stage.

---

# 🜊 Summary

The NFT Pack System provides Council of 1000 with:

- provably fair randomness  
- secure collectible ownership  
- transparent rarity enforcement  
- scalable minting  
- gameplay-neutral distribution  
- a robust economic layer  

It forms the foundation of the game’s collectible economy while maintaining competitive integrity.

