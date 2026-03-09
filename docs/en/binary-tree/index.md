# What is a Binary Tree?

A binary tree is a data structure in which each node has at most two children, referred to as the "left child" (left subtree) and the "right child" (right subtree). It is the foundation of all tree structures, and many more complex data structures are derived from it.

We can imagine it as a "family tree" or "organizational chart": everyone has at most two children, sitting on the left or the right.

## 1. Traversal

**Characteristics:**

Traversal is a method of visiting all nodes in a binary tree, including preorder (Root-Left-Right), inorder (Left-Root-Right), postorder (Left-Right-Root), and level-order traversal (layer by layer).

**Applicable Scenarios:**

Printing tree structures, rebuilding trees, serialization, and deserialization.

**Example: Visiting a Museum**

* Preorder: First look at the exhibition theme (root), then visit the left wing (left), and finally the right wing (right).
* Inorder: First visit the left wing, then look at the theme, and finally the right wing.
* Postorder: Visit the left and right wings first, then look at the theme last.
* Level-order: Visit layer by layer from top to bottom.

**Related Problems:**

* [Leetcode 94 – Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
* [Leetcode 102 – Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
* [Leetcode 144 – Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
* [Leetcode 145 – Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

## 2. Top-down DFS

**Characteristics:**

Recursively go down from the root, passing parameters along the recursion. Commonly used in path-related problems.

**Applicable Scenarios:**

Path sum, number of paths, existence of a certain path.

**Example: Delivering Parcels**

You are the head of the delivery station (root), dispatching parcels (target values) to subordinate stations (child nodes), who further dispatch downwards until the parcels reach the customers.

**Related Problems:**

* [Leetcode 112 – Path Sum](https://leetcode.com/problems/path-sum/)
* [Leetcode 113 – Path Sum II](https://leetcode.com/problems/path-sum-ii/)

## 3. Bottom-up DFS

**Characteristics:**

Recursively aggregate information from the leaf nodes upwards, where each level returns its result for the upper level to calculate.

**Applicable Scenarios:**

Information aggregation tasks, such as calculating tree height or checking for balance.

**Example: Aggregating Class Grades**

Each student (leaf node) submits their grades, the class monitor (parent node) aggregates them and submits them to the grade director (root node), finally generating the whole school's grade report.

**Related Problems:**

* [Leetcode 104 – Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
* [Leetcode 110 – Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

## 4. Bottom-up DFS: Pruning

**Characteristics:**

Bottom-up determine whether a node should be deleted. If its subtree is useless, return `null`.

**Applicable Scenarios:**

Pruning problems, simplifying tree structures.

**Example: Pruning Fruit Trees**

You check a fruit tree (tree) and find some branches (subtrees) bear no fruit (useless), so you prune the useless branches from bottom to top.

**Related Problems:**

* [Leetcode 814 – Binary Tree Pruning](https://leetcode.com/problems/binary-tree-pruning/)

## 5. Pass Down and Return Up (Recursive Return Value)

**Characteristics:**

The function needs to both pass parameters down (递) and return values from subproblems back up (归) for calculation.

**Applicable Scenarios:**

Longest paths, comparing path values.

**Example: Selecting the Longest Work Chain**

Each employee (node) reports the longest work chain (path) they can connect. The manager (parent node) aggregates them to select the company's optimal plan.

**Related Problems:**

* [Leetcode 687 – Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/)

## 6. Binary Tree Diameter

**Characteristics:**

Find the maximum path length between any two nodes. Often updates the maximum value during postorder traversal.

**Applicable Scenarios:**

Longest path problems.

**Example: Farthest Bus Route in a City**

You want to find the longest route (path) from one station to another in the city's bus network (tree), which does not necessarily pass through the main station (root).

**Related Problems:**

* [Leetcode 543 – Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

## 7. Backtracking in Tree

**Characteristics:**

Recursively search all paths and backtrack when encountering a path that does not meet the conditions.

**Applicable Scenarios:**

Path enumeration, combinations.

**Example: Treasure Hunting**

You explore a forest (tree), starting from the entrance (root), trying every path. When you reach a dead end (leaf), you retreat to try another path.

**Related Problems:**

* [Leetcode 257 – Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)

## 8. Lowest Common Ancestor (LCA)

**Characteristics:**

Find the nearest common ancestor of two nodes. Often uses DFS to check if the left or right subtrees contain the targets.

**Applicable Scenarios:**

Finding the shortest connection point between two nodes.

**Example: Finding a Common Ancestor in a Family Gathering**

You and your cousin check the family tree (tree) and find your nearest common ancestor (like a great-grandfather), who is your "connection point".

**Related Problems:**

* [Leetcode 235 – Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
* [Leetcode 236 – Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

## 9. Binary Search Tree (BST)

**Characteristics:**

Left Subtree < Root < Right Subtree. Inorder traversal results in an ascending sequence.

**Applicable Scenarios:**

Efficient search, insertion, and deletion.

**Example: Sorting Supermarket Shelves**

Supermarket shelves (tree) are sorted by product price. Cheaper items on the left (left subtree), more expensive items on the right (right subtree). Finding or placing items is fast.

**Related Problems:**

* [Leetcode 450 – Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-binary-search-tree/)
* [Leetcode 700 – Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)
* [Leetcode 701 – Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

## 10. Construct Tree

**Characteristics:**

Reconstruct the entire tree from preorder/inorder/postorder traversal information.

**Applicable Scenarios:**

Tree reconstruction, serialization and deserialization.

**Example: Assembling a Lego Model**

You follow the instructions (traversal sequence) to assemble Lego (tree), restoring the complete model structure step-by-step.

**Related Problems:**

* [Leetcode 105 – Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
* [Leetcode 106 – Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

## 11. Node Insertion/Deletion (BST Operations)

**Characteristics:**

Insertion recursively locates the empty spot. Deletion handles cases: no children, one child, two children.

**Applicable Scenarios:**

Dynamically updating the BST.

**Example: Hospital Registration System**

New patients (nodes) are inserted into the registration queue (BST) based on severity. When canceling (deleting), adjust the queue to maintain order.

**Related Problems:**

* [Leetcode 450 – Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-binary-search-tree/)
* [Leetcode 701 – Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

## 12. Tree DP (Dynamic Programming on Trees)

**Characteristics:**

Treat the tree as a graph structure for dynamic programming, merging states from bottom to top.

**Applicable Scenarios:**

Maximums, minimums, to-pick-or-not-to-pick problems (like House Robber).

**Example: Optimizing Company Profits**

Each department (node) reports the best profit plan, aggregating level by level up to the CEO (root) who selects the overall optimal strategy.

**Related Problems:**

* [Leetcode 124 – Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
* [Leetcode 337 – House Robber III](https://leetcode.com/problems/house-robber-iii/)

## 13. Binary Tree BFS (Level Order Traversal)

**Characteristics:**

Visit nodes layer by layer using a queue. Common for level-based analysis.

**Applicable Scenarios:**

Shortest path, minimum depth, level-by-level statistics.

**Example: School Notification by Level**

The principal (root) notifies grade directors (child nodes), who notify head teachers (next level), passing it down layer by layer.

**Related Problems:**

* [Leetcode 102 – Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
* [Leetcode 111 – Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

## 14. Linked List + Binary Tree

**Characteristics:**

Convert a linked list to a BST, or find a linked list path in a tree.

**Applicable Scenarios:**

Structural conversion, pattern matching.

**Example: Reorganizing Train Carriages**

A sequence of train carriages (linked list) is reattached to a railway network (BST), or check if a sequence of carriages exists in the network.

**Related Problems:**

* [Leetcode 109 – Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)
* [Leetcode 1367 – Linked List in Binary Tree](https://leetcode.com/problems/linked-list-in-binary-tree/)

## 15. N-ary Tree

**Characteristics:**

Nodes have multiple children. The traversal logic is similar to binary trees but more generalized.

**Applicable Scenarios:**

Company hierarchy, file systems.

**Example: Large Family Gathering**

A grandfather (root) has multiple children (child nodes), and each child has multiple children. The family gathering is organized by generation.

**Related Problems:**

* [Leetcode 589 – N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/)
* [Leetcode 590 – N-ary Tree Postorder Traversal](https://leetcode.com/problems/n-ary-tree-postorder-traversal/)

## 16. Others

**Characteristics:**

Variants such as merging, inverting, constructing the maximum tree.

**Applicable Scenarios:**

Variations of tree operations.

**Example: Renovating a House to Change Layout**

You swap the left and right rooms of a house (invert), merge two houses (merge), or build a new house based on priorities (maximum tree).

**Related Problems:**

* [Leetcode 226 – Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
* [Leetcode 617 – Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)
* [Leetcode 654 – Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)
