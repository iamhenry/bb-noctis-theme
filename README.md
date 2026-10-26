# bb-noctis-theme

Eight [Noctis](https://github.com/liviuschera/noctis) color themes ported to
[bb](https://github.com/get-bb), the agentic IDE.

Each folder is one bb theme: `theme.css` for the app palette, plus matching
`pierre-dark.json` / `pierre-light.json` for code, diffs, and file previews.

## Screenshots

<table>
  <tr>
    <td align="center"><img src="screenshots/noctis.jpg" width="430" alt="Noctis"><br><sub><b>noctis</b> · dark</sub></td>
    <td align="center"><img src="screenshots/noctis-azureus.jpg" width="430" alt="Noctis Azureus"><br><sub><b>noctis-azureus</b> · dark</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="screenshots/noctis-minimus.jpg" width="430" alt="Noctis Minimus"><br><sub><b>noctis-minimus</b> · dark</sub></td>
    <td align="center"><img src="screenshots/noctis-obscuro.jpg" width="430" alt="Noctis Obscuro"><br><sub><b>noctis-obscuro</b> · dark</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="screenshots/noctis-sereno.jpg" width="430" alt="Noctis Sereno"><br><sub><b>noctis-sereno</b> · dark</sub></td>
    <td align="center"><img src="screenshots/noctis-lilac.jpg" width="430" alt="Noctis Lilac"><br><sub><b>noctis-lilac</b> · light</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="screenshots/noctis-lux.jpg" width="430" alt="Noctis Lux"><br><sub><b>noctis-lux</b> · light</sub></td>
    <td align="center"><img src="screenshots/noctis-hibernus.jpg" width="430" alt="Noctis Hibernus"><br><sub><b>noctis-hibernus</b> · light</sub></td>
  </tr>
</table>

Previews are captured in bb's built-in Gen-UI Gallery on a clean workspace, so
no session or personal content is shown.

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
