# What is a Grid Graph?

A grid graph is a common graph structure typically used to simulate 2D or 3D maps, mazes, or chessboard problems. In algorithm problems, it's frequently used to assess mastery of algorithms like DFS, BFS, and shortest paths.

**Common Directions:**

* 4 directions: Up, Down, Left, Right
* 8 directions: Up, Down, Left, Right + Top-Left, Top-Right, Bottom-Left, Bottom-Right
* 6 directions (3D): Up, Down, Front, Back, Left, Right

**Key Techniques:**

* Maintain a `visited` set/array to avoid redundant visits.
* Manage the search using queues (for BFS) or recursion (for DFS).
* Pay attention to boundary conditions (prevent out-of-bounds errors).
* Combine with advanced techniques like Union-Find or Priority Queues for complex solutions.


## 1. Classic DFS

**Characteristics:**

* Implemented via recursion or an explicit stack.
* Commonly used to search connected regions or count the size of connected components.

**Applicable Scenarios:**

* Traversing all connected grid cells.
* Solving problems like "How many connected regions are there?" or "What is the area of the largest region?".

**Analogy: Island Explorer**
Just like finding an island on a map: you walk along the beach, and everywhere you can reach is considered one island. Then you move on to find the next island.

**Corresponding Problems:**

* [LeetCode 200. Number of Islands](https://leetcode.com/problems/number-of-islands/)
* [LeetCode 547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) (Convert to graph DFS)
* [LeetCode 695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
* [LeetCode 733. Flood Fill](https://leetcode.com/problems/flood-fill/)


## 2. Classic BFS

**Characteristics:**

* Implemented via a queue.
* Commonly used for searching the shortest path or expanding layer by layer.

**Applicable Scenarios:**

* Finding the shortest path from a starting point to an endpoint.
* Solving problems formulated as "expanding from a source point".

**Analogy: Forest Firefighters**

Like a fire breaking out in a forest, firefighters start from the source of the fire and spread outwards layer by layer to extinguish the flames until everything is put out.

**Corresponding Problems:**

* [LeetCode 542. 01 Matrix](https://leetcode.com/problems/01-matrix/)
* [LeetCode 994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
* [LeetCode 752. Open the Lock](https://leetcode.com/problems/open-the-lock/)
* [LeetCode 1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)


## 3. Bidirectional BFS

**Characteristics:**

* Expands simultaneously from both the start and the end points.
* Terminates when the two searches meet.
* Drastically reduces search complexity.

**Applicable Scenarios:**

* Both starting point and endpoint are known.
* A faster search for the shortest path is required.

**Analogy: Two-way Rescue Team**

Two rescue teams set off from the camp and the missing location respectively. As soon as they meet midway, they quickly merge to complete the rescue mission.

**Corresponding Problems:**

* [LeetCode 126. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
* [LeetCode 127. Word Ladder](https://leetcode.com/problems/word-ladder/)


## 4. Dijkstra's Algorithm

**Characteristics:**

* Applicable to weighted graphs (different cells or paths have different costs).
* Uses a Priority Queue to compute the weighted shortest path.

**Applicable Scenarios:**

* Needs to consider the varying costs of moving between different grid cells.
* Solving shortest path optimization problems.

**Analogy: Food Delivery Driver**

A delivery driver navigates through the city's streets and alleys. Each road takes a different amount of time, and they want to find the fastest delivery route.

**Corresponding Problems:**

* [LeetCode 787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
* [LeetCode 1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)
* [LeetCode 1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)


## 5. Other Advanced Techniques

**Characteristics:**

* 3D grids, special structures (like honeycombs).
* Combining with advanced techniques like Union-Find, Topological Sorting, etc.

**Applicable Scenarios:**

* 3D mazes.
* Complex connectivity judgments.
* Scenarios requiring the integration of multiple algorithmic techniques.

**Analogy: 3D Maze Explorer**

You enter a 3D maze where you can not only move left and right but also climb up and down, with passages connecting every floor.

**Corresponding Problems:**

* [LeetCode 130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) (DFS/BFS)
* [LeetCode 694. Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/) (DFS)
* [LeetCode 1162. As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) (Multi-source BFS)
* [LeetCode 1254. Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) (DFS)
