---
title: "Graduate Software Engineer with Sky: Coding Test"
categories: development 
layout: post
date: 2021-01-23
---

One of my current graduate scheme applications is with Sky, a broadcasting and telecommunications company well-known in the UK.

Once my online application was submitted the next step was completing a standard psychometric test, the majority of the questions were based around data from Sky and tasked me with interpreting it using percentage arithmetic. 

It also had logic questions related to password guessing, and some algebraic problems.

# Password Problem 1

Given two passwords: keyboard951 and 12345drone, each containing 6 of the correct characters in a password, choose the correct password from the below options:

* worded73 
* 56brownie 
* dreaming91 
* brandnew12
* crowned56

Method: find the password that shares the most characters with **both** of the given passwords

<details> 
  <summary>Answer</summary>
   brandnew12
</details><br>


# Algebraic Problem 1 

A+A+A = 27 

B+B-A = 15 

C+C-B = 6


<details> 
  <summary>Answer</summary>
   A = 9 
   B = 12
   C = 9 
</details><br>

# Algebraic Problem 2

X+X+X+X = 48 

X+X+(Y * Y * Y) = 51 

Z+Z+(Z * Y) = 25


<details> 
  <summary>Answer</summary>
   X = 12 
   Y = 3 
   Z = 5 (a+a+a+a+a = 25)
</details><br>
I passed this stage and was met then with a coding test, hosted on [Codility](codility.com) which was comprised of the following questions.

# Task 1: 
You are given a string: 'aabc', 'baa', 'abab'. Return true if the character 'a' is always followed by another character 'a'.
* Examples: 'aabc' returns true, and 'abab' returns false. 

# Task 2: 
There are 'n' coins, each showing either heads or tails. We would like all the coins to form a sequence of alternating heads and tails. What is the minimum number of coins that must be reversed to achieve this.
* Examples: [1,0,1,0,1,1] returns 1 (only last coin must be flipped)
* Note: alternating binary bits, count the differences for swapping 1's or 0's and take the minimum 

# Task 3: 
You are given a string 'S'. Deletion of the k-th letter of S costs C[k]. After deleting a letter the costs of deleting other letters do not change. You want to delete some letters from S to obtain a string without two identical letters next to each other. What is the minimum total cost of deletions to achieve such a string? 
* Examples: for S='ab' and C = [1,3], after deleting 'a', deletion of 'b' will still cost 3
  * S = 'abccbd', C=[0,1,2,3,4,5], should return 2. Removing first occurence of 'c' achieves 'abcbd'

# Task 4:
Given a string to be parsed in CSV format "id,name,age,job\n1,Jill,24,Scientist\n2,Ryan,23,Developer\n3,Charlie,NULL,Researcher" that produces the following table:

| Id | Name    | Age | Job       |
|----|---------|-----|-----------|
| 1  | Jill    | 24  | Scientist |
| 2  | Ryan    | 23  | Developer |
| 3  | Charlie | NULL| Researcher|

If a row's field has a cell *exactly* equal to 'NULL', remove that row from the input string 

* Examples: "id,name,age,job\n1,Jill,24,Scientist\n2,Ryan,23,Developer\n3,Charlie,NULL,Researcher" becomes "id,name,age,job\n1,Jill,24,Scientist\n2,Ryan,23,Developer"

| Id | Name    | Age | Job       |
|----|---------|-----|-----------|
| 1  | Jill    | 24  | Scientist |
| 2  | Ryan    | 23  | Developer |

* Note that rows containing 'null' as part of a word such as 'Anulled' or 'ANULLED' must **not** be deleted, or rows with 'null' in lowercase 

# Task 5:
Given two arrays of dice rolls, e.g. [1,2,3] and [2,4,6], create a function that takes in these arrays and changes them to equal the **same total amount** (if possible) in the **minimum** amount of changes possible. 
* Note: greedy algorithm suitable here 

# Results

I was allotted 120 minutes to complete all 5 tasks, and managed to pass all tests for tasks 1-4, but did not manage to complete the final task. 

This was my first ever timed-coding assessment and 4/5 was enough to progress to the next stage of video assessments.

The experience has given me a lot of confidence for future coding tests, and I have been enjoying my time practicing on Leetcode and similar sites.
