---
layout: post
title: Coding Interview Questions Part I - Reverse Int
categories: development 
date: 2020-12-20 
---

This is the first in a series of posts dissecting typical coding interview questions. I will begin with a pretty simple one - *reversing an integer*. 

```python
def reverse_int(n):
  rev = 0
  while num > 0: # n < 10 / 10 = 0 
    rev = rev * 10 # shift current rev to left to append digit
    rev = rev + (num % 10) # get last digit of num 
    num = num / 10 # chop off last digit of num
```

# Tracing a Call 

`reverse_int(492)`

1. Loop 1
    1. `rev` is `0`
    2. `rev` is `rev * 10 = 0`
    3. `rev` is `rev` + (num % 10) = 2 
    4. `num` = 49
2. Loop 2
    1. `rev`is `rev` * 10 = 20 
    2. `rev` is `rev` + (num % 10) = 29 
    3. `num` = 4
3. Loop 3
    1. `rev` = `rev * 10` = 290 
    2. `rev` = `rev` + (num % 10) = 294 
    3. `num` = 0

