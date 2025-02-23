package main

import (
	"fmt"
)

func findNextGreatest(arr []int) ([]int) {
	stack := make([]int, 0)
	stack = append(stack, 0)
	out := make([]int, len(arr))

	for idx /*, _ */ := range arr {
		// We need to store the current top of the stack
		arrIdx := stack[len(stack) - 1]

		// Loop through the stack and check if the current element is greater than the top of the stack
		for len(stack) > 0 && arr[arrIdx] < arr[idx] {
			// We have found the next greatest element 
			// So we can pop the element from the stack and update the output array
			out[arrIdx] = arr[idx]
			stack = stack[:len(stack) - 1]
			if len(stack) > 0 {
				arrIdx = stack[len(stack) - 1]
			}
		}
	}

	return out
}

func main() {
	fmt.Println(findNextGreatest([]int {1, 4, 6, 3, 2, 7}))
	// fmt.Println(findNextGreatest([]int {1, 2, 3, 4, 5}))
}

