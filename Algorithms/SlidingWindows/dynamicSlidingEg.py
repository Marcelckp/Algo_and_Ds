def max_sum_subarray(arr, k):
    n = len(arr)
    if n < k:
        return "Invalid"

    window_sum = sum(arr[:k])
    max_sum = window_sum

    for i in range(n - k):
        # We slide the window by removing the first element of the window and adding the next element in the array
        window_sum = window_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, window_sum)

    return max_sum

# Example usage
arr = [1, 2, 7, 4, 8, 6, 3, 7, 5, 9, 10]
k = 3
print("Maximum sum of a subarray of size", k, "is", max_sum_subarray(arr, k)) # Output: 25 

def dynamic_sliding_window(arr, target_sum):
    n = len(arr)
    window_start, window_end = 0, 0
    current_sum = 0
    min_length = float('inf')

    while window_end < n:
        current_sum += arr[window_end]
        window_end += 1

        while current_sum >= target_sum:
            min_length = min(min_length, window_end - window_start)
            current_sum -= arr[window_start]
            window_start += 1

    return min_length if min_length != float('inf') else 0

# Example usage
arr = [1, 2, 7, 4, 8, 6, 3, 7, 5, 9, 10]
target_sum = 15
print("Minimum length of subarray with sum at least", target_sum, "is", dynamic_sliding_window(arr, target_sum)) # Output: 2

def length_of_longest_substring(s):
    start = 0
    max_length = 0
    seen = set()

    for end in range(len(s)):
        while s[end] in seen:
            seen.remove(s[start])  # Remove the repeating character
            start += 1             # Shrink the window from the left
        seen.add(s[end])           # Add the new character to the set
        max_length = max(max_length, end - start + 1)

    return max_length

# Example usage:
input_str = "abcabcbb"
print(length_of_longest_substring(input_str))  # Output: 3
