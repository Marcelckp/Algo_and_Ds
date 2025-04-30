# Dynamic Programming

## What is dynamic programming?

Dynamic programming is a concept whereby you solve problems by breaking them down into smaller overlapping sub-problems, while making use of previous results to speed up computation.

This could involve the usage of iteration or recursion within your solutions.

**DP is the concept of reducing redundant calculations.**

## Techniques

- Recursive Foundation:

  DP typically involves solving problems that have overlapping subproblems, meaning the same computations are repeated multiple times during a recursive process.

- Memoization (Top-Down):

  When solving a problem using recursion, you store the results of subproblems in a cache (like an array, dictionary, or table). Before performing a recursive call, you check the cache to see if the result for that subproblem is already computed. If it is, you retrieve it instead of recalculating.

  NOTE: **This cannot be used with the bottom up technique as memoization means to cache results in recursive calls. And the Bottom-up approach is an iterative one.**

- Tabulation (Bottom-Up):

  Another approach to DP is iterative and works by solving all possible subproblems in a bottom-up manner, filling a table from smaller subproblems to larger ones.

---

## 1D DP vs 2D DP

Dynamic programming problems can often be categorized based on the dimensionality of the data structure used to store intermediate results on the way to computing the end result:

- **1D DP**: Uses a one-dimensional array to store results.
  
  This is typically used when the problem can be reduced to a single dimension, such as solving problems involving sequences or linear structures.

  For example

  Think of 1D DP as a single row of lockers where each locker stores a result.

- **2D DP**: Uses a two-dimensional array (matrix) to store results.

  This is commonly used for problems involving grids, tables, or when two variables are required to represent the state of the problem.

  For example

  Think of 2D DP as a grid of lockers (rows and columns) where each locker stores a result based on two factors (e.g., row and column).
