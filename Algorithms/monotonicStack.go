package main

import (
	"fmt"
)

func findNextGreatest_OG_Approach(arr []int) ([]int) {
	stack := make([]int, 0)
	stack = append(stack, 0)
	out := make([]int, len(arr))
	idx := 1

	// The pattern here is that if we are on the current index and we find values less than the current value at the next indexes than we know if we find the next greater value of the


	// There are no while loops in GO so we use a for loop with a condition to simulate a while loop
	for len(stack) > 0 && idx < len(arr)  {
		// Compare the top of the stack with the current value at the index we are on
		if arr[stack[len(stack) - 1]] < arr[idx] {
			// Pop the top of the stack and store it


			// Update the output array with the current value since it's safe to assume that all the values in the stack are less than the current value
			// This is because the stack is a monotonic stack and the values in the stack are in increasing order from the bottom to the top
			// The values in the stack are the indexes of the values in the array not the values themselves
			for _, val := range stack {
				// Double check that the value at the current index is greater than the value at the index in the stack
				// Just because we found a next greater value for the value at the top of the stack does not mean that the 
				if arr[val] < arr[idx] {
					out[val] = arr[idx]
				}
			}

			// This will continue the process for the previous index and check if it is greater than the current index and sort of recursively update the values in the stack
			stack = append(stack[:len(stack) - 1], idx)
		} else {
			stack = append(stack, idx)
		}

		// Move to the next index
		idx += 1
	}

	return out
}

func findNextGreatest_CopilotApproach(arr []int) []int {
	stack := make([]int, 0)
	out := make([]int, len(arr))

	// Initialize the output array with -1 (or any other value that indicates no greater element)
	for i := range out {
		out[i] = 0
	}

	for idx := 0; idx < len(arr); idx++ {
		// While stack is not empty and the current element is greater than the element at the index stored at the top of the stack
		for len(stack) > 0 && arr[idx] > arr[stack[len(stack)-1]] {
			// Pop the top of the stack and update the output array
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			out[top] = arr[idx]
		}
		// Push the current index onto the stack
		stack = append(stack, idx)
	}

	return out
}

func main() {
	fmt.Println(findNextGreatest_OG_Approach([]int {1, 4, 6, 3, 2, 7})) // [4, 6, 7, 7, 7, 0]
	fmt.Println(findNextGreatest_CopilotApproach([]int {1, 4, 6, 3, 4, 7})) // [4, 6, 7, 4, 7, 0]
	fmt.Println(findNextGreatest_OG_Approach([]int {1, 2, 3, 4, 5})) // [2, 3, 4, 5, 0]
	fmt.Println(findNextGreatest_CopilotApproach([]int {-1, 1, 9, 0, 1})) // [1, 9, 0, 1, 0]
}

