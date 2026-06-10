# Coding Comment Standards
*Engineering Standard — Senior / Staff / Architect Level*

---

## Philosophy

Code expresses *what* and *how*. Comments express *why*, *why not*, and *under what constraint*.
If intent is fully conveyed by naming, structure, and types — no comment is warranted.
A codebase needing comments to explain its own logic needs refactoring, not more comments.

---

## Comment Decision Matrix

| Context | Level | Requirement |
|---|---|---|
| Public API / SDK surface | Mandatory | Contract documentation for cross-team consumers |
| Regulatory / compliance logic | Mandatory | Audit traceability to legal or security standard |
| Security-sensitive path | Mandatory | Intent + threat rationale; required for audit |
| Non-trivial algorithm | Mandatory | Approach justification; trade-offs over alternatives |
| Technical debt (TODO/FIXME/HACK) | Mandatory | Owner + rationale + ticket — bare markers are noise |
| Known side effects / mutations | Mandatory | Especially in shared or distributed state |
| Complex domain logic | Discretionary | Comment the business rule, not the implementation |
| Performance optimization | Discretionary | Document the profiling basis, not the micro-steps |
| Cross-system integration | Discretionary | Assumed contract and failure behavior |
| Self-evident code, assignments, control flow | Never | — |
| Boilerplate, framework conventions | Never | — |
| Commented-out code | Never | Use version control |
| Change history / authorship | Never | Use version control |

---

## Comment Types and Format

### Module / File Header
Only where system placement or ownership is non-obvious.

```typescript
/**
 * PaymentReconciliationService
 *
 * Matches gateway transactions against internal ledger records.
 * Runs as nightly batch; emits events to AuditEventBus.
 *
 * Depends on: PaymentGatewayClient, LedgerRepository, AuditEventBus
 * Owned by: Payments Platform Team
 * SLA: 4-hour settlement window — PCI-DSS 3.2.1 §10.2
 */
```

### Function / Method Doc
Public interfaces and cross-team contracts only. Private utilities rarely require docblocks.

```typescript
/**
 * Enforces idempotency for the given request key.
 *
 * Scoped to 24 hours per key. Replays beyond that window are treated as new
 * operations — permanent retention would introduce unbounded storage growth.
 *
 * @param key - Client-supplied idempotency key (UUID v4)
 * @throws IdempotencyConflictError if a conflicting in-flight request exists
 */
async function enforceIdempotency(key: string): Promise<void>
```

### Inline Business Logic
1–2 lines immediately above the logic. Explain the rule; never narrate the code.

```typescript
// PSD2 SCA exemption: sub-EUR 30 transactions skip strong auth
// unless the rolling 5-transaction total exceeds EUR 100.
if (amount < SCA_EXEMPTION_THRESHOLD && rollingTotal < SCA_ROLLING_LIMIT) {
    return skipStrongAuthentication();
}
```

### Technical Debt Marker

```
// TODO(owner): <change> — <why deferred> — <ticket>
// FIXME(owner): <what is broken> — <impact scope> — <ticket>
// HACK(owner): <workaround> — <why necessary> — <ticket>
```

### Suppression Justification
Unjustified suppressions are a blocking review finding.

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// Vendor SDK has no type declarations. Replacement tracked: INFRA-441.
const result: any = vendorSdk.process(payload);
```

---

## Architecture Layer Strategy

| Layer | Comment Focus |
|---|---|
| Domain / Bounded Context | Business invariants, domain rules, policy citations |
| Application / Use Case | Orchestration order, transaction boundaries, failure strategy |
| Infrastructure / Adapter | Integration contracts, protocol constraints, retry rationale |
| Cross-Cutting (Security, Observability) | Concern + threat model; mandatory for audit coverage |

```typescript
// Domain: Downgrade prohibited mid-cycle; applied at renewal boundary. — Billing Policy v4.1 §3.2
// Application: Charge captured before fulfillment; fulfillment is non-reversible.
// Infrastructure: Stripe delivers at-least-once. Idempotency is mandatory.
// Security: Rate limiting precedes auth to prevent account enumeration via timing.
```

---

## Anti-Patterns

| Anti-Pattern | Corrective Action |
|---|---|
| Code narration | Delete. Clarity belongs in naming, not comments. |
| Stale comment | Update or remove on every review of modified logic. |
| Comment masking poor naming | Rename the symbol. The comment is not the fix. |
| Commented-out code | Remove. Version control holds the history. |
| Redundant docblock | If the signature is expressive, a docblock restating it is maintenance debt. |
| Bare TODO / vague marker | Add owner, rationale, and ticket — or delete. |

---

## Code Review Criteria

| Criterion | Blocking |
|---|---|
| Accuracy — reflects current behavior | Yes |
| Ownership — markers attributed and traceable | Yes |
| Completeness — rationale stated for arch/security/compliance | Yes |
| Necessity — conveys what code cannot express | No — flag for cleanup |
| Tone — precise, professional, unambiguous | No — flag for revision |

---

## Style Rules

- **Language:** English only
- **Mood:** Imperative — consistent with commit and docblock conventions
- **Prohibited hedging:** *simply, just, basically, obviously*
- **Line length:** 100 characters max
- **Abbreviations:** permitted only when domain-unambiguous