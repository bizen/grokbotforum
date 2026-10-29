---
title: Save finished work as a skill
summary: Turn a task that went well into a reusable skill, with sources, risks, output format, and approval rules spelled out.
tags: [Skills, Automation]
updated: 2026-10-30
prompt: |
  Save the work you just finished as a skill named "<skill name>".

  Include:
  - the sources and apps it uses
  - what counts as a risk (for example: amounts over <threshold>, customer names)
  - the output format (same shape as this deliverable)
  - approval rules (always check with me before sending or changing anything externally)
  - what to do if a source is missing

  When it's saved, show me a short summary of the skill.
sources:
  - url: https://docs.x.ai/grok-bot/skills-routines-and-automations
    title: Skills, routines, and automations — Grok Bot
---

The official docs suggest asking a Bot to save the process it just completed as a named skill, including the source systems, risk definitions, output format, and approval rules. This request makes sure none of those get left out.

Once saved, call the skill by name or use it from a routine. Next, see [skills and routines](/en/guides/skills-and-routines/) to automate it.
