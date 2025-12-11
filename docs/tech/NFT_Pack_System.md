# NFT Pack System  
_The Blockchain-Based Pack Minting, Rarity, and Ownership Framework for Council of 1000_

This document defines how Council of 1000 integrates with blockchain technology (Shido network) for card ownership, booster packs, rarity guarantees, VRF-based fairness, and player asset management.

This system allows players to **own**, **trade**, **collect**, and **verify** rare cards using decentralized infrastructure while preserving balanced gameplay.

The NFT Pack System includes:

1. NFT standards & metadata  
2. Booster pack minting  
3. VRF randomness  
4. Rarity tables  
5. Anti-bot protections  
6. Pack opening flow  
7. Marketplace considerations  
8. Integration with the match engine  

---

# 🜂 1. Token Standards & Structure

Council of 1000 uses:

- **ERC-1155** (or Shido equivalent) for card NFTs  
- **ERC-721** optional for ultra-rare “Seat Cards”  
- **Off-chain -> On-chain bridges** for metadata updates  

### Reasons:
- ERC-1155 allows multiple copies of a card  
- Lower gas fees  
- Efficient for packs, crafting, and burning  
- Supports both fungible (currency) and non-fungible (cards) assets  

### Token Structure

Token ID: unique integer per card/frame
Quantity: number of copies owned
Metadata: JSON (IPFS or Arweave)


---

# 🜁 2. NFT Metadata Schema

Each NFT card uses:

```json
{
  "name": "Herald of the Veil",
  "description": "An agent of secrets wielding layered illusions.",
  "image": "ipfs://.../herald_veil.png",
  "realm": "Veil",
  "rarity": "Epic",
  "cardType": "Unit",
  "stats": {
    "attack": 2,
    "health": 3
  },
  "set": "Fractured Council",
  "collectorNumber": "045/212",
  "animation_url": "ipfs://.../fx.webm"
}

Metadata may evolve for visual upgrades (skins, alt frames), but gameplay stats never change.

🜃 3. Booster Packs as NFTs
A pack is its own NFT, containing:
set identifier
rarity table seed
VRF request ID
mint timestamp

Pack NFT structure:
{
  "packType": "Standard",
  "set": "Fractured Council",
  "vrfSeed": "0xabc123...",
  "contentsRevealed": false
}

When a player opens a pack:

VRF returns randomness

Server or contract derives card pulls

Pack NFT “burns”

Card NFTs mint into the player’s wallet

Pack NFTs can be:

traded

sold unopened

used for special events

🜄 4. VRF (Verifiable Random Function)

All pack randomness must be:

cryptographically secure

publicly verifiable

tamper-proof

resistant to prediction

resistant to manipulation

Council of 1000 uses:

Shido VRF or Chainlink VRF equivalent

Server never generates pack randomness

Every pull can be verified on-chain

VRF Flow:

Player calls openPack(packId)

Contract requests VRF

VRF returns randomness

Contract applies rarity algorithm

Mints card NFTs

Emits event PackOpened(packId)

🜅 5. Rarity Tables

Each expansion defines rarity distribution:

Rarity	Odds per card	Guaranteed?
Common	~65%	Always
Rare	~22%	At least 1 per pack
Epic	~10%	Not guaranteed
Legendary	~2%	Not guaranteed
Mythic	~0.5%	Special packs only
Seat Cards	<0.1%	Ultra-limited, event-only

Pack Composition Example:

6 Commons

2 Rares

1 Epic+ slot

Algorithm:

result = VRF % totalWeight
walk rarity table to determine outcome

🜆 6. Anti-Bot & Anti-Whale Safeguards

To maintain fair distribution:

1. Opening Rate Limits

No mass-open scripts

1 pack per block per wallet (configurable)

2. Wallet Reputation Score (optional)

Prevents malicious high-frequency minting

3. VRF Commitment Scheme

Prevents "rerolling" by reading mempool randomness

4. Contract Pausable

Emergency circuit breaker

🜇 7. Pack Opening Experience (Client → Blockchain)
Step 1 — User clicks “Open Pack”

Client sends:

openPack(packId)

Step 2 — Contract requests VRF

The request ID is emitted on-chain.

Step 3 — Server listens for VRF fulfillment

VRF result is delivered.

Step 4 — Contract mints card NFTs

Cards distributed to owner.

Step 5 — Client reads event logs

Card art animates into view.

Step 6 — Cards populate player’s collection

Client syncs with blockchain indexer.

🜈 8. Integration with the Match Engine

NFT ownership does not affect gameplay balance.

Rules:

NFTs represent collectibles

Gameplay uses server-side card database

Rarity does not imply power creep

Cosmetic alt-frames may apply to NFT skins

Players can:

use NFT cosmetics inside the match

show off prestige card frames

apply Legendary/Seat FX animations

NO pay-to-win mechanics.

🜉 9. Crafting & Burning System (Optional)

To reduce supply inflation:

Players may burn duplicate NFTs to craft higher tiers.

Example recipe:

5 Commons → 1 Rare

3 Rares → 1 Epic

2 Epics → 1 Legendary

Uses ERC-1155 burn/mint functionality.

Crafting UI appears in the collection section.

🜊 10. Marketplace Considerations

Council of 1000 supports:

peer-to-peer sales

auction house

listing filters: rarity, set, Realm, price

optional royalty structure

Recommended: 2.5–5% creator royalty for ecosystem sustainability.

🜋 11. Anti-Fraud & Authenticity Guarantees

Every NFT is:

VRF-generated

timestamped

immutable

cross-validated with internal DB

resistant to duplication

verified by on-chain metadata

Fraud scenarios prevented:

fake pack claims

manipulated randomness

client-side spoofing

duplicate minting

🜌 12. Data Storage

Images, 3D variants, animated frames stored on:

IPFS

Arweave

Metadata pinning services recommended.

On-chain storage limited to:

hashes

URLs

rarity

VRF results

Token IDs

🜍 13. Pack Types
Standard Pack

core rarity distribution

best for new players

Premium Pack

increased Epic+ chance

better odds for Legendary

Seat Pack (Event Only)

1 guaranteed Legendary

<1% chance for Seat Card

Realm Pack

themed sets

Dominion-only pulls, etc.

🜎 14. Security Considerations

Packs cannot be “opened twice”

VRF cannot be skipped

NFTs cannot be reminted

Pack metadata cannot be altered after mint

Seat Cards minted only by governance-authorized contract

Internal audits recommended before launch.

🜏 Summary

The NFT Pack System enables a blockchain-enhanced TCG where:

players own their cards

randomness is fair and verifiable

packs have intrinsic market value

Seat Cards remain ultra-rare prestige items

gameplay integrity stays fully server-authoritative

Shido integration provides low-fee, high-speed minting

the ecosystem can sustainably grow

Council of 1000 becomes not just a TCG —
but a collectible universe with provable scarcity and real ownership.
