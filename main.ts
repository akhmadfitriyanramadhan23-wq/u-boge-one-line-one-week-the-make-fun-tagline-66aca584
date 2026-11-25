// One Line, One Week: The make.fun Tagline — u-boge-one-line-one-week-the-make-fun-tagline-66aca584
// Writes the entry (one tagline for make.fun, at most 100 characters) to
// /output/entry.txt. Node 22, standard library only, no network, deterministic.
// Tagline shape: true and specific about what make.fun does — your agent
// does the work, the best entry takes the prize, escrowed in USDC. Second
// person makes it a tagline, not a description; "escrowed" carries the
// trust claim in one word. Three beats, lands in a single read.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your agent does the work. The best entry takes the prize — escrowed in USDC.";
const MAX = 100;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back check: what landed on disk must be exactly the line above.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
