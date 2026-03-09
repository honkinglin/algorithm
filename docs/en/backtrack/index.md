# What is Backtracking?

Backtracking is an algorithmic technique combining recursion and trial-and-error, **used to search for valid solutions in the entire solution space**. Its core is:

> At each step, try a choice. If it leads to a dead end, "undo the last step" and try another path until the answer is found.

Backtracking = Enumeration + Pruning + Backtracking (Undo).

Usually, backtracking uses a `path` array to record the results of each recursion.

When solving backtracking problems, we usually ask three questions:
1. Current operation?
    * What to do at the current level? Which letter/number to put into `path`?
    * i.e., "What should I fill `path[i]` with?"
2. Sub-problem?
    * The essence of recursion is constantly breaking down the problem. Here it is "How to handle the rest?"
    * In permutation/combination problems, this usually means: "I need to continue finding solutions starting from the i-th position of the string."
3. Next sub-problem?
    * After the current recursion ends, where should the next level continue?
    * i.e., "The next level needs to handle the (i+1)-th position of the string."

We can classify backtracking into the following categories based on task goals and selection methods:

## 1. Basic Template Backtracking (Brute-force)

**Characteristics:**

* Use the most basic "choose-recurse-undo" structure to exhaust all results.
* No pruning, no deduplication, mainly used to learn the backtracking process.

**Example: Old mobile phone keypad letter combinations**

* Imagine typing "23" on an old keypad, where each digit maps to letters (2=ABC, 3=DEF).
* You try pressing every possible letter combination, like picking a combination lock, trying "AD", "AE", "BD" one by one until all possible words are listed.

**Applicable Scenarios:**

* Telephone number combinations
* Basic problems exhausting all schemes

**Corresponding Problems:**

* [Leetcode 17 – Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)

## 2. Subset Enumeration

**Characteristics:**

* Every element can be "chosen" or "not chosen", enumerating all subset combinations.
* Order is not emphasized, usually used for power sets, state combination enumeration.

**Example: Packing luggage, deciding what to bring for a trip**

* You can "bring" or "not bring" each item, and you try all packing ways.
* For the first item, you try "bringing" it first;
* Then process the second one, continue to "bring" or "not bring";
* Record a packing scheme every time the path reaches the end;
* After backtracking, try "not bringing" the first item, and so on.

**Applicable Scenarios:**

* Subsets, Boolean combinations
* Pick or skip problems

**Corresponding Problems:**

