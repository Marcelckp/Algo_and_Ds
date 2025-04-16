# Suffix Sum

**Is similar to prefix sum but in reverse.**

Each element at index i in the suffix sum array contains the sum of elements from index i to the end of the array.

It helps to quickly calculate the sum of elements within any range [l, r] by subtracting suffix_sum[r + 1] from suffix_sum[l].

The suffix calculates the total value from the end of the array to the start of the array as a running sum. This is the complimentary opposite of a prefix sum.

PFS && SFS can be used to give you the same result. However it is down in different ways.
