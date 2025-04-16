# A array is good if the sum of its elements is divisible by k without any remainders
# Leetcode 523: https://leetcode.com/problems/continuous-subarray-sum/
class Solution(object):
    def checkSubarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """

        if len(nums) < 2 or k == 0:
            return False

        # We start 0 at -1 because we need to account for the edge case where we have a subarray that starts at the beginning of the array
        stash = {0: -1}
        vals = 0

        for idx in range(len(nums)):
            # We keep a running prefix sum of the array
            vals += nums[idx]
            print('values before mod -> ', vals)

            # Since we want to check if the total is divisible by k, we take the modulus of the total and k
            remainder = vals % k
            print('values after mod -> ', remainder)
            if remainder not in stash:
                # We store the remainder and the index at which we found it
                stash[remainder] = idx
            # If we have seen the remainder before, we check if the difference between the current index and the index at which we found the remainder is greater than or equal to 2
            # This is because we need to have a subarray of length greater than or equal to 2
            elif idx - stash[remainder] >= 2:
                return True
            
            print(stash)
        return False
        

# Test cases
GoodSubArrayCheck = Solution()

print(GoodSubArrayCheck.checkSubarraySum([1, 2, 3, 4, 5], 6))

# This works because prefix 23 % 6 = 5 and 29 % 6 = 5  || This remainders are found at the indexes 0 and 2 Which means the subarray [2, 4] is divisible by 6 since the index 0 is exclusive otherwise it would be [23, 2, 4]
print(GoodSubArrayCheck.checkSubarraySum([23, 2, 4, 6, 7], 6))
# print(GoodSubArrayCheck.checkSubarraySum([5, 0, 5, 0], 5))  # Should be True
# print(GoodSubArrayCheck.checkSubarraySum([1, 2, 3, 4, 5], 9))  # Should be True (2+3+4)print(GoodSubArrayCheck.checkSubarraySum([23, 2, 6, 4, 7], 6))
# print(GoodSubArrayCheck.checkSubarraySum([1, 1, 1, 1, 1], 20))  # Should be False
# print(GoodSubArrayCheck.checkSubarraySum([10, 20, 30, 40], 25))  # Should be True (10+20+30+40=100)print(GoodSubArrayCheck.checkSubarraySum([23, 2, 6, 4, 7], 13))
# print(GoodSubArrayCheck.checkSubarraySum([23, 2, 6, 4, 7], 0))

class Solution(object):
    def numberOfSubarrays(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """

        # Convert array to a binary array
        for i in range(len(nums)):
            nums[i] = nums[i] % 2
        # After conversion we need to move the array up 1 position to account for the inclusive 0th index
        nums = [0] + nums

        freq = [0] * len(nums)
        res = pfs = 0
        print(freq)
        for n in nums:
            pfs += n
            print(pfs - k)
            if pfs >= k:
                # (pfs - k) This value tells us how many subarrays we can form with the current prefix sum that have k odd numbers in them
                res += freq[pfs - k]

            # We increment the frequency of the current prefix sum as we have seen it before meaning we can form more subarrays with the same prefix sum
            # Since the array is only ever 1 and 0s we can never have a prefix sum that is greater than the length of the array so we can use the prefix sum as an index
            # to store the frequency of the prefix sum
            # NB:
            #   If we find a prefix sum that when subtracted by k gives us a value we have seen before it means we have a subarray from that diff to the current prefix sum that has k odd numbers in it and if we have seen it before we can form as many subarrays as we have seen it before***
            freq[pfs] += 1
        print(freq)
        return res
