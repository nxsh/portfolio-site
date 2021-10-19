---
layout: post
title: "Data Structures Part I - Stacks" 
categories: development
date: 2020-12-24 
--- 
For a bit of background, I have now completed my degree in computer science (with management) and am in the process of applying for graduate software engineering positions in London.

To prepare for interviews I have been studying data structures and algorithms so that I don't completely bomb the technical side of them, I would say this was a part of my degree I didn't spend enough time on during my first year.

These entries serve as not only useful information to my fellow 2020 graduates and those in their final year also applying for positions, but to consolidate my knowledge of the concepts I will be covering.

To start of this data structure and algorithms series, I will begin with a data structure known as a 'Stack'.

# What is a Stack?

First we must define a *data structure* - a collection of data values, the relationships among them, and the functions/operations that can be performed on them.

An *abstract data type* uses a data structure as its base, and is the defined behaviour of a given data structure, of which a 'Stack' is an example.

Creating a 'Stack' is defining the behaviour of a *non-primitive* data type - generally an *array* - to conform to the model of a stack.

A stack's general behaviour stores items in a Last-In -> First-Out manner, commonly referred to as LIFO. 
It has the operations `push` and `pop` which add to the top of a stack and remove a stack's top item, respectively. 

# Stack Class Definition in Python

```python
class Stack:
    def __init__(self):
        self.items = (
            []
        )  # every stack object will have an attribute 'items' which is an empty list

    # Methods
    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items) - 1]

    def size(self):
        return len(self.items)
```

# Stack Implementation 

```python 
s = Stack()  # create a new Stack

s.push(4)  # push to it

s.push(5)

s.push(6)

'''Current stack:
6
5
4
'''

s.pop()

'''Current stack:
5
4 
'''

print("Top is:", s.peek(), "\n")  # View top item

```

# Why use a Stack?
