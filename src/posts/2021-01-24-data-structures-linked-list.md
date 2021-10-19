---
layout: post
title: "Data Structures Part III - Linked Lists" 
categories: development
date: 2021-01-24 
--- 

# What is a Linked List?

* A linked list is a *linear data structure*, meaning elements are accessed sequentially
* Elements of a linked list are not stored in memory together (non-contiguous), the linking of elements is achieved through **pointers**
    * Because elements are accessed sequentially the speed of search operations are dependent on the size of the list
* Each element is a separate object (objects of class `node` in the below implementation).
* `node` objects are composed of: the value of the node, and the pointer to the next node (if any)
* The first node is known as the `head` 
* The last node is the `tail` and points to `null` or None

# LinkedList Class Definition in Python

```python
class LinkedList:
    def __init__(self, head=None):
        self.head = head
    
    # repr method defines the 'representation' of objects 
    # Essentially defines how they will be displayed textually
    def __repr__(self): 
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.value)
            node = node.next
        nodes.append("None")
        return " -> ".join(map(str, nodes))

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    # Override the output representation of an object from a class
    def __repr__(self):
        return self.value
```

# LinkedList Implementation 

```python 
# List
llist = LinkedList()

# Nodes
first = Node(1)
second = Node(2)
third = Node(3)

first.next = second
second.next = third

# Linking
llist.head = first
llist.head.next = second
second.next = third

print(repr(llist))
```

Output: `1 -> 2 -> 3 -> None` = `head(first) -> second -> tail(third) -> None`

# Why use a Linked List?