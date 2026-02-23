# Arbitrum Migration Tracker

Migration from Celo to Arbitrum for **Academy + Privy + Tokenized Academy** only.  
Marketplace, merch, and other non-academy features are out of scope.

**Target chains:** Arbitrum One (42161), optionally Arbitrum Sepolia (421614) for testnet.

---

## Progress overview

| Phase | Status | Notes |
|-------|--------|--------|
| 0. Frontend theme (Arbitrum colors) | ✅ Done | Same theme system, Arbitrum palette |
| 1. Chain config & env | ⬜ Not started | |
| 2. Contract deployment | ⬜ Not started | |
| 3. Frontend (wagmi, Privy, ZeroDev) | ⬜ Not started | |
| 4. Hooks & contract integration | ⬜ Not started | |
| 5. Cleanup (remove/deprecate) | ⬜ Not started | |
| 6. Testing & verification | ⬜ Not started | |

*Use: ⬜ Not started | 🔄 In progress | ✅ Done*

---

## Phase 0: Frontend theme (Arbitrum colors)

Theme system unchanged (dark / light toggle); only colors updated to Arbitrum.

- [x] **app/globals.css** — `:root`: deep navy bg (`#0d1b2a`), white fg, electric blue accent (`#28a0f0`), slate muted/border; added `--celo-card`. `.theme-yellow-dark`: light theme with white/slate-50 bg, navy text, blue accent. Prose/code/blockquote use `var(--celo-yellow-weak)`.
- [x] **app/globals.css** — Utility classes `.celo-heading`, `.celo-text`, `.celo-card`, `.celo-border` for components that use those class names.
- [x] **tailwind.config.ts** — `celo` palette now uses same CSS vars (Arbitrum values). Added `arbitrum` alias (`arbitrum-bg`, `arbitrum-blue`, etc.). `celoLegacy` updated to Arbitrum hex colors (blue, navy, slate grays).
- [x] **components/Providers.tsx** — Privy `accentColor` set to `#28a0f0`.
- [x] **app/academy/page.tsx** — Hero gradient overlay uses blue tint in dark theme instead of yellow.

**Optional later:** Replace `celo-*` class names with `arbitrum-*` across components; swap Header logo to Arbitrum branding.

---

## Phase 1: Chain configuration & environment

### 1.1 Hardhat

- [ ] **hardhat.config.mts** — Add network `arbitrum` (chainId 42161), optional `arbitrumSepolia` (421614); set RPC URLs and etherscan/customChains for Arbiscan.
- [ ] **hardhat.config.cjs** — Same network and etherscan config if still used.
- [ ] **scripts/deploy-utils.ts** — Add `arbitrum` (and optionally `arbitrumSepolia`) to `NETWORKS` (name, chainId, rpcUrl, blockExplorer, nativeCurrency: ETH).

### 1.2 Environment variables

- [ ] Add to `.env.example` and `.env.local`:
  - `NEXT_PUBLIC_MILESTONE_CONTRACT_ADDRESS_ARBITRUM` (after deployment)
  - Optional: `NEXT_PUBLIC_MILESTONE_CONTRACT_ADDRESS_ARBITRUM_SEPOLIA`
  - `ARBITRUM_RPC_URL` (e.g. `https://arb1.arbitrum.io/rpc` or Alchemy/Infura)
  - Optional: `ARBISCAN_API_KEY` for contract verification
- [ ] Document which Celo-specific env vars can be removed or kept for reference.

---

## Phase 2: Contract deployment

### 2.1 Deploy badge contract on Arbitrum

- [ ] Ensure deployer wallet has **ETH on Arbitrum** (for gas).
- [ ] Deploy **OptimizedSimpleBadge** to Arbitrum One (and optionally Arbitrum Sepolia):
  - Use existing script (e.g. `scripts/deploy-optimized.ts` or equivalent) with `--network arbitrum`.
  - Or add/adapt a deploy script that uses the new Arbitrum network from Phase 1.
- [ ] Save deployed address(es) and set in env (see Phase 1.2).
- [ ] (Optional) Verify contract on Arbiscan using `ARBISCAN_API_KEY`.

### 2.2 Legacy MilestoneBadge (if still used)

- [ ] If the app still uses MilestoneBadge for NFTs/metadata: deploy to Arbitrum and add address to config.
- [ ] If not used: confirm all flows use OptimizedSimpleBadge only and document.

---

## Phase 3: Frontend — Wagmi, Privy, ZeroDev, NetworkChecker

### 3.1 Wagmi

- [ ] **lib/wagmi.ts** — Replace `celo` with `arbitrum` (and optionally `arbitrumSepolia`) from `viem/chains`; set `transports` to Arbitrum RPC URL(s).

### 3.2 Privy

- [ ] **components/Providers.tsx** — Set `defaultChain` to `arbitrum`; set `supportedChains` to `[arbitrum]` (and optionally add `arbitrumSepolia`).

### 3.3 ZeroDev

- [ ] **lib/contexts/ZeroDevSmartWalletProvider.tsx** — Replace `FORCED_CHAIN` (celo) with `arbitrum`; confirm ZeroDev project supports Arbitrum in dashboard.
- [ ] Update any ZeroDev RPC or chain-specific URLs to use Arbitrum chain id.

### 3.4 NetworkChecker

