# What is a Linked List?

A linked list is a **data structure consisting of a sequence of nodes**, where each node contains a data field and a pointer to the next node. It does not support random access like an array does, but it is more efficient in inserting and deleting nodes.

We can imagine it as a train, where each carriage (node) only knows where the next carriage is (the `next` pointer). Some problems also require two-way carriages (the `prev` pointer).

There are many problems related to linked lists, which can be divided into the following common types based on the **processing method** and **techniques**:

## 1. Traversal

**Characteristics:**

* Visit all nodes sequentially from head to tail
* Can be used for counting, searching, constructing arrays, etc.

**Example: Train Carriage Inspection**

Imagine you are a train conductor, walking from the front of the train to the back, checking the ID, cargo, or passenger information of each carriage, and recording specific data (such as total weight, or the position of a specific carriage).

**Common Problems:**

* [1290. Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)
* [817. Linked List Components](https://leetcode.com/problems/linked-list-components/)
* [725. Split Linked List in Parts](https://leetcode.com/problems/split-linked-list-in-parts/)

## 2. Deletion

**Characteristics:**

* Involves node deletion, the key is to correctly maintain the previous and next pointers
* Some problems require the use of a sentinel node (dummy) to simplify boundary conditions

**Example: Removing a Carriage**

You need to remove a broken carriage from the train, find the carriages before and after it, carefully disconnect the connections (adjusting pointers), and reconnect the front and rear carriages to ensure the train continues to run.

**Common Problems:**

* [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)
* [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
* [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
* [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)

## 3. Insertion

**Characteristics:**

* Involves adding new nodes at specific positions, the key is to handle boundaries and reconnect broken chains
* Usually combined with a dummy node to facilitate head insertion

**Example: Adding a Carriage**

You want to insert a new carriage after the k-th carriage of the train. Find the k-th carriage, disconnect it from the back, attach the new carriage, and connect it back to the remaining carriages.

**Common Problems:**

* [707. Design Linked List](https://leetcode.com/problems/design-linked-list/)
* [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)
* [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

## 4. Reversal

**Characteristics:**

* Reverse the order of a part or the entire linked list
* Usually requires the two-pointer technique and consideration of boundary conditions

**Example: Train Turning Around**

If the train needs to run in reverse, you must completely reverse the order of the carriages (from `1->2->3` to `3->2->1`). The "direction" of each carriage must be changed, adjusting the connections one by one.

**Common Problems:**

* [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
* [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
* [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## 5. Prev & Curr Pointers

**Characteristics:**

* Use two pointers cooperating to update the linked list structure, simplifying boundary handling
* Commonly used for deletion, insertion, reversal, and other operations

**Example: Two People Fixing a Railway**

Two workers fix a train track, one points to the current track (`curr`), and the other stands on the previous section (`prev`). The current worker disconnects the track, the front worker connects the new track, cooperating to complete the repair or adjustment.

**Common Problems:**

* [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) (with dummy)
* [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

## 6. Fast & Slow Pointers

**Characteristics:**

* One pointer moves fast, the other moves slow, commonly used to find the midpoint, detect cycles, etc.
* Fast and slow pointers use the speed difference to detect loops (intersection) or find the midpoint (when the fast pointer reaches the end, the slow pointer is at the midpoint).

**Example: Racing to Find the Midpoint or Catching a Thief**

On a circular track, two runners (pointers) start at the same time, one runs fast (two steps), and one runs slow (one step). If there is a loop, they will meet; if you want to find the midpoint, when the slow runner reaches the midpoint, the fast runner has just finished running.

**Common Problems:**

* [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
* [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
* [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

## 7. Two Pointers (Approaching from Both Ends)

**Characteristics:**

* Two pointers approach from both ends, commonly used to determine palindromes, meeting points, etc.
* Needs to find the tail node first or use auxiliary techniques like a stack

**Example: Train Ends Symmetrical Inspection**

Two people start inspecting carriage numbers from the front and the back respectively, comparing whether they are symmetrical (palindrome), or finding a certain carriage in the middle (meeting point).

**Common Problems:**

* [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
* [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## 8. Merge

**Characteristics:**

* Merge two sorted linked lists / multiple linked lists
* Usually uses a dummy node to simplify operations

**Example: Merging Train Tracks**

Two train tracks need to be merged into one. Carriages are connected one by one according to their numbers, deciding which carriage gets attached first, maintaining the overall order.

**Common Problems:**

* [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
* [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

## 9. Divide and Conquer

**Characteristics:**

* Use merge sort ideas to handle linked list sorting and merging
* Split into smaller segments and then recursively merge

**Example: Assembling a Complex Train**

Split a long train into several short trains, organize each section separately (sorting or processing), and then sequentially merge them into a complete train.

**Common Problems:**

* [148. Sort List](https://leetcode.com/problems/sort-list/)

## 10. Comprehensive Application (e.g. Simulation + Logic)

**Characteristics:**

* Involves a combination of multiple linked list operations, testing linked list modeling and simulation abilities
* Multi-step operations, focusing on structural design

**Example: Dynamic Train Dispatching**

You manage a train dispatching station, needing to simulate the merging, splitting, and rearranging of carriages, adjusting tracks and carriage orders according to specific rules.

**Common Problems:**

* [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
* [2181. Merge Nodes in Between Zeros](https://leetcode.com/problems/merge-nodes-in-between-zeros/)

## 11. Other Techniques

**E.g. Sentinels (Dummy Node) Usage Scenarios**

* Unifies the operation logic for the head node and the middle nodes, avoiding special cases.
* Frequently used in scenarios like deleting the first node, inserting a new head, etc.

**Example: Virtual Head Carriage Guide**

Add a "virtual carriage" (sentinel node) in front of the train engine to facilitate unified operations (such as inserting or deleting the first section), and dismantle the virtual carriage after completion.

* [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/description/)
* [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/)
