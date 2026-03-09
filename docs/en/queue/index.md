# What is a Queue?

A queue is a **First In, First Out (FIFO)** data structure, commonly used in scenarios such as Breadth-First Search (BFS), event processing, and sliding windows.

We can imagine a queue as a **line of people queueing up to buy milk tea**:
Whoever comes first buys first, and whoever arrives later is processed later.

Based on different problem characteristics, queue applications can be divided into the following typical types:

## 1. Basic Queue

**Characteristics:**

* Supports basic enqueue and dequeue operations.
* Used for sequentially processing events, streaming data, state transitions, etc.

**Applicable Scenarios:**

* Processing sliding time windows.
* Simulating the order of operations.
* Breadth-First Search (BFS).

**Example: Queuing up to record attendance times**

You are a teacher, checking when students arrive for class, and only recording students who arrived within the last 5 minutes - the queue is like a "timeline".

**Corresponding Problems:**

* [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)
* [950. Reveal Cards In Increasing Order](https://leetcode.com/problems/reveal-cards-in-increasing-order/)
* [649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/)

## 2. Queue Design

**Characteristics:**

* Design complex queue functions based on problem requirements (circular queues, double-ended queues, composite structures, etc.).
* Mostly implemented using classes, linked lists, or arrays.

**Applicable Scenarios:**

* Implementing browser history, task distribution systems.
* Simulating a stack or deque.

**Example: You are a subway train dispatcher, designing how to get on, get off, and transfer**

You have to decide which side passengers get on and off, how they enter the station, and how they switch trains - different designs adapt to different needs.

**Corresponding Problems:**

* [1670. Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/)
* [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
* [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
* [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)
* [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)

## 3. Double-Ended Queue (Deque)

**Characteristics:**

* Supports enqueueing and dequeueing from both ends.
* More flexible than a standard queue, commonly used for sliding windows and state compression.

**Applicable Scenarios:**

* Inserting/removing data from both ends.
* Optimizing search order or task scheduling.

**Example: You manage a theater entrance/exit, with both a front door and a back door**

The audience can enter from the front door and also exit from the back door, and some VIPs can even jump the queue - this structure is called a deque.

**Corresponding Problems:**

* [2810. Faulty Keyboard](https://leetcode.com/problems/faulty-keyboard/)
* [2071. Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)

## 4. Monotonic Queue

**Characteristics:**

* Maintains monotonicity within the queue (usually monotonically decreasing or increasing).
* Used for finding the maximum or minimum value within a sliding window.
* Combines the techniques of "Sliding Window + Monotonic Stack".

**Applicable Scenarios:**

* Maintaining the maximum/minimum value within a segment of data.
* Optimizing brute-force nested decisions into linear time `O(n)`.

**Example: You are looking at the stock market, wanting to know the highest price in the past few days at any given time**

You only keep the prices that can represent the maximum value - whoever is not high enough is kicked out.

**Corresponding Problems:**

* [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
* [1438. Longest Subarray with Absolute Diff ≤ Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
* [2762. Continuous Subarrays](https://leetcode.com/problems/continuous-subarrays/)
* [2398. Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/)
* [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
* [1499. Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)

## 5. Monotonic Queue Optimized DP

**Characteristics:**

* Use a monotonic queue to maintain the maximum/minimum value in the state transition interval.
* Optimizes the traditional DP brute-force loop, improving efficiency to `O(n)`.

**Applicable Scenarios:**

* Solving problems similar to "transitioning from a previous `f[j]` to `f[i]`".
* Interval sliding, state transition processes with an increasing boundary.

**Example: You are arranging a delivery fleet, combining packages of different weights to save the most fuel**

You need to find the most cost-effective combination, and eliminate the bad options during every update.

**Corresponding Problems:**

* [2944. Minimum Coins to Buy Fruits](https://leetcode.com/problems/minimum-coins-to-buy-fruits/)
* [1696. Jump Game VI](https://leetcode.com/problems/jump-game-vi/)
* [1425. Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)
* [375. Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)
* [1687. Delivering Boxes from Warehouse to Ports](https://leetcode.com/problems/delivering-boxes-from-warehouse-to-ports/)
* [3117. Minimum Sum of Values by Dividing Array](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/)
* [2945. Find the Maximum Length of a Good Subsequence I](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/)

## 6. BFS Queue

**Characteristics:**

* Use a queue to implement level-order traversal, state graph traversal.
* Can be combined with a `visited` set or a distance table.

**Applicable Scenarios:**

* Graph search: Mazes, shortest path, multi-source BFS.
* Grid search: Zombie infection, island problems, fire spreading, etc.

**Example: You are a firefighter, simulating the process of a fire spreading from multiple points simultaneously**

You expand the fire boundaries wave by wave - whichever gets burned first enters the queue first.

**Classic Problems:**

* [542. 01 Matrix](https://leetcode.com/problems/01-matrix/)
* [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
* [1926. Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)
* [286. Walls and Gates](https://www.lintcode.com/problem/663/)

## 7. Queue Design (Advanced)

**Characteristics:**

* Multi-port input/output, frequency control, capacity limits, priority processing, etc.
* Usually combined with other data structures (Hash tables, heaps, linked lists, etc.).

**Applicable Scenarios:**

* Simulating real-world systems (Caches, queues, resource scheduling).
* High-performance system data structures.

**Example: You are designing a restaurant waitlist system that also prioritizes the elderly and pregnant women**

You use a system to record the enqueue time, whether they have priority, whether there are duplicates - a custom queue structure emerges.

**Corresponding Problems:**

* [2336. Smallest Number in Infinite Set](https://leetcode.com/problems/smallest-number-in-infinite-set/)
* [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

📌 **One-Sentence Summary**:

> The queue excels at handling "advancing in order" problems, from event streams to graph search, from sliding windows to state transitions. As long as you need to "queue up", it is your best helper.
