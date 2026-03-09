# What is a Stack?

A stack is a **Last In, First Out (LIFO)** data structure, commonly used in scenarios such as recursive calls, parenthesis matching, and expression evaluation.

We can imagine a stack as a **box where items can only be put in and taken out from one end**:
The last thing you put in will definitely be the first one you take out.

Based on different problem characteristics, stack applications can be divided into the following typical types:

## 1. Basic Stack

**Characteristics:**

* Supports basic push and pop operations.
* Mainly used for restoring processes, sequential simulation, path backtracking, etc.

**Applicable Scenarios:**

* Simulating system processes (such as text editing, backspace, path simplification).
* Determining whether a sequence is valid.
* Handling problems with "undo" operations.

**Example: You are using Ctrl+Z to undo an operation**

Imagine you are editing a document, and every operation is recorded. If you press Ctrl+Z, it will **undo the most recent operation** - this "undo stack" is a LIFO stack structure.

**Corresponding Problems:**

* [71. Simplify Path](https://leetcode.com/problems/simplify-path/)
* [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)
* [946. Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/)
* [1472. Design Browser History](https://leetcode.com/problems/design-browser-history/)

## 2. Min/Max Stack

**Characteristics:**

* On the basis of ordinary stack operations, supports retrieving the minimum or maximum value in the current stack in **O(1)** time.
* Usually uses an auxiliary stack for synchronous extrema maintenance.

**Applicable Scenarios:**

* Scenarios with high-frequency occurrences where the min/max element needs to be known quickly.
* Values change frequently but still require fast polling.

**Example: You are checking the "current lowest price" on a stock trading platform**

You buy a certain stock, recording the price every time you buy. Now you want to know at any time: **"What is the lowest price in my purchase records?"**
A min stack is exactly this magical tool that "tells you the lowest point at any time."

**Corresponding Problems:**

* [155. Min Stack](https://leetcode.com/problems/min-stack/)
* [895. Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/)

## 3. Pair Elimination Stack

**Characteristics:**

* Adjacent two or more elements are eliminated when a specific condition is met.
* Commonly used for string processing, adjacent duplicate/collision problems, etc.

**Applicable Scenarios:**

* Eliminating all adjacent duplicate characters.
* Simulating the process of merging, colliding, and combining.

**Example: Cleaning up duplicate messages or dirty words in a chat log**

Like when you are managing a group member's speech in a WeChat group, if two identical emojis appear in a row, they are deleted, or two conflicting commands (like left/right, up/down) conflict and cancel each other out - this is "pair elimination".

**Corresponding Problems:**

* [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
* [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
* [1209. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

## 4. Valid Parentheses Stack

**Characteristics:**

* Utilize a stack to record the order of parentheses, implementing nested matching, validity checking, nested depth calculation, etc.

**Applicable Scenarios:**

* Determining whether a parenthesis string is valid.
* Calculating the nesting level or score of a parenthesis structure.
* Generating, cleaning, or balancing parentheses sequences.

**Example: You are looking at parentheses syntax highlighting in a code editor**

When you write code, the editor automatically pairs `()` or `{}`, and an extra one will cause an error. This is as if it is using a "stack" to help you with the parenthesis pairing check.

**Corresponding Problems:**

* [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
* [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
* [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

## 5. Expression Evaluation Stack

**Characteristics:**

* Use a stack to handle infix expression conversion to postfix (Reverse Polish Notation), nested parentheses, and operator precedence.
* Can also be used for parsing boolean expressions, Lisp expressions, etc.

**Applicable Scenarios:**

* Need to calculate an expression in order of priority.
* The evaluation problem of recursive nested structures.

**Example: You enter `2 * (3 + 4)` into a calculator**

The calculator will calculate the part in the parentheses first, and then multiply - it actually uses a "stack" to manage this calculation priority process.

**Corresponding Problems:**

* [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
* [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/)
* [394. Decode String](https://leetcode.com/problems/decode-string/)
* [1106. Parsing A Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/)

## 6. Monotonic Stack

**Characteristics:**

* The elements in the stack maintain a monotonically increasing or decreasing order (usually storing indices).
* Commonly used for finding the next greater/smaller element, maintaining extremes.

**Applicable Scenarios:**

* Solving the largest rectangle, max area, next warmer temperature, etc.
* Optimizing a brute-force nested `O(n²)` problem to `O(n)`.

**Example: You are looking at a row of students, wanting to know who is the first person taller than each of them**

You look through a row of height data, wanting to know "who is the first one after him that is taller than him". You use a monotonically decreasing stack, scanning all the way, only keeping those who could potentially be "taller than him" - this is called a monotonic stack.

**Corresponding Problems:**

* [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
* [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
* [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

## 7. Stack Design Structures

**Characteristics:**

* Multi-stack, multi-functional, composite data structures (like: Heap + Stack).
* Need to meet specific functions like concurrency, frequency statistics, incremental updates, etc.

**Applicable Scenarios:**

* Customized structures to meet customized operations.
* Data structure design problems, system simulation problems.

**Example: You are a chef, each plate stack can only stack 5 bowls, manage multiple stacks together**

You design a "bowl tower system", when a bowl stack is full, change to the next one - you need to simultaneously support adding bowls, picking up bowls, and finding the shallowest stack of bowls.

**Corresponding Problems:**

* [1172. Dinner Plate Stacks](https://leetcode.com/problems/dinner-plate-stacks/)
* [1381. Design a Stack With Increment Operation](https://leetcode.com/problems/design-a-stack-with-increment-operation/)
* [2296. Design a Text Editor](https://leetcode.com/problems/design-a-text-editor/)

📌 **One-Sentence Summary**:

> The stack is a powerful tool for processing "ordered undos", "nested structures", "sequential matching", "expression evaluations", etc. Each category of problems corresponds to different stack usage techniques.
