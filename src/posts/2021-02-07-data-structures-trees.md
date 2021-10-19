---
title: "Data Structures Part IV - Trees" 
categories: development
date: "2021-02-07"
--- 

# What is a Tree?

* A tree is another *abstract data type*
* Similar to a *linked list* it is a collection of nodes, however a tree is a *non-linear* abstract data type
    * This means the data is not stored sequentially
* In general, a tree has a *root node*, which then has *child nodes*
* The nodes are connected by *edges* 
* The value (or data) of a node is known as a *key*
![](https://miro.medium.com/max/975/1*PWJiwTxRdQy8A_Y0hAv5Eg.png)

# Tree Class Definition in Python

```python
class Tree:
    def __init__(self, data=None):
        self.left = None
        self.right = None
        self.data = data
```
* The above tree class is a *binary tree*, where each node has only a left pointer or right pointer 
    * A binary tree is one where each node has **two** child nodes at most

# Tree Implementation 

```python 
# Recursive count node function
def count_all(node):
    return 1 + count_all(node.left) + count_all(node.right) if node else 0

# Implementing node class to form a tree
root = Tree()

root.data = 4
root.data = "root"

root.left = Tree()
root.left.data = "left"

root.right = Tree()
root.right.data = "right"

print(count_all(root))
```

# Why use a Tree?