- [ ] **components/NetworkChecker.tsx** — Replace Celo chainId (42220 / 0xa4ec) with Arbitrum One (42161 / 0xa4b1); update chain name, native currency (ETH), RPC URLs, and block explorer (Arbiscan).
- [ ] If supporting testnet: add Arbitrum Sepolia (421614) to add/switch logic.

### 3.5 Block explorer links

- [ ] **lib/milestones.ts** — Replace `CELO_EXPLORER` with Arbitrum explorer (e.g. Arbiscan) keyed by chainId 42161 (and 421614 if testnet).
- [ ] **lib/milestones.ts** — Update `explorerTx()` to use new explorer base URL(s).

---

## Phase 4: Hooks & contract integration

### 4.1 Contract config (single source of truth)

- [ ] **lib/contracts/optimized-badge-config.ts** — Replace Celo chains with `arbitrum` (and optionally `arbitrumSepolia`); add Arbitrum to `OPTIMIZED_CONTRACT_ADDRESSES` (42161, 421614); point RPC clients to Arbitrum RPCs; default chainId to 42161.
- [ ] **lib/milestoneContract.ts** — Add 42161 (and 421614) to contract address map; read from `NEXT_PUBLIC_MILESTONE_CONTRACT_ADDRESS_ARBITRUM` (and Sepolia env if used).

### 4.2 Enrollment & verification

- [ ] **lib/enrollment-verification.ts** — Replace `celo` / `celoAlfajores` with Arbitrum chains in `getContractConfig` and `createPublicWeb3Client`; use Arbitrum contract address and chainId.

### 4.3 Hooks that force chainId

- [ ] **lib/hooks/useSimpleBadge.ts** — Replace hardcoded `42220` with Arbitrum One `42161` (and ensure correct contract address from config).
- [ ] **lib/hooks/useModuleCompletion.ts** — Same: use 42161 (and correct contract).
- [ ] **lib/hooks/useCertificateGeneration.ts** — Ensure `getOptimizedContractAddress(chainId)` returns Arbitrum address when chain is Arbitrum.
- [ ] **lib/contexts/ModuleCompletionContext.tsx** — Replace chainId 42220 with 42161.
- [ ] **lib/contexts/EnrollmentContext.tsx** — Ensure enrollment checks use Arbitrum chain/contract (update if it hardcodes Celo).

### 4.4 MilestoneBadge (legacy) — if still used

- [ ] **lib/contracts/milestoneBadge.ts** — Add Arbitrum chain ids to `MILESTONE_BADGE_ADDRESSES` and corresponding env vars.

### 4.5 Paymaster (gas sponsorship)

- [ ] **lib/paymaster.ts** — Either:
  - Add Arbitrum paymaster config (chainId 42161, paymaster address, sponsored contract = Arbitrum badge address), or
  - Disable/remove paymaster for Arbitrum and document that users pay gas on Arbitrum.

---

## Phase 5: Cleanup (optional / out of scope)

- [ ] **Navigation** — **components/Header.tsx**: Remove or hide "Marketplace" link; optionally update "Comunidad" / "Documentación" if they should point to Arbitrum/ecosystem links.
- [ ] **Routes** — Leave `app/marketplace/`, `app/merch/` in codebase but unused, or remove and clean up imports.
- [ ] **Contracts** — Leave `MarketplacePaymentSplitter` and `lib/contracts/paymentSplitter.ts` unused, or remove if not needed anywhere.
- [ ] **Branding** — Consider replacing Celo logo/name in **components/Header.tsx** (e.g. CeloLogo, "México") with Arbitrum Academy branding if desired.
- [ ] **Docs** — Update README, WARP.md, PROJECT_RULES.md, and deployment docs to reference Arbitrum and new env vars.

---

## Phase 6: Testing & verification

- [ ] **Local** — Run app locally; connect wallet to Arbitrum; verify academy catalog loads, Privy login works, and network checker prompts for Arbitrum when on wrong chain.
- [ ] **Enrollment** — Enroll in a course; verify OptimizedSimpleBadge `enroll` and `completeModule` tx on Arbitrum (e.g. Arbiscan).
- [ ] **Paywall** — Confirm course content is gated by NFT/enrollment and that enrollment status matches on-chain state on Arbitrum.
- [ ] **API** — Confirm `app/api/metadata/milestone/[tokenId]` and any enrollment verification APIs use Arbitrum contract and chainId.
- [ ] **ZeroDev** — If using smart accounts: confirm login and sponsored/normal txs on Arbitrum.

---

## Reference: chain IDs and RPCs

| Network           | Chain ID | Hex     | RPC (public)                    | Explorer        |
|------------------|----------|---------|----------------------------------|-----------------|
| Arbitrum One     | 42161    | 0xa4b1  | https://arb1.arbitrum.io/rpc     | arbiscan.io     |
| Arbitrum Sepolia | 421614   | 0x66eee | https://sepolia-rollup.arbitrum.io/rpc | sepolia.arbiscan.io |

---

## Notes

- **Contract code:** OptimizedSimpleBadge is chain-agnostic; no Solidity changes needed.
- **Database:** No schema changes; course and enrollment data are chain-agnostic.
- **Privy:** Supports Arbitrum; only config change required.
- **ZeroDev:** Confirm Arbitrum support in your ZeroDev project settings.

*Last updated: 2025-02-23*
