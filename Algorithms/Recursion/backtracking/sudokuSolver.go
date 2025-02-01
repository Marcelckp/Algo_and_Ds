package main

import "fmt"

func isNumValidForPlacement(board [][]int, row, col, num int) bool {
	// Check if the number is in the row or the column
	for i := 0; i < len(board); i++ {
		if board[row][i] == num || board[i][col] == num {
			return false
		}
	}

	// Check if the number is in the 3x3 grid
	startRow := row - row % 3
	startCol := col - col % 3

	// Iterate through the 3x3 grid
	/* 
		EG:
		[startRow, startCol]       [startRow, startCol + 1]       [startRow, startCol + 2]
		[startRow + 1, startCol]   [startRow + 1, startCol + 1]   [startRow + 1, startCol + 2]
		[startRow + 2, startCol]   [startRow + 2, startCol + 1]   [startRow + 2, startCol + 2]
	*/
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			if board[i + startRow][j + startCol] == num {
				return false
			}
		}
	}

	return true
}

func sudokuSolver(board [][]int) (bool, [][]int) {
	
	// Start a the beginning of the board and find the first empty cell
	// If there are no empty cells, return true
	// If there are empty cells, try to place a number in the cell
	// If the number is valid, move to the next cell
	// If the number is not valid, try the next number
	// If all numbers are not valid, backtrack to the previous cell and try the next number

	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			if board[i][j] == 0 {
				// We have found an empty cell
				// Try to place a number in the cell

				for num := 1; num <= 9; num++ {
					// Check if the number is valid for placement
					if isNumValidForPlacement(board, i, j, num) {
						// Place the number in the cell if its valid and move to the next cell
						board[i][j] = num

						// Recursively call the function to solve the board
						if solved, _ := sudokuSolver(board); solved {
							return true, board
						} else {
							// backtrack if the board is not solved and try the next number in the cell
							board[i][j] = 0
						}
					}
				}
				// If all numbers are invalid we need to backtrack back to the previous cell and try the next number in the previous cell if possible otherwise we return back until we find a cell with a number that can be changed and keep going out of the recursive context until their are no more cells to backtrack to. If we reach the first cell and all numbers are invalid then we return false and the board as it is unsolvable
				return false, board
			}
		}
	}

	return true, board
}

func main() {
	// Solvable board test case
	res, board := sudokuSolver([][]int{ 	
		{5, 3, 0, 0, 7, 0, 0, 0, 0},
		{6, 0, 0, 1, 9, 5, 0, 0, 0},
		{0, 9, 8, 0, 0, 0, 0, 6, 0},
		{8, 0, 0, 0, 6, 0, 0, 0, 3},
		{4, 0, 0, 8, 0, 3, 0, 0, 1},
		{7, 0, 0, 0, 2, 0, 0, 0, 6},
		{0, 6, 0, 0, 0, 0, 2, 8, 0},
		{0, 0, 0, 4, 1, 9, 0, 0, 5},
		{0, 0, 0, 0, 8, 0, 0, 7, 9},
	})

	if res {
		fmt.Println("Solved")
	} else {
		fmt.Println("Unsolvable")
	}
	fmt.Println("")
	for _, row := range board {
		fmt.Println(row)
	}

	fmt.Println("")

	// Unsolvable board test case
	res2, board2 := sudokuSolver([][]int{ 	
		{6, 3, 0, 0, 7, 0, 0, 0, 0},
		{6, 0, 0, 1, 9, 5, 0, 0, 0},
		{0, 9, 8, 0, 0, 0, 0, 6, 0},
		{8, 0, 0, 0, 6, 0, 0, 0, 3},
		{4, 0, 0, 8, 0, 3, 0, 0, 1},
		{7, 0, 0, 0, 2, 0, 0, 0, 6},
		{0, 6, 0, 0, 0, 0, 2, 8, 0},
		{0, 0, 0, 4, 1, 9, 0, 0, 5},
		{0, 0, 0, 0, 8, 0, 0, 7, 9},
	})

	if res2 {
		fmt.Println("Solved")
	} else {
		fmt.Println("Unsolvable")
	}
	fmt.Println("")
	for _, row := range board2 {
		fmt.Println(row)
	}
}