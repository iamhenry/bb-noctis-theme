# bb-noctis-theme

Eight [Noctis](https://github.com/liviuschera/noctis) color themes ported to
[bb](https://github.com/get-bb), the agentic IDE.

Each folder is one bb theme: `theme.css` for the app palette, plus matching
`pierre-dark.json` / `pierre-light.json` for code, diffs, and file previews.

## Themes

| Theme | Look |
| --- | --- |
| `noctis` | deep cold cyan-teal, dark |
| `noctis-azureus` | saturated cold azure, dark |
| `noctis-minimus` | low-saturation azure, dark |
| `noctis-obscuro` | near-black cold cyan, dark |
| `noctis-sereno` | softer cold cyan, dark |
| `noctis-lilac` | light cold blue-violet |
| `noctis-lux` | warm cream, light |
| `noctis-hibernus` | cool off-white, light |

## Install

```sh
git clone https://github.com/iamhenry/bb-noctis-theme
cp -R bb-noctis-theme/noctis* ~/.bb/theme/
bb theme set noctis
```

Then switch themes in Settings → Appearance, or with `bb theme set <name>`.
If your bb data directory is not `~/.bb`, copy the folders into the directory
printed by `bb theme dir`.

## Notes

These are tuned ports, not straight palette dumps:

- **Flat frame** — the icon rail, sidebar, and window chrome share the canvas
  color instead of stacking a darker strip.
- **Neutral text tiers** — metadata, timestamps, and branch paths use a grey
  mixed from each theme's own ink rather than Noctis's blue chrome greys.
  Contrast stays at 4.5:1 or better for secondary text.
- **Softer separators** — borders and dividers are a 10% / 8% ink lift instead
  of the near-black window border.
- **One look per variant** — Noctis ships a single mode per theme, so each port
  keeps that palette in both light and dark mode.

Bordo, UVA, and Viola are not included.

## License

MIT. The palette is Copyright (c) 2018 Liviu Schera; the bb port is
Copyright (c) 2026 iamhenry. See [LICENSE](LICENSE).
