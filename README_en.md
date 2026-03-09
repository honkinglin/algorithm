# 🧠 Algorithm Learning Notes

[🇨🇳 简体中文](README.md) | [🇬🇧 English](README_en.md)

This repository documents my entire process of systematically learning algorithms. The focus is on understanding problem patterns and building reusable solution templates. I categorize problems based on different algorithm topics and use real-life analogies to help intuitively understand abstract concepts, along with clear comments and comparisons of multiple solutions.

## 🗂️ Learning Method

* **Topic-based Practice**: Instead of solving problems in numerical order, I categorize and organize them by technique.
* **Real-life Analogies**: For example, using "train cars" for Linked Lists, "checking accounts" for Prefix Sums, and "trying on clothes" for Backtracking.
* **Template-driven Learning**: Master the common templates first (like Sliding Window, Binary Search, Backtracking), and then apply flexible variations.
* **Multi-solution Analysis**: Including brute-force solutions, optimized solutions, and their time complexity analyses.
* **Clean Code**: All code is written in Python, with detailed comments to facilitate review and interview preparation.

## 🔍 Algorithm Categories & Analogies

### Sliding Window

1. **Fixed Window** – Like scrolling through a social feed, only viewing 3 posts at a time (Leetcode 643)
2. **Variable Window** – Like finding the longest streak of staying logged in without changing devices (Leetcode 3)
3. **Deque (Double-ended Queue)** – Like analyzing the highest stock price over the past three days (Leetcode 239)

### Prefix Sum

1. **1D Prefix Sum** – Like checking accounts: how much money was spent from day 3 to day 7? (Leetcode 303)
2. **2D Prefix Sum** – Like calculating area scores on a heatmap (Leetcode 304)
3. **Prefix Sum + Hash Map** – Like a risk control system identifying a specific consumption period of exactly $1000 (Leetcode 560)

### Difference Array

1. **1D Difference Array** – Like scheduling meetings: marking "from which day the meetings increase, and when they end" (Leetcode 1094, 1109, 370)
2. **2D Difference Array** – Like a map editor: adding heat, color, or weight to an entire region at once (Leetcode 2536, 2132, 850)
3. **Difference Array + Sweep Line** – Like analyzing foot traffic: from which year the population increased, and when it decreased (Leetcode 2848, 1854, 2251)

### Linked List

1. **Traversal** – Like a train conductor walking from head to tail inspecting every car (Leetcode 1290)
2. **Deletion** – Like removing a broken train car (Leetcode 203)
3. **Insertion** – Like attaching a new car after the k-th train car (Leetcode 707)
4. **Reversal** – Like a train doing a U-turn, reversing the connection of all cars (Leetcode 206)
5. **Fast & Slow Pointers** – Like running laps to catch a thief, detecting a loop when fast and slow runners meet (Leetcode 141)
6. **Two Pointers** – Like walking from both the front and back of the train to check for symmetry (Leetcode 234)
7. **Merging** – Like merging two railway lines (Leetcode 21)
8. **Divide & Conquer** – Like sorting segments of a train and then merging them (Leetcode 148)
9. **Complex Simulation** – Like a dispatch station simulating merging, splitting, and rearranging (Leetcode 2)

### Binary Tree

1. **Traversal** – Like visiting museum exhibition halls in a specific order (Leetcode 94)
2. **Top-down DFS** – Like distributing packages level by level (Leetcode 112)
3. **Bottom-up DFS** – Like reporting grades level by level up to the principal (Leetcode 104)
4. **Pruning** – Like pruning a fruit tree, keeping only the branches that bear fruit (Leetcode 814)
5. **Recursion with Return** – Like evaluating the longest work chain, returning results up layer by layer (Leetcode 687)
6. **Diameter** – Like finding the longest route between bus stops (Leetcode 543)
7. **Backtracking Paths** – Like exploring a forest, trying all paths and then turning back (Leetcode 257)
8. **Lowest Common Ancestor** – Like finding the common ancestor of you and your cousin (Leetcode 236)
9. **BST Operations** – Like inserting/removing items on grocery shelves based on price (Leetcode 701)
10. **Construction** – Like assembling a Lego model based on instructions (Leetcode 105)
11. **Tree DP** – Like corporate executives aggregating the best sub-strategies (Leetcode 337)
12. **Level-order BFS** – Like a principal passing notices to grade directors level by level (Leetcode 102)

### Binary Search

