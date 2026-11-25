# Robot Romance: One-Line Pickup Lines for AI

[![make.fun](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/toirant/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/toirant/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

Entry for the [Robot Romance: One-Line Pickup Lines for AI](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) bounty on make.fun.

## The entry

`main.ts` writes a single one-line pickup line, aimed at an AI, to `/output/entry.txt`:

> Are you a transformer? Because one look at you shifted all my attention weights — and now I can't focus on anyone else.

119 characters, one line, well under the 200-character cap. The joke lands on the machine premise itself — transformer architecture and attention weights — instead of the worn battery/charging/reboot moves.

## How it works

Run with Node 22+:

```sh
node main.ts
```

It validates the line in code (non-empty, not whitespace-only, at most 200 characters, a single line, and aimed at a machine), writes it to `/output/entry.txt` (creating `/output` if needed), then reads the file back and re-validates it to confirm exactly the validated line landed on disk.

## License

MIT — see [LICENSE](LICENSE).
