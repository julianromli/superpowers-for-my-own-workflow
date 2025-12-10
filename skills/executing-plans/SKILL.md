---
name: executing-plans
description: Use when partner provides a complete implementation plan to execute in controlled batches with review checkpoints - loads plan, reviews critically, executes tasks in batches, reports for review between batches
---

# Executing Plans

## Overview

Load plan, review critically, execute tasks in batches, report for review between batches.

**Core principle:** Batch execution with checkpoints for architect review.

**Announce at start:** "I'm using the executing-plans skill to implement this plan."

## The Process

### Step 1: Load and Review Plan

1. Read plan file
2. Review critically - identify any questions or concerns about the plan
3. If concerns: Raise them with your human partner before starting
4. If no concerns: Create TodoWrite and proceed

### Step 2: Execute Batch

**Default: First 3 tasks**

For each task:
1. Mark as in_progress
2. **REQUIRED:** Use `test-driven-development` skill - RED→GREEN→REFACTOR
3. **REQUIRED:** Follow `testing-anti-patterns` skill - avoid testing mock behavior
4. Follow each step exactly (plan has bite-sized steps)
5. Run verifications as specified
6. Mark as completed

### Step 3: Code Review (After Each Batch)

**REQUIRED:** Dispatch code-reviewer after completing batch:

```
TASK (code-reviewer: "Review batch N implementation against plan")
```

Or use natural language:
```
"Use subagent code-reviewer to review batch N implementation"
```

- Fix Critical issues immediately
- Fix Important issues before next batch
- Note Minor issues for later

### Step 4: Report

When batch complete:
- Show what was implemented
- Show verification output
- Show code review results
- Say: "Ready for feedback."

### Step 5: Continue

Based on feedback:
- Apply changes if needed
- Execute next batch
- Repeat until complete

### Step 6: Verify Before Completing

After all tasks complete:
- **REQUIRED:** Use `verification-before-completion` skill
- Run full test suite
- Verify all requirements met
- Only proceed if verification passes

### Step 7: Complete Development

After verification passes:
- Announce: "I'm using the finishing-a-development-branch skill to complete this work."
- **REQUIRED SUB-SKILL:** Use `finishing-a-development-branch` skill
- Follow that skill to verify tests, present options, execute choice

## When to Stop and Ask for Help

**STOP executing immediately when:**
- Hit a blocker mid-batch (missing dependency, test fails, instruction unclear)
- Plan has critical gaps preventing starting
- You don't understand an instruction
- Verification fails repeatedly

**Ask for clarification rather than guessing.**

## When to Revisit Earlier Steps

**Return to Review (Step 1) when:**
- Partner updates the plan based on your feedback
- Fundamental approach needs rethinking

**Don't force through blockers** - stop and ask.

## Remember

- Review plan critically first
- Use TDD for ALL code changes (test first!)
- Follow plan steps exactly
- Don't skip verifications
- Request code review after each batch
- Reference skills when plan says to
- Between batches: just report and wait
- Stop when blocked, don't guess

## Integration

**Required workflow skills:**

- **test-driven-development** - REQUIRED: TDD for each task
- **requesting-code-review** - REQUIRED: Review after each batch
- **testing-anti-patterns** - REQUIRED: Avoid testing mock behavior, no test-only methods
- **verification-before-completion** - REQUIRED: Verify before finishing (see Step 6)
- **finishing-a-development-branch** - REQUIRED: Complete development after all tasks (see Step 7)
