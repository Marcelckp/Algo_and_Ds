class Solution(object):
    def numSubseq(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        
        nums.sort()
        res = 0
        r = len(nums) - 1 # marks the end of the array

        for l in range(len(nums)):
            while nums[l] + nums[r] > target and l <= r:
                r -= 1


            # Only add the values 
            if l > r:
                break

            # print(r - l)
            # print('left -> ', l)
            # print('right -> ', r)
            # print(nums[l:r])

            # When dealing with subsequences, each element in the array has two possibilities:
                # It can either be included in the subsequence.
                # It can be excluded from the subsequence.
            
            # This is why we use 2 as the base
            res += 2 ** (r - l)

        return res % (10**9 + 7) 

# Example usage
nums = [3, 5, 6, 7]
target = 8

solution = Solution()
result = solution.numSubseq(nums, target)

print(result)  # Output: 4

# Example usage
nums = [3, 3, 6, 8]
target = 10

solution = Solution()
result = solution.numSubseq(nums, target)

print(result)  # Output: 6