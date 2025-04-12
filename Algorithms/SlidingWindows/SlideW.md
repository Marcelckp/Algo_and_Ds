# Sliding Windows

## Concept

The sliding window technique is a method for solving problems that involve arrays or lists. It involves creating a window that slides over the data structure to examine a subset of elements at a time.

This technique is particularly useful for problems that require finding a subarray or sublist that meets certain criteria.

We use this when we want to find subsets of data that are continuous / next to each other.

Think a moving train car. We want to find something when we look out the window. That window are the consecutive numbers / indexes that we are looking at in our fixed or dynamic window.

## Variations

### Dynamic sized sliding windows

This is when we dynamically grow and shrink the size of the window to solve our problem.

### Fixed sized windows

This is when the window subset we define does not grow or shrink in size.

## Key Points

- **Efficiency**: Sliding window reduces the time complexity by avoiding the need to repeatedly traverse the same elements.

## Common Problems

1. **Maximum Sum Subarray of Size K**: Find the maximum sum of any contiguous subarray of size K.

2. **Longest Substring Without Repeating Characters**: Find the length of the longest substring without repeating characters.

3. **Minimum Window Substring**: Find the smallest substring that contains all characters of a given pattern.

## Example

[Here's a simple example of finding the maximum sum of a subarray of size K:](./fixedSlidingEg.py)
[Dynamic examples](./dynamicSlidingEg.py)

```py
def fn(arr):
    left = ans = curr = 0

    for right in range(len(arr)):
        # do logic here to add arr[right] to curr

        while WINDOW_CONDITION_BROKEN:
            # remove arr[left] from curr
            left += 1

        # update ans

    return ans
```
