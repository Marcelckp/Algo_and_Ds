# Knap Sack

## Problem Statement

The Knapsack problem is a classic dynamic programming problem where you are given a set of items, each with a weight and a value, and a maximum weight capacity. The goal is to determine the maximum value that can be obtained by selecting a subset of the items such that their total weight does not exceed the capacity.

## Example

```plaintext
Input:
Weights: [1, 2, 3]
Values: [6, 10, 12]
Capacity: 5

Output:
Maximum Value: 22
```

## Approach

1. **Recursive Solution**: Solve the problem by considering each item and deciding whether to include it in the knapsack or not.

2. **Dynamic Programming**: Use a 2D table to store the maximum value for each weight capacity and item combination. This makes it a **2D DP problem**, as the solution depends on two variables: the current item index and the remaining capacity.

## Code Example

### Recursive Solution

```python
def knapsack_recursive(weights, values, capacity, n):
    if n == 0 or capacity == 0:
        return 0
    if weights[n - 1] > capacity:
        return knapsack_recursive(weights, values, capacity, n - 1)
    else:
        return max(
            values[n - 1] + knapsack_recursive(weights, values, capacity - weights[n - 1], n - 1),
            knapsack_recursive(weights, values, capacity, n - 1)
        )
```

### Dynamic Programming Solution

```python
def knapsack_dp(weights, values, capacity):
    n = len(weights)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w])
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][capacity]
```

## Complexity

- **Recursive Solution**: Exponential time complexity, O(2^n).
- **Dynamic Programming Solution**: Time complexity O(n * capacity), Space complexity O(n * capacity).