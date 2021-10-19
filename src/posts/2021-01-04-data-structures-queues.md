---
layout: post
title: "Data Structures Part II - Queues" 
categories: development
date: 2021-01-04
--- 

# What is a Queue?
A queue is another *abstract data type* built upon the *array* data structure.

A queue stores items in a First-In -> First-Out manner, commonly referred to as FIFO.

The 'head' is the first element (oldest), the 'tail' is the last element (most recent).

# Example of a Queue
```python
friend_names = ['Ryan', 'Charlie', 'Sean', 'Kyle']

[0] = 'Ryan' #(head) 

[4] = 'Kyle' #(tail)
```
# Methods of a Queue 

* `enqueue(item)` - add an element to the tail of the queue 
* `dequeue()` - remove (return) the head element of the queue

# Queue Class Definition in Python

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        self.items.pop(0)

    def peek(self):
        return self.items[0]  # view first item (front of queue)

```

# Queue Implementation 

```python 
q = Queue()  # create a new Stack

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.enqueue('d')

print("Top is:", q.peek(), "\n")  # 'a' 
q.dequeue() 

print("Top is:", q.peek(), "\n")  # 'b'
q.dequeue() 

q.enqueue('e')

# q = ['c','d','e']
```

# Why use a Queue?