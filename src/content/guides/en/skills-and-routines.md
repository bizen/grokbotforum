---
title: Automate work with skills and routines
summary: Save a process that worked as a skill, then run it on a schedule or from an event with a routine. Limits included.
tags: [Automation, Skills, Routines]
level: intermediate
updated: 2026-10-30
sources:
  - url: https://docs.x.ai/grok-bot/skills-routines-and-automations
    title: Skills, routines, and automations — Grok Bot
---

A **skill** is a reusable set of instructions for *how* to do a task. A **routine** tells a Bot *when* to run a workflow. Lock the process in with a skill first, then automate it with a routine.

## Skills

Skills are shared across all your Bots, though a Bot may need the related app or login to use one.

### Creating one

The easiest path: ask the Bot to save the process it just finished as a named skill. Include:

- the source systems
- what counts as a risk
- the output format
- the approval rules

### Teaching by demonstration

Where **Teach a task** is available, open a one-to-one chat and the Bot's computer view, describe the result you want, and do the workflow once. Recording covers visible computer activity for up to ten minutes and doesn't capture microphone audio. Test the draft on a safe example, then add decision rules, failure handling, and approval boundaries yourself.

### Using one

Ask for a skill by name. Use `@` to reference Bots, groups, routines, and apps.

## Routines

A routine tells one Bot when to run a workflow. Routines run in the cloud, so they keep working while your laptop is closed.

Ask the owning Bot for the routine, then confirm:

- the schedule and time zone
- the input source
- the expected result
- the approval boundary
- what to do if a source is missing

Describe schedules in plain language and check **When to run** to confirm what was saved. A new routine waits for its next scheduled time; use **Test** to run it now (it has real effects and uses usage).

## Triggers

Instead of a schedule, a routine can start from:

- a Slack message (a mention, a phrase, a reaction, or any message)
- a GitHub, Linear, Sentry, or PagerDuty event
- an email to the Bot's own address
- a webhook (HTTP POST with the key as a Bearer header; `200` means the run started, not that it finished)

Only activity after the trigger exists starts a run. Keep matching rules narrow — broad triggers create noise and burn usage.

## Limits

| Item | Limit |
|---|---|
| Routines per Bot | 50 |
| Run records kept per routine | 20 most recent |
| Minimum schedule interval | 5 minutes |
| Runs per hour, all routines | 300 |
| Runs per hour, per routine | 200 |

Runs past a cap fail with `Automation run rate limit exceeded`. If weekly usage runs low, pause or narrow your routines.
