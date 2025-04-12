def maximum_consecutive_subarray(arr, k):
    max_sum = 0
    window_sum = 0
    for i in range(len(arr)):
        window_sum += arr[i]
        if i >= k - 1:
            max_sum = max(max_sum, window_sum)
            # We remove the first element of the window which will be k elements behind the current element
            window_sum -= arr[i - (k - 1)]
    return max_sum

# Example usage
arr = [2, 1, 5, 1, 3, 2]
k = 3
print(maximum_consecutive_subarray(arr, k))  # Output: 9