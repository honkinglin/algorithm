# What are Two Pointers?

Two Pointers is an algorithmic technique that **uses two pointers moving collaboratively over an array or string**. It is commonly used in scenarios such as array searching, sub-range processing, sorting and merging, and in-place modifications.

We can imagine the two pointers as **two minesweepers, one on the left and one on the right, flexibly dividing their work and collaborating**:
Sometimes they advance to the right together, sometimes one starts from the left and the other from the right, and sometimes they start from the middle and move outwards separately.

Based on the **direction of the pointers, the data structure, and the problem goal**, the usage of two pointers can be divided into the following typical types:

## 1. Opposite Direction (Inward)

**Characteristics:**

* Two pointers start from opposite ends of an array or string and move towards the middle.
* Used for searching in sorted structures, checking palindromes, finding maximum/minimum container values, etc.

**Applicable Scenarios:**

* Checking if a string is a palindrome.
* Finding two numbers that satisfy a specific sum (e.g., Two Sum on a sorted array).
* Container extremum problems (e.g., Trapping Rain Water, Container With Most Water).

**Analogy：You and a friend are organizing a messy bookshelf. You start taking out and organizing books from the left side, and your friend starts from the right side. You both tidy up while moving towards the center until the bookshelf is neat.**

**Related Problems:**

* [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
* [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
* [167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
* [344. Reverse String](https://leetcode.com/problems/reverse-string/)

## 2. Sliding Window (Same Direction)

**Characteristics:**

* Two pointers advance together from left to right, dynamically maintaining an interval (a window).
* Usually used for local range statistics problems such as subarrays or substrings.

**Applicable Scenarios:**

* Counting subarrays that satisfy given conditions.
* Substrings without repeating characters / minimum window substrings.
* Finding the maximum/minimum range length.

**Analogy: You are at a produce market. A friend slowly pushes a cart while you use a basket to pick vegetables. After the cart moves a certain distance, you tally the variety and weight of the vegetables in the basket until you find the best combination.**

**Related Problems:**

* [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
* [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
* [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
* [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)

## 3. Center Expansion (Outward)

**Characteristics:**

* Two pointers start from the same position and move outwards, expanding to the left and right respectively.
* Often used for symmetric structures or problems expanding from a center.

**Applicable Scenarios:**

* Finding the longest palindromic substring.
* The maximum interval expanding from a certain point as the center.

**Analogy: You stand in the middle of a bridge and send two friends to walk outwards along both sides of the bridge simultaneously. They observe the reflections on the water as they walk until they find the most symmetric scenic spot.**

**Related Problems:**

* [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
* [1793. Maximum Score of a Good Subarray](https://leetcode.com/problems/maximum-score-of-a-good-subarray/)


## 4. In-Place Modification (Fast & Slow Pointers)

**Characteristics:**

* One pointer scans the original array (fast) while the other processes the result area (slow).
* Frequently used for removing elements in-place, deduplication, or rearranging arrays.

**Applicable Scenarios:**

* Removing duplicates or specific elements.
* Moving zeroes to the end.
* In-place sorting (e.g., sort colors).

**Analogy: You are washing dishes in the kitchen. A friend stands by to dry them and put them away. Dirty dishes are quickly cleaned while clean dishes are neatly arranged.**

**Related Problems:**

* [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
* [27. Remove Element](https://leetcode.com/problems/remove-element/)
* [75. Sort Colors](https://leetcode.com/problems/sort-colors/)
* [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

## 5. Two Sequences Alignment

**Characteristics:**

* Two pointers independently traverse two separate arrays/strings to align, match, or merge them.
* Suitable for synchronous operations on two sequences.

**Applicable Scenarios:**

* Merging two sorted arrays.
* Finding intersections or differences.
* Variations like long-pressed name problems.

**Analogy: You and a friend each hold a shopping list and check the inventory against them. One reads from the top of one list, and the other checks from the other list until identical items are found.**

**Related Problems:**

* [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
* [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
* [925. Long Pressed Name](https://leetcode.com/problems/long-pressed-name/)
* [1229. Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/)

## 6. Is Subsequence

**Characteristics:**

* Determining whether one sequence is a subsequence of another.
* The core lies in sequential matching.

**Applicable Scenarios:**

* Checking if a match is possible by skipping characters.
* String matching variants.

**Analogy: You are reading a long novel and try to "skip-read" using excerpts from a smaller book to verify if it is a subset of the long novel.**

**Related Problems:**

* [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)
* [524. Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)
* [2486. Append Characters to String to Make Subsequence](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/)

## 7. Three or More Pointers

**Characteristics:**

* Usually used for combinatorial enumerations (e.g., 3Sum, 4Sum).
* Multiple pointers map out combinations while skipping duplicates and pruning the search space.

**Applicable Scenarios:**

* Finding sum for triplets or quadruplets.
* Sparse array alignment, subarray counting, etc.

**Analogy: Three chefs collaborate on a recipe, each responsible for one ingredient. They pick combinations from the fridge until they find the most delicious tri-flavor combination.**

**Related Problems:**

* [15. 3Sum](https://leetcode.com/problems/3sum/)
* [18. 4Sum](https://leetcode.com/problems/4sum/)
* [1213. Intersection of Three Sorted Arrays](https://leetcode.com/problems/intersection-of-three-sorted-arrays/)


📌 **Summary in one sentence:**

> Two Pointers is a highly efficient algorithmic weapon to solve problems such as "substructures", "multi-sequence synchronization", "sequential filtering", and "sliding intervals" within arrays and strings, with each pointer strategy corresponding to a classic type of problem and template technique.
