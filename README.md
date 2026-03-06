# nudge-windows

A KWin script for nudging and resizing windows pixel-by-pixel on KDE Plasma 5.

I got tired of not being able to fine-tune window positions without dragging them around with the mouse. This lets you move or uniformly resize the active window in 10px increments using keyboard shortcuts.

## What it does

- **Move** the active window in any direction (10px at a time)
- **Grow/shrink** the active window uniformly from the center (also 10px)

## Shortcuts

| Action | Shortcut |
|---|---|
| Nudge left | `Ctrl+Alt+←` |
| Nudge right | `Ctrl+Alt+→` |
| Nudge up | `Ctrl+Alt+↑` |
| Nudge down | `Ctrl+Alt+↓` |
| Grow | `Ctrl+Alt+Shift+↑` |
| Shrink | `Ctrl+Alt+Shift+↓` |

You can rebind any of these in **System Settings → Shortcuts → Global Shortcuts → KWin**.

## Installation

1. Copy the package to your KWin scripts directory:
   ```bash
   cp -r . ~/.local/share/kwin/scripts/nudge-windows
   ```

2. Enable it in `~/.config/kwinrc` under `[Plugins]`:
   ```ini
   [Plugins]
   nudge-windowsEnabled=true
   ```

3. Reload KWin:
   ```bash
   qdbus org.kde.KWin /KWin reconfigure
   ```

That's it. The shortcuts should be live immediately.

## Notes

- Tested on KDE Plasma 5.27 / kwin_x11
- The script file must live at `contents/code/main.js` inside the package — KWin won't find it if it's at the root
- Fullscreen windows are ignored

## License

MIT
