---
title: "Understanding Recursion" 
categories: development
date: "2021-02-09"
--- 

# What is Recursion?

Recursion is a computing term that is surprisingly difficult to find a definition for. Putting it as simply as I can, a *recursive function* is one that calls itself until it achieves its desired output. 

It is also surprisingly difficult to wrap your head around, I know it was for me. Visualizing the *call stack* of recursive functions is difficult to do in your head. 

# Recursive Array Sum

Below is a recursive `python` function to sum a given array:

```python
def recursiveSum(arr):
    if (len(arr)) == 1:
        return arr[0]
    else:
        return arr[0]+recursiveSum(arr[1:])
        # myArr[1:] = 2,3,4 (index 1 onwards)

myArr = [1,2,3,4]
print(recursiveSum(myArr)) # 10
print(myArr[0:]) # prints whole array
```

Let's walk through this function's execution:

1. Return 1 + sum([2,3,4])
2. Return 1 + 2 + sum([3,4])
3. Return 1 + 2 + 3 + sum([4])
4. Return 1 + 2 + 3 + 4

On this last line, the 4 is added through the exit condition of `len(arr) == 1`

By doing an addition operation in the function return, the return value of each recursive call of the function is *added* to the final function return

# Factorial 

Now let's look at an example of a recursive function to calculate a number's factorial:

```python 
def getFact(n):
    if n == 1:
        return n 
    return n * getFact(n-1)
    # if n=5, return 5 * 4 * 3 * 2 * 1

num = 5
print(getFact(num)) # 120
```

Here is an animation that steps through a recursive factorial function:

![](https://i2.wp.com/blog.codeanalogies.com/wp-content/uploads/2020/01/recursionGIFsfactorialnum2.gif?resize=720%2C540&ssl=1)

# Strings

Finally, let's end with a recursive string reverse function:

```python
def reverse(string):
    print(string)
    if string == "":
        return string
    else:
        return reverse(string[1:]) + string[0]
        # call reverse on string starting from 2nd element, plus first element

s = "hello"
reverse(s) # 'olleh'
```
<br>

|                    Call                   |     string   |    s[0]  |
|-------------------------------------------|--------------|----------|
| reverse('hello')                          | s = hello    | s[0] = h |
| =reverse('ello') + 'h'                    | s[1:] = ello | s[0] = e |
| =reverse('llo') + 'e' + 'h'               | s[1:] = llo  | s[0] = l |
| =reverse('lo') + 'l' + 'e' + 'h'          | s[1:] = lo   | s[0] = l |
| =reverse('o') + 'l' + 'l' + 'e' + 'h'     | s[1:] = o    | s[0] = o |
| =reverse("") + 'o' + 'l' + 'l' + 'e' + 'h'|              |          |
| Return 'olleh'                            |              |          |

Note that recursion isn't always the best solution, the string reverse function could be written simply as: `print(s[::-1])`
