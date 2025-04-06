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

### Visual Example

```plaintext
Given array: [2, 1, 5, 6, 2, 3]

Step-by-step process:
1. Start with an empty stack.
2. Iterate through the array:
    - Push the current index onto the stack if the stack is empty or the current element is greater than the element at the index on top of the stack.
    - If the current element is smaller, pop indices from the stack until the stack is empty or the current element is greater than the element at the index on top of the stack.

Example:
Array: [2, 1, 5, 6, 2, 3]
Stack: []

Iteration 1:
- Current element: 2
- Stack: [0] (push index 0)

Iteration 2:
- Current element: 1
- Stack: [] (pop index 0 because 1 < 2)
- Stack: [1] (push index 1)

Iteration 3:
- Current element: 5
- Stack: [1, 2] (push index 2)

Iteration 4:
- Current element: 6
- Stack: [1, 2, 3] (push index 3)

Iteration 5:
- Current element: 2
- Stack: [1, 2] (pop index 3 because 2 < 6)
- Stack: [1] (pop index 2 because 2 < 5)
- Stack: [1, 4] (push index 4)

Iteration 6:
- Current element: 3
- Stack: [1, 4, 5] (push index 5)

Final Stack: [1, 4, 5]
```

It follows the concept of tracking the current index in a stack and popping the value and adding it to the result for all values in the stack if the value is greater than the current top of the stack

OR adding it to the stack if it is not greater than

[Example](./monotonicStack.go)

## Monotonic Queue pattern

This follows the same principle as the [Monotonic stack](#monotonic-stack-pattern), but uses a normal queue.

### Visual

```plaintext
Given array: [10, 5, 2, 7, 8, 7]

Step-by-step process:
1. Start with an empty queue.
2. Iterate through the array:
    - Remove elements from the front of the queue if they are smaller than or equal to the current element (to maintain decreasing order).
    - Add the current index to the back of the queue.
    - Remove elements from the front of the queue if they are out of the current window (if solving a sliding window problem).

Example:
Array: [10, 5, 2, 7, 8, 7]
Queue: []

Iteration 1:
- Current element: 10
- Queue: [0] (add index 0)

Iteration 2:
- Current element: 5
- Queue: [0, 1] (add index 1)

Iteration 3:
- Current element: 2
- Queue: [0, 1, 2] (add index 2)

Iteration 4:
- Current element: 7
- Queue: [3] (remove indices 2, 1, and 0 because 7 > 2, 7 > 5, and 7 > 10, then add index 3)

Iteration 5:
- Current element: 8
- Queue: [4] (remove index 3 because 8 > 7, then add index 4)

Iteration 6:
- Current element: 7
- Queue: [4, 5] (add index 5)

Final Queue: [4, 5]
```

This approach ensures that the queue always contains indices of elements in decreasing order, which can be used to efficiently solve problems like finding the maximum in a sliding window.
