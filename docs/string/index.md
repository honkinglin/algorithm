# 什么是字符串算法（String Algorithms）？

字符串算法是一套专门用于**处理文本数据的计算技巧**，涵盖字符串匹配、变换、分析等核心操作。在编程世界中，字符串处理无处不在——从搜索引擎的文本匹配到编译器的词法分析，从密码验证到DNA序列比对。

我们可以把字符串算法想象成**一套精密的文字工具箱**：
有些工具用于快速查找（如显微镜），有些用于智能比较（如翻译器），还有些用于模式识别（如侦探的放大镜）。

根据**处理目标、算法复杂度、应用场景**的不同，字符串算法可以分为以下几种核心类型：


## 1. 字符串匹配（String Matching）

**特点：**

* 在主串中查找模式串的出现位置
* 核心是高效的字符比较和跳跃策略
* 从暴力匹配到智能算法的性能跨越

**适用场景：**

* 文本搜索和替换
* 病毒特征码检测
* 代码中的关键字识别

**举例：你在一本厚厚的电话簿中找一个人的名字，可以一页页翻（暴力），也可以根据字母顺序跳跃（智能算法）。**

**经典算法：**

* **暴力匹配 (Brute Force)** - 简单直接，适合短模式串
* **KMP算法** - 利用失败函数避免重复比较
* **Boyer-Moore算法** - 从右向左匹配，坏字符启发
* **Rabin-Karp算法** - 哈希滚动，处理多模式匹配

**对应题目：**

* [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
* [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
* [1392. Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)


## 2. 字符串变换（String Transformation）

**特点：**

* 通过增删改操作将一个字符串转换为另一个
* 重点是最小代价路径和动态规划思想
* 广泛应用于自然语言处理和生物信息学

**适用场景：**

* 拼写检查和纠错
* DNA序列比对
* 版本控制中的文件差异

**举例：你要把一段中文翻译成英文，可能需要替换词汇、调整语序、增删语气词，目标是用最少的修改达到最佳效果。**

**经典算法：**

* **编辑距离 (Edit Distance)** - 最小增删改次数
* **最长公共子序列 (LCS)** - 找到最大相同部分
* **最长公共子串 (LCS)** - 连续相同的最长片段

**对应题目：**

* [72. Edit Distance](https://leetcode.com/problems/edit-distance/)
* [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
* [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)


## 3. 回文字符串（Palindrome Strings）

**特点：**

* 识别和构造正读反读都相同的字符串
* 利用对称性质进行中心扩展或动态规划
* 结合双指针技巧实现高效判断

**适用场景：**

* 回文词检测
* DNA回文序列分析
* 字符串美化和对称设计

**举例：像"上海海上"这样的回文句，从中间往两边读都是一样的，你可以从中心出发检查，也可以两端向中间验证。**

**经典技巧：**

* **中心扩展法** - 以每个字符为中心向外扩展
* **动态规划法** - 记录子串的回文状态
* **Manacher算法** - 线性时间找所有回文子串

**对应题目：**

* [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
* [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
* [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)


## 4. 字符串哈希（String Hashing）

**特点：**

* 将字符串映射为数字，实现快速比较和查找
* 滚动哈希技术支持动态窗口操作
* 在处理大量字符串时显著提升性能

**适用场景：**

* 字符串去重
* 子串快速匹配
* 分布式系统中的一致性哈希

**举例：给每个人一个身份证号，比较两个人是否相同时，只需要对比号码，不用逐字比较姓名和特征。**

**核心技术：**

* **多项式哈希** - 基于进制的哈希函数
* **滚动哈希** - 窗口滑动时的增量计算
* **双哈希** - 降低哈希冲突概率

**对应题目：**

* [187. Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
* [1044. Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
* [1923. Longest Common Subpath](https://leetcode.com/problems/longest-common-subpath/)


## 5. 字典树（Trie Tree）

**特点：**

* 基于前缀的树形存储结构
* 高效支持前缀查询和字符串插入
* 特别适合大量字符串的批量处理

**适用场景：**

* 自动补全功能
* 单词搜索和前缀匹配
* IP路由表和词典存储

**举例：像新华字典的部首检索，按照字的结构层层分类，找字时可以快速定位到对应区域。**

**核心操作：**

* **插入 (Insert)** - 按字符路径建立节点
* **查找 (Search)** - 沿路径验证存在性
* **前缀匹配 (StartsWith)** - 部分路径匹配

**对应题目：**

* [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
* [212. Word Search II](https://leetcode.com/problems/word-search-ii/)
* [648. Replace Words](https://leetcode.com/problems/replace-words/)


## 6. 字符串分割与组合（String Parsing & Combination）

**特点：**

* 按照特定规则拆分或重组字符串
* 涉及贪心策略、回溯搜索、动态规划
* 在编译原理和数据解析中应用广泛

**适用场景：**

* 单词拆分和重组
* 表达式解析
* 配置文件处理

**举例：你要把一句话按照字典拆分成有意义的词汇，或者把零散的词汇按照语法组合成句子。**

**经典问题：**

* **单词拆分** - 判断字符串能否被字典完整分割
* **回文分割** - 将字符串分割为回文子串
* **字符串重排** - 重新排列字符满足特定条件

**对应题目：**

* [139. Word Break](https://leetcode.com/problems/word-break/)
* [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
* [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)


## 7. 正则表达式与模式匹配（Regex & Pattern Matching）

**特点：**

* 支持通配符、重复、选择等复杂模式
* 基于有限自动机的状态转换
* 强大的文本处理和验证能力

**适用场景：**

* 邮箱格式验证
* 日志分析和提取
* 代码语法高亮

**举例：像一个智能的文字侦探，不仅能找到确切的字符，还能识别"任意数字"、"重复字母"等模糊线索。**

**核心概念：**

* **通配符匹配** - '.' 和 '*' 的组合使用
* **状态机** - DFA/NFA 的构造和执行
* **递归与动态规划** - 处理复杂模式的策略

**对应题目：**

* [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
* [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
* [65. Valid Number](https://leetcode.com/problems/valid-number/)


📌 **总结一句话**：

> 字符串算法是处理文本数据的瑞士军刀，从基础的查找匹配到复杂的模式识别，每一种技术都为解决特定类型的文本处理问题提供了最佳路径。无论是搜索引擎的核心、编译器的前端，还是生物信息学的序列分析，字符串算法都是不可或缺的基石。