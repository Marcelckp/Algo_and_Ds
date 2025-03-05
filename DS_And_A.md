# Data structures and Algorithm basics

[This is my summarization and Key take away's from this page on leet code](https://leetcode.com/explore/interview/card/cheatsheets/720/resources/4725/)

Big O notation:

![Big O notation diagram example](https://assets.leetcode.com/static_assets/media/original_images/DSA/Chapter_11/big_o.png)

The $n$ in Big O notation refers to how many elements there are in the input data structure / or information we are processing within the function.

There are a few main notations:

- $O(1)$: Constant time complexity, where the execution time does not change with the size of the input.

- $O(N)$: Linear time complexity, where the execution time grows linearly with the size of the input.

- $O(N^2)$: Quadratic time complexity, where the execution time grows quadratically with the size of the input.

- $O(2^N)$: Exponential time complexity, where the execution time doubles with each additional element in the input.

- $O(N!)$: Factorial time complexity, where the execution time grows factorially with the size of the input.

- $O(n * k)$: This is for binary trees where $n$ is the number of nodes and $k$ represents the work that needs to be done at that point.

Understanding these notations helps in analyzing and optimizing the performance of algorithms.

---

## Explaining Logarithms

**_NOTE: Log is the inverse of exponents - so think 2 to the power of 3 is $2 _ 2 _ 2$ OR $a^b = c$; The log function tells us to what power must the base be raised to have get the given number - so $log_a(c) = b$_**

Here is an example:

```pseudo
2 to the power of 3 => 2^3 => 8

If you log2(8), this is what happens:

8 / 2 / 2 / 2 => 1

It took three 2s to divide 8 to 1, and this makes it so that 2^3 => 8.

If you were to log by any other base, you would have to divide by that number provided.
```

If you wanted to find the exponent needed to find a random number from another you would do the following:

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// This gets the exponent for 8 -> Showing us how to get to 90 from 8
getBaseLog(8, 90);

// => 2.1639510321098916
// So 8^2.1639510321098916 => 90

// The opposite of this would be -> Showing us how to get to 8 from 90 via exponents
getBaseLog(90, 8);
// => 0.4621176658627907
// So 90^0.4621176658627907 => 7.99999999 => 8
```

- $O(logN)$: Logarithmic time complexity, where the execution time grows logarithmically with the size of the input.

### Example of Logarithmic Time Complexity

A common example of an algorithm with logarithmic time complexity is binary search. In binary search, the input data must be sorted. The algorithm works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the algorithm narrows the interval to the lower half. Otherwise, it narrows it to the upper half. This process continues until the value is found or the interval is empty.

Here is a simple implementation of binary search in Python:

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Example usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 4
print(binary_search(arr, target))  # Output: 3
```

In this example, the binary search algorithm has a time complexity of $O(logN)$ because it divides the search space in half with each iteration.

<font color=gold>

if you need to sort the array first and then perform a binary search, the overall time complexity would be (O(n \log n)) for sorting plus (O(\log n)) for the binary search. Since (O(n \log n)) dominates (O(\log n)), the combined time complexity would be (O(n \log n)).

```pseudo
def search_in_unsorted_array(arr, target):
    arr.sort()  # Sort the array first
    return binary_search(arr, target)
```

</font>

- $O(N log N)$: Log-linear time complexity, where the execution time grows in proportion to the size of the input times the logarithm of the size of the input.

---

## Time Complexity

Time complexity is a way to notate the time that your function or code is going to execute. This notation allows us to easily quantify the execution time of a function.

---

## Space Complexity

Space complexity is a way to notate how the storage requirements of an algorithm grow with the size of the input. This notation allows us to easily quantify the storage growth for the function.

---

## Data Structures and Algorithm problem solving flowchart

![problem solving flowchart for decision making](https://assets.leetcode.com/static_assets/media/original_images/DSA/Chapter_11/flowchart.png)

---

## Linear Data Structures

These are data structures where data is stored in sequential memory addresses such as:

- Arrays

- Linked Lists

- Hash tables (maps/set)

- Stacks and Queues

## Non-linear Data Structures

These are data structures where data is not stored in a sequential pattern and you cannot assign an index to an instance.

- Trees

- Graphs

- Union-find

- Heaps
