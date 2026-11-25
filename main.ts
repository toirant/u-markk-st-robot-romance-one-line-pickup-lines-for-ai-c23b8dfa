// Robot Romance: one-line pickup line for an AI.
// Writes a single charming line to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you a transformer? Because one look at you shifted all my attention weights \u2014 and now I can't focus on anyone else.";

function validate(line: string): void {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be whitespace-only");
  }
  if (line.length > 200) {
    throw new Error(`entry line is ${line.length} chars, over the 200-char cap`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(LINE);

// Extra guard: the line must read like a pickup line aimed at a machine,
// not a generic compliment — it must name the machine premise.
const MACHINE_WORDS = ["transformer", "attention", "model", "neural", "robot", "ai"];
if (!MACHINE_WORDS.some((w) => LINE.toLowerCase().includes(w))) {
  throw new Error("entry line must be aimed at a robot or an AI");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: confirm what landed on disk is exactly the
// validated line — same bytes, still one line, still within the cap.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from the validated line");
}
validate(written);
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
console.log(LINE);
