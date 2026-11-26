// The Robot Vacuum's Funniest Excuse
// Writes one deadpan excuse to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I skipped that corner on purpose. The dust there has outlived your houseplant. I respect my elders.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
