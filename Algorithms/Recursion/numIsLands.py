# This solution uses the depth first search technique to solve the num islands problem
class Solution:
    # I and J here are the coordinates of the current cell we are at in the matrix
    def dfs(self, grid, i, j):
        m, n = len(grid), len(grid[0])
        if i < 0 or j < 0 or i >= m or j >= n or grid[i][j] == '0':
            return
        grid[i][j] = '0'

        # We recursively call this function for all the neighbours of the current cell horizontally and vertically.
        # Depth first search
        self.dfs(grid, i + 1, j)
        self.dfs(grid, i - 1, j)
        self.dfs(grid, i, j + 1)
        self.dfs(grid, i, j - 1)
    
    def numIslands(self, grid) -> int:
        m, n = len(grid), len(grid[0])
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    count += 1
                    # If we reach this point we know that we have found an island so we need to do a dfs to mark all the connected 1's as 0 so that we don't count them again 
                    # After we finish the dfs we will return to this context and continue the iteration
                    self.dfs(grid, i, j)
        return count
    
# Example usage
sol = Solution()
grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
] 
print(sol.numIslands(grid)) # Output: 1

grid2 = [
    ["1","1","0","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
] 
print(sol.numIslands(grid2)) # Output: 2
