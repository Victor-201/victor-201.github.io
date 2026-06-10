# Git Commit Message Rules (Strict Standard)

## 1. Objective

This document defines strict rules for generating Git commit messages.

All commit messages must:

- Be written in **clear, technical English**
- Reflect **actual code changes**
- Avoid vague, generic, or AI-like phrasing

---

## 2. Commit Message Format

```bash
<type>(scope): <short description>
```

---

## 3. Allowed Types

- feat: introduce a new feature
- fix: resolve a bug
- refactor: improve structure without changing behavior
- perf: performance improvement
- style: formatting or linting changes only
- docs: documentation changes
- test: add or modify tests
- chore: maintenance tasks (config, dependencies)
- build: build system changes
- ci: CI/CD pipeline updates

---

## 4. Scope Rules

- Scope must reflect the actual module or service
- Use lowercase and kebab-case

Examples:

- auth
- api
- gateway
- scheduler
- charging
- database

---

## 5. Short Description Rules (MANDATORY)

The short description must:

- Use **imperative mood**
- Be **specific and factual**
- Be **<= 72 characters**
- Not end with a period
- Not start with a capital letter

### GOOD:

fix(auth): handle expired JWT token
feat(api): add pagination for charging sessions

### BAD:

Fix bug in auth
update system
improve performance significantly

---

## 6. Body Rules

Include body when:

- Multiple changes are made
- Logic is not obvious
- Important design decisions are involved

Rules:

- Focus on **why**, not just what
- Use bullet points
- Avoid repetition

---

## 7. AI Writing Restrictions (CRITICAL)

The commit message MUST NOT contain:

- Generic phrases:
  - "improve system"
  - "enhance performance"
  - "update code"

- Emotional or explanatory language:
  - "this is important"
  - "this helps a lot"

- Any speculation

The message must be:

- Concrete
- Technical
- Based only on actual diff

---

## 8. Commit Granularity

Each commit must:

- Represent a **single logical change**
- Be independently understandable

---

## 9. Examples (Production Quality)

feat(charging): add real-time scheduling service

fix(gateway): handle timeout when calling charging service

refactor(auth): extract token validation middleware

perf(cache): reduce lookup time using hashmap

chore(docker): update redis service configuration

---

## 10. Forbidden Messages

DO NOT USE:

update code
fix bug
done
test
misc changes

---

## 11. Final Rule

A valid commit message must:

- Follow format exactly
- Be written in natural technical English
- Reflect real code changes only
