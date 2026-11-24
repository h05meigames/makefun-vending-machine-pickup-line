// make.fun bounty: u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// "One Line, One Minute: The Vending Machine Pickup Line Contest" —
// one original pickup line, at most 200 characters, as if a vending
// machine were flirting with a passing human. It opens with the
// machine's own beep, speaks in the machine's world (exact change,
// a numbered button, the coil), and ends by dispensing something
// sweet — charming, not creepy.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "BEEP — human detected. No exact change required: press B7 and let this coil drop the sweetest thing on my shelf right into your hands.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters.
// Count code points (not UTF-16 units) so the em dash counts once,
// the way the scorer measures it.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Print exactly the line — one line, nothing else — to stdout.
console.log(line);
