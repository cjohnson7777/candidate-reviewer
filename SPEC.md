# SPEC.md: Our Project Specification

> Fill this in with your team **before** your first ticket.
> Short and specific beats long and vague. Every `TODO` must be gone by the end of day 1.
> How to use it: see [`docs/SPEC-DRIVEN-DEVELOPMENT.md`](docs/SPEC-DRIVEN-DEVELOPMENT.md).

---

## PART A: Sprint rules (set by CodeSquad, don't delete)

### A1. Stack
- React (in `src/`) + Node/Express (in `server/`) + Replit PostgreSQL + Gemini through LangChain.
- AI calls happen ONLY on the server (`server/ai/model.js`). Never from React.
- Every agent skill is a folder: `skills/<name>/SKILL.md`, name matches the folder.

### A2. Security
- API keys live in Replit Secrets or `.env`. Never in code, commits, screenshots, or chat.
- `import 'dotenv/config'` is the first line of every server file that reads settings.
- Every request is checked with zod `.safeParse()` before the AI or database is used.
- SQL uses `$1, $2` placeholders. Never glue user text into SQL.

### A3. Responsible AI
- The agent says it is an AI and never poses as a doctor, lawyer, or counselor.
- The `safety-guardrail` skill stays on. Personal info is removed before the AI sees it.
- Facts come from the database or a cited source, or the agent says "I don't know".
- Anything high-stakes gets a path to a real person (phone, website, office).

### A4. Scope
- Two weeks. One core user journey. At most 3 must-have features.
- Live on Replit by demo day, with a backup screen recording.

---

## PART B: Our project (fill this in)

### 1. Team and one-liner
- **Team name:** Me
- **App name:** Candidate Reviewer
- **One sentence:** Help voters find local politicians running and their policies.

### 2. Problem
- **Problem statement:** Voters in Nashville struggle to find the policies of local politicians because the information is scattered and hard to find.
- **Theme:** Education Access
- **Evidence it's real:** Jan, 18, newly able to vote but has no idea where who to vote for.

### 3. User
- **Main user:** Jan, 18, newly able to vote but has no idea where who to vote for.
- **What they do today without our app:** Search multiple news outlets for information
- **Device and language(s):** PC, JS, HTML

### 4. Goals
| Goal | How we'll measure it | Target |
|---|---|---|
| See candidates and policies on page | Looking at the page | Candidate and policies on the page |

### 5. Features
| Priority | Feature | Ticket | Skill(s) |
|---|---|---|---|
| Must | List of candidates running in Nashville | 004 |  |
| Must | Policies candidates are running on | 005 |  |

### 6. Agent and skills
- **Agent name and voice:** Compass, warm, factual, and plain-spoken, like an educator
- **Starter skills we keep:** 
- **New skills we'll write:** 
- **The agent must NEVER:** 

### 7. Data
| Table | What's in it | Where the data comes from | Who keeps it up to date |
|---|---|---|---|
| resources | Candidates | news outlets |  |
|  |  |  |  |

### 8. Privacy and governance
- **Personal info our app could touch:** 
- **How we protect it:** 
- **What we tell users up front:** 
- **Who on the team is responsible:** 

### 9. Out of scope (not in these two weeks)
- 

### 10. Open questions
- 
