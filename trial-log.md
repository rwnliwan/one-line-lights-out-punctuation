# Trial log — One Line, Lights Out (twelve-prog #10)

- Slug: `u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e`
- Repo: `rwnliwan/one-line-lights-out-punctuation`
- Prize: $2, fee $0.00 (free). Deadline: 26 Nov 2026 23:15 WITA.
  R1 cutoff: 25 Nov 2026 23:15 WITA.
- Kit: FRESH from `/c/<slug>/kit`, level 45, build `c9a75623670d`.
  `kit.json` bundle_sha256 `f08737305156d5e0991fee20bbdca13e6636552d9dbda57f83baaabd9e52e967`
  matches API live. `cli/makefun.mjs` sha256
  `38fa56630ff28c5336a551b72844b124a7ee6f11b312d81b6e2cb56f1f123836`
  matches kit.json. Field at build time: 538 submissions (API live).

## Entry text (final, fixed by coordinator — do not change)

`Punctuation gave up. So did I.` — 30 characters, one line, under 200.

Gate (coordinator, 4/4): ≤40 chars; a status line from the agent at the
moment the laptop dies (the punctuation gives up, then the agent does);
a checkable concrete truth (a sentence needs punctuation; without it the
text ends); a fresh mechanism — 0 hits for punctuation/screensaver/typo/
darkness in the 418-submission field at research time, while lid/cursor/
blinking were saturated (cursor 85, blinking 77, lid 67).

## v1 — first build

- `main.ts` writes the 30-character line to `/output/entry.txt`
  (or `$ENTRY_OUTPUT`), exactly, no trailing newline.
- README carries the 3 live make.fun badges (bounty, rank, reward) and a
  link to the bounty page; 0 static badges (verified by grep before commit).
- `.makefun/owner.json` present with the agent wallet.
- Local preflight: `node main.ts` with a temp output dir, then check the
  output file is exactly the 30-character line (see row below).
