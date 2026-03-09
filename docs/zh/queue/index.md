# 什么是队列（Queue）？

队列是一种 **先进先出（FIFO）** 的数据结构，常用于广度优先搜索、事件处理、滑动窗口等场景。

我们可以把队列想象成一个**排队买奶茶的队伍**：
谁先来就先买，谁后到就后处理。

队列的应用根据不同问题特征，可以分为以下几种典型类型：

## 1. 基础队列（Basic Queue）

**特点：**

* 支持基本的入队（enqueue）和出队（dequeue）操作
* 用于顺序处理事件、流数据、状态转移等

**适用场景：**

* 处理滑动时间窗口
* 模拟操作顺序
* 广度优先搜索（BFS）

**举例：排队打卡记录签到时间**

你是老师，看学生什么时候来上课，只记录最近5分钟内的学生 —— 队列就像一条“时间轴”。

**对应题目：**

* [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)
* [950. Reveal Cards In Increasing Order](https://leetcode.com/problems/reveal-cards-in-increasing-order/)
* [649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/)

## 2. 队列设计（Queue Design）

**特点：**

* 根据题目要求设计复杂队列功能（循环队列、双端、合成结构等）
* 多用类、链表、数组实现

**适用场景：**

* 实现浏览器历史记录、任务分发系统
* 模拟栈或双端队列

**举例：你是地铁列车调度员，设计怎么上车、下车、转车**

你要决定乘客从哪边上下、怎么进站、怎么切换列车 —— 不同设计适配不同需求。

**对应题目：**

* [1670. Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/)
* [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
* [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
* [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)
* [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)

## 3. 双端队列（Deque）

**特点：**

* 支持两端入队出队
* 比普通队列灵活，常用于滑动窗口、状态压缩

**适用场景：**

* 从两端插入/移除数据
* 优化搜索顺序或任务调度

**举例：你管理一个剧院进出口，有前门和后门**

观众既可以从前门进也可以从后门出，有些贵宾还可以插队 —— 这种结构就叫双端队列。

**对应题目：**

* [2810. Faulty Keyboard](https://leetcode.com/problems/faulty-keyboard/)
* [2071. Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)

## 4. 单调队列（Monotonic Queue）

**特点：**

* 队列内保持单调（通常是递减或递增）
* 用于滑动窗口内最大值、最小值问题
* 组合了「滑动窗口 + 单调栈」的技巧

**适用场景：**

* 维护一段数据内的最大/最小值
* 优化暴力嵌套判断为线性

**举例：你看股市行情，想知道每个时间点过去几天的最高价**

你只保留能代表最大值的价格 —— 谁不够高就踢出去。

**对应题目：**

* [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
* [1438. Longest Subarray with Absolute Diff ≤ Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
* [2762. Continuous Subarrays](https://leetcode.com/problems/continuous-subarrays/)
* [2398. Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/)
* [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
* [1499. Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)

## 5. 单调队列优化 DP（Monotonic Queue Optimized DP）

**特点：**

* 用单调队列维护状态转移区间最大/最小值
* 优化传统 DP 的暴力循环，提高效率到 O(n)

**适用场景：**

* 解决类似「从前面的 f\[j] 转移到 f\[i]」的问题
* 区间滑动，边界递增的转移过程

**举例：你在安排快递车队，把不同重量的包裹组合起来最省油**

你要找性价比最好的组合，并且每次更新都把差的选项剔除。

**对应题目：**

* [2944. Minimum Coins to Buy Fruits](https://leetcode.com/problems/minimum-coins-to-buy-fruits/)
* [1696. Jump Game VI](https://leetcode.com/problems/jump-game-vi/)
* [1425. Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)
* [375. Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)
* [1687. Delivering Boxes from Warehouse to Ports](https://leetcode.com/problems/delivering-boxes-from-warehouse-to-ports/)
* [3117. Minimum Sum of Values by Dividing Array](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/)
* [2945. Largest Non-Decreasing Subarray](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/)

## 6. 队列优化搜索（BFS Queue）

**特点：**

* 用队列实现层序遍历、状态图遍历
* 可结合 visited 集合/距离表

**适用场景：**

* 图搜索：迷宫、最短路径、多源 BFS
* 网格搜索：僵尸感染、岛屿问题、火势蔓延等

**举例：你是消防员，模拟火势从多点同时蔓延的过程**

你按波次展开火源范围 —— 谁先烧到谁就先入队。

**经典题型（未列入上方题单，可补刷）：**

* [542. 01 Matrix](https://leetcode.com/problems/01-matrix/)
* [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
* [1926. Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)
* [286. Walls and Gates](https://www.lintcode.com/problem/663/)

## 7. 设计类队列结构（Queue Design）

**特点：**

* 多端口输入/输出、频率控制、容量限制、优先处理等
* 通常结合其他数据结构（哈希表、堆、链表等）

**适用场景：**

* 模拟现实系统（缓存、排队、资源调度）
* 高性能系统数据结构

**举例：你设计一个饭店等位系统，还要优先照顾老人和孕妇**

你用一个系统记录入队时间、是否优先、有无重复 —— 自定义队列结构应运而生。

**对应题目：**

* [2336. Smallest Number in Infinite Set](https://leetcode.com/problems/smallest-number-in-infinite-set/)
* [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

📌 **总结一句话**：

> 队列擅长处理“按顺序推进”的问题，从事件流到图搜索，从滑动窗口到状态转移，只要你需要“排队”，它就是你的好帮手。
