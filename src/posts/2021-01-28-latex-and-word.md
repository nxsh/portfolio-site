---
layout: post
title: "LaTeX and Word" 
categories: development
date: 2021-01-28
--- 

# Writing LaTex 

* Essay templates 
* alias for new essay
* Use vim and goyo 
* Vim works well with vimtex, disabled default wordcount as it is inaccurate 
* Correct word count works on file save, but I want to see it in the airline status bar 
* Works using vimtex's implementation of texcount, but causes stuttering as it is ran constantly
    * Need to find a way to run this on file open and save, not constantly 

# Converting to Word 

* pandoc with citeproc and csl files
* zsh function 