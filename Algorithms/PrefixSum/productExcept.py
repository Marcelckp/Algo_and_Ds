class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
        

        # Prefix sum
        prefProd = [1] * len(nums)
        sufSum = 1
        for i in range(0, len(nums) - 1):
            prefProd[i + 1] = prefProd[i] * nums[i]

        # Suffix sum
        for x in range(len(nums) - 1, -1, -1):
            if (x + 1) == len(nums):
                prefProd[x] *= 1
            else:
                sufSum *= nums[x + 1]
                prefProd[x] *= sufSum

        return prefProd
        