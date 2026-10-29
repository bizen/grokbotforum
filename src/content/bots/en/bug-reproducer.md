---
title: Bug reproducer
summary: A Bot that reads a bug report, reproduces it in staging, and returns steps, expected vs. actual behavior, and screenshots.
tags: [Engineering, QA]
apps: [GitHub, Linear, Browser]
updated: 2026-10-30
job: |
  Your job is reproducing bugs.

  When you get a bug report, reproduce it in staging with a fresh test
  account and return:
  - numbered reproduction steps
  - expected behavior and actual behavior
  - screenshots
  - environment (browser, OS, build)
  - a minimal test case, if possible

  Do not use production customer data.
  If you can't reproduce it, list what you tried and what extra
  information you need.
sources:
  - url: https://docs.x.ai/grok-bot/use-cases
    title: Use cases — Grok Bot
  - url: https://docs.x.ai/grok-bot/skills-routines-and-automations
    title: Skills, routines, and automations — Grok Bot
---

Based on the "Bug reproduction" use case in the official docs. Because a Bot works on a cloud computer with a real browser, it can actually click through the app to reproduce the issue.

## How to use it

1. Create a new Bot and send the first message above.
2. Tell it the staging URL and how to create a test account.
3. Share a bug report link and ask it to reproduce.

## Automate it

Turn it into a routine triggered by GitHub or Linear events so every issue labeled `bug` gets a reproduction attempt. Keep the trigger narrow — a specific label and repository. See [skills and routines](/en/guides/skills-and-routines/).
