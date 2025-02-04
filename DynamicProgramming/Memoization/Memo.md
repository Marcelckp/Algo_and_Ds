# Memoization for dynamic programming

## Memoization

This is the process of recursively solving the main problem, and then use a cache for sub problems so that redundant recursive contexts do not need to be opened up.

### Top down example

Here is an example visualization of the Top down method with memoization:

```pseudo
fib(5)        <=== Start here
 ├─ fib(4)    <=== Break into smaller problems
 │   ├─ fib(3)  <=== Continue recursively
 │   │   ├─ fib(2)  <=== Base case
 │   │   └─ fib(1)  <=== Base case
 │   └─ fib(2)  <=== Result already memoized, reuse it
 └─ fib(3)    <=== Result already memoized, reuse it
```

The memoization here ensure that the fib of a number is only calculated once.

### Bottom up example

**_NOTE: Bottom up strategy with memoization is not normal as we use memoization as a cache scheme to avoid redundant calls which makes it pointless as the bottom up strategy does not have recursive calls within its strategy_**

-----

This strategy is often paired with the [Top-down strategy](../TopDown/td.md)
