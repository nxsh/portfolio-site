---
layout: post
title: "Correctly Installing Python on MacOS Big Sur" 
categories: development
date: 2021-02-20
--- 

When using Python it is not recommended to use the Mac system default version, nor is it worth messing with this installation.
Instead, the best option to install Python (and several versions if needed) is through the `pyenv` package, provided by **homebrew**.

# Pyenv 

`brew install pyenv` 
* When using Pyenv, the installations of python do not have the correct icon, it is blank 
* To fix this, right click the python installation file e.g. `python3.9` and drag a `.icns` file to the top left where the blank icon is

# Python and Tkinter

Install Tkinter with homebrew, `brew install tcl-tk`
If you already have a Python install using `pyenv` you must first uninstall it with `pyenv uninstall X.X.X` to be reinstalled after you configure Tkinter

Configure Tkinter with the following shell command:

```bash
env \
  PATH="$(brew --prefix tcl-tk)/bin:$PATH" \
  LDFLAGS="-L$(brew --prefix tcl-tk)/lib" \
  CPPFLAGS="-I$(brew --prefix tcl-tk)/include" \
  PKG_CONFIG_PATH="$(brew --prefix tcl-tk)/lib/pkgconfig" \
  CFLAGS="-I$(brew --prefix tcl-tk)/include" \
  PYTHON_CONFIGURE_OPTS="--with-tcltk-includes='-I$(brew --prefix tcl-tk)/include' --with-tcltk-libs='-L$(brew --prefix tcl-tk)/lib -ltcl8.6 -ltk8.6'" \
  pyenv install 3.9.1
```

This adds it to the path and addresses the caveats output by homebrew

Then set this as your system's global python version, `pyenv global 3.9.1` and reload your terminal/source your `.zshrc`

If not using Tkinter on a mac, you can likely just do `pyenv install 3.X.X`, however I am using it and so need to configure that too.

# Pip

When the global pyenv python version is set, the pip command will default to that installation of python 
It is a good idea to update pip before installing anything, with `pip install --upgrade pip`

## Incorrect packages

Before using pyenv to manage python, I mistakenly used the `pip3` command to install packages 
These are all located in `~/Library/Python/3.8/lib/python/site-packages/`
Similarly there may be packages installed in the Python 2.X folder if they were installed using Python 2's pip 
They could also be in `/usr/local/lib/`

## Managing Virtual Installations
The recommended way to do this for local development is using `pipenv` 

### pipenv 

* Install pipenv after pyenv is set up with `pip install pipenv` 
* Navigate to a new folder/your project folder, e.g. `mkdir todo_list && cd todo_list` 
* Run `pipenv install` to create a new virtual environment 
* Run `pipenv shell` to enter the shell for this new virtual environment, `exit` to exit this shell
* `pipenv install name` where name is a dependency is how to install packages 
