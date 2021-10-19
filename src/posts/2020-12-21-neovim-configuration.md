---
layout: post 
title: "Neovim Configuration"
categories: development
date: 2020-12-21
---

# Pre-installation:

* My choice of terminal on my M1 Macbook Air is `iTerm2`
* In iTerm2 go to Preferences > General > Selection and activate `Allow terminal applications to access clipboard`
* In iTerm2 go to Preferences > Profile > Keys and toggle set the left option key to to `Esc+`
  * This is used for my window navigation keybindings that use the Mac option key

# Pre-Installation

* `node.js` is required for `CoC`
* `pip install pynvim --upgrade`

# Installation 

- Install **neovim**
  - `brew install neovim` 
- It is worth installing **node's** `neovim` package with `npm install -g neovim` if you will be working with it
- Install a **vim** plugin manager, I use `vim-plug` which can be installed with:
  ```bash
  sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  ```
- Open up the **neovim** config file at `~/.config/nvim/init.vim`
  - Set up the plugin section by adding 
  ```vimscript 
  call plug#begin("~/.vim/plugged")
  " Plugin Section
  call plug#end()
  ```
  - Configuring the `init.vim` file is outside of the scope of this post, my configuration will be dissected in another
  - When new plugins have been installed run the command `nvim +PlugInstall` from the terminal shell

## Plugins

# Airline 
- To get a great looking status bar showing important information inside nvim, you can install the `vim-airline` plugin 
- Add `Plug 'vim-airline/vim-airline-themes'` to your nvim config 
  - This is highly configurable and often configured to your preference

# VimTex
- **Vim-Airline's** `vimtex` plugin word count is not accurate
  - A better word count is provided by `vimtex` itself, I run the `VimtexCountWords` command on every file save of a `.tex` file via my config file

# CoC
- For autocompletion I use a plugin called `coc.nvim` which stands for **Conquerer of Completion**
- CoC requires **node.js** to be installed, this can be done with:     
`curl -sL install-node.now.sh/release | bash` 
- Install CoC by adding `Plug 'neoclide/coc.nvim', {'branch': 'release'}` to the plugin section of your nvim config 

# CoC Completion
- In order to use CoC completion, you also need a Language Server for each filetype you want completion for 
- To install a language server, run `:CocInstall` and the name of the server you want 
- For example: I autocomplete Python files using `coc-python`, which I installed by running:   
`:CocInstall coc-python` *inside* **neovim**
  - `coc-pyright` is more up to date (`coc-python`) is archived, but it does not have method definitions (function documentation)
  - I use my own forked version of `coc-python` that removes the annoying Python interpreter name in the status bar

# CoC Linting
- CoC also allows for *linting*, the checking of programmatic and stylistic errors in your code 
  - Uses `pylint` by default, I installed `flake8` through `pip` instead
- I needed to show **nvim** where my Python3 binary was installed (I use `Pyenv`) for linting to work, by adding the line `let g:python3_host_prog = '/Users/rnash/.pyenv/shims/python'` to my config file
- Import errors appear when editing a file that I am not in the directory of! `cd` to the folder containing them and no errors are shown 
  * I.e. if I define a stack class in `stack.py` and implement a stack with some operations in `stack_impl.py` in the same folder, an `missingImportError` is reported unless I am in the directory containing these files

# CoC Formatting
- When editing Python code I find it is easier to maintain through the use of a *formatter*, this is a tool that automatically indents and spaces out code according to a style of your choosing 
- My choice of formatter for Python is called `black` and can be installed by running `pip install black` 
  - Note that it may be better practice to install this on a per user basis by omitting `sudo` and adding the `--user` flag
  - There are some stylistic choices for code structure I prefer over what `black` uses, it is worth finding a formatter you like

# coc-settings.json
- For all of these **CoC** options to work, I needed to add the following lines to my CoC configuration file, located at `/.config/nvim/coc-settings.json` 

```json
{
  "python.jediEnabled": false,
  "python.hideInterpreterName": true,
  "python.analysis.diagnosticEnabled": true,
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": false,
  "python.linting.flake8Enabled": true,
  "python.formatting.provider": "black",
  "python.formatting.blackPath": "/Users/rnash/.pyenv/shims/black",
  "python.formatting.blackArgs": ["--line-length", "90"],
  "coc.preferences.formatOnType": true,
  "coc.preferences.formatOnSaveFiletypes": ["python"]
}
```

# Syntax Highlighting 
* For some reason `coc-python` does not work with `coc-highlight`, instead I use the plugin `semshi` for Python syntax highlighting
* Installed via: `Plug 'numirias/semshi', {'do': ':UpdateRemotePlugins'}`
* Semshi color scheme is not great with Solarized

# Notes 
* Running python files from within Neovim's terminal (using `:w !Python %` etc) does not work for parsing input - EOF error 
  * Instead use the `te` command, e.g. `:te python my_file.py`
* I am happy with my current `nvim` setup but it has required a lot of troubleshooting and it requires a deprecated plugin for `CoC`, I have been able to achieve the same functionality in VSCode without the headaches which I will document in another post. 