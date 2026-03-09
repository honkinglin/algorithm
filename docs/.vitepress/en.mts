export const en = {
  label: 'English',
  lang: 'en',
  title: "Algorithm Learning",
  description: "Record my algorithm learning",
  themeConfig: {
    editLink: {
      text: 'Edit this page on GitHub',
      pattern: 'https://github.com/honkinglin/algorithm/edit/main/docs/:path'
    },
    sidebar: [
{
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is an Algorithm?', link: '/en/' },
        ]
      },
      {
        text: 'Two Pointers',
        collapsed: true,
        items: [
          { text: 'What are Two Pointers?', link: '/en/two-pointer/index.md' },
          { text: '11. Container With Most Water', link: '/en/two-pointer/11.md' },
          { text: '15. 3Sum', link: '/en/two-pointer/15.md' },
          { text: '16. 3Sum Closest', link: '/en/two-pointer/16.md' },
          { text: '18. 4Sum', link: '/en/two-pointer/18.md' },
          { text: '27. Remove Element', link: '/en/two-pointer/27.md' },
          { text: '42. Trapping Rain Water', link: '/en/two-pointer/42.md' },
          { text: '125. Valid Palindrome', link: '/en/two-pointer/125.md' },
          { text: '167. Two Sum II - Input Array Is Sorted', link: '/en/two-pointer/167.md' },
          { text: '202. Happy Number', link: '/en/two-pointer/202.md' },
          { text: '219. Contains Duplicate II', link: '/en/two-pointer/219.md' },
          { text: '283. Move Zeroes', link: '/en/two-pointer/283.md' },
          { text: '344. Reverse String', link: '/en/two-pointer/344.md' },
          { text: '392. Is Subsequence', link: '/en/two-pointer/392.md' },
          { text: '611. Valid Triangle Number', link: '/en/two-pointer/611.md' },
          { text: '658. Find K Closest Elements', link: '/en/two-pointer/658.md' },
          { text: '1471. The k Strongest Values in an Array', link: '/en/two-pointer/1471.md' },
          { text: '1750. Minimum Length of String After Deleting Similar Ends', link: '/en/two-pointer/1750.md' },
        ]
      },
      {
        text: 'Hash Table',
        collapsed: true,
        items: [
          { text: '49. Group Anagrams', link: '/en/hash-table/49.md' },
          { text: '205. Isomorphic Strings', link: '/en/hash-table/205.md' },
          { text: '290. Word Pattern', link: '/en/hash-table/290.md' },
          { text: '383. Ransom Note', link: '/en/hash-table/383.md' },
          { text: '1010. Pairs of Songs With Total Durations Divisible by 60', link: '/en/hash-table/1010.md' },
          { text: '1128. Number of Equivalent Domino Pairs', link: '/en/hash-table/1128.md' },
          { text: '1207. Unique Number of Occurrences', link: '/en/hash-table/1207.md' },
          { text: '2215. Find the Difference of Two Arrays', link: '/en/hash-table/2215.md' },
          { text: '2815. Max Pair Sum in an Array', link: '/en/hash-table/2815.md' },
        ]
      },
      {
        text: 'Sliding Window',
        collapsed: true,
        items: [
          { text: 'What is Sliding Window?', link: '/en/sliding-window/index.md' },
          { text: '3. Longest Substring Without Repeating Characters', link: '/en/sliding-window/3.md' },
          { text: '209. Minimum Size Subarray Sum', link: '/en/sliding-window/209.md' },
          { text: '567. Permutation in String', link: '/en/sliding-window/567.md' },
          { text: '643. Maximum Average Subarray I', link: '/en/sliding-window/643.md' },
          { text: '713. Subarray Product Less Than K', link: '/en/sliding-window/713.md' },
          { text: '1004. Max Consecutive Ones III', link: '/en/sliding-window/1004.md' },
          { text: '1208. Get Equal Substrings Within Budget', link: '/en/sliding-window/1208.md' },
          { text: '1234. Replace the Substring for Balanced String', link: '/en/sliding-window/1234.md' },
          { text: '1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold', link: '/en/sliding-window/1343.md' },
          { text: '1358. Number of Substrings Containing All Three Characters', link: '/en/sliding-window/1358.md' },
          { text: '1423. Maximum Points You Can Obtain from Cards', link: '/en/sliding-window/1423.md' },
          { text: '1456. Maximum Number of Vowels in a Substring of Given Length', link: '/en/sliding-window/1456.md' },
          { text: '1493. Longest Subarray of 1\'s After Deleting One Element', link: '/en/sliding-window/1493.md' },
          { text: '1658. Minimum Operations to Reduce X to Zero', link: '/en/sliding-window/1658.md' },
          { text: '1679. Max Number of K-Sum Pairs', link: '/en/sliding-window/1679.md' },
          { text: '2090. K Radius Subarray Averages', link: '/en/sliding-window/2090.md' },
          { text: '2379. Minimum Recolors to Get K Consecutive Black Blocks', link: '/en/sliding-window/2379.md' },
          { text: '2730. Find the Longest Semi-Repetitive Substring', link: '/en/sliding-window/2730.md' },
          { text: '2841. Maximum Sum of Almost Unique Subarray', link: '/en/sliding-window/2841.md' },
          { text: '3090. Maximum Length Substring With Two Occurrences', link: '/en/sliding-window/3090.md' },
        ]
      },
      {
        text: 'Prefix Sum',
        collapsed: true,
        items: [
          { text: 'What is Prefix Sum?', link: '/en/prefix-sum/index.md' },
          { text: '238. Product of Array Except Self', link: '/en/prefix-sum/238.md' },
          { text: '303. Range Sum Query - Immutable', link: '/en/prefix-sum/303.md' },
          { text: '560. Subarray Sum Equals K', link: '/en/prefix-sum/560.md' },
          { text: '724. Find Pivot Index', link: '/en/prefix-sum/724.md' },
          { text: '930. Binary Subarrays With Sum', link: '/en/prefix-sum/930.md' },
          { text: '974. Subarray Sums Divisible by K', link: '/en/prefix-sum/974.md' },
          { text: '1524. Number of Sub-arrays With Odd Sum', link: '/en/prefix-sum/1524.md' },
          { text: '1732. Find the Highest Altitude', link: '/en/prefix-sum/1732.md' },
          { text: '2055. Plates Between Candles', link: '/en/prefix-sum/2055.md' },
          { text: '2559. Count Vowel Strings in Ranges', link: '/en/prefix-sum/2559.md' },
        ]
      },
      {
        text: 'Difference Array',
        collapsed: true,
        items: [
          { text: 'What is Difference Array?', link: '/en/difference-array/index.md' },
          { text: '1094. Car Pooling', link: '/en/difference-array/1094.md' },
          { text: '2848. Points That Intersect With Cars', link: '/en/difference-array/2848.md' },
        ]
      },
      {
        text: 'Binary Search',
        collapsed: true,
        items: [
          { text: 'What is Binary Search?', link: '/en/binary-search/index.md' },
          { text: '34. Find First and Last Position of Element in Sorted Array', link: '/en/binary-search/34.md' },
          { text: '35. Search Insert Position', link: '/en/binary-search/35.md' },
          { text: '162. Find Peak Element', link: '/en/binary-search/162.md' },
          { text: '275. H-Index II', link: '/en/binary-search/275.md' },
          { text: '374. Guess Number Higher or Lower', link: '/en/binary-search/374.md' },
          { text: '658. Find K Closest Elements', link: '/en/binary-search/658.md' },
          { text: '704. Binary Search', link: '/en/binary-search/704.md' },
          { text: '744. Find Smallest Letter Greater Than Target', link: '/en/binary-search/744.md' },
          { text: '875. Koko Eating Bananas', link: '/en/binary-search/875.md' },
          { text: '1011. Capacity To Ship Packages Within D Days', link: '/en/binary-search/1011.md' },
          { text: '1283. Find the Smallest Divisor Given a Threshold', link: '/en/binary-search/1283.md' },
          { text: '1385. Find the Distance Value Between Two Arrays', link: '/en/binary-search/1385.md' },
          { text: '1760. Minimum Limit of Balls in a Bag', link: '/en/binary-search/1760.md' },
          { text: '2187. Minimum Time to Complete Trips', link: '/en/binary-search/2187.md' },
          { text: '2226. Maximum Candies Allocated to K Children', link: '/en/binary-search/2226.md' },
          { text: '2300. Successful Pairs of Spells and Potions', link: '/en/binary-search/2300.md' },
          { text: '2389. Longest Subsequence With Limited Sum', link: '/en/binary-search/2389.md' },
          { text: '2529. Maximum Count of Positive Integer and Negative Integer', link: '/en/binary-search/2529.md' },
          { text: '2594. Minimum Time to Repair Cars', link: '/en/binary-search/2594.md' },
        ]
      },
      {
        text: 'Stack',
        collapsed: true,
        items: [
          { text: 'What is a Stack?', link: '/en/stack/index.md' },
          { text: '20. Valid Parentheses', link: '/en/stack/20.md' },
          { text: '71. Simplify Path', link: '/en/stack/71.md' },
          { text: '150. Evaluate Reverse Polish Notation', link: '/en/stack/150.md' },
          { text: '227. Basic Calculator II', link: '/en/stack/227.md' },
          { text: '394. Decode String', link: '/en/stack/394.md' },
          { text: '735. Asteroid Collision', link: '/en/stack/735.md' },
          { text: '739. Daily Temperatures', link: '/en/stack/739.md' },
          { text: '844. Backspace String Compare', link: '/en/stack/844.md' },
          { text: '921. Minimum Add to Make Parentheses Valid', link: '/en/stack/921.md' },
          { text: '1006. Clumsy Factorial', link: '/en/stack/1006.md' },
          { text: '1047. Remove All Adjacent Duplicates In String', link: '/en/stack/1047.md' },
          { text: '1441. Build an Array With Stack Operations', link: '/en/stack/1441.md' },
          { text: '2390. Removing Stars From a String', link: '/en/stack/2390.md' },
          { text: '2696. Minimum String Length After Removing Substrings', link: '/en/stack/2696.md' },
        ]
      },
      {
        text: 'Queue',
        collapsed: true,
        items: [
          { text: 'What is a Queue?', link: '/en/queue/index.md' },
          { text: '933. Number of Recent Calls', link: '/en/queue/933.md' },
          { text: '950. Reveal Cards In Increasing Order', link: '/en/queue/950.md' },
        ]
      },
      {
        text: 'Linked List',
        collapsed: true,
        items: [
          { text: 'What is a Linked List?', link: '/en/linked-list/index.md' },
          { text: '2. Add Two Numbers', link: '/en/linked-list/2.md' },
          { text: '82. Remove Duplicates from Sorted List II', link: '/en/linked-list/82.md' },
          { text: '83. Remove Duplicates from Sorted List', link: '/en/linked-list/83.md' },
          { text: '92. Reverse Linked List II', link: '/en/linked-list/92.md' },
          { text: '143. Reorder List', link: '/en/linked-list/143.md' },
          { text: '146. LRU Cache', link: '/en/linked-list/146.md' },
          { text: '147. Insertion Sort List', link: '/en/linked-list/147.md' },
          { text: '203. Remove Linked List Elements', link: '/en/linked-list/203.md' },
          { text: '206. Reverse Linked List', link: '/en/linked-list/206.md' },
          { text: '234. Palindrome Linked List', link: '/en/linked-list/234.md' },
          { text: '328. Odd Even Linked List', link: '/en/linked-list/328.md' },
          { text: '445. Add Two Numbers II', link: '/en/linked-list/445.md' },
          { text: '1019. Next Greater Node In Linked List', link: '/en/linked-list/1019.md' },
          { text: '1290. Convert Binary Number in a Linked List to Integer', link: '/en/linked-list/1290.md' },
          { text: '2058. Find the Minimum and Maximum Number of Nodes Between Critical Points', link: '/en/linked-list/2058.md' },
          { text: '2095. Delete the Middle Node of a Linked List', link: '/en/linked-list/2095.md' },
        ]
      },
      {
        text: 'Binary Tree',
        collapsed: true,
        items: [
          { text: 'What is a Binary Tree?', link: '/en/binary-tree/index.md' },
          { text: '94. Binary Tree Inorder Traversal', link: '/en/binary-tree/94.md' },
          { text: '98. Validate Binary Search Tree', link: '/en/binary-tree/98.md' },
          { text: '100. Same Tree', link: '/en/binary-tree/100.md' },
          { text: '101. Symmetric Tree', link: '/en/binary-tree/101.md' },
          { text: '102. Binary Tree Level Order Traversal', link: '/en/binary-tree/102.md' },
          { text: '103. Binary Tree Zigzag Level Order Traversal', link: '/en/binary-tree/103.md' },
          { text: '104. Maximum Depth of Binary Tree', link: '/en/binary-tree/104.md' },
          { text: '108. Convert Sorted Array to Binary Search Tree', link: '/en/binary-tree/108.md' },
          { text: '110. Balanced Binary Tree', link: '/en/binary-tree/110.md' },
          { text: '111. Minimum Depth of Binary Tree', link: '/en/binary-tree/111.md' },
          { text: '112. Path Sum', link: '/en/binary-tree/112.md' },
          { text: '113. Path Sum II', link: '/en/binary-tree/113.md' },
          { text: '129. Sum Root to Leaf Numbers', link: '/en/binary-tree/129.md' },
          { text: '144. Binary Tree Preorder Traversal', link: '/en/binary-tree/144.md' },
          { text: '145. Binary Tree Postorder Traversal', link: '/en/binary-tree/145.md' },
          { text: '199. Binary Tree Right Side View', link: '/en/binary-tree/199.md' },
          { text: '222. Count Complete Tree Nodes', link: '/en/binary-tree/222.md' },
          { text: '226. Invert Binary Tree', link: '/en/binary-tree/226.md' },
          { text: '235. Lowest Common Ancestor of a Binary Search Tree', link: '/en/binary-tree/235.md' },
          { text: '236. Lowest Common Ancestor of a Binary Tree', link: '/en/binary-tree/236.md' },
          { text: '257. Binary Tree Paths', link: '/en/binary-tree/257.md' },
          { text: '404. Sum of Left Leaves', link: '/en/binary-tree/404.md' },
          { text: '437. Path Sum III', link: '/en/binary-tree/437.md' },
          { text: '450. Delete Node in a BST', link: '/en/binary-tree/450.md' },
          { text: '530. Minimum Absolute Difference in BST', link: '/en/binary-tree/530.md' },
          { text: '538. Convert BST to Greater Tree', link: '/en/binary-tree/538.md' },
          { text: '671. Second Minimum Node In a Binary Tree', link: '/en/binary-tree/671.md' },
          { text: '700. Search in a Binary Search Tree', link: '/en/binary-tree/700.md' },
          { text: '814. Binary Tree Pruning', link: '/en/binary-tree/814.md' },
          { text: '865. Smallest Subtree with all the Deepest Nodes', link: '/en/binary-tree/865.md' },
          { text: '872. Leaf-Similar Trees', link: '/en/binary-tree/872.md' },
          { text: '951. Flip Equivalent Binary Trees', link: '/en/binary-tree/951.md' },
          { text: '965. Univalued Binary Tree', link: '/en/binary-tree/965.md' },
          { text: '988. Smallest String Starting From Leaf', link: '/en/binary-tree/988.md' },
          { text: '1110. Delete Nodes And Return Forest', link: '/en/binary-tree/1110.md' },
          { text: '1161. Maximum Level Sum of a Binary Tree', link: '/en/binary-tree/1161.md' },
          { text: '1315. Sum of Nodes with Even-Valued Grandparent', link: '/en/binary-tree/1315.md' },
          { text: '1325. Delete Leaves With a Given Value', link: '/en/binary-tree/1325.md' },
          { text: '1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree', link: '/en/binary-tree/1379.md' },
          { text: '1448. Count Good Nodes in Binary Tree', link: '/en/binary-tree/1448.md' },
          { text: '1457. Pseudo-Palindromic Paths in a Binary Tree', link: '/en/binary-tree/1457.md' },
        ]
      },
      {
        text: 'Backtracking',
        collapsed: true,
        items: [
          { text: 'What is Backtracking?', link: '/en/backtrack/index.md' },
          { text: '17. Letter Combinations of a Phone Number', link: '/en/backtrack/17.md' },
          { text: '22. Generate Parentheses', link: '/en/backtrack/22.md' },
          { text: '46. Permutations', link: '/en/backtrack/46.md' },
          { text: '77. Combinations', link: '/en/backtrack/77.md' },
          { text: '78. Subsets', link: '/en/backtrack/78.md' },
          { text: '131. Palindrome Partitioning', link: '/en/backtrack/131.md' },
          { text: '216. Combination Sum III', link: '/en/backtrack/216.md' },
        ]
      },
      {
        text: 'Dynamic Programming',
        collapsed: true,
        items: [
          { text: 'What is Dynamic Programming?', link: '/en/dynamic-programming/index.md' },
          { text: '53. Maximum Subarray', link: '/en/dynamic-programming/53.md' },
          { text: '62. Unique Paths', link: '/en/dynamic-programming/62.md' },
          { text: '70. Climbing Stairs', link: '/en/dynamic-programming/70.md' },
          { text: '139. Word Break', link: '/en/dynamic-programming/139.md' },
          { text: '198. House Robber', link: '/en/dynamic-programming/198.md' },
          { text: '322. Coin Change', link: '/en/dynamic-programming/322.md' },
          { text: '377. Combination Sum IV', link: '/en/dynamic-programming/377.md' },
          { text: '494. Target Sum', link: '/en/dynamic-programming/494.md' },
          { text: '746. Min Cost Climbing Stairs', link: '/en/dynamic-programming/746.md' },
        ]
      },
      {
        text: 'Array',
        collapsed: true,
        items: [
          { text: '334. Increasing Triplet Subsequence', link: '/en/array/334.md' },
          { text: '605. Can Place Flowers', link: '/en/array/605.md' },
        ]
      },
      {
        text: 'String',
        collapsed: true,
        items: [
          { text: 'What is a String?', link: '/en/string/index.md' },
          { text: '8. String to Integer (atoi)', link: '/en/string/8.md' },
          { text: '345. Reverse Vowels of a String', link: '/en/string/345.md' },
          { text: '443. String Compression', link: '/en/string/443.md' },
        ]
      },
      {
        text: 'Heap',
        collapsed: true,
        items: [
          { text: '215. Kth Largest Element in an Array', link: '/en/heap/215.md' },
          { text: '378. Kth Smallest Element in a Sorted Matrix', link: '/en/heap/378.md' },
          { text: '1046. Last Stone Weight', link: '/en/heap/1046.md' },
          { text: '2530. Maximal Score After Applying K Operations', link: '/en/heap/2530.md' },
        ]
      },
      {
        text: 'Trie',
        collapsed: true,
        items: [
          { text: '208. Implement Trie (Prefix Tree)', link: '/en/trie/208.md' },
          { text: '1268. Search Suggestions System', link: '/en/trie/1268.md' },
        ]
      },
      {
        text: 'Grid Graph',
        collapsed: true,
        items: [
          { text: 'What is a Grid Graph?', link: '/en/grid-graph/index.md' },
          { text: '200. Number of Islands', link: '/en/grid-graph/200.md' },
          { text: '207. Course Schedule', link: '/en/grid-graph/207.md' },
          { text: '695. Max Area of Island', link: '/en/grid-graph/695.md' },
        ]
      },
      {
        text: 'Matrix',
        collapsed: true,
        items: [
          { text: '73. Set Matrix Zeroes', link: '/en/matrix/73.md' },
        ]
      },
]
  }
}
