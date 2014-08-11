$(function() {
    $("#app-version").html(mw.appVersion);
    $("#app-bundle-version").html("(" + mw.appBundleVersion + ")");

    mw.addKeyboardShortcut({
        keycode: 0x7A, // F1 key
        modifierFlags: 0, // no modifier key
        callback: function callback() {
            console.log("wow")
        }
    })

    mw.setupPreferences([
        {"label": "General",  "identifier": "general",  "icon": "NSPreferencesGeneral", "height": 192},
        {"label": "Account",  "identifier": "account",  "icon": "NSUserAccounts",       "height": 100},
        {"label": "Shortcut", "identifier": "shortcut", "icon": "NSAdvanced",           "height": 120}
    ])

    $("#toggle-pin").click(function() {
        if ($(this).html() == "Pin") {
            mw.pin()
            $(this).html("Unpin")
        }
        else {
            mw.unpin()
            $(this).html("Pin")
        }
    })

    var db = openDatabase('test', '1.0', 'Menubar WebKit supports WebSQL database', 5 * 1024 * 1024)
})

function setIcon() {
    var iconCanvas = document.getElementById('icon')
    iconCanvas.width = 40
    iconCanvas.height = 40
    var iconCtx = iconCanvas.getContext('2d')
    iconCtx.fillRect(5, 7, 30, 30)
    iconCtx.clearRect(10, 12, 20, 20)

    var highlightedIconCanvas = document.getElementById('highlighted-icon')
    highlightedIconCanvas.width = 40
    highlightedIconCanvas.height = 40
    var highlightedIconCtx = highlightedIconCanvas.getContext('2d')
    highlightedIconCtx.fillStyle = "white"
    highlightedIconCtx.fillRect(5, 7, 30, 30)
    highlightedIconCtx.clearRect(10, 12, 20, 20)

    mw.setMenubarIcon(iconCanvas.toDataURL())
    mw.setMenubarHighlightedIcon(highlightedIconCanvas.toDataURL())
}
