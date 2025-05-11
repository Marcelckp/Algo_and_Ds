# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution(object):
    def __init__(self, firstBadVersionVal):
        self.firstBadVersionVal = firstBadVersionVal

    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        bad = 0
        start = 0
        end = n
        
        while start <= end:
            mid = start + round((end - start) // 2)
            
            if mid == n:
                return n
            
            if self.isBadVersion(mid):
                if mid == bad:
                    break
                bad = mid
                end = mid
                continue
            start = mid + 1
        return int(bad)
        
    def isBadVersion(self, version):
        if version >= self.firstBadVersionVal:
            return True
        return False

# Example usage:
# Assuming the first bad version is 4
solution = Solution(3)
print(solution.firstBadVersion(5))  # Output: 4

solution = Solution(1)
print(solution.firstBadVersion(1))  # Output: 1