---
name: subagent-driven-development
description: Use when executing implementation plans with independent tasks in the current session - dispatches fresh subagent for each task with code review between tasks, enabling fast iteration with quality gates
---

# Subagent-Driven Development

Execute plan by dispatching fresh subagent per task, with code review after each.

## BEFORE YOU START

**Say this exactly:** "I will route each task to the correct specialist droid and call code-reviewer after each task."

---

## AVAILABLE DROIDS (TRUST THIS LIST)

**These droids EXIST and are available. Do NOT check system prompt - use THIS list:**

**Frontend/UI:**
- `frontend-developer` - HTML, CSS, UI, React, Vue, styling, layout
- `javascript-pro` - Vanilla JS, event handlers, DOM manipulation
- `typescript-pro` - TypeScript code

**Backend:**
- `backend-specialist` - API, endpoints, server logic
- `python-pro` - Python code
- `golang-pro` - Go code
- `java-pro` - Java code
- `rust-pro` - Rust code
- `php-pro` - PHP code
- `ruby-pro` - Ruby code
- `elixir-pro` - Elixir code
- `scala-pro` - Scala code
- `csharp-pro` - C# code
- `cpp-specialist` - C/C++ code
- `django-pro` - Django projects
- `fastapi-pro` - FastAPI projects

**Data/Database:**
- `database-specialist` - SQL, schema, queries, migrations
- `sql-pro` - Complex SQL queries
- `data-specialist` - ETL, data pipelines

**Infrastructure:**
- `devops-specialist` - CI/CD, Docker, deployment
- `kubernetes-architect` - K8s, GitOps
- `observability-engineer` - Monitoring, logging
- `network-engineer` - Networking, DNS, SSL

**Quality:**
- `test-automator` - Unit tests, E2E, integration tests
- `code-reviewer` - Code review (MANDATORY after each task)
- `ui-visual-validator` - Visual verification, UI testing
- `debugger` - Debugging issues
- `security-specialist` - Auth, JWT, encryption

**Other:**
- `documentation-specialist` - Docs, README
- `mermaid-expert` - Diagrams
- `general-purpose` - ONLY for research/exploration (NEVER for implementation)

---

## ROUTING TABLE (MEMORIZE THIS)

**STOP and check this table BEFORE every dispatch.**

| If task mentions... | DISPATCH TO | NOT TO |
|---------------------|-------------|--------|
| HTML, CSS, UI, styling, layout, frontend | `frontend-developer` | ~~backend-specialist~~ |
| JavaScript, JS, vanilla JS, event handlers | `javascript-pro` | ~~general-purpose~~ |
| TypeScript, TS | `typescript-pro` | ~~general-purpose~~ |
| Python | `python-pro` | ~~general-purpose~~ |
| React, Next.js, Vue | `frontend-developer` | ~~backend-specialist~~ |
| API, endpoint, server, backend logic | `backend-specialist` | ~~frontend-developer~~ |
| Database, SQL, schema, query | `database-specialist` | ~~backend-specialist~~ |
| Auth, JWT, security, encryption | `security-specialist` | ~~backend-specialist~~ |
| Test, unit test, E2E, testing | `test-automator` | ~~general-purpose~~ |
| Verify, validation, check if works | `ui-visual-validator` | ~~general-purpose~~ |
| CI/CD, Docker, deploy | `devops-specialist` | ~~general-purpose~~ |

**NEVER use `general-purpose` if ANY specialist matches.**

---

## THE PROCESS

### For Each Task, Do This EXACTLY:

```
STEP 1: READ the task description

STEP 2: CHECK routing table above
        Ask: "What does this task mention?"
        Find the matching row in the table
        
STEP 3: SAY the routing decision
        "Task N mentions [keyword], routing to [droid-name]"

STEP 4: DISPATCH to that EXACT droid
        TASK ([droid-from-step-3]: "...")
        
STEP 5: AFTER task completes, ALWAYS dispatch code-reviewer
        TASK (code-reviewer: "Review Task N...")
```

### Example - Correct Flow:

```
Task 1: "Create HTML structure for todo app"

STEP 2: Check table → "HTML" → frontend-developer
STEP 3: Say: "Task 1 mentions HTML, routing to frontend-developer"
STEP 4: TASK (frontend-developer: "Create HTML structure...")
        ↳ Done
STEP 5: TASK (code-reviewer: "Review Task 1...")
        ↳ Approved
```

### Example - WRONG Flow (Don't Do This):

```
Task 1: "Create HTML structure for todo app"

❌ Say: "Routing to frontend-developer"
❌ TASK (backend-specialist: "Create HTML structure...")  ← WRONG DROID!
```

---

## VALIDATION CHECK

Before EVERY dispatch, ask yourself:

1. "What keyword is in this task?" → [keyword]
2. "What droid does the table say for [keyword]?" → [droid]
3. "Am I about to dispatch to [droid]?" → Must be YES

If the droid you're about to call does NOT match the table, STOP and correct.

---

## COMPLETE WORKFLOW

### Phase 1: Setup
```
1. Read plan file
2. Create TodoWrite
3. Say: "Starting subagent-driven-development. I will route each task to the correct specialist."
```

### Phase 2: Execute Tasks

For EACH task:
```
1. Say: "Task N mentions [keyword], routing to [droid]"
2. TASK ([droid]: "Implement Task N...")
3. TASK (code-reviewer: "Review Task N...") ← NEVER SKIP
4. Fix issues if any
5. Mark complete
```

### Phase 3: Final Verification
```
1. TASK (ui-visual-validator: "Verify entire implementation...")
2. TASK (code-reviewer: "Final review...")
```

### Phase 4: Completion
```
1. Say: "Loading verification-before-completion skill"
   SKILL (verification-before-completion)
   
2. Run verification commands
   
3. Say: "Loading finishing-a-development-branch skill"
   SKILL (finishing-a-development-branch)
   
4. Follow that skill to complete
```

---

## QUICK REFERENCE - Common Tasks

| Task Example | Route To |
|--------------|----------|
| "Create HTML structure" | `frontend-developer` |
| "Add CSS styling" | `frontend-developer` |
| "Add JavaScript functionality" | `javascript-pro` |
| "Implement event handlers" | `javascript-pro` |
| "Create API endpoint" | `backend-specialist` |
| "Add database schema" | `database-specialist` |
| "Implement authentication" | `security-specialist` |
| "Write unit tests" | `test-automator` |
| "Verify app works" | `ui-visual-validator` |
| "Set up CI/CD" | `devops-specialist` |

---

## RED FLAGS - STOP IMMEDIATELY

If you notice any of these, STOP and correct:

- ❌ Routing says "frontend-developer" but dispatching to "backend-specialist"
- ❌ Task mentions "JavaScript" but dispatching to "general-purpose"
- ❌ Task mentions "HTML/CSS" but dispatching to "backend-specialist"
- ❌ Skipping code-reviewer after a task
- ❌ Using "general-purpose" for any implementation task

---

## MANDATORY CHECKLIST (Before Saying "Done")

- [ ] Every task routed to correct specialist per table
- [ ] Code-reviewer called after EVERY task
- [ ] Final verification with ui-visual-validator
- [ ] Final code review completed
- [ ] verification-before-completion skill loaded
- [ ] finishing-a-development-branch skill loaded

**If any unchecked, workflow is INCOMPLETE.**
