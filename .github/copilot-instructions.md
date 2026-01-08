# Soc Ops - Copilot Instructions

Social Bingo game for in-person mixers. Mark squares to get 5-in-a-row.

## Development Checklist

Before committing changes, verify:
- [ ] `npm run lint` passes without errors
- [ ] `npm run build` completes successfully
- [ ] `npm test` all tests pass

## Architecture

**State**: Single hook [useBingoGame.ts](../src/hooks/useBingoGame.ts) manages all game state with localStorage persistence (versioned schema, SSR guards). Data flow: click → `toggleSquare` → `checkBingo` → `setWinningLine` → `getWinningSquareIds` for UI highlighting.

**Components**: [App.tsx](../src/App.tsx) routes between StartScreen/GameScreen. GameScreen contains BingoBoard (5×5 grid) with BingoSquare cells and BingoModal for wins.

**Core logic** ([bingoLogic.ts](../src/utils/bingoLogic.ts)): `generateBoard()` Fisher-Yates shuffles 24 questions + center FREE SPACE. `toggleSquare()` uses immutable patterns. `checkBingo()` validates rows/columns/diagonals.

## Conventions

**Immutability**: Always return new arrays/objects. Example: `board.map((square) => square.id === id ? { ...square, isMarked: !square.isMarked } : square)`

**Styling**: Tailwind v4 with `@theme` in [index.css](../src/index.css). Define CSS variables (`--color-accent`) then use as utilities (`bg-accent`). See [tailwind-4.instructions.md](instructions/tailwind-4.instructions.md) - no config file needed.

**Types**: [types/index.ts](../src/types/index.ts) defines `BingoSquareData`, `BingoLine`, `GameState`.

## Workflows

`npm run dev` → Vite dev server. `npm test` → Vitest with jsdom. Mock `Math.random()` in tests for deterministic boards. GitHub Actions deploys to Pages on push to `main` (sets `VITE_REPO_NAME` for base path).

## Customization

**Questions**: Edit [questions.ts](../src/data/questions.ts) array (need 24+ items). **Design**: Follow [frontend-design.instructions.md](instructions/frontend-design.instructions.md) for distinctive aesthetics. **Theming**: Add CSS vars in `@theme` block, use as Tailwind classes.
