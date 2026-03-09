# 什么是回溯（Backtracking）？

回溯是一种递归+试错思想的算法技巧，**用于在所有解空间中搜索符合条件的解**。其核心是：

> 每一步尝试一种选择，走不通就“撤销上一步”，重新选择另一条路径，直到找出答案。

回溯 = 枚举所有 + 剪枝优化 + 撤销回退。

通常回溯会用到一个 `path` 数组记录各个递归的结果

解决回溯问题我们通常有回溯三问：  
1. 当前操作？
    * 当前层要干什么？要把哪个字母/数字放到 `path` 里？
    * 也就是“我要把 `path[i]` 填成什么？”
2. 子问题？
    * 递归的本质就是不断拆分问题，这里就是“剩下的部分怎么搞？”
    * 在排列/组合题里，这通常表示：“我要在字符串的第 i 位置开始继续找解。”
3. 下一个子问题？
    * 这层递归结束后，下一层要从哪里继续？
    * 也就是“下一层要处理字符串的第 i+1 位置。”

我们可以根据任务目标和选择方式，把回溯分为以下几大类：

## 1. 入门模板回溯（Brute-force Backtracking）

**特点：**

* 用最基础的“选-递归-撤销”结构穷举所有结果
* 不剪枝、不去重、主要用于学习回溯流程

**举例：老式手机按键字母组合**

* 想象你在用老式按键手机输入号码“23”，每个数字对应几个字母（2=ABC，3=DEF）。
* 你试着按下每个可能的字母组合，像在玩密码锁，挨个尝试“AD”“AE”“BD”等等，直到列出所有可能的单词。

**适用场景：**

* 电话数字组合
* 穷举所有方案的基础问题

**对应题目：**

