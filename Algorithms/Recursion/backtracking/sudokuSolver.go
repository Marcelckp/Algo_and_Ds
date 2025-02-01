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
					if isNumValidForPlacement(board, i, j, num) {
						board[i][j] = num

						if solved, _ := sudokuSolver(board); solved {
							return true, board
						} else {
							board[i][j] = 0
						}
					}
				}
				return false, board
			}
		}
	}

	return true, board
}

func main() {
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

	fmt.Println(res)
	fmt.Println("")
	for _, row := range board {
		fmt.Println(row)
	}
}