# 什么是栈（Stack）？

栈是一种 **先进后出（LIFO）** 的数据结构，常用于递归调用、括号匹配、表达式求值等场景。

我们可以把栈想象成一个**只能从一端进出物品的盒子**：
你最后放进去的东西，一定是最先拿出来的。

栈的应用根据不同问题特征，可以分为以下几种典型类型：

## 1. 基础栈（Basic Stack）

**特点：**

* 支持基本的入栈（push）和出栈（pop）操作
* 主要用于还原过程、顺序模拟、路径回溯等

**适用场景：**

* 模拟系统过程（如文本编辑、退格、路径简化）
* 判断序列是否合法
* 处理带有「返回」操作的题目

**举例：你在用 Ctrl+Z 撤销操作**

想象你正在编辑文档，每次操作都会记录下来。如果按下 Ctrl+Z，就会**撤销最近一次操作** —— 这个“撤销栈”就是 LIFO 的栈结构。

**对应题目：**

* [71. Simplify Path](https://leetcode.com/problems/simplify-path/)
* [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)
* [946. Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/)
* [1472. Design Browser History](https://leetcode.com/problems/design-browser-history/)

## 2. 最小栈 / 最大栈（Min/Max Stack）

**特点：**

* 在普通栈操作的基础上，支持 **O(1)** 获取当前栈中的最小值或最大值
* 通常使用辅助栈维护最值同步

**适用场景：**

* 高频出现场景中需要快速知道最小/最大元素
* 数值变化频繁但仍需快速查询

**举例：你在股票交易平台上看“当前最低价”**

你买入某股票，每买一次都记录一下价格，现在你想随时知道：**“我买入记录里最低的价格是多少？”**
最小栈就是这种“随时告诉你最低点”的神器。

**对应题目：**

* [155. Min Stack](https://leetcode.com/problems/min-stack/)
* [895. Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/)

## 3. 邻项消除栈（Pair Elimination Stack）

**特点：**

* 相邻两个或多个元素满足特定条件时消除
* 常用于字符串处理、相邻重复/对撞等问题

**适用场景：**

* 消除所有相邻重复字符
* 模拟合并、碰撞、组合的过程

**举例：清理聊天记录中的重复发言或脏词**

像你在微信群管理一个群员的发言，出现两个连续一样的表情就删掉，或者两个方向冲突的命令（比如左右、上下）就冲突抵消了 —— 这就是“邻项消除”。

**对应题目：**

* [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
* [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
* [1209. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

## 4. 合法括号栈（Valid Parentheses Stack）

**特点：**

* 利用栈记录括号顺序，实现嵌套匹配、判断合法性、求嵌套深度等

**适用场景：**

* 判断括号字符串是否合法
* 计算括号结构的嵌套层数或分数
* 生成、清理、平衡括号序列

**举例：你在看代码编辑器的括号高亮**

你写代码时，编辑器会自动配对 `()` 或 `{}`，多一个就会报错。这就好比它用一个“栈”在帮你做括号配对检查。

**对应题目：**

* [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
* [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
* [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

## 5. 表达式解析栈（Expression Evaluation Stack）

**特点：**

* 用栈处理中缀表达式转后缀（逆波兰）、括号嵌套、运算符优先级
* 也可以用于解析布尔表达式、Lisp 表达式等

**适用场景：**

* 需要按照优先级顺序计算表达式
* 递归嵌套结构的求值问题

**举例：你在计算器里输入 `2 * (3 + 4)`**

计算器会把括号里的先算出来，然后再乘 —— 它其实用的是“栈”来管理这个计算优先级过程。

**对应题目：**

* [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
* [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/)
* [394. Decode String](https://leetcode.com/problems/decode-string/)
* [1106. Parsing A Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/)

## 6. 单调栈（Monotonic Stack）

**特点：**

* 栈内元素保持单调递增或递减（通常存下标）
* 常用于查找下一个更大/更小元素、维护极值

**适用场景：**

* 求解最大矩形、最大面积、最近更高温度等
* 优化暴力嵌套 O(n²) 问题为 O(n)

**举例：你看一排学生，想知道每个人之后第一个比他高的人是谁**

你排查一排身高数据，想知道“谁之后第一个比他高”。你用个单调递减的栈，一路扫过去，只保留有可能成为“比他高”的人 —— 这个就叫单调栈。

**对应题目：**

* [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
* [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
* [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

## 7. 设计类栈结构（Stack Design）

**特点：**

* 多栈、多功能、组合数据结构（如：堆+栈）
* 需满足特定功能如并发、频率统计、增量更新等

**适用场景：**

* 自定义结构满足定制化操作
* 数据结构设计题、系统模拟题

**举例：你是厨师，每个餐盘只能堆5个碗，多个堆叠一起管理**

你设计一个“碗塔系统”，碗堆满一个就换下一个 —— 你要同时支持加碗、拿碗、查找最浅的一摞碗。

**对应题目：**

* [1172. Dinner Plate Stacks](https://leetcode.com/problems/dinner-plate-stacks/)
* [1381. Design a Stack With Increment Operation](https://leetcode.com/problems/design-a-stack-with-increment-operation/)
* [2296. Design a Text Editor](https://leetcode.com/problems/design-a-text-editor/)

📌 **总结一句话**：

> 栈是处理“有序撤销”、“嵌套结构”、“顺序匹配”、“表达式求值”等问题的强大工具，每一类问题对应不同的栈使用技巧。
