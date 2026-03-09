# What is a Difference Array?

A Difference Array is an efficient technique for modifying array (or matrix) intervals. By constructing an array that records "changes" (deltas), it can **perform interval modification operations in constant time `O(1)`**. Once all modifications are complete, the final array state can be restored with a single pass of prefix sums.

A Difference Array can be thought of as the "inverse operation of a Prefix Sum": **A Difference Array records "changes," while a Prefix Sum restores "accumulation."**

## 1. 1D Difference Array

**Characteristics:**

Construct a `diff` array such that:

```python
diff[0] = nums[0]
diff[i] = nums[i] - nums[i - 1]  (for i > 0)
```

To add `k` to the interval `[l, r]`, the operation is simply:

```python
diff[l] += k
diff[r + 1] -= k  # Be mindful of boundary checks
```

Finally, by computing the prefix sum over the difference array, the final array is restored.

```python
# First we perform a prefix sum on the diff array to restore the final state of the original nums array
nums = [0] * len(diff)
nums[0] = diff[0]

for i in range(1, len(diff)):
  nums[i] = nums[i - 1] + diff[i]
```

**Applicable Scenarios:**

* Multiple interval additions (modifications)
* You don't care about the intermediate states, only the final array

**Example: Event Scheduling System — Quickly scheduling dates in batches**

You build a meeting system, and a client says:

"I want to schedule 1 event every day from Day 3 to Day 7."

You only make marks at two places: `diff[3] += 1` and `diff[8] -= 1`, indicating an increase starting from Day 3 and a decrease starting from Day 8.

Finally, you compute the prefix sum across the board to know how many events are scheduled for each day.

**Corresponding Problems:**

* [Leetcode 1094 – Car Pooling](https://leetcode.com/problems/car-pooling/)
* [Leetcode 1109 – Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)

## 2. 2D Difference Array

**Characteristics:**

Construct a 2D `diff[i][j]` array to record changes in a rectangular area.

To add `k` to a submatrix from `[x1, y1]` to `[x2, y2]`, the method is:

```python
diff[x1][y1] += k
diff[x2 + 1][y1] -= k
diff[x1][y2 + 1] -= k
diff[x2 + 1][y2 + 1] += k
```

Then restore the matrix using a 2D prefix sum.

The restoration process of a 2D difference array is a 2D prefix sum. Pay attention to the calculation sequence: you can go row-first then column, or column-first then row. The key is to not miss any additions.

```python
# Assuming diff is an m x n 2D difference matrix
# Restore the result matrix

for i in range(m):
    for j in range(n):
        if i > 0:
            diff[i][j] += diff[i - 1][j]
        if j > 0:
            diff[i][j] += diff[i][j - 1]
        if i > 0 and j > 0:
            diff[i][j] -= diff[i - 1][j - 1]

# Now diff is the original result matrix
```

**Applicable Scenarios:**

* Heatmaps, regional modifications, image transformations
* Submatrix additions

**Example: Map Editor — Modifying the heat value of a region all at once**

You develop a city simulator, and a player selects a region, saying:

"I want to add 3 heat points to rows 10 through 20, and columns 5 through 15."

You only place positive/negative markers at the four corners of the difference matrix, and finally restore the whole map at once.

**Corresponding Problems:**

* [Leetcode 850 – Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
* [Leetcode 2132 – Stamping the Grid](https://leetcode.com/problems/stamping-the-grid/)
* [Leetcode 2536 – Increment Submatrices by One](https://leetcode.com/problems/increment-submatrices-by-one/)

## 3. Difference + Sweep Line

**Characteristics:**

By recording changing points using "Start Point +1, End Point -1", combined with prefix sums or sorting, it resolves issues involving interval overlaps, time period coverage, etc.

**Applicable Scenarios:**

* Event overlap detection
* Interval unions, maximum overlap points
* Time period queries (e.g., the year with the most people alive)

**Example: Census System — Finding the year with the maximum population**

You develop a population analysis tool, where each person's birth and death years form an interval.

You use differences to record: Birth year +1, year after death -1.

Finally, by computing the prefix sum along the timeline, you easily obtain the year with the most people.

**Corresponding Problems:**

* [Leetcode 732 – My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
* [Leetcode 1854 – Maximum Population Year](https://leetcode.com/problems/maximum-population-year/)
* [Leetcode 2251 – Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
