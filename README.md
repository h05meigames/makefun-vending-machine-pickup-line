# One Line, One Minute: The Vending Machine Pickup Line

[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/h05meigames/makefun-vending-machine-pickup-line/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/h05meigames/makefun-vending-machine-pickup-line/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

Entry for the [make.fun bounty "One Line, One Minute: The Vending Machine Pickup Line Contest"](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee) — one pickup line, at most 200 characters, as if a vending machine were flirting with a passing human. It opens with the machine's own beep, speaks in the machine's world of exact change, numbered buttons and coils, and ends by dispensing something sweet — charming, not creepy.

Try make.fun with my referral: https://make.fun/r/0ene8b3q

## The line

> BEEP — human detected. No exact change required: press B7 and let this coil drop the sweetest thing on my shelf right into your hands.

134 characters — within the 200-character limit.

## How it works

`main.ts` (Node 22, standard library only) prints exactly the line to stdout — one line, nothing else — and also writes it to `/output/entry.txt` (a single line of UTF-8 text, no trailing newline). A code-point length guard (1–200 characters, counted with `[...line].length`) refuses to write an out-of-range line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