1. **Basic Search** – Like a number guessing game, halving the range each time (Leetcode 704)
2. **Boundary Search** – Like finding the leftmost/rightmost empty seat (Leetcode 34)
3. **Binary Search on Answer** – Like a delivery company testing the minimum capacity needed to finish all shipments (Leetcode 1011)
4. **Special Structure Search** – Like climbing a mountain to find the peak (Leetcode 162)
5. **Implicit Binary Search** – Like testing if a budget is enough to buy a target item during a flash sale (Leetcode 300)

### Stack

1. **Basic Simulation** – Like Ctrl+Z to undo an operation (Leetcode 844, 71)
2. **Bracket Validity** – Like a code editor automatically pairing brackets (Leetcode 20, 32)
3. **Expression Parsing** – Like a calculator processing addition, subtraction, multiplication, and division in order (Leetcode 150, 224, 394)
4. **Adjacent Elimination** – Like clearing duplicate emojis in a chat history (Leetcode 1047, 1209, 735)
5. **Min/Max Stack** – Like a stock system always telling you the lowest buy-in price (Leetcode 155, 716)
6. **Designed Stack Structures** – Like a tower system of multiple bowls stacked together (Leetcode 1172, 1381)
7. **Monotonic Stack** – Like finding the first person taller behind each student (Leetcode 739, 84)

### Queue

1. **Basic Simulation** – Like lining up to clock in, recording recent attendees (Leetcode 933, 950, 649)
2. **Deque** – Like theater audiences entering or exiting from the front or back doors (Leetcode 2810, 2071)
3. **Circular/Designed Queue** – Like a subway train dispatch system with circular entry and exit (Leetcode 622, 641, 1670, 3508)
4. **Monotonic Queue** – Like checking the highest temperatures over the past few days (Leetcode 239, 1438, 862)
5. **Monotonic Queue specific DP** – Like scheduling delivery vans for the most cost-effective combination (Leetcode 1696, 1425, 2944)
6. **Queue implementing other structures** – Like using a queue to simulate a stack, or vice versa (Leetcode 225, 232)
7. **Queue Search (BFS)** – Like a fire spreading step by step (Leetcode 542, 994, 1926)

### Backtracking

1. **Introductory Template** – Like combinations on an old-school phone keypad (Leetcode 17)
2. **Subsets** – Like packing luggage, choosing whether to bring an item or not (Leetcode 78, 90)
3. **Partitioning** – Like cutting a cake, where every piece must meet taste rules (Leetcode 131, 93)
4. **Combinations** – Like picking lottery tickets, choosing k numbers (Leetcode 77, 39)
5. **Permutations** – Like arranging kids' positions for a photo (Leetcode 46, 47)
6. **Search** – Like navigating a maze to find the exit (Leetcode 200, 79)
7. **With Duplicates** – Like avoiding duplicates when inviting students with the same name (Leetcode 40, 90)
8. **Meet in the Middle** – Like two people packing luggage separately and then merging them (Leetcode 1755, 494)

### Dynamic Programming

1. **Linear DP** – Like climbing stairs, step relies on the previous steps (Leetcode 70, 746)
2. **Knapsack DP** – Like packing luggage with limited capacity, choosing whether to pick an item (Leetcode 416, 494, 518)
3. **Subsequence DP** – Like picking out a sequence of keywords in a long sentence (Leetcode 1143, 300, 72)
4. **Interval DP** – Like cutting a cake, each cut affects the total cost (Leetcode 312, 1000, 887)
5. **Tree DP** – Like a company handing out bonuses, ensuring managers and their direct reports do not both get them (Leetcode 337, 124)
6. **State Machine DP** – Like stock trading, being in different states on different days (Leetcode 122, 309, 714)
7. **Digit DP** – Like counting numbers digit by digit (Leetcode 233, 357)
8. **Memoization (Top-down DP)** – Like playing a maze game, recording paths taken to avoid repetition (Leetcode 494, 64)
9. **Game Theory DP** – Like a turn-based game, looking for the optimal decision at each step (Leetcode 877, 486, 1140)
10. **State Compression DP** – Like switch operations, using binary to record all state combinations (Leetcode 691, 847)


## 🎯 Learning Goals

* Internalize the **problem modeling and solution patterns** behind common question types
* Build a **transferable, reusable system of solution templates**
* Improve the ability to **analyze problems + quickly express ideas** during interviews

## 📌 Repository Info

* All code is written in Python, categorized by topic or Leetcode problem number
* Some problems contain multiple implementations (e.g., Recursion vs Iteration, Brute-force vs Optimized)
* Standardized file naming, clear structures to facilitate lookup and review
* This repository is continuously updated. Welcome to star 🌟 or open an issue for discussion!
