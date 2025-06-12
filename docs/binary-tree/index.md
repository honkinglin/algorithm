# 什么是二叉树？

二叉树是一种每个节点最多有两个子节点的数据结构，分别称为“左子树”和“右子树”。它是一切树形结构的基础，很多更复杂的数据结构都源自它。

我们可以将它想象成“家庭族谱图”或“组织架构图”：每个人最多有两个孩子，分别坐左边或右边。

## 1.遍历二叉树（Traversal）

**特点：**

遍历是访问二叉树所有节点的方式，包括前序（根-左-右）、中序（左-根-右）、后序（左-右-根）和层序遍历（逐层）。

**适用场景：**

打印树结构、重建树、序列化与反序列化等。

**举例：参观博物馆**

* 前序：先看展厅主题（根），再逛左翼展区（左），最后右翼展区（右）。
* 中序：先逛左翼，再看主题，最后右翼。
* 后序：左右展区逛完才看主题。
* 层序：按楼层从上到下逐层参观。

**对应题目：**

* [Leetcode 144 – Preorder Traversal](https://leetcode.cn/problems/binary-tree-preorder-traversal/)
* [Leetcode 94 – Inorder Traversal](https://leetcode.cn/problems/binary-tree-inorder-traversal/)
* [Leetcode 145 – Postorder Traversal](https://leetcode.cn/problems/binary-tree-postorder-traversal/)
* [Leetcode 102 – Level Order Traversal](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

## 2.自顶向下 DFS（Top-down DFS）

**特点：**

从根向下递归，参数沿递归传递，常用于路径类题目。

**适用场景：**

路径总和、路径个数、是否存在某种路径。

**举例：派送快递**

你是快递站站长（根），给下级分站（子节点）派送包裹（目标值），他们再向下分，直到包裹送到客户手中。

**对应题目：**

* [Leetcode 112 – Path Sum](https://leetcode.cn/problems/path-sum/)
* [Leetcode 113 – Path Sum II](https://leetcode.cn/problems/path-sum-ii/)

## 3.自底向上 DFS（Bottom-up DFS）

**特点：**

从叶子节点往上递归汇总，每层返回自己的结果供上层计算。

**适用场景：**

汇总信息类，如计算树高、判断平衡。

**举例：汇总班级成绩**

每个学生（叶子节点）提交成绩，班长（父节点）汇总后交给年级主任（根节点），最终生成全校成绩报告。

**对应题目：**

* [Leetcode 104 – Maximum Depth](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
* [Leetcode 110 – Balanced Binary Tree](https://leetcode.cn/problems/balanced-binary-tree/)

## 4.自底向上 DFS：删点（Pruning）

**特点：**

自底向上判断某节点是否应被删除，若其子树无用则返回 null。

**适用场景：**

剪枝类题目、精简树结构。

**举例：修剪果树**

你检查果树（树），发现某些枝条（子树）不结果（无用），就从下往上逐级剪掉无用枝条。

**对应题目：**

* [Leetcode 814 – Binary Tree Pruning](https://leetcode.cn/problems/binary-tree-pruning/)

## 5.有递有归（递归返回值）

**特点：**

函数既要传入参数（递），也要从子问题中返回值（归）进行计算。

**适用场景：**

最长路径、路径值比较等。

**举例：评选最长工作链**

每个员工（节点）汇报自己能串联的最长工作链（路径），经理（父节点）汇总后选出公司最优方案。

**对应题目：**

* [Leetcode 687 – Longest Univalue Path](https://leetcode.cn/problems/longest-univalue-path/)

## 6.二叉树直径（Diameter）

**特点：**

求任意两个节点之间的最长路径长度，常在后序遍历中更新最大值。

**适用场景：**

最长路径问题。

**举例：城市最远公交线路**

你想找出城市公交网络（树）中，从一个站点到另一个站点的最长线路（路径），不一定经过总站（根）。

**对应题目：**

* [Leetcode 543 – Diameter of Binary Tree](https://leetcode.cn/problems/diameter-of-binary-tree/)

## 7.回溯（Backtracking in Tree）

**特点：**

递归搜索所有路径，遇到不符合条件的路径就回退。

**适用场景：**

路径枚举、组合问题。

**举例：探险寻宝**

你在森林（树）探险，从入口（根）出发，尝试每条小路（路径），走到死路（叶子）就退回换条路继续。

**对应题目：**

* [Leetcode 257 – Binary Tree Paths](https://leetcode.cn/problems/binary-tree-paths/)

## 8.最近公共祖先（LCA）

**特点：**

找到两个节点最近的共同祖先，常用 DFS 判断左右子树是否包含目标。

**适用场景：**

求两个节点之间的最短连接点。

**举例：家族聚会找共同长辈**

你和表妹查家谱（树），找到你们最近的共同祖先（比如曾祖父），他是你们联系的“连接点”。

**对应题目：**

* [Leetcode 235 – LCA of BST](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)
* [Leetcode 236 – LCA of Binary Tree](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

## 9.二叉搜索树（BST）

**特点：**

左子树 < 根 < 右子树，中序遍历为升序序列。

**适用场景：**

查找、插入、删除高效。

**举例：超市货架排序**

超市货架（树）按商品价格排序，左边放便宜的（左子树），右边放贵的（右子树），找商品或摆新货都很快。

**对应题目：**

* [Leetcode 450 – Delete Node in BST](https://leetcode.cn/problems/delete-node-in-a-binary-search-tree/)
* [Leetcode 700 – Search in BST](https://leetcode.cn/problems/search-in-a-binary-search-tree/)
* [Leetcode 701 – Insert into BST](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

## 10.创建二叉树（Construct Tree）

**特点：**

从前序/中序/后序等遍历信息恢复整棵树。

**适用场景：**

树的重建、序列化与反序列化。

**举例：拼装乐高模型**

你根据说明书（遍历序列）拼装乐高（树），按步骤还原出完整的模型结构。

**对应题目：**

* [Leetcode 105 – Build Tree from Preorder + Inorder](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
* [Leetcode 106 – Build Tree from Inorder + Postorder](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

## 11.插入/删除节点（BST 操作）

**特点：**

插入递归定位空位，删除要分类处理：无子、有一个子、两个子。

**适用场景：**

动态更新 BST。

**举例：医院挂号系统**

新患者（节点）按病情轻重插入挂号队列（BST），退号（删除）时调整队列确保顺序不变。

**对应题目：**

* [Leetcode 450 – Delete Node in BST](https://leetcode.cn/problems/delete-node-in-a-binary-search-tree/)
* [Leetcode 701 – Insert into BST](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

## 12.树形 DP

**特点：**

将树作为图结构进行动态规划，自底向上合并状态。

**适用场景：**

最大值、最小值、选择与不选问题（如打家劫舍）。

**举例：公司利润优化**

每个部门（节点）上报最佳盈利方案，逐级汇总，CEO（根）选出公司整体最优策略。

**对应题目：**

* [Leetcode 124 – Binary Tree Maximum Path Sum](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)
* [Leetcode 337 – House Robber III](https://leetcode.cn/problems/house-robber-iii/)

## 13.二叉树 BFS（层序遍历）

**特点：**

逐层访问节点，用队列实现，常用于层级分析。

**适用场景：**

求最短路径、最小深度、逐层统计等。

**举例：学校分层通知**

校长（根）通知各年级主任（子节点），他们再通知班主任（下层），一层一层向下传达。

**对应题目：**

* [Leetcode 102 – Level Order Traversal](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
* [Leetcode 111 – Minimum Depth](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

## 14.链表 + 二叉树

**特点：**

链表转成 BST，或者链表路径在树中查找。

**适用场景：**

结构转换、匹配。

**举例：火车车厢重组**

一列火车车厢（链表）按顺序重新挂到铁路网（BST）上，或检查某段车厢序列是否出现在铁路网中。

**对应题目：**

* [Leetcode 109 – Convert Sorted List to BST](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/)
* [Leetcode 1367 – Linked List in Binary Tree](https://leetcode.cn/problems/linked-list-in-binary-tree/)

## 15.N 叉树

**特点：**

节点有多个子节点，遍历逻辑类似二叉树但更一般化。

**适用场景：**

公司架构、文件系统等。

**举例：家族多人聚会**

爷爷（根）有多个儿女（子节点），每个儿女又有多个孩子，家族聚会按层级组织。

**对应题目：**

* [Leetcode 589 – N-ary Tree Preorder Traversal](https://leetcode.cn/problems/n-ary-tree-preorder-traversal/)
* [Leetcode 590 – N-ary Tree Postorder Traversal](https://leetcode.cn/problems/n-ary-tree-postorder-traversal/)

## 16.其他

**特点：**

变形题，如合并、翻转、构造最大树。

**适用场景：**

树操作的变体。

**举例：装修房子换布局**

你把房子（树）的房间左右对调（翻转），或把两栋房子合并（合并），或按优先级建新房（最大树）。

**对应题目：**

* [Leetcode 226 – Invert Binary Tree](https://leetcode.cn/problems/invert-binary-tree/)
* [Leetcode 617 – Merge Trees](https://leetcode.cn/problems/merge-two-binary-trees/)
* [Leetcode 654 – Maximum Binary Tree](https://leetcode.cn/problems/maximum-binary-tree/)
