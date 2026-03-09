# What is Binary Search?

Binary Search is an efficient algorithm technique used to find a target in an **ordered array, a monotonic interval, or a problem space with monotonic properties**.
Its core idea is: **In each step, halve the problem space to quickly approach the target value or optimal solution.**

Common binary search problems can be categorized into the following 5 types, each with different application scenarios and problem-solving patterns:

## 1. Classic Binary Search

**Characteristics:**

* Used to find whether a target value `target` exists in an array.
* Usually returns the "target's index" or a "Boolean if it exists".

**Applicable Scenarios:**

* Given a sorted array, finding the location or insertion position of a target value.

**Example: Finding a word in a dictionary**

You want to find the position of the word "kangaroo":

* Open the dictionary to the middle, you land on "M" → Too far back, flip to the left half.
* Then flip towards the front, you land on "G" → Too far forward, flip to the right half.
* Keep cutting the range in half until you exactly find "kangaroo".

This is the most standard binary search — guessing the middle value each time and deciding which side to search next based on the size relationship.

**Corresponding Problems:**

* [Leetcode 704 – Binary Search](https://leetcode.com/problems/binary-search/)
* [Leetcode 35 – Search Insert Position](https://leetcode.com/problems/search-insert-position/)

Just like using "does the target match" to narrow down the search range step by step until you hit it or give up.

## 2. Lower / Upper Bound

**Characteristics:**

* Finding the "first" or "last" position that satisfies a certain condition.
* Common keywords: leftmost, rightmost, first ≥, last ≤, etc.

**Applicable Scenarios:**

* Finding the starting/ending position of a certain value.
* Determining the boundary points of a range.

**Example: Finding the first empty seat in a movie theater**

A movie theater has rows of seats, each numbered.

You want to find the leftmost empty seat (e.g., the first empty seat ≥ 20):

* Look at the middle row each time → Occupied? Look to the right; Empty? There might be an empty one further left → Continue narrowing the range.
* Until you find the leftmost position that meets the condition.

These types of problems emphasize "the earliest/latest occurrence position satisfying a condition", not simply searching for a specific value.

**Corresponding Problems:**

* [Leetcode 34 – Find First and Last Position of Element](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
* [Leetcode 278 – First Bad Version](https://leetcode.com/problems/first-bad-version/)

Just like looking for the "first available position", checking each time if you can still go further left.

## 3. Binary Search on Answer

**Characteristics:**

* The answer itself is not in an array, but rather within a specific range (like speed, capacity, minimum value, etc.).
* Uses a `check(mid)` function to evaluate if the current answer is valid, thereby narrowing the range.

**Applicable Scenarios:**

* Finding the minimum value that satisfies a condition or the maximum feasible value.
* Involving "minimize the maximum" or "maximize the minimum" problems.

**Example: Express delivery capacity planning — Minimum capacity to deliver all packages**

You are the manager of an express delivery company and want to know: **What is the minimum daily capacity needed to deliver everything within D days?**

* Capacity too small? Can't finish → Increase capacity.
* Capacity too large? Wastes resources → Try decreasing capacity.
* Guess a capacity value each time and use `check()` to evaluate if it's feasible.

**Corresponding Problems:**

* [Leetcode 875 – Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
* [Leetcode 1011 – Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
* [Leetcode 410 – Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

You are not finding a specific position, but guessing whether an answer is valid, much like "trial and error + pruning".

## 4. Special Structure (Rotated Array / Mountain Array)

**Characteristics:**

* The array is not fully sorted but possesses a **special structure** (e.g., rotated, has a peak, etc.).
* You need to combine the structural characteristics to determine which segment `mid` falls into, and then decide the direction.

**Applicable Scenarios:**

* Searching for a target in a rotated array.
* Finding peak values, maximum values, or other special points.

**Example: Finding the peak while climbing a mountain**

You are on a mountain trail that first goes up and then down, and you don't know where the peak is.

Every time you glance to your right:

* If the right is higher than you → It means you are still going uphill, and the peak is to the right.
* If the right is lower than you → It means you have started going downhill, and the peak is either where you are or to the left.

You decide whether you are going uphill or downhill based on the "comparison between the current point and the right", gradually approaching the peak — just like walking across a "mountain array".

**Corresponding Problems:**

* [Leetcode 33 – Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
* [Leetcode 162 – Find Peak Element](https://leetcode.com/problems/find-peak-element/)
* [Leetcode 1095 – Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/)

Just like finding a target in special terrain, you must know how to "evaluate the terrain characteristics" before narrowing down the direction.

## 5. Implicit Binary Search (Binary Search + Greedy/DP/Prefix Sum)

**Characteristics:**

* Binary search isn't directly applied to the array; instead, it is combined with Greedy, Prefix Sums, Dynamic Programming (DP), etc.
* The binary search targets "positions" or "states", often paired with Longest Increasing Subsequence (LIS) or Subarray problems.

**Applicable Scenarios:**

* Using binary search to improve efficiency while maintaining states.
* For example, maintaining the tail value in the "Longest Increasing Subsequence" and using binary search to insert.

**Example: E-commerce flash sales**

You participate in an e-commerce flash sale where a user can place a maximum order of `x` dollars.

You want to know: What is the highest value commodity group you can secure, given that there are many commodities and complex combinations?

* You guess an amount `x` each time, simulate selecting a group to see if it succeeds (using Greedy or Prefix Sums to evaluate).
* If it fails, it means you were too greedy → Decrease `x`.
* If it succeeds, it means you can try higher → Increase `x`.

In these kinds of problems, the `check` function relies on additional logic (like Greedy/Prefix Sum) to determine if the answer is valid, rather than searching directly for a value in an array.

**Corresponding Problems:**

* [Leetcode 300 – Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
* [Leetcode 1626 – Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/)

Just like maintaining an "array of optimally insertable positions", where binary search helps you insert numbers rapidly.
