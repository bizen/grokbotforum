---
title: The basic request template
summary: Five parts — outcome, sources, constraints, deliverable, and where to stop — for writing requests a Bot can't misread.
tags: [Basics, Template]
updated: 2026-10-30
prompt: |
  ## Outcome
  <What should be true when you're done. One or two sentences.>

  ## Sources
  <Files, URLs, apps, and time range to use.>

  ## Constraints
  <What not to do, rules to follow, deadlines.>

  ## Deliverable
  <Format (table, bullets, doc), length, and where to save it.>

  ## Check with me
  <When to stop and ask me. For example: before sending anything externally.>
sources:
  - url: https://docs.x.ai/grok-bot/get-started
    title: Get started — Grok Bot
---

The official getting-started guide says a strong request states the outcome, the relevant sources, constraints, the deliverable, and where the Bot should stop for you. This template turns those five into headings.

## Tips

- Write the **outcome** as an end state, not an activity ("a comparison table exists", not "research").
- Always put at least one "don't" in **constraints** — "don't change the source file", "don't send anything".
- Filling in **check with me** stops changes to external systems before they happen.

## Example

```
## Outcome
A one-page table comparing three competitors' recent price changes, ready for next week's board meeting.

## Sources
Each company's pricing page and press releases from the last 30 days.

## Constraints
Label speculation as speculation. Don't send anything outside the company.

## Deliverable
One Google Doc page: the table plus a three-line summary.

## Check with me
Show me the column layout before filling it in.
```
