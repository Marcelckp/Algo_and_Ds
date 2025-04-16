class Solution(object):
    def numOfSubarraysWithOddSum(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        res = pfs = odd = even = 0
        arr = [0] + arr

        for n in arr:
            pfs += n

        # Checking the prefix sum:
        # If the updated pfs is odd (pfs % 2 == 1):
            
            # Increment the even counter because the current prefix sum is odd, and we need to count how many even prefix sums have been encountered so far. - This is because the difference between an odd prefix sum and an even prefix sum is odd, which means the subarray between them has an odd sum.
        
            # Add the count of odd prefix sums to res because each of these odd prefix sums, when subtracted from the current odd prefix sum, results in an even sum subarray, which is not what we want.
        
        # If the updated pfs is even (pfs % 2 == 0):
        
            # Increment the odd counter because the current prefix sum is even, and we need to count how many odd prefix sums have been encountered so far. This is because the difference between an even prefix sum and an odd prefix sum is odd, which means the subarray between them has an odd sum.
        
            # Add the count of even prefix sums to res because each of these even prefix sums, when subtracted from the current even prefix sum, results in an even sum subarray, which is not what we want.

            if pfs % 2 == 1:
                even += 1
                res += odd
            else:
                odd += 1
                res += even

            # print('current pfs -> ', pfs, 'even -> ', even, 'odd -> ', odd)

        return res % (10**9 + 7)

# In summary we increase the amount of odd sub array sums we can make when we encounter an even prefix since if an odd is added at some point in the future it can make a odd sub array for all the even prefix sums we have seen so far. The same goes for even prefix sums.
# Time complexity: O(n)

# For example:

# arr = [2, 4, 6]
# pfs = [0, 2, 6, 12]
# By the time we get to the end of the array with the logic we have the value of odd sums will be 0
# And even will be 3
# If we add a 1 to the array => [2, 4, 6, 1]
# pfs = [0, 2, 6, 12, 13]
# The value of odd nums will be 1 and even will be 3
# If we now look at the array for ever even pfs we saw we kept and odd count since if we encounter an odd we can create a odd sub array at each of the even pfs we saw => Since we can only make odd values if we plus or minus an odd value to an even value
# So the answer will be 3 as each even number was preparing us for the potential creation of an odd sub array

    def numOfSubarraysWithEvenSubSum(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        res = pfs = odd = even = 0
        arr = [0] + arr

        for n in arr:
            pfs += n

            if pfs % 2 == 0:
                res += even
                even += 1
            else:
                res += odd
                # odd += 1

            # print('current pfs -> ', pfs, 'even -> ', even, 'odd -> ', odd)

        return res % (10**9 + 7)
    
# Test cases:
# print(Solution().numOfSubarraysWithOddSum([1, 3, 5])) # 4
# print(Solution().numOfSubarraysWithOddSum([2, 4, 6])) # 0
# print(Solution().numOfSubarraysWithOddSum([1, 2, 3, 4, 5, 6, 7])) # 16

print(Solution().numOfSubarraysWithEvenSubSum([1, 3, 5])) # 0
print(Solution().numOfSubarraysWithEvenSubSum([2, 4, 6])) # 6
print(Solution().numOfSubarraysWithEvenSubSum([1, 2, 3, 4, 5, 6, 7])) # 16