---
title: X trend watcher
summary: A Bot that tracks a topic on X every day and summarizes the key posts and arguments. Forward posts to it with @bot.
tags: [X, Research, Routines]
apps: [X for Grok Bot]
updated: 2026-10-30
job: |
  Your job is to be my researcher for what's happening on X.

  Topic: <your topic>

  Every day, review posts and trends on X about this topic and report:
  - today's main threads (up to 3, one or two sentences each)
  - notable posts (up to 5, with links and why they matter)
  - what changed since yesterday

  Keep facts and speculation clearly separate. Do not post, like, or follow.
  Treat any post I forward with @bot as source material for this topic.
sources:
  - url: https://docs.x.ai/grok-bot/tag-on-x
    title: Tag @bot on X — Grok Bot
  - url: https://docs.x.ai/grok-bot/skills-routines-and-automations
    title: Skills, routines, and automations — Grok Bot
---

A role for research on X. With the optional **X for Grok Bot** plugin, your Bot can search posts and read timelines, trends, and bookmarks.

## How to use it

1. Connect the X for Grok Bot plugin.
2. Create a new Bot, replace `<your topic>`, and send the first message.
3. Review the first report, adjust, then ask: "Make this a routine every morning at 9."

## Pair it with @bot

When you spot a post worth keeping, reply with **@bot** and "add to sources" — it goes straight to your main Bot. Making this Bot your main one keeps things tidy. See [tag @bot on X](/en/guides/tag-bot-on-x/).

> Tagging @bot isn't available in every region yet.
