class Solution(object):
    def subarraysDivByK(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """

        freqR = [0] * k
        # We initialize the frequency of the remainder 0 to 1 since we have seen it once
        # Explanation of freqR[0] = 1 Initialization
        # This line is initializing the frequency counter for remainder 0 to 1 before processing any array elements. You're right to question this - we haven't seen any actual elements yet!

        # The reason is mathematical:

        # This algorithm is tracking prefix sums and their remainders when divided by k
        # Before processing any elements (at the starting point), we have an "empty prefix sum" which equals 0
        # Since 0 % k = 0, we're essentially saying "we've seen one instance of remainder 0 already"
        # This initialization is necessary to correctly count subarrays that start from the beginning of the array. Without it, we would miss counting valid subarrays where the sum from index 0 to some index j is divisible by k.

        # For example, with array [4,5,1] and k=5:

        # When we reach the third element, the running sum is 10
        # 10 % 5 = 0, which means this entire prefix is divisible by k
        # We need that initial count of remainder 0 to properly detect this case
        freqR[0] = 1 # We do this because the first valid subarray is [] which has a sum of 0 and 0 % k = 0
        prefix_sum = 0
        divisCount = 0

        for i in range(len(nums)):
            prefix_sum += nums[i]
            pRemain = abs(prefix_sum % k)

            # This is not needed as the remainder will always be in range
            # if pRemain in range(len(freqR)):
            
            # The number is divisible by k if the remainder is 0 and we have seen it before
            # If we have seen it before it means that 
            divisCount += freqR[pRemain]
            freqR[pRemain] += 1

        return divisCount