# Prefix Sum Pattern

## Principle

This pattern works due to mathematical principles:

<font color=gold>The principle states that if we have two prefix sums that are [equal](./subArrSumEqualsK.py) or [divisible by k](./subArrSumDivisableByk.py) and have the same remainder when divided by k. The difference will either equal or be divisible by k.</font>

### Example

#### Let's use prefix sum notation

P[j] = sum of nums[0...j]
P[i] = sum of nums[0...i] where i < j

If P[j] % k = P[i] % k:

P[j] = k × m + r (for some integer m and remainder r)
P[i] = k × n + r (for some integer n and same remainder r)
Therefore: P[j] - P[i] = k × (m - n)

This difference represents the sum of the subarray nums[i+1...j], and it's clearly divisible by k.

#### Your Example Clarified

Using your example with k = 5:

At position A: prefix_sum = 4, remainder = 4
At position B: prefix_sum = 19, remainder = 4

The subarray between these positions has sum: 19 - 4 = 15, which is divisible by 5.

This works because:

4 = 5 × 0 + 4
19 = 5 × 3 + 4
The difference: 19 - 4 = 15 = 5 × 3, which is divisible by k.

That's why the algorithm counts the frequency of each remainder - when we see a remainder we've seen before, we've found one or more subarrays divisible by k.

#### How does this work with equal to k problems

The prefix sum pattern is a powerful technique used to efficiently calculate the sum of elements in a contiguous subarray. It involves precomputing cumulative sums to enable O(1) time lookups for range sum queries.

## Definition

A prefix sum array `P` for an array `nums` is defined as:

- `P[0] = 0` (empty subarray sum)
- `P[i] = nums[0] + nums[1] + ... + nums[i-1]` for i > 0

This preprocessing allows us to calculate the sum of any subarray `nums[i...j]` in constant time using the formula:
`sum(nums[i...j]) = P[j+1] - P[i]`

## Common Applications

- Finding subarrays with a given sum
- Identifying subarrays divisible by k
- Calculating moving averages
- Solving range query problems

Prefix sums transform range-based questions into simple arithmetic operations.

## Examples from LeetCode

### Example 1: Subarray Sum Equals K (LC 560)

**Problem:** Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

**Approach using Prefix Sum:**

1. Initialize a hash map with a single entry (0:1) to account for an empty prefix
2. Maintain a running sum while iterating through the array
3. For each position, check if (running_sum - k) exists in the hashmap
4. If it exists, add its frequency to the result count
5. Update the hashmap with the current running sum

**Example:**

```psuedo
nums = [1, 1, 1], k = 2
```

- Initialize: prefix_sum = 0, result = 0, map = {0:1}
- i=0: prefix_sum = 1, check if (1-2) = -1 in map (no), update map = {0:1, 1:1}
- i=1: prefix_sum = 2, check if (2-2) = 0 in map (yes, count 1), result = 1, map = {0:1, 1:1, 2:1}
- i=2: prefix_sum = 3, check if (3-2) = 1 in map (yes, count 1), result = 2, map = {0:1, 1:1, 2:1, 3:1}

Final result: 2 subarrays ([1,1] and [1])

### Example 2: Continuous Subarray Sum (LC 523)

**Problem:** Given an integer array `nums` and an integer `k`, return `true` if `nums` has a continuous subarray of size at least 2 whose elements sum up to a multiple of `k`.

**Approach using Prefix Sum:**

1. Initialize a hash map with (0:-1) to handle the case where a valid subarray starts from index 0
2. Calculate the running sum and its remainder when divided by k
3. If the same remainder has been seen before at position i, and the current position minus i > 1, return true
4. Otherwise, store the remainder with its position if not already in the map

**Example:**
```
nums = [23, 2, 4, 6, 7], k = 6
```

- Initialize: map = {0:-1}
- i=0: sum = 23, rem = 23%6 = 5, map = {0:-1, 5:0}
- i=1: sum = 25, rem = 25%6 = 1, map = {0:-1, 5:0, 1:1}
- i=2: sum = 29, rem = 29%6 = 5, already in map at index 0, length = 2-0 > 1, return true

Result: True (subarray [2,4] sums to 6, which is divisible by k=6)

---

## When to use PFS or SFS

This pattern can only ***WORK with Contiguous subsets***. If this continuity is not available then we cannot use this strategy.
