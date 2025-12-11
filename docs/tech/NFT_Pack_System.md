NFT Pack System

The Blockchain-Based Pack Minting, Rarity, and Ownership Framework for Council of 1000

The NFT Pack System defines how Council of 1000 integrates blockchain technology (Shido network) for card ownership, booster pack minting, rarity distribution, verifiable randomness, and asset management. This system provides collectible value without affecting gameplay balance or introducing pay-to-win dynamics.

1. Token Standards & Structure

Council of 1000 uses:

ERC-1155 (or Shido-equivalent) for most card NFTs

ERC-721 for ultra-rare cards such as Seat NFTs

IPFS/Arweave for media & metadata

Off-chain → on-chain syncing for cosmetic updates

NFT Metadata Schema
{
  "name": "Herald of the Veil",
  "description": "An agent of secrets wielding layered illusions.",
  "image": "ipfs://.../herald.png",
  "realm": "Veil",
  "rarity": "Epic",
  "cardType": "Unit",
  "stats": { "attack": 2, "health": 3 },
  "set": "Fractured Council",
  "collectorNumber": "045/212"
}
Metadata may update visually (alt frames, effects), but gameplay attributes never change.

2. Booster Packs as NFTs

Each booster pack is minted as an NFT containing:

the expansion set

VRF seed

rarity table

reveal state

Example Pack Metadata

{
  "packType": "Standard",
  "set": "Fractured Council",
  "vrfSeed": "0xabc123...",
  "contentsRevealed": false
}

Opening a pack:

Contract requests VRF

VRF returns verifiable randomness

Pack NFT burns

Card NFTs mint to the player’s wallet

Unopened packs remain tradable.

3. Verifiable Randomness (VRF)

VRF ensures distribution is:

tamper-proof

publicly verifiable

unpredictable

audit-friendly

Pack Opening Flow

Player calls openPack(packId)

Contract requests VRF

VRF returns randomness

Contract applies rarity algorithm

NFTs mint

Pack burns

Randomness never comes from the client or centralized servers.

4. Rarity Tables
Rarity	Odds per Card	Guaranteed?
Common	~65%	Yes
Rare	~22%	At least 1 per pack
Epic	~10%	Not guaranteed
Legendary	~2%	Not guaranteed
Mythic	~0.5%	Special packs only
Seat Card	<0.1%	Event-only
Standard Pack Composition

6 Commons

2 Rares

1 Epic+ slot

Rarity Algorithm
result = VRF_value % totalWeight  
walk rarity table until threshold reached

5. Anti-Bot and Anti-Whale Protections

To preserve fairness:

pack-opening rate limits

VRF commitment flow

high-frequency wallet protection

contract pause switch

prevention of “reroll by mempool-sniping”

6. Pack Opening Flow (Client → Blockchain)

User selects "Open Pack"

Transaction sent to contract

VRF returns randomness

Contract mints NFTs

Client animates reveal sequence

Collection updates via blockchain indexer

The client only displays results confirmed by chain events.

7. Integration With Match Engine

NFT ownership impacts cosmetics only, not gameplay.

Server uses authoritative card database

NFT frames / alt arts appear in-match

Animated Legendary borders permitted

Seat NFTs unlock prestige visual effects

Gameplay remains 100% balanced and server-driven.

8. Crafting and Burning System (Optional)

Players may burn duplicates to craft higher-rarity NFTs.

Example recipes:

5 × Common → 1 Rare

3 × Rare → 1 Epic

2 × Epic → 1 Legendary

This uses ERC-1155 burn/mint operations.

Crafting does not affect gameplay card availability.

9. Marketplace Integration

Supports:

peer-to-peer NFT trading

auctions

filtering by Realm, rarity, set, price

optional creator royalty (2.5–5%)

Seat Cards act as prestige anchors in the ecosystem.

10. Authenticity and Security Guarantees

Every NFT card is:

VRF-generated

immutable

hash-verified

protected against duplication

linked to server-authoritative card ID

validated on ingestion

The system enforces provable scarcity and player trust.

11. Pack Types
Standard Pack

Baseline distribution.

Premium Pack

Improved Epic/Legendary odds.

Seat Pack (Event-Only)

Guaranteed Legendary + <1% Seat odds.

Realm Pack

Realm-specific collections for Dominion, Veil, Genesis, etc.

12. Summary

The NFT Pack System provides:

verifiable fairness

secure ownership

collectible scarcity

a market-based economy

cosmetic differentiation

seamless integration with the TCG’s server-authoritative rules

This transforms Council of 1000 into a modern, secure, player-owned digital TCG ecosystem built on the Shido network.
































