# 什么是差分？

差分是一种高效修改数组（或矩阵）区间的技巧，它通过构建一个记录“变化量”的数组，在 **常数时间 `O(1)` 内完成区间修改操作**。修改完毕后，通过一遍前缀和即可还原出最终数组状态。

差分也可以类比为“前缀和的逆操作”：**差分是记录“变化”，前缀和是恢复“累积”。**

## 1. 一维差分（1D Difference Array）

**特点：**

构建一个 `diff` 数组，使得：

```python
diff[0] = nums[0]
diff[i] = nums[i] - nums[i - 1]  （i > 0）
```

对区间 `[l, r]` 加上 `k` 的操作只需：

```python
diff[l] += k
diff[r + 1] -= k  # 注意边界判断
```

最后通过对差分数组求前缀和，恢复最终数组。

```python
# 我们先对 diff 数组做前缀和，就可以还原出原数组 nums 的最终状态
nums = [0] * len(diff)
nums[0] = diff[0]

for i in range(1, len(diff)):
  nums[i] = nums[i - 1] + diff[i]
```

**适用场景：**

* 多次区间加法（修改）
* 不关心中间状态，只关心最终数组

**举例：活动日程系统——快速批量安排日期**

你做了个会议系统，客户说：

「我要在第 3 天到第 7 天，每天安排 1 场活动」

你只在 `diff[3] += 1`、`diff[8] -= 1` 两处做标记，表示从第 3 天开始增加，从第 8 天开始减少。

最后统一做前缀和，就能知道每一天安排了几场活动。

**对应题目：**

* [Leetcode 1094 – Car Pooling](https://leetcode.com/problems/car-pooling/)
* [Leetcode 1109 – Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)

## 2. 二维差分（2D Difference Array）

**特点：**

构建一个二维 `diff[i][j]` 数组，记录矩形区域的变化量。

对一个子矩阵 `[x1, y1] ~ [x2, y2]` 加上 `k` 的方法是：

```python
diff[x1][y1] += k
diff[x2 + 1][y1] -= k
diff[x1][y2 + 1] -= k
diff[x2 + 1][y2 + 1] += k
```

再通过二维前缀和还原矩阵即可。

二维差分的还原过程是二维前缀和，注意计算顺序：先行后列 或 先列后行都可以，关键是不要漏加

```python
# 假设 diff 是 m x n 的二维差分矩阵
# 还原出结果矩阵 result

for i in range(m):
    for j in range(n):
        if i > 0:
            diff[i][j] += diff[i - 1][j]
        if j > 0:
            diff[i][j] += diff[i][j - 1]
        if i > 0 and j > 0:
            diff[i][j] -= diff[i - 1][j - 1]

# 现在 diff 就是原始矩阵 result
```

**适用场景：**

* 热力图、区域修改、图像变换
* 子矩阵加法

**举例：地图编辑器——一次性修改一个区域热度值**

你开发了一个城市模拟器，玩家选择一个区域说：

「我要把第 10 行到第 20 行，第 5 列到第 15 列加上 3 分热度」

你只在差分矩阵四个角打上正负标记，最后统一还原全图。

**对应题目：**

* [Leetcode 850 – Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
* [Leetcode 2132 – Stamping the Grid](https://leetcode.com/problems/stamping-the-grid/)
* [Leetcode 2536 – Increment Submatrices by One](https://leetcode.com/problems/increment-submatrices-by-one/)

## 3. 差分 + 扫描线（Difference + Sweep Line）

**特点：**

通过“开始点 +1，结束点 -1”记录变化点，结合前缀和或排序，解决区间重叠、时间段覆盖等问题。

**适用场景：**

* 活动重叠检测
* 区间并集、最大重叠点
* 时间段查询（人最多的一年）

**举例：人口普查系统——找出哪一年人口最多**

你开发了一个人口分析工具，每个人的出生和死亡年份都是一个区间。

你用差分记录：出生年份 +1，死亡年份 +1 处 -1

最后通过年份轴做前缀和，轻松得到哪一年人口最多。

**对应题目：**

* [Leetcode 732 – My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
* [Leetcode 1854 – Maximum Population Year](https://leetcode.com/problems/maximum-population-year/)
* [Leetcode 2251 – Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