* [Leetcode 17 – 电话号码的字母组合](https://leetcode.com/problems/letter-combinations-of-a-phone-number)

## 2. 子集型回溯（Subset Enumeration）

**特点：**

* 每个元素可以“选”或“不选”，枚举所有组合子集
* 不强调顺序，通常用于幂集、状态组合枚举

**举例：整理行李，决定带哪些东西出行**

* 每样东西你都可以“带”或“不带”，你尝试所有带法。
* 面对第一个物品，你先尝试“带上”它；
* 再处理第二个，继续“带”或“不带”；
* 每条路径走到最后就记录一次打包方案；
* 回退后，再尝试“不带”第一个物品，依此类推

**适用场景：**

* 子集、布尔组合
* 选或不选的问题

**对应题目：**

* [Leetcode 78 – Subsets](https://leetcode.com/problems/subsets)
* [Leetcode 90 – Subsets II（含重复元素）](https://leetcode.com/problems/subsets-ii)

## 3. 划分型回溯（Partitioning）

**特点：**

* 把字符串/数组划分成若干段，每段满足某种条件
* 常见场景为切割回文串、IP 地址等

**举例：把生日蛋糕切成几块，每块口味必须对称或统一**

* 多口味蛋糕要切成几块，每块都得符合口味规则。
* 从第一层开始，尝试切到第 1 层、第 2 层、第 3 层……；
* 每次切出来的这块都要检查“是否满足口味规则”；
* 如果合法，就继续从当前切口向后切下一段；
* 不合法则撤销上次切割，换个切口再试；
* 一直到蛋糕切完并全部满足规则。

**适用场景：**

* 回文划分
* 字符串切割与验证

**对应题目：**

* [Leetcode 131 – 分割回文串](https://leetcode.com/problems/palindrome-partitioning)
* [Leetcode 93 – 复原 IP 地址](https://leetcode.com/problems/restore-ip-addresses)

## 4. 组合型回溯（Combination Enumeration）

**特点：**

* 从 n 个数中选 k 个，顺序不重要，不能重复选
* 通常使用 `start` 控制枚举范围避免重复

**举例：买彩票，从号码池中挑 k 个号码，不看顺序**

* 想从 1~49 中挑 6 个号码，你不能重复号码、也不关心顺序。
* 从 1 开始选择一个号码加入“候选列表”；
* 下一次只能从更大的号码开始（避免重复）；
* 一旦选满 k 个，记录下来；
* 回退上一步的号码，再尝试后面的选项。

**适用场景：**

* n 选 k 的问题
* 满足和为目标的组合

**对应题目：**

* [Leetcode 77 – Combinations](https://leetcode.com/problems/combinations)
* [Leetcode 39 – 组合总和 I](https://leetcode.com/problems/combination-sum)
* [Leetcode 216 – 组合总和 III](https://leetcode.com/problems/combination-sum-iii)

## 5. 排列型回溯（Permutation）

**特点：**

* 每个元素只能用一次，关注顺序
* 通常用 `used` 数组判断是否访问过

**举例：安排小朋友拍合照，每次站法都不同**

* 有 3 个小朋友，每种站位顺序都算一种排列。
* 第一步选一个人站第一位；
* 第二步从剩下的里选一个站第二；
* 第三步安排最后一个；
* 拍好一张照片后，撤掉最后一个人，换别人上；
* 不断尝试所有站位顺序直到全部完成。

**适用场景：**

* 所有元素不同的排列
* 有些元素重复的排列（去重）

**对应题目：**

* [Leetcode 46 – 全排列](https://leetcode.com/problems/permutations)
* [Leetcode 47 – 含重复元素的全排列](https://leetcode.com/problems/permutations-ii)

## 6. 搜索型回溯（DFS搜索）

**特点：**

* 多用于网格或图结构中找路径
* 搭配 `visited` 或状态记录防止走回头路

**举例：在迷宫里摸索出口**

* 你在黑暗迷宫中前进，每条路都可能是出路。
* 当前站在某个格子，向上下左右四个方向尝试；
* 每走一格都记录当前位置；
* 如果撞墙了（不能继续），你就回头退一步；
* 再尝试其他方向；
* 直到走出迷宫或者探索完所有路径。

**适用场景：**

* 走迷宫/遍历图/路径搜索
* 多路径并行探索

**对应题目：**

* [Leetcode 200 – 岛屿数量](https://leetcode.com/problems/number-of-islands)
* [Leetcode 79 – 单词搜索](https://leetcode.com/problems/word-search)
* [Leetcode 51 – N 皇后问题](https://leetcode.com/problems/n-queens)

## 7. 有重复元素的回溯（Deduplicated Backtracking）

**特点：**

* 输入数组中含重复元素，需在同一层 for 循环中去重
* 通常先排序，然后跳过重复值

**举例：邀请同学参加活动，但有同名者不能重复邀请**

* 班上有两个“张伟”，你不能让他们同时出现在一组里。
* 首先把同学名单排序（先处理“张伟”们）；
* 每次选择一个人时，跳过“和前一个人同名但刚被跳过的那位”；
* 这样可以避免生成重复的组合或排列；
* 剩下流程跟组合/排列一致，只是多了一个“去重判断”。

**适用场景：**

* 去重排列、组合、子集
* 输入数组中有重复数字

**去重技巧：**

```python
if i > start and nums[i] == nums[i - 1]:
    continue  # 同层跳过重复元素
```

**对应题目：**

* [Leetcode 47 – 全排列 II](https://leetcode.com/problems/permutations-ii)
* [Leetcode 40 – 组合总和 II](https://leetcode.com/problems/combination-sum-ii)
* [Leetcode 90 – 子集 II](https://leetcode.com/problems/subsets-ii)

## 8. 折半枚举（Meet-in-the-Middle）

**特点：**

* 将数组拆成左右两部分，分别枚举所有子集和
* 最后合并两边结果（用哈希或二分）

**举例：两个人各自试着打包行李，再一起比对是否超重**

* 行李太多不好穷举，所以你把任务对半分给两人。
* 第一个人负责前一半行李，枚举所有子集和；
* 第二个人负责后一半行李，也枚举所有子集和；
* 最后一起合并结果，找到“最接近目标重量”的方案；
* 用二分或哈希快速配对，提高效率。

**适用场景：**

* 子集和问题（数据量较大）
* 对每一边做回溯枚举再合并处理

**对应题目：**

* [Leetcode 1755 – 最接近目标值的子序列和](https://leetcode.com/problems/closest-subsequence-sum)
* [Leetcode 494 – 目标和（也可用DP）](https://leetcode.com/problems/target-sum)

