/*
    Leet Code - 1091

    Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

    A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

    All the visited cells of the path are 0.
    All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
    The length of a clear path is the number of visited cells of this path.


    Example 1:

    Input: grid = [[0,1],[1,0]]
    Output: 2


    Example 2:

    Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
    Output: 4


    Example 3:

    Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
    Output: -1
    

    Constraints:

        • n == grid.length
        • n == grid[i].length
        • 1 <= n <= 100
        • grid[i][j] is 0 or 1
*/

function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1)
    return -1;

  if (grid.length === 1 && grid[0][0] === 0) return 1;

  grid[0][0] = 2;
  
  const queue: number[][] = [[0, 0]];

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  while (queue.length) {
    const [cellRow, cellColumn] = queue.shift()!;

    for (let [row, column] of directions) {
      const neighborRow: number = cellRow + row;
      const neighborColumn: number = cellColumn + column;

      /*
         - check if the matrix location is within the grid.
         - check if the number at the matrix location is available 
         - check if the cell has been visited before
         */
      if (
        neighborRow > grid.length - 1 ||
        neighborColumn > grid.length - 1 ||
        neighborColumn < 0 ||
        neighborRow < 0 ||
        grid[neighborRow][neighborColumn] !== 0 // This works since if we have mutated the neighbors of this cell we would notice that the cell will have a true value in our visited matrix.
      )
        continue;

      // check if the current cell position is the end cell destination on the grid binary matrix
      if (neighborRow === grid.length - 1 && neighborColumn === grid.length - 1)
        return grid[cellRow][cellColumn];

      queue.push([neighborRow, neighborColumn]);
      grid[neighborRow][neighborColumn] = grid[cellRow][cellColumn] + 1;
    }
  }

  return -1;
}
