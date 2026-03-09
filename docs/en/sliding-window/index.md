# What is a Sliding Window?

A sliding window is an algorithmic technique for efficiently processing sub-interval problems by moving a continuous interval over an array or string and adding or removing boundary elements.

Sliding windows can be divided into the following three common types, based on whether the window is fixed or variable and the sliding rules:

## 1. Fixed-size Sliding Window
**Characteristics:**
- The window size `k` is fixed.
- The window moves outward by one step at a time.

**Applicable Scenarios:**
- Finding the maximum/minimum, average, sum, etc., of a subarray of length `k`.

**Example: Browsing a social media feed where the screen can only show 3 posts at a time**

When you scroll through a feed on your phone:
- The screen can display 3 posts at once.
- Every time you swipe up one slot, you see the next set of 3 continuous posts.
- You are looking for: which contiguous set of 3 posts has the most likes?

**Corresponding Problem:**
- [Leetcode 643 – Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

Just as the window always views exactly 3 posts at a time—sliding one out and sliding one in—the window size remains constant.

## 2. Variable-size Sliding Window
**Characteristics:**
- The window size is not fixed; it expands or shrinks dynamically based on conditions.
- Often used to handle problems involving finding the shortest/longest subarray or substring that meets certain criteria.

**Applicable Scenarios:**
- The shortest substring containing all required characters.
- The longest substring without repeating characters.

**Example: Phone Login Detection—Finding the longest continuous period without duplicate device logins**

You are a platform security officer who wants to find a user's most "stable" login period—a period where no two duplicate devices were used to log in.

- Every time a user logs in, we record the device ID.
- As soon as a device is repeated, the "safe interval" ends, and we need to shrink the window.
- Then you continue checking forward until you find the longest period of non-repeating device logins.

**Corresponding Problem:**  
- [Leetcode 3 – Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

It's like looking for the longest "clean login record" window without duplicate device numbers.

## 3. Two-end or Deque-based Sliding Window
**Characteristics:**
- Uses a **Double-ended Queue (deque)** to maintain information such as the maximum or minimum value within the window.
- Maintains a specific "monotonicity" (e.g., strictly decreasing) of the elements within the window.

**Applicable Scenarios:**
- Finding the maximum/minimum value of each window in O(n) time.
- More advanced, uses a queue instead of a regular array to process window values.

**Brief Concept:**
- Use a queue to store "candidates that could potentially be the maximum value" in the window.
- Every time the window slides, pop elements that can no longer possibly be the maximum value, keeping the queue decreasing.

**Example: Stock Market Sliding Analysis—Finding the highest stock price within every 3-day window**

You are a stock market analyst who needs to tell clients every day: "What was the highest stock price in the past 3 days?"

- You maintain a "candidate list" (queue) that only keeps prices which could potentially be the maximum.
- Every time the stock price changes (sliding the window), you kick out old prices and introduce the new one.
- The queue always remains sorted from largest to smallest, making the head of the queue the maximum value of the current window.

**Corresponding Problem:**  
- [Leetcode 239 – Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/description/)

This is similar to updating the "highest stock price in the last 3 days" daily, only keeping the records that could potentially become the maximum value.
