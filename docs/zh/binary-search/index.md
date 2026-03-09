# 什么是二分搜索？

二分搜索是一种在**有序数组、单调区间或具有单调性质的问题空间**中查找目标的高效算法技巧。
它的核心思想是：**每次将问题空间对半缩小，快速逼近目标值或最优解。**

常见的二分搜索题目，可以划分为以下 5 种类型，每种类型有不同的适用场景与解题模式：

## 1. 基础查找类（Classic Binary Search）

**特点：**

* 用于查找数组中是否存在某个目标值 `target`
* 通常返回的是“目标的下标”或“是否存在”

**适用场景：**

* 给定一个有序数组，查找目标值的位置或插入位置

**举例：在字典里查一个单词**

你想查“kangaroo”这个单词的位置：

* 打开字典中间，发现是“M开头”的 → 太靠后了，往左翻
* 再翻到前面，发现是“G开头”的 → 太靠前了，往右翻
* 就这样不断把范围砍一半，直到精确找到“kangaroo”

就是最标准的对半查找 —— 每次猜中间值，并根据大小关系判断继续查哪边。

**对应题目：**

* [Leetcode 704 – Binary Search](https://leetcode.com/problems/binary-search/)
* [Leetcode 35 – Search Insert Position](https://leetcode.com/problems/search-insert-position/)

就像你用“编号是否匹配”一步步缩小查找范围，直到命中或放弃

## 2. 边界查找类（Lower / Upper Bound）

**特点：**

* 查找“第一个”或“最后一个”满足某个条件的位置
* 常见关键词：最左、最右、第一个 ≥、最后一个 ≤ 等

**适用场景：**

* 找到某个值的起始/结束位置
* 判断一段范围内的边界点

**举例：电影院找第一个空座位**

电影院有一排排座位，每个座位编号都排好。

你想找最左边的空位（比如 >= 20 的第一个空座位）：

* 每次看中间那排 → 有人？往右找；没人？可能左边还有空位 → 继续缩小范围
* 直到找到最靠左的那个符合条件的位置

这类问题强调的是“满足条件的最早/最晚出现位置”，不是简单查某个值。

**对应题目：**

* [Leetcode 34 – Find First and Last Position of Element](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
* [Leetcode 278 – First Bad Version](https://leetcode.com/problems/first-bad-version/)

就像你要找“第一个可用位置”，每次判断是否还能再往左

## 3. 二分答案类（Binary Search on Answer）

**特点：**

* 答案本身不在数组中，而在某个区间（如速度、容量、最小值等）
* 利用“check(mid)”函数判断当前答案是否成立，缩小范围

**适用场景：**

* 求最小满足条件的值 or 最大可行值
* 涉及“最小化最大值”“最大化最小值”一类问题

**举例：快递运力规划——最小运力能装完包裹**

你是快递公司负责人，想知道：**每天用多少最小的运力，能在 D 天内送完？**

* 运力太小？送不完 → 增大运力
* 运力太大？浪费资源 → 尝试减少运力
* 每次猜一个运力值，用 `check()` 判断是否可行

**对应题目：**

* [Leetcode 875 – Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
* [Leetcode 1011 – Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
* [Leetcode 410 – Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

你不是找具体位置，而是猜答案是否成立，像“试错 + 剪枝”

## 4. 特殊结构查找类（Rotated Array / Mountain Array）

**特点：**

* 数组不是完全有序，而是有**特殊结构**（如旋转、有峰值等）
* 需结合结构特点判断 mid 在哪一段，再决定走向

**适用场景：**

* 在旋转数组中查找目标
* 找出峰值、最大值等特殊点

**：登山时寻找山顶**

你在一条先升后降的山路上，不知道山顶在哪。

你每次往右边看一眼：

* 如果右边比你高 → 说明还在上坡，山顶在右边
* 如果右边比你低 → 说明开始下坡了，山顶就在你这或左边

每次靠“当前和右边的比较”判断是上坡还是下坡，从而靠近峰值 —— 就像你在走一条“山脉数组”。

**对应题目：**

* [Leetcode 33 – Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
* [Leetcode 162 – Find Peak Element](https://leetcode.com/problems/find-peak-element/)
* [Leetcode 1095 – Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/)

就像你在特殊地形中找目标，要会“判断地形特征”后再缩小方向


## 5. 隐式二分类（二分 + 贪心/DP/前缀和）

**特点：**

* 二分不直接体现在数组上，而是结合贪心、前缀和、DP等策略使用
* 二分的是“位置”或“状态”，常与 LIS、子数组类问题搭配

**适用场景：**

* 在维护状态的过程中，用二分提高效率
* 比如“最长上升子序列”中维护尾部值并二分插入

**举例：电商秒杀抢购物品**

你参加电商秒杀活动，规定一个用户最多下单 x 元。

你想知道：最高能抢多少钱的商品组，但商品很多、组合复杂。

* 你每次猜一个 x 金额，模拟选一组看看是否能抢成功（用贪心或前缀和等判断）
* 如果失败，说明太贪了 → 减小 x
* 如果成功，说明还能尝试更高 → 增加 x

这类题目中，check 函数依赖额外的逻辑（如贪心/前缀和）判断答案是否成立，不是直接在数组中查值。

**对应题目：**

* [Leetcode 300 – Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
* [Leetcode 1626 – Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/)

就像你维护一个“能插入的最优位置数组”，二分帮你快速插入
