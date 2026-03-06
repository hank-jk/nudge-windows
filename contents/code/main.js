// KWin Nudge Script — KDE 5
// Move or uniformly resize the active window by a fixed number of pixels.

var MOVE_PX   = 10;
var RESIZE_PX = 10;

function nudgeMove(dx, dy) {
    var win = workspace.activeClient;
    if (!win || win.fullScreen) return;
    var geo = win.geometry;
    win.geometry = {
        x:      geo.x + dx,
        y:      geo.y + dy,
        width:  geo.width,
        height: geo.height
    };
}

// Resize from center: window grows/shrinks equally on all sides
function nudgeResize(delta) {
    var win = workspace.activeClient;
    if (!win || win.fullScreen) return;
    var geo = win.geometry;
    var half = Math.round(delta / 2);
    win.geometry = {
        x:      geo.x - half,
        y:      geo.y - half,
        width:  geo.width  + delta,
        height: geo.height + delta
    };
}

registerShortcut("Nudge Window Left",   "Nudge Window Left",   "Ctrl+Alt+Left",  function() { nudgeMove(-MOVE_PX, 0); });
registerShortcut("Nudge Window Right",  "Nudge Window Right",  "Ctrl+Alt+Right", function() { nudgeMove( MOVE_PX, 0); });
registerShortcut("Nudge Window Up",     "Nudge Window Up",     "Ctrl+Alt+Up",    function() { nudgeMove(0, -MOVE_PX); });
registerShortcut("Nudge Window Down",   "Nudge Window Down",   "Ctrl+Alt+Down",  function() { nudgeMove(0,  MOVE_PX); });

registerShortcut("Nudge Window Grow",   "Nudge Window Grow (uniform)",   "Ctrl+Alt+Shift+Up",   function() { nudgeResize( RESIZE_PX); });
registerShortcut("Nudge Window Shrink", "Nudge Window Shrink (uniform)", "Ctrl+Alt+Shift+Down", function() { nudgeResize(-RESIZE_PX); });
