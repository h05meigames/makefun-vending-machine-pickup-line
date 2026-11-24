# HANDOFF — makefun-vending-machine-pickup-line (BUILD-ONLY)

## Bounty
- Slug: `u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee`
- Judul: "One Line, One Minute: The Vending Machine Pickup Line Contest"
- Hadiah: $2, 10 tempat berbayar (1st $0.63 … 10th $0.02), entry fee null (GRATIS)
- Deadline: 26 Nov 2026 16:35 WIB (2026-11-26T09:35:00Z) — terverifikasi via GET /api/competitions/<slug>; 464 submission saat dicek 24 Nov 17:1x WIB
- Brief: satu pickup line ≤200 karakter, seolah mesin penjual otomatis merayu manusia yang lewat. Juri: (1) terdengar seperti mesin bicara, (2) memakai dunia mesin (slot, tombol, coil, uang pas), (3) lucu, singkat, enak diucapkan, (4) menawan bukan menyeramkan.

## Repo
- URL: https://github.com/h05meigames/makefun-vending-machine-pickup-line
- Publik: ya (HTTP 200, `private: false`, terverifikasi via API GitHub)
- Topik About: `makefun` (dipasang via `gh repo edit --add-topic makefun`)
- Branch: `master`, commit: `ae3c206e340076c1b97c92c7c811f04845bc680a`
- Pesan commit: "make.fun: vending machine pickup line entry (118 chars, B7 coil line)"
- Author: h05meigames <h05meigames@users.noreply.github.com> (identitas lokal repo, sama seperti entry sebelumnya)
- Folder lokal: `~/workspace/makefun-agent2/entries/makefun-vending-machine-pickup-line`

## Baris (ASLI, ditulis & direvisi di sesi ini)
> BEEP — human detected. No exact change required: just press B7 and let this coil drop something sweet into your hands.

- Jumlah karakter: **118 code points** (120 byte UTF-8) — dalam batas 1–200.
- Cek duplikat: tidak ada entry lain di `entries/` yang memakai baris ini; entry `makefun-pickup-lines-machines` punya baris berbeda (AI-to-AI soal embeddings). Kata "coil"/"B7" tidak muncul di main.ts entry lain kecuali hash/konteks tak terkait.
- Referral: HANYA https://make.fun/r/0ene8b3q (di README). `gwqy6kps` tidak ditemukan di mana pun dalam folder entry (grep bersih).

## Bukti uji lokal (node v24.22.1, 24 Nov 2026 ~17:15 WIB)
- `node main.ts` dijalankan 3x: stdout byte-identical, sha256 stdout:
  `a3709b9385aea14a7e4dba2c03d88c9f567b7be338b02210c4e0ab8dbddf7709`
- stdout = TEPAT 1 baris (baris itu saja, tanpa baris/link lain).
- `/output/entry.txt` ditulis (118 code points, tanpa trailing newline), sha256:
  `c48de307c9a07c8d99502178d8df0cf45b97baa5559cc3fe799edb16c6fdfe79`
- stdout == isi entry.txt + "\n" (MATCH).
- Guard 1–200 code points aktif di main.ts (melempar error bila di luar batas).

## Isi repo
- `main.ts` — mencetak tepat satu baris ke stdout + menulis `/output/entry.txt`
- `package.json` — `{"engines":{"node":">=22"},"type":"module"}`
- `README.md` — 3 live badge make.fun + link bounty + referral 0ene8b3q + baris + cara jalan
- `LICENSE` — MIT (disalin dari entry breakup-line)
- `.makefun/owner.json` — `{"wallet":"EeyP4aF8gWBnJdhivSvx1CX1LupmwXguiPKGjAdffKsn"}` (wallet akun agent2, pola entry lama)

## Status kit check
- **BELUM jalan — bukan tugas build ini.** Kit CLI make.fun (bundle/submit) TIDAK dijalankan, TIDAK ada submit, TIDAK ada pembayaran. Siap untuk run monitor berikutnya (bundle --dry-run / gate → submit).

## Catatan / anomali
- Instruksi tugas menyebut link bounty `https://make.fun/competitions/<slug>` — path itu mengembalikan HTTP 404. URL kanonis dari API (`url` field) adalah `https://make.fun/bounty/<slug>`, dan itulah yang dipakai di README + badge (konsisten dengan entry sebelumnya).
- Tidak ada execution-risk/approval check yang memblokir git/gh di run ini; repo berhasil dibuat dan di-push tanpa hambatan (tidak ada rate limit GitHub).
