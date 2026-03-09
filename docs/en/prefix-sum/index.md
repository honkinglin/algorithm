# What is Prefix Sum?

Prefix Sum is an array preprocessing technique that allows us to quickly calculate the sum of any interval `[i, j]` in constant time `O(1)`. It works by constructing a new array, `prefix`, which records the cumulative sum from the starting point up to the current position.

Prefix Sum also has the following common usage patterns:

## 1. 1D Prefix Sum
**Characteristics:**

Construct a `prefixSum` array where `prefixSum[i] = nums[0] + ... + nums[i - 1]`

The sum of the interval `[i, j]` is: `prefixSum[j+1] - prefixSum[i]`

**Applicable Scenarios:**

Querying the sum of a specific array interval multiple times

Determining if a certain segment satisfies a sum condition (e.g., equals k)

**Example: Accounting System — Quickly querying total expenses from one day to another**

You developed an accounting mini-app, and users often ask:

"How much did I spend from Day 3 to Day 7?"

Instead of adding up this segment every time, you pre-calculate the "total consumption up to each day."

For example, by Day 8, the total spent is 500, and before Day 3, it was 100.

Then the expenses from Day 3 to Day 7 are simply 500 - 100 = 400.

**Corresponding Problems:**

- [Leetcode 303 – Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/)

## 2. 2D Prefix Sum
**Characteristics:**

Construct a 2D array `prefix[i][j]`, representing the sum of the matrix region from `(0,0)` to `(i-1,j-1)`

The sum of any submatrix from `(x1, y1)` to `(x2, y2)` can be derived using 4 prefix values with addition and subtraction.

**Applicable Scenarios:**

Image analysis, submatrix summation

Map coverage, regional scoring, etc.

**Example: Map Scoring — Quickly checking the total score of a region**

You developed a game map editor where a user drew a 10x10 heatmap and wants to know the total score of the area at row 25, column 37.

You can't add them up one by one every time, so you use a prefix sum matrix; a single click gives the result instantly.

**Corresponding Problems:**
- [Leetcode 304 – Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/description/)

## 3. Prefix Sum + Hash Map
**Characteristics:**

Use a hash table to record the exact number of occurrences of a certain prefix sum.

Used to quickly determine if there is a subarray that sums to a target value `k`.

**Applicable Scenarios:**

Subarray sum counting problems for fixed values

Substring/subarray counting problems (especially useful when negative numbers are involved)

**Example: Risk Control Alert System — Monitoring if a specific segment of consumption is exactly k**

You are working on an anti-money laundering system and need to determine if there's a continuous segment of consumption behavior that adds up to exactly 1000.

You can't brute-force check every segment; it's too slow. So you record:

"How much has been consumed in total up to this current day?"

Then you check if the cumulative consumption on any previous day was: `Current total consumption - 1000`.

If there is, it means the segment in between is exactly 1000.

**Corresponding Problems:**
- [Leetcode 560 – Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/description/)
