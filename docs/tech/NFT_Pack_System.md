NFT Pack System

The Blockchain-Based Pack Minting, Rarity, and Ownership Framework for Council of 1000

This document defines how Council of 1000 integrates with blockchain technology (Shido network) for NFT card ownership, booster packs, rarity guarantees, VRF-based fairness, and player asset management.

This system allows players to own, trade, collect, and verify rare cards while preserving balanced gameplay.

1. Token Standards & Structure

Council of 1000 uses:

ERC-1155 for card NFTs

ERC-721 optional for ultra-rare Seats

IPFS/Arweave for metadata

Off-chain → on-chain JSON syncing

Token schema example:
{
  "name": "Herald of the Veil",
  "description": "An agent of secrets...",
  "image": "ipfs://.../herald.png",
  "realm": "Veil",
  "rarity": "Epic",
  "cardType": "Unit",
  "stats": { "attack": 2, "health": 3 },
  "set": "Fractured Council",
  "collectorNumber": "045/212"
}

2. Booster Packs as NFTs

Packs are ERC-1155 or ERC-721 tokens with:

set ID

rarity seed

VRF request ID

contentsRevealed: false

{
  "packType": "Standard",
  "set": "Fractured Council",
  "vrfSeed": "0xabc...",
  "contentsRevealed": false
}


Opening a pack:

Request VRF

Receive randomness

Burn pack

Mint card NFTs

3. VRF (Verifiable Random Function)

VRF ensures:

tamper-proof randomness

no server manipulation

public verifiability

Pack opening uses:

Shido VRF or Chainlink VRF

Re-roll prevention

Public randomness proofs

Flow:

User calls openPack()

Contract requests VRF

VRF responds

Contract mints NFT cards

Pack NFT burns

4. Rarity Tables
Rarity	Odds per Card	Guaranteed?
Common	~65%	Yes
Rare	~22%	At least 1
Epic	~10%	No
Legendary	~2%	No
Mythic	~0.5%	Special packs
Seat	<0.1%	Event only

Pack sample:

6 Commons

2 Rares

1 Epic+

5. Anti-Bot / Anti-Whale Protections

rate-limit opening

VRF commit-reveal

bot detection from mint rate

contract pausable

no mass-open scripts

6. Opening Flow (Client → Blockchain)

Player clicks Open Pack

openPack(packId) tx sent

Contract requests VRF

VRF returns result

Contract mints NFTs

Client animates the reveal

7. Integration with Match Engine

Ownership affects cosmetics only, not gameplay.

Server uses its own card database

NFT frames, effects, prestige animations allowed

No pay-to-win

8. Crafting / Burn System (Optional)

Players may burn duplicates:

5x Common → 1 Rare

3x Rare → 1 Epic

2x Epic → 1 Legendary

Uses ERC-1155 burn/mint.

9. Marketplace

Supports:

NFT trading

filters: rarity, Realm, set, price

optional creator royalty (2.5–5%)

10. Authenticity Guarantees

Each NFT:

uses VRF

uses IPFS hashing

is immutable

is cross-validated with internal DB

cannot be duplicated

11. Pack Types
Standard Pack

Baseline distribution.

Premium Pack

Better Epic/Legendary odds.

Seat Pack (Event)

<1% chance for Seat Cards.

Realm Pack

Dominion-only, Veil-only, etc.

12. Summary

The NFT Pack System makes Council of 1000:

collectible

fair

verifiable

scalable

Shido-native

resistant to manipulation

attractive to collectors

This bridges the TCG with real digital ownership.
