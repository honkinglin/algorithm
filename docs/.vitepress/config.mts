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

    sidebar: [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '什么是算法？', link: '/' },
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
          { text: '1004.最大连续1的个数 III', link: '/sliding-window/1004.md' },
          { text: '1343.大小为 K 且平均值大于等于阈值的子数组数目', link: '/sliding-window/1343.md' },
          { text: '1456.定长子串中元音的最大数目', link: '/sliding-window/1456.md' },
          { text: '1493.删掉一个元素以后全为 1 的最长子数组', link: '/sliding-window/1493.md' },
          { text: '2379.得到 K 个黑块的最少涂色次数', link: '/sliding-window/2379.md' },
          { text: '2730.找到最长的半重复子字符串', link: '/sliding-window/2730.md' },
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
          { text: '2559.统计范围内的元音字符串数', link: '/prefix-sum/2559.md' },
        ]
      },
      {
        text: '二分搜索',
        collapsed: true,
        items: [
          { text: '什么是二分搜索？', link: '/binary-search/index.md' },
          { text: '34.在排序数组中查找元素的第一个和最后一个位置', link: '/binary-search/34.md' },
          { text: '704.二分查找', link: '/binary-search/704.md' },
          { text: '875.爱吃香蕉的珂珂', link: '/binary-search/875.md' },
        ]
      },
      {
        text: '栈',
        collapsed: true,
        items: [
          { text: '什么是栈？', link: '/stack/index.md' },
          { text: '227.基本计算器 II', link: '/stack/227.md' },
          { text: '844.比较含退格的字符串', link: '/stack/844.md' },
          { text: '1441.用栈操作构建数组', link: '/stack/1441.md' },
          { text: '2390.从字符串中移除星号', link: '/stack/2390.md' },
          { text: '2696.删除子串后的字符串最小长度', link: '/stack/2696.md' },
        ]
      },
      {
        text: '链表',
        collapsed: true,
        items: [
          { text: '什么是链表？', link: '/linked-list/index.md' },
          { text: '203.移除链表元素', link: '/linked-list/203.md' },
          { text: '206.反转链表', link: '/linked-list/206.md' },
          { text: '328.奇偶链表', link: '/linked-list/328.md' },
          { text: '1290.二进制链表转整数', link: '/linked-list/1290.md' },
        ]
      },
      {
        text: '二叉树',
        collapsed: true,
        items: [
          { text: '什么是二叉树？', link: '/binary-tree/index.md' },
          { text: '94.二叉树的中序遍历', link: '/binary-tree/94.md' },
          { text: '102.二叉树的层序遍历', link: '/binary-tree/102.md' },
          { text: '104.二叉树的最大深度', link: '/binary-tree/104.md' },
          { text: '111.二叉树的最小深度', link: '/binary-tree/111.md' },
          { text: '112.路径总和', link: '/binary-tree/112.md' },
          { text: '113.路径总和 II', link: '/binary-tree/113.md' },
          { text: '144.二叉树的前序遍历', link: '/binary-tree/144.md' },
          { text: '145.二叉树的后序遍历', link: '/binary-tree/145.md' },
          { text: '257.二叉树的所有路径', link: '/binary-tree/257.md' },
        ]
      },
      {
        text: '回溯',
        collapsed: true,
        items: [
          { text: '什么是回溯？', link: '/backtrack/index.md' },
          { text: '17.电话号码的字母组合', link: '/backtrack/17.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/honkinglin/algorithm' }
    ]
  }
})
