---
layout: post 
title: "Setting up VSCode on an M1 Mac"
categories: development 
date: 2021-01-07
---

# Config 
* Install language plugins 
* Install `vim` keybinds 
* Change terminal app to `iTerm` 
* Change terminal font to a patched font e.g. `Nerd Hack Font Mono` for terminal icons to match terminal config 

## Settings

# Accessing Settings
* Code in status bar > Preferences > Settings
    * To access `settings.json` scroll through settings until you see a setting with *edit in settings.json* under it (there is probably a better way)
* For keybindings: Code > Preferences > Keyboard shortcuts
    * To access `keybindings.json` > Click the paper icon with an arrow on it in the top right 

# Settings for VSCode outside of it
* Created an alias `openc` which is set to alias `"open -a Visual\ Studio\ Code\ -\ Insiders"` as using `code` to open files while in a VSCode window makes the icon bounce before opening, this is faster
    * `open` uses Xcode by default, it was quicker to make this alias than change file associations for every type
* Disable Apple's press and hold: `defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool true`

# My Configs

settings.json

```json
{
    "vim.leader": ",",
    "vim.insertModeKeyBindings": [
        {
            "before": [
                "k",
                "j"
            ],
            "after": [
                "<Esc>"
            ]
        }
    ],
    "workbench.colorTheme": "Solarized Light",
    "terminal.external.osxExec": "iTerm.app",
    "editor.fontFamily": "Hack Nerd Font Mono",
    "editor.wordWrap": "on",
    "editor.inlineHints.fontFamily": "Hack Nerd Font Mono",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "window.autoDetectColorScheme": true,
    "workbench.preferredLightColorTheme": "Solarized Light",
    "workbench.preferredDarkColorTheme": "Solarized Dark",
    "workbench.editorAssociations": [
        {
            "viewType": "jupyter-notebook",
            "filenamePattern": "*.ipynb"
        }
    ],
    "python.languageServer": "Pylance",
    "python.defaultInterpreterPath": "~/.pyenv/versions/3.9.1/bin/python",
    "python.formatting.provider": "black",
    "python.formatting.blackPath": "/Users/rnash/.pyenv/shims/black"
}
```

keybindings.json

```json 
// Place your key bindings in this file to override the defaults
[
    {
        "key": "alt+j",
        "command": "workbench.action.terminal.focus",
        "when": "!terminalFocus"
    },
    {
        "key": "alt+k",
        "command": "workbench.action.focusActiveEditorGroup",
        "when": "terminalFocus"
    },
    {
        "key": "enter",
        "command": "acceptSelectedSuggestion",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "tab",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "shift+tab",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    }
]
```

# Issues
* When using my light theme for the terminal, nvim does not respect the light background and opens in dark mode. This only happens in the VSCode integrated terminal
    * It would be stupid to use vim within the VSCode terminally anyway, but is annoying nonetheless
* This seems to be an issue with VSCode's solarized light theme, as when running nvim in an iTerm terminal within VSCode, my iTerm color scheme is not followed exactly (e.g. the terminal text is black and not grey)
* A possible workaround is changing my iTerm color switch script to change profiles instead of color presets, but nvim could still be unable to realise the background is light when in light mode
    * Update: this does not work either, the profile does not change until a new session is created (even when done through the app)