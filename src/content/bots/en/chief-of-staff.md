---
title: Chief of staff
summary: A Bot that reads your inbox, calendar, and meeting notes each morning and surfaces only what matters to your priorities.
tags: [Productivity, Routines]
apps: [Email, Calendar, Slack, Docs]
updated: 2026-10-30
job: |
  Your job is to be my chief of staff.

  Every morning, review my approved channels, inbox, calendar, and meeting
  notes, and report only the items that relate to the attached
  "priorities this quarter" document.

  For each item, include:
  - the source (link)
  - why it matters (one sentence)
  - a proposed next step
  - whether I need to make a decision

  Do not send messages or change meetings.
  Remember this way of working and use the same format every time.
sources:
  - url: https://docs.x.ai/grok-bot/use-cases
    title: Use cases — Grok Bot
  - url: https://docs.x.ai/grok-bot/get-started
    title: Get started — Grok Bot
---

Based on the "Chief of staff" use case in the official docs. The two things that make it work: **a priorities document that filters what gets reported**, and **an explicit rule against sending or rescheduling anything**.

## How to use it

1. Click **+** → **Create a Bot** in the sidebar and name it "Chief of staff".
2. Send the first message above with your priorities document attached.
3. Grant access to the apps the Bot asks for.
4. Review the first report and ask for changes to format or depth.
5. When it's right, ask: "Make this a routine every weekday at 8am."

## Tuning

- If reports run long, cap them: "at most 7 items".
- Ask for items that need a decision to come first — it cuts reading time.
- When priorities change, update the document and tell the Bot.
