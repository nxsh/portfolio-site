---
layout: post 
title: "MacOS Big Sur Shell Configuration"
categories: development
date: 2020-12-20
---

As mentioned in a previous post, I have migrated to an M1 based MacBook Air and have recently spent some time setting up the terminal shell to my tastes.

This post will detail what I have done to achieve this.


## Terminal App

The terminal application I am using is `iTerm2` and I run it under the Rosetta translation layer to keep compatibility with things like `homebrew`. 

### Terminal Config
- Download 'oh-my-zsh'
- Download iTerm2
  - Install a color scheme for iTerm, I use Dracula or Solarized (Light & Dark), but there are plenty of options
  - Set left option key to Esc+
  - I use the following `Python` script for auto-changing iTerm's theme according to my Mac's system theme:
  
  ```python
  import asyncio
  import iterm2

  async def changeTheme(connection,parts):
      theme_dark = "Solarized Dark"
      theme_light = "Solarized Light"
      print(parts)
      
      if "dark" in parts:
          preset = await iterm2.ColorPreset.async_get(connection, theme_dark)
      else:
          preset = await iterm2.ColorPreset.async_get(connection, theme_light)

      # Update the list of all profiles and iterate over them.
      profiles=await iterm2.PartialProfile.async_query(connection)
      for partial in profiles:
          # Fetch the full profile and then set the color preset in it.
          profile = await partial.async_get_full_profile()
          await profile.async_set_color_preset(preset)

  async def main(connection):

      app = await iterm2.async_get_app(connection)
      window = app.current_window
      initial_theme = await app.async_get_theme()
      await changeTheme(connection,initial_theme)

      async with iterm2.VariableMonitor(connection, iterm2.VariableScopes.APP, "effectiveTheme", None) as mon:
          while True:
              # Block until theme changes
              theme = await mon.async_get()
              # Themes have space-delimited attributes, one of which will be light or dark.
              parts = theme.split(" ")
      
              await changeTheme(connection,parts)
              

  iterm2.run_forever(main)
  ```
  - This must be placed in `$HOME/Library/ApplicationSupport/iTerm2/Scripts/AutoLaunch`
  - Then go to `iTerm2 > Scripts > Autolaunch` and install the Python runtime 

### Fonts
- Install patched `Nerd Fonts` for terminal symbols/icons 
  - `brew tap homebrew/cask-fonts`
  - `brew install --cask font-hack-nerd-font`
- Install powerlevel10k `https://gist.github.com/kevin-smets/8568070` and run `p10k configure` then follow the wizard according to your tastes

### Jekyll (How I made this blog)
- Install jekyll 'https://jekyllrb.com/docs/installation/macos/'
  - `gem install --user-install bundler jekyll`
  - Navigate to a jekyll project folder and run `bundle config set --local path 'vendor/bundle'`
    - Note this will fail if there are spaces in the path to the folder 
  - Run `bundler install`
  - Now `bundle exec jekyll serve` will work

### Terminal Dotfiles
- .git-credentials & .gitconfig
- .zshrc customisations:
  - alias for iCloud drive
  - function for highlight homebrew package

# Homebrew:
- Install using a terminal app running through Rosetta
- Always use an x86 terminal to install and use (M1 not yet supported)
- Packages
  - Highlight