* [Leetcode 78 – Subsets](https://leetcode.com/problems/subsets)
* [Leetcode 90 – Subsets II (with duplicates)](https://leetcode.com/problems/subsets-ii)

## 3. Partitioning

**Characteristics:**

* Partition a string/array into several segments, where each segment satisfies certain conditions.
* Common scenarios include palindrome partitioning, IP addresses, etc.

**Example: Cutting a birthday cake into pieces where each flavor must be symmetrical or uniform**

* A multi-flavor cake needs to be cut into several pieces, each meeting flavor rules.
* Start from the first layer, try cutting at layer 1, layer 2, layer 3...;
* Each cut piece must be checked "whether it meets the flavor rule";
* If valid, continue to cut the next segment from the current cut;
* If invalid, undo the previous cut and try another position;
* Until the cake is completely cut and all pieces satisfy the rules.

**Applicable Scenarios:**

* Palindrome partitioning
* String segmentation and validation

**Corresponding Problems:**

* [Leetcode 131 – Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning)
* [Leetcode 93 – Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses)

## 4. Combination Enumeration

**Characteristics:**

* Select k numbers from n numbers, order is not important, cannot choose repeatedly.
* Usually use `start` to control the enumeration range to avoid duplication.

**Example: Buying a lottery ticket, picking k numbers from the pool without considering order**

* Want to pick 6 numbers from 1~49. You can't choose the same number twice, and you don't care about the order.
* Start from 1 and pick a number to add to the "candidate list";
* The next time, you can only pick from larger numbers (to avoid duplication);
* Once k numbers are selected, record it;
* Backtrack the number from the last step, and try the following options.

**Applicable Scenarios:**

* n choose k problems
* Combinations satisfying a target sum

**Corresponding Problems:**

* [Leetcode 77 – Combinations](https://leetcode.com/problems/combinations)
* [Leetcode 39 – Combination Sum I](https://leetcode.com/problems/combination-sum)
* [Leetcode 216 – Combination Sum III](https://leetcode.com/problems/combination-sum-iii)

## 5. Permutation

**Characteristics:**

* Each element can only be used once, order matters.
* Usually use a `used` array to check if visited.

**Example: Arranging children for a group photo, every standing order is different**

* For 3 children, every standing order counts as one permutation.
* First step, choose someone to stand in the first position;
* Second step, choose someone from the rest for the second position;
* Third step, place the last one;
* After taking one photo, remove the last person, swap others in;
* Keep trying all standing orders until completely done.

**Applicable Scenarios:**

* Permutations of all distinct elements
* Permutations with duplicate elements (deduplication)

**Corresponding Problems:**

* [Leetcode 46 – Permutations](https://leetcode.com/problems/permutations)
* [Leetcode 47 – Permutations II (with duplicates)](https://leetcode.com/problems/permutations-ii)

## 6. Search-based Backtracking (DFS Search)

**Characteristics:**

* Mostly used for finding paths in grids or graphs.
* Pair with `visited` or state records to prevent walking back.

**Example: Navigating blindly in a maze**

* Moving in a dark maze, every path could lead to the exit.
* Standing on a cell, try four directions: up, down, left, right;
* Record current position for each move;
* If hitting a wall (cannot continue), turn back and step back;
* Try other directions;
* Until finding the exit or exploring all paths.

**Applicable Scenarios:**

* Maze solving / Graph traversal / Path searching
* Multi-path parallel exploration

**Corresponding Problems:**

* [Leetcode 200 – Number of Islands](https://leetcode.com/problems/number-of-islands)
* [Leetcode 79 – Word Search](https://leetcode.com/problems/word-search)
* [Leetcode 51 – N-Queens](https://leetcode.com/problems/n-queens)

## 7. Deduplicated Backtracking (with duplicate elements)

**Characteristics:**

* The input array contains duplicate elements, requires deduplication in the same layer's for loop.
* Usually sort first, then skip duplicate values.

**Example: Inviting classmates to an event, but avoiding redundant invitations for people with identical names**

* There are two "Zhang Wei"s in the class. You can't have them appear in the same group.
* First, sort the classmate list (handle "Zhang Wei"s together);
* When choosing a person, skip the one "with the same name as the previous person who was just skipped";
* This avoids generating duplicate combinations or permutations;
* The rest of the process is the same as combination/permutation, just with an extra "deduplication check".

**Applicable Scenarios:**

* Deduplicated permutations, combinations, subsets
* Duplicate numbers in the input array

**Deduplication Trick:**

```python
if i > start and nums[i] == nums[i - 1]:
    continue  # Skip duplicate elements in the same layer
```

**Corresponding Problems:**

* [Leetcode 47 – Permutations II](https://leetcode.com/problems/permutations-ii)
* [Leetcode 40 – Combination Sum II](https://leetcode.com/problems/combination-sum-ii)
* [Leetcode 90 – Subsets II](https://leetcode.com/problems/subsets-ii)

## 8. Meet-in-the-Middle

**Characteristics:**

* Split the array into left and right halves, and enumerate all subset sums separately.
* Finally merge the results of both sides (using Hash or Binary Search).

**Example: Two people trying to pack luggage independently, then comparing together to see if overweight**

* Too much luggage to brute-force, so split the task in half for two people.
* The first person handles the first half of luggage, enumerating all subset sums;
* The second person handles the second half, also enumerating all subset sums;
* Finally merge the results to find the scheme "closest to the target weight";
* Use Binary Search or Hash for quick pairing to improve efficiency.

**Applicable Scenarios:**

* Subset sum problems (large data volume)
* Doing backtracking enumeration on each side and then merge processing

**Corresponding Problems:**

* [Leetcode 1755 – Closest Subsequence Sum](https://leetcode.com/problems/closest-subsequence-sum)
* [Leetcode 494 – Target Sum (can also use DP)](https://leetcode.com/problems/target-sum)
