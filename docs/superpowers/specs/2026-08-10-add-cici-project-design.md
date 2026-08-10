# Add "Cici" Project to Portfolio — Design

## Purpose
Add one new entry to the portfolio's Projects section for "Cici", a Minecraft Vision Language Model teaching assistant (GitHub: https://github.com/CordlessGnu/Cici).

## Scope
Single-item content update. No new components, layout, or styling changes are needed — `src/components/Projects.astro` already renders any entry in the `projects` array, including the optional `github` link.

## Data Change
Append one object to the `projects` array in `src/data/content.ts`, matching the existing `Project` interface (`src/types.ts`):

```ts
{
  title: 'Cici — Minecraft VLM Assistant',
  description:
    'Locally-run Minecraft teaching assistant powered by a Vision Language Model that analyses the player\'s live screen to give contextual advice and pre-emptive hazard warnings. Combines a Python voice/TTS pipeline, a Node.js Mineflayer bot, and a custom Fabric mod for state tracking, all running on-device via Ollama with a quantised model.',
  tags: ['Python', 'Node.js', 'Vision Language Models', 'Ollama', 'Minecraft Modding'],
  github: 'https://github.com/CordlessGnu/Cici',
}
```

Placement: appended as the last entry in the array (consistent with the existing ordering of newest-looking/most-recent work not being enforced elsewhere — no reordering of existing entries).

## Testing / Verification
This is a static content change in an Astro site with no existing test suite. Verification is manual:
1. Run the dev server (`npm run dev`).
2. Visit the Projects section and confirm the new card renders with correct title, description, tags, and a working GitHub icon link that opens the repo in a new tab.
3. Check responsive layout (card grid) at a narrow viewport (e.g. 480px) to confirm no visual regression.

## Out of Scope
- No changes to `Projects.astro`, `types.ts`, styling, or other pages.
- No live-demo link (project has none).
