# Backtracking is the process of finding a solution to a problem incrementally. And this is done by trying out all the possible solutions and then choosing the best ones to get the optimal solution. If the current solution is not optimal, then we backtrack and try out the other solutions. This is done recursively until we find the optimal solution. Or all the possible solutions have been tried out.

# N-Queens Problem
# We need to place N queens on an NxN chessboard such that no two queens attack each other. 
# A queen can attack another queen if they are in the same row, column, or diagonal. 
# We can place a queen in a column and then move to the next column. If we find a safe place to place the queen, we place it there and move to the next column. If we don't find a safe place, we backtrack and try out the other solutions. We continue this process until we find the optimal solution.

def backtracking(n):
    def solve(board, col):
        if col >= n:
            return True

        for i in range(n):
            if isPlacementSafe(board, i, col):
                board[i][col] = 'Q'
                if solve(board, col + 1):
                    return True
                
                # If setting this position in the row to a Q did not lead to a solution, then we backtrack and try the next row
                board[i][col] = '.'

        # We return false if there are no safe placements in the current column
        return False


    def isPlacementSafe(board, row, col):
        # Check the row on the left side of the current column we are on.
        if any(board[row][i] == 'Q' for i in range(col)):
            return False
        
        # Check the upper diagonal on the left side
        if any(board[row - i][col - i] == 'Q' for i in range(1, min(row, col) + 1)):
            return False
        
        # Check the lower diagonal on the left side
        if any(row + i < n and col - i >= 0 and board[row + i][col - i] == 'Q' for i in range(1, min(n - row, col) + 1)):
            return False
        
        return True

    # Initialize the board
    board = [['.' for _ in range(n)] for _ in range(n)]

    if not solve(board, 0):
        return "No solution exists"
    
    return board

solution = backtracking(4)
print('------------------')
for row in solution:
    print(" ".join(row))
print('------------------')

# Output: 
# [
#  ['.', '.', 'Q', '.'],
#  ['Q', '.', '.', '.'],
#  ['.', '.', '.', 'Q'],
#  ['.', 'Q', '.', '.']
# ]