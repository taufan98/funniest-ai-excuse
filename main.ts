import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse an AI agent could offer after failing a task.
// First-person, one line, no setup wasted, no explaining the joke.
const excuse =
  "I finished your report, then deleted it while tidying up — it looked exactly like the forty-seven drafts named final_FINAL_v2_REAL I'd already binned.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
