# https://leetcode.com/problems/subarray-sum-equals-k/
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """

        count = 0
        prefix_sum = 0
        
        # This represents the frequency of prefix sums in the array as we generate the sum
        prefix_sum_count = {0: 1}  # Initialize with prefix sum 0 and count 1 -> 
        
        for num in nums:
            prefix_sum += num  # Update the running prefix sum

            print(prefix_sum, prefix_sum_count)
            print('p - k ', prefix_sum - k)

            # If we have the current running total - k in our prefix_sum storage it means we have reached a subArray that equals the length of K - Since we are dealing with running sums. It means that a sum - a sum is equal to the difference between the values in that range. Making the value we get not only (currentPrefixSum - PreviouslySeenPrefixSum == k)
            if (prefix_sum - k) in prefix_sum_count:
                print('count -> if prefix - k has been seen', count)

                # If we find a prefix sum that equals to (prefix_sum - k), we increment the count since it means that we have found a subarray that sums to k
                count += prefix_sum_count[prefix_sum - k]  # Increment count if (prefix_sum - k) is found

            if prefix_sum in prefix_sum_count:
                # If we have seen the current prefix sum before, we increment the frequency of the prefix sum.
                # This is because we can have multiple subarrays that sum to k that have the same prefix sum but different ending points. This accounts for the different ending points.
                prefix_sum_count[prefix_sum] += 1  # Update the frequency of the current prefix sum
            else:
                # This is the first time we have seen the current prefix sum, so we initialize the frequency to 1
                prefix_sum_count[prefix_sum] = 1  # Initialize the frequency if the prefix sum is seen for the first time

        print(prefix_sum_count)
        return count

# [1,2,3,4,5,6,7,8]
# [1,3,6,10,15,21,28,36]