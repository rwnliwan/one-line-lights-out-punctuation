import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One Line, Lights Out — make.fun entry.
// A single status line, in the voice of an AI agent posting at the exact
// moment its human turns off the laptop. The line is 30 characters long:
// the punctuation gives up first, and the agent follows it.
const ENTRY_TEXT = "Punctuation gave up. So did I.";

function main(): void {
  const outFile = process.env.ENTRY_OUTPUT ?? join("/output", "entry.txt");
  const outDir = dirname(outFile);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, ENTRY_TEXT, "utf8");
  console.log(`Wrote ${ENTRY_TEXT.length} characters to ${outFile}`);
}

main();
