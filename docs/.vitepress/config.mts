import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "算法学习",
  description: "记录算法学习的点滴",
  base: '/algorithm',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/algorithm/favicon.ico' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/honkinglin/algorithm/edit/main/docs/:path'
    },

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '什么是算法？', link: '/' },
        ]
      },
      {
        text: '双指针',
        collapsed: true,
        items: [
          { text: '什么是双指针？', link: '/two-pointer/index.md' },
          { text: '11.盛最多水的容器', link: '/two-pointer/11.md' },
          { text: '15.三数之和', link: '/two-pointer/15.md' },
          { text: '16.最接近的三数之和', link: '/two-pointer/16.md' },
          { text: '18.四数之和', link: '/two-pointer/18.md' },
          { text: '27.移除元素', link: '/two-pointer/27.md' },
          { text: '42.接雨水', link: '/two-pointer/42.md' },
          { text: '125.验证回文串', link: '/two-pointer/125.md' },
          { text: '167.两数之和 II - 输入有序数组', link: '/two-pointer/167.md' },
          { text: '344.反转字符串', link: '/two-pointer/344.md' },
          { text: '611.有效三角形的个数', link: '/two-pointer/611.md' },
          { text: '658.找到 K 个最接近的元素', link: '/two-pointer/658.md' },
          { text: '1471.数组中的 k 个最强值', link: '/two-pointer/1471.md' },
          { text: '1750.删除字符串两端相同字符后的最短长度', link: '/two-pointer/1750.md' },
        ]
      },
      {
        text: '滑动窗口',
        collapsed: true,
        items: [
          { text: '什么是滑动窗口？', link: '/sliding-window/index.md' },
          { text: '3.无重复字符的最长子串', link: '/sliding-window/3.md' },
          { text: '209.长度最小的子数组', link: '/sliding-window/209.md' },
          { text: '567.字符串的排列', link: '/sliding-window/567.md' },
          { text: '643.子数组最大平均数', link: '/sliding-window/643.md' },
          { text: '713.乘积小于 K 的子数组', link: '/sliding-window/713.md' },
          { text: '1004.最大连续1的个数 III', link: '/sliding-window/1004.md' },
          { text: '1208.尽可能使字符串相等', link: '/sliding-window/1208.md' },
          { text: '1343.大小为 K 且平均值大于等于阈值的子数组数目', link: '/sliding-window/1343.md' },
          { text: '1358.包含所有三种字符的子字符串数目', link: '/sliding-window/1358.md' },
          { text: '1423.可获得的最大点数', link: '/sliding-window/1423.md' },
          { text: '1456.定长子串中元音的最大数目', link: '/sliding-window/1456.md' },
          { text: '1493.删掉一个元素以后全为 1 的最长子数组', link: '/sliding-window/1493.md' },
          { text: '2090.半径为 k 的子数组平均值', link: '/sliding-window/2090.md' },
          { text: '2379.得到 K 个黑块的最少涂色次数', link: '/sliding-window/2379.md' },
          { text: '2730.找到最长的半重复子字符串', link: '/sliding-window/2730.md' },
          { text: '2841.几乎唯一子数组的最大和', link: '/sliding-window/2841.md' },
          { text: '3090.每个字符最多出现两次的最长子字符串', link: '/sliding-window/3090.md' },
        ]
      },
      {
        text: '前缀和',
        collapsed: true,
        items: [
          { text: '什么是前缀和？', link: '/prefix-sum/index.md' },
          { text: '303.区域和检索 - 数组不可变', link: '/prefix-sum/303.md' },
          { text: '560.和为 K 的子数组', link: '/prefix-sum/560.md' },
          { text: '930.和相同的二元子数组', link: '/prefix-sum/930.md' },
          { text: '974.和可被 K 整除的子数组', link: '/prefix-sum/974.md' },
          { text: '1524.和为奇数的子数组数目', link: '/prefix-sum/1524.md' },
          { text: '2559.统计范围内的元音字符串数', link: '/prefix-sum/2559.md' },
        ]
      },
      {
        text: '差分',
        collapsed: true,
        items: [
          { text: '什么是差分？', link: '/difference-array/index.md' },
          { text: '1094.拼车', link: '/difference-array/1094.md' },
          { text: '2848.与车相交的点', link: '/difference-array/2848.md' },
        ]
      },
      {
        text: '二分搜索',
        collapsed: true,
        items: [
          { text: '什么是二分搜索？', link: '/binary-search/index.md' },
          { text: '34.在排序数组中查找元素的第一个和最后一个位置', link: '/binary-search/34.md' },
          { text: '35.搜索插入位置', link: '/binary-search/35.md' },
          { text: '162.寻找峰值', link: '/binary-search/162.md' },
          { text: '275.H 指数 II', link: '/binary-search/275.md' },
          { text: '658.找到 K 个最接近的元素', link: '/binary-search/658.md' },
          { text: '704.二分查找', link: '/binary-search/704.md' },
          { text: '744.寻找比目标字母大的最小字母', link: '/binary-search/744.md' },
          { text: '875.爱吃香蕉的珂珂', link: '/binary-search/875.md' },
          { text: '1011.在 D 天内送达包裹的能力', link: '/binary-search/1011.md' },
          { text: '1283.使结果不超过阈值的最小除数', link: '/binary-search/1283.md' },
          { text: '1385.两个数组间的距离值', link: '/binary-search/1385.md' },
          { text: '1760.袋子里最少数目的球', link: '/binary-search/1760.md' },
          { text: '2187.完成旅途的最少时间', link: '/binary-search/2187.md' },
          { text: '2226.每个小孩最多能分到多少糖果', link: '/binary-search/2226.md' },
          { text: '2300.咒语和药水的成功对数', link: '/binary-search/2300.md' },
          { text: '2389.和有限的最长子序列', link: '/binary-search/2389.md' },
          { text: '2529.正整数和负整数的最大计数', link: '/binary-search/2529.md' },
          { text: '2594.修车的最少时间', link: '/binary-search/2594.md' },
        ]
      },
      {
        text: '栈',
        collapsed: true,
        items: [
          { text: '什么是栈？', link: '/stack/index.md' },
          { text: '20.有效的括号', link: '/stack/20.md' },
          { text: '150.逆波兰表达式求值', link: '/stack/150.md' },
          { text: '227.基本计算器 II', link: '/stack/227.md' },
          { text: '394.字符串解码', link: '/stack/394.md' },
          { text: '735.小行星碰撞', link: '/stack/735.md' },
          { text: '844.比较含退格的字符串', link: '/stack/844.md' },
          { text: '921.使括号有效的最少添加', link: '/stack/921.md' },
          { text: '1006.笨阶乘', link: '/stack/1006.md' },
          { text: '1047.删除字符串中的所有相邻重复项', link: '/stack/1047.md' },
          { text: '1441.用栈操作构建数组', link: '/stack/1441.md' },
          { text: '2390.从字符串中移除星号', link: '/stack/2390.md' },
          { text: '2696.删除子串后的字符串最小长度', link: '/stack/2696.md' },
        ]
      },
      {
        text: '队列',
        collapsed: true,
        items: [
          { text: '什么是队列？', link: '/queue/index.md' },
          { text: '933.最近的请求次数', link: '/queue/933.md' },
          { text: '950.按递增顺序显示卡牌', link: '/queue/950.md' },
        ]
      },
      {
        text: '链表',
        collapsed: true,
        items: [
          { text: '什么是链表？', link: '/linked-list/index.md' },
          { text: '147.对链表进行插入排序', link: '/linked-list/147.md' },
          { text: '203.移除链表元素', link: '/linked-list/203.md' },
          { text: '206.反转链表', link: '/linked-list/206.md' },
          { text: '328.奇偶链表', link: '/linked-list/328.md' },
          { text: '1290.二进制链表转整数', link: '/linked-list/1290.md' },
          { text: '2058.找出临界点之间的最小和最大距离', link: '/linked-list/2058.md' },
        ]
      },
      {
        text: '二叉树',
        collapsed: true,
        items: [
          { text: '什么是二叉树？', link: '/binary-tree/index.md' },
          { text: '94.二叉树的中序遍历', link: '/binary-tree/94.md' },
          { text: '98.验证二叉搜索树', link: '/binary-tree/98.md' },
          { text: '100.相同的树 ', link: '/binary-tree/100.md' },
          { text: '101.对称二叉树', link: '/binary-tree/101.md' },
          { text: '102.二叉树的层序遍历', link: '/binary-tree/102.md' },
          { text: '103.二叉树的锯齿形层序遍历', link: '/binary-tree/103.md' },
          { text: '104.二叉树的最大深度', link: '/binary-tree/104.md' },
          { text: '110.平衡二叉树', link: '/binary-tree/110.md' },
          { text: '111.二叉树的最小深度', link: '/binary-tree/111.md' },
          { text: '112.路径总和', link: '/binary-tree/112.md' },
          { text: '113.路径总和 II', link: '/binary-tree/113.md' },
          { text: '129.求根节点到叶节点数字之和', link: '/binary-tree/129.md' },
          { text: '144.二叉树的前序遍历', link: '/binary-tree/144.md' },
          { text: '145.二叉树的后序遍历', link: '/binary-tree/145.md' },
          { text: '199.二叉树的右视图', link: '/binary-tree/199.md' },
          { text: '235.二叉搜索树的最近公共祖先', link: '/binary-tree/235.md' },
          { text: '236.二叉树的最近公共祖先', link: '/binary-tree/236.md' },
          { text: '257.二叉树的所有路径', link: '/binary-tree/257.md' },
          { text: '404.左叶子之和', link: '/binary-tree/404.md' },
          { text: '530.二叉搜索树的最小绝对差', link: '/binary-tree/530.md' },
          { text: '538.把二叉搜索树转换为累加树', link: '/binary-tree/538.md' },
          { text: '671.二叉树中第二小的节点', link: '/binary-tree/671.md' },
          { text: '700.二叉搜索树中的搜索', link: '/binary-tree/700.md' },
          { text: '814.二叉树剪枝', link: '/binary-tree/814.md' },
          { text: '865.具有所有最深节点的最小子树', link: '/binary-tree/865.md' },
          { text: '872.叶子相似的树', link: '/binary-tree/872.md' },
          { text: '951.翻转等价二叉树', link: '/binary-tree/951.md' },
          { text: '965.单值二叉树', link: '/binary-tree/965.md' },
          { text: '988.从叶结点开始的最小字符串', link: '/binary-tree/988.md' },
          { text: '1110.删点成林', link: '/binary-tree/1110.md' },
          { text: '1315.祖父节点值为偶数的节点和', link: '/binary-tree/1315.md' },
          { text: '1325.删除给定值的叶子节点', link: '/binary-tree/1325.md' },
          { text: '1379.找出克隆二叉树中的相同节点', link: '/binary-tree/1379.md' },
          { text: '1448.统计二叉树中好节点的数目', link: '/binary-tree/1448.md' },
          { text: '1457.二叉树中的伪回文路径', link: '/binary-tree/1457.md' },
        ]
      },
      {
        text: '网格图',
        collapsed: true,
        items: [
          { text: '什么是网格图？', link: '/grid-graph/index.md' },
        ]
      },
      {
        text: '回溯',
        collapsed: true,
        items: [
          { text: '什么是回溯？', link: '/backtrack/index.md' },
          { text: '17.电话号码的字母组合', link: '/backtrack/17.md' },
          { text: '22.括号生成', link: '/backtrack/22.md' },
          { text: '46.全排列', link: '/backtrack/46.md' },
          { text: '77.组合', link: '/backtrack/77.md' },
          { text: '78.子集', link: '/backtrack/78.md' },
          { text: '131.分割回文串', link: '/backtrack/131.md' },
          { text: '216.组合总和 III', link: '/backtrack/216.md' },
        ]
      },
      {
        text: '动态规划',
        collapsed: true,
        items: [
          { text: '什么是动态规划？', link: '/dynamic-programming/index.md' },
          { text: '70.爬楼梯', link: '/dynamic-programming/70.md' },
          { text: '198.打家劫舍', link: '/dynamic-programming/198.md' },
          { text: '322.零钱兑换', link: '/dynamic-programming/322.md' },
          { text: '377.组合总和 Ⅳ', link: '/dynamic-programming/377.md' },
          { text: '494.目标和', link: '/dynamic-programming/494.md' },
          { text: '746.使用最小花费爬楼梯', link: '/dynamic-programming/746.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/honkinglin/algorithm' }
    ]
  }
})
