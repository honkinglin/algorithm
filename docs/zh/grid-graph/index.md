# 什么是网格图？

网格图是一种常见的图结构，通常用来模拟二维或三维的地图、迷宫或棋盘问题，在算法题中经常用来考察DFS、BFS、最短路径等算法的掌握。

**常用方向：**

* 4方向：上下左右
* 8方向：上下左右 + 左上、右上、左下、右下
* 6方向（3D）：上下、前后、左右

**关键技巧：**

* 维护visited避免重复访问
* 队列或递归管理搜索
* 注意边界条件（防止越界）
* 结合并查集、优先队列等算法进行高级解法


## 1. 经典 DFS

**特点：**

* 递归或显式栈实现
* 常用于搜索连通区域、统计连通块大小

**适用场景：**

* 遍历所有相连的格子
* 解决“有多少块相连区域”或“最大区域的面积”等问题

**举例：小岛探险家**
就像在地图上找一片岛屿，顺着沙滩走，所有能走到的都算一个岛屿，然后继续找下一块岛屿。

**对应题目：**

* [Leetcode 200. 岛屿数量](https://leetcode.com/problems/number-of-islands/)
* [Leetcode 547. 省份数量](https://leetcode.com/problems/number-of-provinces/)（转化成图DFS）
* [Leetcode 695. 岛屿的最大面积](https://leetcode.com/problems/max-area-of-island/)
* [Leetcode 733. 图像渲染](https://leetcode.com/problems/flood-fill/)


## 2. 经典 BFS

**特点：**

* 队列实现
* 常用于搜索最短路径或逐层扩展

**适用场景：**

* 找到起点到终点的最短路径
* 解决“从源点开始扩展”问题

**举例：森林救火队**

像森林里着火了，消防员要从火源开始，一层一层向外扩散扑灭火势，直到全部扑灭。

**对应题目：**

* [Leetcode 542. 01矩阵](https://leetcode.com/problems/01-matrix/)
* [Leetcode 994. 腐烂的橘子](https://leetcode.com/problems/rotting-oranges/)
* [Leetcode 752. 打开转盘锁](https://leetcode.com/problems/open-the-lock/)
* [Leetcode 1091. 二进制矩阵中的最短路径](https://leetcode.com/problems/shortest-path-in-binary-matrix/)


## 3. 双向 BFS

**特点：**

* 从起点和终点同时扩展
* 相遇时结束
* 大幅度降低搜索复杂度

**适用场景：**

* 起点和终点都已知
* 需要更快地找到最短路径

**举例：双向搜救队**

两组救援队从营地和失踪点分别出发，一旦在途中相遇，就能迅速汇合完成搜救。

**对应题目：**

* [Leetcode 126. 单词接龙II](https://leetcode.com/problems/word-ladder-ii/)
* [Leetcode 127. 单词接龙](https://leetcode.com/problems/word-ladder/)


## 4. Dijkstra算法

**特点：**

* 适用于带权图（不同格子或路径的代价不同）
* 用优先队列计算加权最短路径

**适用场景：**

* 需要考虑不同格子移动的代价
* 解决最短路径问题

**举例：外卖送餐员**

外卖小哥穿梭在城市的大街小巷，每条路的耗时不同，想找到最快的送餐路线。

**对应题目：**

* [Leetcode 787. K站中转内最便宜的航班](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
* [Leetcode 1514. 概率最大的路径](https://leetcode.com/problems/path-with-maximum-probability/)
* [Leetcode 1631. 最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort/)


## 5. 其他进阶

**特点：**

* 三维网格、特殊结构（如蜂窝）
* 结合并查集、拓扑排序等高级技巧

**适用场景：**

* 三维迷宫
* 复杂的连通性判定
* 需要结合更多算法技巧

**举例：立体迷宫探险家**

你就像进入一个3D迷宫，不仅能往左右走，还能上下爬，每层楼都有通道相连。

**对应题目：**

* [Leetcode 130. 被围绕的区域](https://leetcode.com/problems/surrounded-regions/)（DFS/BFS）
* [Leetcode 694. 不同的岛屿数量](https://leetcode.com/problems/number-of-distinct-islands/)（DFS）
* [Leetcode 1162. 地图分析](https://leetcode.com/problems/as-far-from-land-as-possible/)（多源BFS）
* [Leetcode 1254. 统计封闭岛屿的数目](https://leetcode.com/problems/number-of-closed-islands/)（DFS）
