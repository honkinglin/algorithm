# What are String Algorithms?

String algorithms are a set of **computational techniques specifically designed to process text data**, covering core operations like string matching, transformation, and analysis. In the programming world, string processing is ubiquitous—from text matching in search engines to lexical analysis in compilers, and from password validation to DNA sequence alignment.

We can think of string algorithms as **a precise toolkit for words**:
Some tools are used for fast searching (like a microscope), some for intelligent comparison (like a translator), and others for pattern recognition (like a detective's magnifying glass).

Based on **processing objectives, algorithm complexity, and application scenarios**, string algorithms can be divided into the following core types:


## 1. String Matching

**Characteristics:**

* Finding the occurrences of a pattern string within a main string
* The core lies in efficient character comparison and skipping strategies
* A performance leap from brute-force matching to intelligent algorithms

**Applicable Scenarios:**

* Text search and replace
* Virus signature detection
* Keyword recognition in code

**Example: Finding someone's name in a thick phonebook. You can turn page by page (Brute Force), or you can jump around based on alphabetical order (Intelligent algorithms).**

**Classic Algorithms:**

* **Brute Force** - Simple and direct, suitable for short pattern strings
* **KMP Algorithm** - Uses a failure function to avoid redundant comparisons
* **Boyer-Moore Algorithm** - Matches from right to left, utilizing bad character heuristics
* **Rabin-Karp Algorithm** - Rolling hash, processes multi-pattern matching

**Corresponding Problems:**

* [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
* [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
* [1392. Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)


## 2. String Transformation

**Characteristics:**

* Converting one string to another via insertion, deletion, and substitution operations
* Focuses on the minimum cost path and dynamic programming concepts
* Widely used in natural language processing and bioinformatics

**Applicable Scenarios:**

* Spell checking and typo correction
* DNA sequence alignment
* File differences in version control

**Example: Translating a Chinese sentence to English might require replacing vocabulary, adjusting word order, and adding/deleting tone particles. The goal is to achieve the best result with the fewest modifications.**

**Classic Algorithms:**

* **Edit Distance** - Minimum number of insertions, deletions, and substitutions
* **Longest Common Subsequence (LCS)** - Finding the largest identical (non-contiguous) part
* **Longest Common Substring** - The longest identical contiguous fragment

**Corresponding Problems:**

* [72. Edit Distance](https://leetcode.com/problems/edit-distance/)
* [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
* [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)


## 3. Palindrome Strings

**Characteristics:**

* Identifying and constructing strings that read the same forwards and backwards
* Utilizing symmetry for center expansion or dynamic programming
* Combining double pointer techniques for efficient validation

**Applicable Scenarios:**

* Palindrome word detection
* DNA palindromic sequence analysis
* String beautification and symmetric design

**Example: A palindrome phrase like "racecar" reads the same from the middle outwards. You can check from the center outwards, or verify from both ends towards the middle.**

**Classic Techniques:**

* **Center Expansion Method** - Expand outwards with each character as the center
* **Dynamic Programming** - Record the palindrome state of substrings
* **Manacher's Algorithm** - Find all palindromic substrings in linear time

**Corresponding Problems:**

* [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
* [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
* [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)


## 4. String Hashing

**Characteristics:**

* Maps strings to numbers for rapid comparison and searching
* Rolling hash technology supports dynamic window operations
* Significantly boosts performance when processing massive amounts of strings

**Applicable Scenarios:**

* String deduplication
* Fast substring matching
* Consistent hashing in distributed systems

**Example: Giving each person an ID number. To check if two people are the same, you only need to compare their numbers instead of checking names and features word by word.**

**Core Technologies:**

* **Polynomial Hashing** - Hash functions based on a base system
* **Rolling Hash** - Incremental calculation as the window slides
* **Double Hashing** - Reduces the probability of hash collisions

**Corresponding Problems:**

* [187. Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
* [1044. Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
* [1923. Longest Common Subpath](https://leetcode.com/problems/longest-common-subpath/)


## 5. Trie Tree

**Characteristics:**

* A prefix-based tree storage structure
* Efficiently supports prefix queries and string insertions
* Particularly suitable for batch processing a large number of strings

**Applicable Scenarios:**

* Autocomplete functionality
* Word searching and prefix matching
* IP routing tables and dictionary storage

**Example: Like a dictionary's radical index, characters are categorized layer by layer by their structure. When finding a character, you can quickly jump to the relevant section.**

**Core Operations:**

* **Insert** - Build nodes along the character path
* **Search** - Verify existence along the path
* **StartsWith** - Partial path matching

**Corresponding Problems:**

* [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
* [212. Word Search II](https://leetcode.com/problems/word-search-ii/)
* [648. Replace Words](https://leetcode.com/problems/replace-words/)


## 6. String Parsing & Combination

**Characteristics:**

* Splitting or recombining strings according to specific rules
* Involves greedy strategies, backtracking search, and dynamic programming
* Widely used in compiler principles and data parsing

**Applicable Scenarios:**

* Word breaking and recombining
* Expression parsing
* Configuration file processing

**Example: Segmenting a sentence into meaningful vocabulary based on a dictionary, or combining scattered vocabulary into sentences following grammatical rules.**

**Classic Problems:**

* **Word Break** - Determine if a string can be completely segmented using a dictionary
* **Palindrome Partitioning** - Partitioning a string into palindromic substrings
* **String Rearrangement** - Rearranging characters to meet specific conditions

**Corresponding Problems:**

* [139. Word Break](https://leetcode.com/problems/word-break/)
* [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
* [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)


## 7. Regex & Pattern Matching

**Characteristics:**

* Supports complex patterns like wildcards, repetitions, and alternations
* Based on state transitions of finite automata
* Powerful text processing and validation capabilities

**Applicable Scenarios:**

* Email format validation
* Log analysis and extraction
* Code syntax highlighting

**Example: Like an intelligent text detective capable of finding not only exact characters but also fuzzy clues like "any digit" or "repeated letters".**

**Core Concepts:**

* **Wildcard Matching** - Combination of '.' and '*'
* **State Machines** - Construction and execution of DFA/NFA
* **Recursion and DP** - Strategies for handling complex patterns

**Corresponding Problems:**

* [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
* [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
* [65. Valid Number](https://leetcode.com/problems/valid-number/)


📌 **Summary in one sentence**:

> String algorithms are the Swiss Army knife for dealing with text data. From basic search and matching to complex pattern recognition, every technique offers an optimal path for solving specific types of text processing problems. Whether it's the core of a search engine, the frontend of a compiler, or sequence analysis in bioinformatics, string algorithms are an indispensable cornerstone.
