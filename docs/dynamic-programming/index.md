# 什么是动态规划（DP）？

动态规划是一种“**记住过去，优化现在**”的算法技巧，适合用来解决那些可以拆成重复子问题的最优方案问题。

你可以把它理解成：**“有记忆能力的递归”** —— 每个结果都记录下来，避免重复劳动。


## 1. 0-1 背包（0-1 Knapsack）

**特点：**

* 每个物品只能选一次
* 状态是：在前 i 件物品中，如何使得总重量 ≤ 背包容量，并让价值最大

**举例：背行李旅行，每件东西只能带一次，行李有重量限制**

> 你准备出国旅行，行李箱最多只能装 20kg。你面前有很多物品，每样都有重量和价值。你只能选择带或不带（不能带两件），怎么装最值？

**适用场景：**

* 是否可以选出一部分数，刚好满足一个目标值
* 如何从一堆值里选出一部分，最大化某个指标

**对应题目：**

* [416 – 分割等和子集](https://leetcode.com/problems/partition-equal-subset-sum/)
* [494 – 目标和](https://leetcode.com/problems/target-sum/)
* [1049 – 最后一块石头的重量 II](https://leetcode.com/problems/last-stone-weight-ii/)


## 2. 完全背包（Complete Knapsack）

**特点：**

* 每个物品可以选无限次
* 状态是：在前 i 种物品中，如何组合成目标数值

**举例：用硬币换零钱，每种硬币你有无限枚**

> 假如你要凑出 10 块钱，你有无限枚 1元、2元、5元的硬币，有多少种换法？

**适用场景：**

* 硬币兑换、组合总数、无限资源配比问题

**对应题目：**

* [377 – 组合总和 Ⅳ](https://leetcode.com/problems/combination-sum-iv/)
* [518 – 零钱兑换 II](https://leetcode.com/problems/coin-change-ii/)


## 3. 子序列类 DP（Subsequence DP）

**特点：**

* 不要求连续，只要顺序保持即可
* 用于比较“两个序列的相似度”或“找出某种趋势”

**举例：在一句话里找出关键词组成句子的可能性**

> 比如你听了一段长对话，现在想回忆是否说过“hello”，你只需要检查是否有 h、e、l、l、o 按顺序出现，不用连续。

**适用场景：**

* 最长公共子序列
* 最长递增子序列
* 编辑距离（修改多少次能变成另一个字符串）

**对应题目：**

* [72 – 编辑距离](https://leetcode.com/problems/edit-distance/)
* [300 – 最长递增子序列](https://leetcode.com/problems/longest-increasing-subsequence/)
* [1143 – 最长公共子序列](https://leetcode.com/problems/longest-common-subsequence/)


## 4. 区间 DP（Interval DP）

**特点：**

* 处理一个范围内的子问题（通常是 \[i...j]）
* 适合分割、合并、爆破类问题

**举例：切蛋糕，想知道切的顺序对总成本有多大影响**

> 蛋糕太大，要切成小块带走。每次切的代价是这块蛋糕当前的长度。你切的顺序不同，总花费可能差很多。你想知道最优切法。

**适用场景：**

* 石头合并
* 气球戳破
* 多段合并、拆分

**对应题目：**

* [312 – 戳气球](https://leetcode.com/problems/burst-balloons/)
* [887 – 鸡蛋掉落](https://leetcode.com/problems/super-egg-drop/)
* [1000 – 合并石头的最低成本](https://leetcode.com/problems/minimum-cost-to-merge-stones/)


## 5. 状态压缩 DP（Bitmask DP）

**特点：**

* 用二进制的每一位代表“一个选择是否被用过”
* 适用于组合数量爆炸时的优化

**举例：组队出任务，用 01 表示谁上场**

> 有 10 个队员，你要选出部分人上战场，每人只能上一次。你用二进制表示选择状态，比如 `10101` 表示 1、3、5号被选中。

**适用场景：**

* 所有子集枚举
* 所有人都走一遍（旅行商问题）

**对应题目：**

* [691 – 贴纸拼词](https://leetcode.com/problems/stickers-to-spell-word/)
* [847 – 访问所有节点的最短路径](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)


## 6. 数位 DP（Digit DP）

**特点：**

* 用来统计数字组成、数字出现次数等问题
* 按位枚举每一位可能的取值，带上限制和记忆化

**举例：你想数一下从 1 到 10000 中出现了多少次“1”**

> 你数着数着发现重复工作太多了，于是你决定按位统计（比如个位、十位、百位...）一次性搞定。

**适用场景：**

* 某个数字在区间 \[1, n] 中出现的次数
* 满足某些规则的数字个数

**对应题目：**

* [233 – 数字 1 的个数](https://leetcode.com/problems/number-of-digit-one/)
* [357 – 计算各个位数不同的数字个数](https://leetcode.com/problems/count-numbers-with-unique-digits/)


## 7. 树形 DP（Tree DP）

**特点：**

* 用 DFS 在树结构上传递信息（通常是从叶子往上）
* 每个节点的状态依赖于子树的状态

**举例：年终奖金发放，规定上司和下属不能同时领奖**

> 公司里是树形结构，领导发奖金时担心上下级勾结，所以一旦某个员工领奖，他的直属上级就不能领。怎样发奖金总额最大？

**适用场景：**

* 树上路径、分配、选取问题
* 祖孙关系下的选择冲突

**对应题目：**

* [124 – 二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
* [337 – 打家劫舍 III](https://leetcode.com/problems/house-robber-iii/)


## 8. 状态机 DP（State Machine DP）

**特点：**

* 不同状态之间切换，有冷却期、手续费等限制
* 常用于股票买卖场景

**举例：你在炒股，不同天有不同规则：今天卖完要等明天再买**

> 你只能同时持有一只股票；卖出后要休息一天才能再买；每次交易要交手续费……每天都在做最优选择。

**适用场景：**

* 股票买卖最大收益
* 状态有限（持有/不持有/冷却中）

**对应题目：**

* [122 – 买卖股票的最佳时机 II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
* [309 – 含冷冻期的买卖](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
* [714 – 含手续费的股票交易](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)


## 9. 博弈型 DP（Game Theory DP）

**特点：**

* 两人轮流选择，你必须在假设对方最聪明的前提下做最优选择
* 通常是 Min-Max 类型的递归 + 记忆化

**举例：两人玩取石子游戏，你拿一堆、我拿一堆，谁先取完赢**

> 你们轮流拿石头，每次可以从左右两边选一个。你知道对方也会选得最聪明，那你自己应该从哪边拿才能确保胜利？

**适用场景：**

* 玩家轮流操作、最大最小策略
* 模拟两人博弈，判断先手是否稳赢

**对应题目：**

* [486 – 预测赢家](https://leetcode.com/problems/predict-the-winner/)
* [877 – 石子游戏](https://leetcode.com/problems/stone-game/)
* [1140 – 石子游戏 II](https://leetcode.com/problems/stone-game-ii/)
