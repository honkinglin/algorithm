# What is Dynamic Programming (DP)?

Dynamic programming is an algorithmic technique of "**remembering the past, optimizing the present**", suitable for solving optimal solution problems that can be broken down into overlapping subproblems.

You can understand it as: **"Recursion with memory"** — recording each result to avoid redundant work.

## 1. Linear DP

**Characteristics:**

* States progress linearly along a 1D array or sequence.
* The current state only depends on a fixed number of previous states (e.g., the previous one, or previous two).
* Common in problems like climbing stairs, minimum path sum, maximum subarray sum, etc.

**Example: Climbing stairs, where you can climb 1 or 2 steps each time**

> You are climbing a staircase and can take 1 or 2 steps each time. You will think: did I step up from the (n-1)-th floor? Or did I jump up from the (n-2)-th floor? This forms a linear recurrence relation.

**Applicable Scenarios:**

* Progressing in a 1D direction (like arrays, stairs, houses, paths).
* Each state only depends on a few previous states.

**Corresponding Problems:**

* [53 – Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
* [70 – Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
* [121 – Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
* [198 – House Robber](https://leetcode.com/problems/house-robber/)
* [213 – House Robber II](https://leetcode.com/problems/house-robber-ii/)
* [746 – Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

## 2. 0-1 Knapsack (0-1 Knapsack)

**Characteristics:**

* Each item can only be chosen once.
* The state is: among the first i items, how to maximize value while ensuring total weight ≤ knapsack capacity.

**Example: Packing for a trip, where each item can be brought at most once, and luggage has a weight limit**

> You are preparing for a trip abroad, and your suitcase can hold at most 20kg. You have many items in front of you, each with weight and value. You can either bring an item or not (cannot bring two identical items), how to pack to get the most value?

**Applicable Scenarios:**

* Can we select a portion of numbers to exactly satisfy a target value?
* How to select a subset from a bunch of values to maximize a certain metric.

**Corresponding Problems:**

* [416 – Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
* [494 – Target Sum](https://leetcode.com/problems/target-sum/)
* [1049 – Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)

## 3. Complete Knapsack (Complete Knapsack)

**Characteristics:**

* Each item can be chosen infinitely many times.
* The state is: among the first i items, how to combine into the target numerical value.

**Example: Exchanging coins, you have infinite coins of each denomination**

> Suppose you want to make up 10 dollars, and you have infinite 1-dollar, 2-dollar, and 5-dollar coins. How many ways are there?

**Applicable Scenarios:**

* Coin change, total combinations, infinite resource allocation problems.

**Corresponding Problems:**

* [377 – Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
* [518 – Coin Change II](https://leetcode.com/problems/coin-change-ii/)

## 4. Subsequence-based DP (Subsequence DP)

**Characteristics:**

* Elements are not required to be contiguous, only the relative order needs to be maintained.
* Used for comparing "the similarity of two sequences" or "finding a certain trend".

**Example: Finding the probability of forming a sentence with keywords from a conversation**

> E.g., you listened to a long dialogue, and now you want to recall if "hello" was said. You just need to check if h, e, l, l, o appeared in chronological order, they don't have to be consecutive.

**Applicable Scenarios:**

* Longest common subsequence
* Longest increasing subsequence
* Edit distance (how many modifications to transform into another string)

**Corresponding Problems:**

* [72 – Edit Distance](https://leetcode.com/problems/edit-distance/)
* [300 – Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
* [1143 – Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

## 5. Interval DP (Interval DP)

**Characteristics:**

* Handling subproblems within a range (usually [i...j]).
* Suitable for segmentation, merging, bursting problems.

**Example: Cutting a cake, wanting to know how cutting order affects total cost**

> A cake is too big and needs to be cut into small pieces to be taken away. The cost of each cut is the current length of the cake piece. Different cutting orders can result in vastly different total costs. You want to know the optimal cutting way.

**Applicable Scenarios:**

* Merging stones
* Bursting balloons
* Multi-segment merging, splitting

**Corresponding Problems:**

* [312 – Burst Balloons](https://leetcode.com/problems/burst-balloons/)
* [887 – Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
* [1000 – Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)

## 6. State Compression DP (Bitmask DP)

**Characteristics:**

* Use each bit of a binary number to represent "whether a choice has been used".
* Suitable for optimization when the number of combinations explodes.

**Example: Forming a team for a mission, using 0 and 1 to represent who participates**

> You have 10 team members and need to select some for the battlefield, each person can only go once. You use binary to represent the selection state, e.g., `10101` means numbers 1, 3, and 5 are selected.

**Applicable Scenarios:**

* Enumeration of all subsets
* Everyone visiting once (Traveling Salesperson Problem)

**Corresponding Problems:**

* [691 – Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)
* [847 – Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)

## 7. Digit DP (Digit DP)

**Characteristics:**

* Used to calculate the composition of numbers, the frequency of digits appearing, etc.
* Enumerate possible values digit by digit, applying constraints and memoization.

**Example: You want to count how many times "1" appears from 1 to 10000**

> As you count, you realize there is too much repetitive work, so you decide to count digit by digit (e.g., ones place, tens place, hundreds place...) all at once.

**Applicable Scenarios:**

* The frequency of a certain digit appearing in the interval [1, n].
* The count of numbers satisfying certain rules.

**Corresponding Problems:**

* [233 – Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)
* [357 – Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/)

## 8. Tree DP (Tree DP)

**Characteristics:**

* Pass information on a tree structure using DFS (usually from leaves to root).
* The state of each node depends on the state of its subtrees.

**Example: Year-end bonus distribution, ruling that boss and subordinate cannot receive the bonus simultaneously**

> The company has a hierarchy tree. During the bonus distribution, to prevent collusion, if an employee receives a bonus, their direct manager cannot. How to make the total distributed bonus maximize?

**Applicable Scenarios:**

* Path, allocation, selection problems on trees
* Selection conflicts under ancestor-descendant relationships

**Corresponding Problems:**

* [124 – Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
* [337 – House Robber III](https://leetcode.com/problems/house-robber-iii/)

## 9. State Machine DP (State Machine DP)

**Characteristics:**

* Transition between different states, subject to restrictions like cooldowns and transaction fees.
* Commonly used in stock trading scenarios.

**Example: You are trading stocks, and different days have different rules: after selling today, you must wait until tomorrow to buy again**

> You can only hold one stock at a time; after selling, you must rest for one day before buying again; each transaction costs a fee... You are making the optimal choice every day.

**Applicable Scenarios:**

* Maximum profit from stock trading
* Limited states (holding / not holding / in cooldown)

**Corresponding Problems:**

* [122 – Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
* [309 – Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
* [714 – Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

## 10. Game Theory DP (Game Theory DP)

**Characteristics:**

* Two people taking turns choosing. You must make the optimal choice under the premise of assuming the opponent is acting optimally.
* Usually a Min-Max type recursion + memoization.

**Example: Two people playing a stone picking game, you take a pile, I take a pile, whoever takes the last wins**

> You take turns taking stones, each time you can choose from the left or right side. You know the other person will also make the smartest choice, so from which side should you take to ensure victory?

**Applicable Scenarios:**

* Players alternating turns, MiniMax strategies
* Simulation of two-player games, judging whether the first player is guaranteed to win

**Corresponding Problems:**

* [486 – Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
* [877 – Stone Game](https://leetcode.com/problems/stone-game/)
* [1140 – Stone Game II](https://leetcode.com/problems/stone-game-ii/)
