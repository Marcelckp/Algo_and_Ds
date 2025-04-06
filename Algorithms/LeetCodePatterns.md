# Top leet code question problems

This is a notes doc about all patterns you should know to solve leet code problems with ease!

## [Prefix Sum pattern](./PrefixSum/subArrSumEqualsK.py)

The prefix sum pattern involves using the cumulative sum of elements in an array to solve problems efficiently. By maintaining a running total of the sum of elements up to each index, we can quickly calculate the sum of any subarray by subtracting the prefix sum at the start of the subarray from the prefix sum at the end of the subarray.

This technique is particularly useful for solving problems that require the sum of elements within a specific range or window in an array.

```py
def fn(arr):
    prefix = [arr[0]]
    for i in range(1, len(arr)):
        prefix.append(prefix[-1] + arr[i])

    return prefix
```

## [Monotonic Stack pattern](./monotonicStack.go)

A monotonic stack is a stack that has its elements in a specific order, either strictly increasing or strictly decreasing. This property makes it useful for solving problems where you need to maintain a sequence of elements that respect a certain order.

This pattern **_Is used to find the next greater or next smallest element in an array or data structure_**

It follow the concept of tracking the current index in a stack an popping the value and adding it to the result for all values in the stack if the value is greater then the current top of the stack

OR adding it to the stack if it is not greater than

[Example](./monotonicStack.go)

## Monotonic Queue pattern

This follows the same principle as the [Monotonic stack](#monotonic-stack-pattern).

A monotonic stack or queue maintains its elements in a strictly increasing or strictly decreasing order. This property is useful for solving problems where you need to maintain a sequence of elements that respect a certain order.
