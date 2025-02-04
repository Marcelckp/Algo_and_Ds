# Tabulation

## What is tabulation

Tabulation is the process of solving a small problems first, then iteratively store the results in a table to use within the next calculations.

**_Tabulation is not recursive_**:

It follows a bottom-up approach, meaning it solves smaller subproblems first and uses their solutions to generate subsequent solutions for larger subproblems and then the whole.

### Tabulation benefits

This is a technique that is used to optimize solutions by avoiding redundant computations.

It's counterpart is [Memoization for dynamic programming](../Memoization/Memo.md)

### Tabulation visualization

```pseudo
dp[0] = 0   <=== Base case
dp[1] = 1   <=== Base case
dp[2] = dp[1] + dp[0] = 1
dp[3] = dp[2] + dp[1] = 2
dp[4] = dp[3] + dp[2] = 3
dp[5] = dp[4] + dp[3] = 5   <=== Final result
```

As you can see we start with the bottom 2 cases and claim them as our base case and we continue to calculate the rest of the values from that point.

While we calculate we store the values at the specific index in the array, so that we don't need to calculate them again.

-----

This strategy is often paired with the [Bottom-Up strategy](../BottomUp/bu.md)
