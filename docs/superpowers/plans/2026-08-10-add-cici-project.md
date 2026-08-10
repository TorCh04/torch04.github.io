# Add Cici Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one new project card ("Cici — Minecraft VLM Assistant") to the portfolio's Projects section.

**Architecture:** The Projects section (`src/components/Projects.astro`) renders every entry in the `projects` array exported from `src/data/content.ts`, using the `Project` interface defined in `src/types.ts`. No component or type changes are needed — this is a single data-array append.

**Tech Stack:** Astro 7, TypeScript. No test framework is present in this repo; verification is via `astro check` (type checking), `astro build` (build correctness), and manual visual check in the dev server.

## Global Constraints

- Data shape must satisfy the existing `Project` interface in `src/types.ts:6-11` (`title: string`, `description: string`, `tags: string[]`, `github?: string`).
- Do not modify `src/components/Projects.astro`, `src/types.ts`, or any styling — out of scope per spec `docs/superpowers/specs/2026-08-10-add-cici-project-design.md`.
- New entry is appended as the last item in the `projects` array in `src/data/content.ts` (no reordering of existing entries).

---

### Task 1: Add Cici project entry to content data

**Files:**
- Modify: `src/data/content.ts:22-48` (the `projects` array)

**Interfaces:**
- Consumes: `Project` type from `src/types.ts:6-11` — `{ title: string; description: string; tags: string[]; github?: string }`
- Produces: nothing consumed by later tasks (this is the only task in the plan)

- [ ] **Step 1: Add the new project object to the `projects` array**

Open `src/data/content.ts`. The `projects` array currently ends with the `Slot Machine` entry, closing at line 48:

```ts
  {
    title: 'Slot Machine',
    description:
      'A fun personal project — a fully functional slot machine game implementation exploring game logic, randomisation, and interactive UI design.',
    tags: ['Personal'],
    github: 'https://github.com/TorCh04/Slot-Machine',
  },
];
```

Replace that closing with a new entry appended after the `Slot Machine` object, keeping the array's closing `];`:

```ts
  {
    title: 'Slot Machine',
    description:
      'A fun personal project — a fully functional slot machine game implementation exploring game logic, randomisation, and interactive UI design.',
    tags: ['Personal'],
    github: 'https://github.com/TorCh04/Slot-Machine',
  },
  {
    title: 'Cici — Minecraft VLM Assistant',
    description:
      "Locally-run Minecraft teaching assistant powered by a Vision Language Model that analyses the player's live screen to give contextual advice and pre-emptive hazard warnings. Combines a Python voice/TTS pipeline, a Node.js Mineflayer bot, and a custom Fabric mod for state tracking, all running on-device via Ollama with a quantised model.",
    tags: ['Python', 'Node.js', 'Vision Language Models', 'Ollama', 'Minecraft Modding'],
    github: 'https://github.com/CordlessGnu/Cici',
  },
];
```

- [ ] **Step 2: Type-check the project**

Run: `npm run check`
Expected: No TypeScript errors (confirms the new object satisfies the `Project` interface).

- [ ] **Step 3: Build the site**

Run: `npm run build`
Expected: Build completes successfully with no errors.

- [ ] **Step 4: Manually verify in the dev server**

Run: `npm run dev`, then open the site in a browser and navigate to the Projects section (`/#projects`).

Confirm:
- A new card titled "Cici — Minecraft VLM Assistant" appears after the "Slot Machine" card.
- The description text renders in full, matching the copy above.
- All five tags render: Python, Node.js, Vision Language Models, Ollama, Minecraft Modding.
- The GitHub icon link is present, opens `https://github.com/CordlessGnu/Cici` in a new tab.
- At a narrow viewport (~480px), the card stacks correctly in the single-column grid with no visual regression.

Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add src/data/content.ts
git commit -m "Add Cici project to portfolio"
```
