# 什么是双指针（Two Pointers）？

双指针是一种**使用两个指针在数组或字符串上协同移动**的算法技巧，常用于数组查找、子区间处理、排序归并、原地修改等场景。

我们可以把双指针想象成**两个扫雷兵，一左一右，灵活分工协作**：
有时一起向右推进，有时一个从左一个从右，甚至有时从中间出发各走各的。

双指针的使用根据指针的**方向、数据结构、问题目标**的不同，可以分为以下几种典型类型：


## 1. 相向双指针（Opposite Direction）

**特点：**

* 两个指针分别从数组或字符串的两端出发，向中间靠拢
* 用于有序结构的查找、回文判断、最大值判定等

**适用场景：**

* 判断是否为回文
* 寻找两个数满足某种和（如：two sum）
* 容器类极值问题（如：接水最多）

**举例：你和朋友在清理一排杂乱的书架，你从左边开始拿书整理，朋友从右边开始放回原位，你们边清理边往中间靠近，直到书架整齐。**

**对应题目：**

* [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
* [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
* [167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
* [344. Reverse String](https://leetcode.com/problems/reverse-string/)


## 2. 同向双指针（Sliding Window）

**特点：**

* 两个指针一起从左向右推进，动态维护一个区间（窗口）
* 通常用于子数组、子字符串等局部范围统计问题

**适用场景：**

* 统计区间满足条件的子数组
* 无重复子串/最小覆盖串
* 求最大/最短区间长度

**举例：你在逛菜市场，一个朋友推着车慢慢走，另一个拿着篮子挑菜，车子每走一段就统计篮子里菜的种类和重量，直到挑到最合适的组合。**

**对应题目：**

* [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
* [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
* [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
* [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)


## 3. 背向双指针（Center Expansion）

**特点：**

* 两个指针从同一个位置出发，分别向左右移动，向外扩展
* 常用于对称结构、从中心扩展的题型

**适用场景：**

* 找最长回文子串
* 以某个点为中心扩展的最大区间

**举例：你站在桥中央，左右各派一个朋友沿桥两侧散步，边走边观察水面倒影，直到找到最对称的风景点。**

**对应题目：**

* [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
* [1793. Maximum Score of a Good Subarray](https://leetcode.com/problems/maximum-score-of-a-good-subarray/)


## 4. 原地修改型双指针（In-Place Modification）

**特点：**

* 一个指针扫描原数组，一个指针处理结果区（快慢指针）
* 常用于原地移除元素、去重、数组重新排列

**适用场景：**

* 移除重复项、特定元素
* 将零移到末尾
* 原地排序

**举例：你在厨房洗盘子，一个朋友在旁边擦干并归位，脏盘子被迅速清理，干净盘子被整齐摆放。**

**对应题目：**

* [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
* [27. Remove Element](https://leetcode.com/problems/remove-element/)
* [75. Sort Colors](https://leetcode.com/problems/sort-colors/)
* [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)


## 5. 双序列双指针（Two Sequences Alignment）

**特点：**

* 两个指针分别遍历两个数组/字符串，进行对齐、匹配或合并
* 适用于两个序列的同步操作

**适用场景：**

* 合并两个有序数组
* 查找交集或差异
* 长按键入等变形问题

**举例：你和朋友一人拿着一份购物清单，对照着检查库存，一人从头读，一人从另一份清单核对，直到找到相同的商品。**

**对应题目：**

* [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
* [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
* [925. Long Pressed Name](https://leetcode.com/problems/long-pressed-name/)
* [1229. Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/)


## 6. 判断子序列（Is Subsequence）

**特点：**

* 判断一个序列是否为另一个序列的子序列
* 核心在于顺序匹配

**适用场景：**

* 判断能否通过跳过字符匹配成功
* 字符串匹配变体题

**举例：你在看一本长篇小说，试图用另一本小书的片段“跳着读”验证它是否是长篇的子集。**

**对应题目：**

* [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)
* [524. Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)
* [2486. Append Characters to String to Make Subsequence](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/)


## 7. 三指针及以上（Three or More Pointers）

**特点：**

* 通常用于组合枚举（如三数之和、四数之和）
* 多个指针配合跳过重复、剪枝搜索

**适用场景：**

* 三元组、四元组求和
* 稀疏数组对齐、子数组计数等

**举例：三位厨师合作调配菜谱，每人负责一种配料，从冰箱里挑出组合，直到找到最美味的三味搭配。**

**对应题目：**

* [15. 3Sum](https://leetcode.com/problems/3sum/)
* [18. 4Sum](https://leetcode.com/problems/4sum/)
* [1213. Intersection of Three Sorted Arrays](https://leetcode.com/problems/intersection-of-three-sorted-arrays/)


📌 **总结一句话**：

> 双指针是解决数组和字符串「子结构」、「多序列同步」、「顺序筛选」、「滑动区间」等问题的高效利器，每一种指针策略都对应一类经典问题与模板技巧。
