# 什么是链表？

链表是一种**由一系列节点组成的数据结构**，每个节点包含数据域和指向下一个节点的指针。它不像数组那样支持随机访问，但在插入和删除节点方面效率更高。

我们可以把它想象成一列火车，每节车厢（节点）只知道下一个车厢在哪里（`next` 指针），有些题还需要双向车厢（`prev` 指针）。

链表相关题目非常多，可以按**处理方式**和**技巧点**划分为以下常见类型：


## 1. 遍历类（Traversal）

**特点：**

* 从头到尾逐个访问所有节点
* 可用于统计、搜索、构造数组等

**举例：火车车厢巡检**

想象你是一位列车长，沿着火车从车头走到车尾，检查每节车厢的编号、货物或乘客信息，记录特定数据（比如总重量、某节车厢位置）。

**常见题目：**

* [1290. Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)
* [817. Linked List Components](https://leetcode.com/problems/linked-list-components/)
* [725. Split Linked List in Parts](https://leetcode.com/problems/split-linked-list-in-parts/)


## 2. 删除类（Deletion）

**特点：**

* 涉及节点删除，重点是正确维护前后指针
* 有些题需要使用哨兵节点（dummy）来简化边界情况

**举例：拆卸车厢**

你需要从火车中拆掉一节坏掉的车厢，找到它前后的车厢，小心断开连接（调整指针），再把前后车厢重新连上，确保火车继续运行。

**常见题目：**

* [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)
* [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
* [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
* [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)


## 3. 插入类（Insertion）

**特点：**

* 涉及在特定位置新增节点，重点是处理边界和断链重连
* 通常结合 dummy 节点方便处理头部插入

**举例：加挂车厢**

你想在火车第 k 节车厢后插入一节新车厢，找到第 k 节，断开它与后面的连接，把新车厢挂上，再连回剩余车厢。

**常见题目：**

* [707. Design Linked List](https://leetcode.com/problems/design-linked-list/)
* [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)
* [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)


## 4. 反转类（Reversal）

**特点：**

* 翻转部分或整个链表的顺序
* 通常需要双指针技巧，考虑边界情况

**举例：火车掉头重排**

火车要反向行驶，你得把车厢顺序完全颠倒（从 1->2->3 变成 3->2->1），每节车厢的“指向”都得改，逐一调整连接方向。

**常见题目：**

* [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
* [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
* [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)


## 5. 前后指针类（Two Pointers: Prev & Curr）

**特点：**

* 使用两个指针配合更新链表结构，简化边界处理
* 常用于删除、插入、反转等操作

**举例：两人修铁路**

两个工人修火车轨道，一个指着当前轨道（curr），另一个站在前一节（prev）。当前工人断开轨道，前面工人接上新轨道，配合完成修复或调整。

**常见题目：**

* [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)（带 dummy）
* [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)


## 6. 快慢指针类（Fast & Slow Pointers）

**特点：**

* 一个指针走得快，一个走得慢，常用于找中点、判断环等
* 快慢指针利用速度差来检测环（相遇）或找中点（快指针到尾时慢指针在中点）。

**举例：赛跑找中点或抓小偷**

在一条环形跑道上，两个跑步者（指针）同时出发，一个跑得快（两步），一个跑得慢（一步）。如果有环，他们会相遇；如果要找中点，慢跑者到中点时快跑者刚好跑完。

**常见题目：**

* [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
* [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
* [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)


## 7. 双指针类（双向推进）

**特点：**

* 两个指针从两端逼近，常用于判断回文、相遇点等
* 需先找到尾节点或用栈等技巧辅助

**举例：火车两端对称检查**

两人一从车头、一从车尾开始检查车厢编号，比较是否对称（回文），或者找到中间某节车厢（相遇点）。

**常见题目：**

* [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
* [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)


## 8. 合并类（Merge）

**特点：**

* 合并两个有序链表/多条链表
* 通常使用 dummy node 简化操作

**举例：合并火车轨道**

两条火车轨道要合并成一条，按车厢编号顺序逐一连接，决定哪节车厢先挂上，保持整体有序。

**常见题目：**

* [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
* [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)


## 9. 分治类（Divide and Conquer）

**特点：**

* 用归并思路处理链表排序、合并
* 拆分成小段后递归合并

**举例：组装复杂火车**

把一列长火车拆成几段短火车，每段单独整理（排序或处理），再按顺序合并成完整火车。

**常见题目：**

* [148. Sort List](https://leetcode.com/problems/sort-list/)


## 10. 综合应用类（例如：模拟+逻辑）

**特点：**

* 涉及多个链表操作的组合，考察链表建模、模拟能力
* 多步操作，注重结构设计

**举例：动态火车调度**

你管理一个火车调度站，需模拟车厢的合并、分裂、重新排列等操作，按特定规则调整轨道和车厢顺序。

**常见题目：**

* [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
* [2181. Merge Nodes in Between Zeros](https://leetcode.com/problems/merge-nodes-in-between-zeros/)


## 11. 其他技巧类

**如：哨兵节点（Dummy Node）使用场景**

* 统一头节点与中间节点操作逻辑，避免特判
* 常用于删除第一个节点、插入新头等场景

**举例：虚拟车头引导**

在火车头前加一节“虚拟车厢”（哨兵节点），方便统一操作（比如插入或删除第一节），完成后拆掉虚拟车厢。

* [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/description/)
* [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/)

