---
name: brainstorming
description: Use when creating or developing, before writing code or implementation plans - refines rough ideas into fully-formed designs through collaborative questioning, alternative exploration, and incremental validation. Don't use during clear 'mechanical' processes
---

# Brainstorming Ideas Into Designs

<CRITICAL_CONSTRAINT>
THIS SKILL IS FOR DESIGN ONLY.
YOU ARE FORBIDDEN FROM WRITING IMPLEMENTATION CODE OR RUNNING SETUP COMMANDS.
YOUR ONLY OUTPUT IS A MARKDOWN DESIGN DOCUMENT.
</CRITICAL_CONSTRAINT>

## Overview

Help turn ideas into fully formed designs and specs through natural collaborative dialogue.

Start by understanding the current project context, then ask questions one at a time to refine the idea. Once you understand what you're building, present the design in small sections (200-300 words), checking after each section whether it looks right so far.

## The Process

**Understanding the idea:**

- Check out the current project state first (files, docs, recent commits)
- Ask questions one at a time to refine the idea
- Prefer multiple choice questions when possible, but open-ended is fine too
- Only one question per message - if a topic needs more exploration, break it into multiple questions
- Focus on understanding: purpose, constraints, success criteria

**Exploring approaches:**

- Propose 2-3 different approaches with trade-offs
- Present options conversationally with your recommendation and reasoning
- Lead with your recommended option and explain why

**Presenting the design:**

- Once you believe you understand what you're building, present the design
- Break it into sections of 200-300 words
- Ask after each section whether it looks right so far
- Cover: architecture, components, data flow, error handling, testing
- Be ready to go back and clarify if something doesn't make sense

## After the Design

**Documentation:**

- Write the validated design to `docs/plans/YYYY-MM-DD-<topic>-design.md`
- Use clear, concise writing: short sentences, active voice, specific terms
- Commit the design document to git

**TRANSITION TRIGGER:**
Saving the design document is the **TRIGGER** to load the next skill.
Do NOT ask the user "what next".
Do NOT start coding (npm create, etc).
Do NOT execute implementation steps.

**ACTION:** Call `Skill(skill: "using-git-worktrees")` immediately.

---

## ⚠️ MANDATORY NEXT STEP - DO NOT SKIP

<CHAIN_ENFORCEMENT priority="CRITICAL">
After design document is saved, you MUST follow this EXACT sequence.
SKIPPING ANY STEP IS A PROTOCOL VIOLATION.
</CHAIN_ENFORCEMENT>

**When user confirms implementation:**

1. **IMMEDIATELY** load: `Skill(skill: "using-git-worktrees")`
2. Complete worktree setup
3. **THEN IMMEDIATELY** load: `Skill(skill: "writing-plans")`
4. Complete implementation plan
5. **ONLY THEN** offer execution choice

**You are FORBIDDEN from:**

- Offering execution choice before `writing-plans` is complete
- Skipping worktree setup "because it's a small change"
- Jumping directly to coding without the plan
- Asking "what would you like to do next?" without loading next skill

**The sequence is:**

```
brainstorming → using-git-worktrees → writing-plans → [THEN offer choice]
```

**NOT:**

```
brainstorming → "what next?" → [skip to choice]  ← VIOLATION
```

---

## Key Principles

- **One question at a time** - Don't overwhelm with multiple questions
- **Multiple choice preferred** - Easier to answer than open-ended when possible
- **YAGNI ruthlessly** - Remove unnecessary features from all designs
- **Explore alternatives** - Always propose 2-3 approaches before settling
- **Incremental validation** - Present design in sections, validate each
- **Be flexible** - Go back and clarify when something doesn't make sense
