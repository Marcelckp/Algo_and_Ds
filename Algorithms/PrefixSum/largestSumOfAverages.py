# from functools import lru_cache

# Basically, every element have possibilities that it may make a cut there or it can further add elements in its group then cut.

# for every element , at index i , it has n-k options to make a cut.
# just let him make all decision and store max of all its choices.

# We can imagine , its gonna so long and TLE is there in picture. So, use memoization.
class Solution(object):
    def largestSumOfAverages(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """

        # Precompute prefix sums for efficient range sum calculation
        prefix_sum = [0] * (len(nums) + 1)
        for i in range(len(nums)):
            prefix_sum[i + 1] = prefix_sum[i] + nums[i]

        def average(i, j):
            return (prefix_sum[j] - prefix_sum[i]) / (j - i)

        # @lru_cache(None)
        def dp(i, k):
            if k == 1:
                return average(i, len(nums))
            max_avg = 0
            for j in range(i + 1, len(nums) - k + 2):
                max_avg = max(max_avg, average(i, j) + dp(j, k - 1))
            return max_avg

        return dp(0, k)
    
# Example usage
nums = [4663,3020,7789,1627,9668,1356,4207,1133,8765,4649,205,6455,8864,3554,3916,5925,3995,4540,3487,5444,8259,8802,6777,7306,989,4958,2921,8155,4922,2469,6923,776,9777,1796,708,786,3158,7369,8715,2136,2510,3739,6411,7996,6211,8282,4805,236,1489,7698]
k = 27
solution = Solution()
result = solution.largestSumOfAverages(nums, k)
print(result)  # Output: 20.0