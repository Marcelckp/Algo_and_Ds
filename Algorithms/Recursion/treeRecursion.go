package main

import "fmt"

func generateAllSubsets(subset []int) [][]int {
    res := make([][]int, 0)
    generateAllSubsetsHelper(subset, 0, []int{}, &res)
    return res
}

func generateAllSubsetsHelper(originalSubset []int, index int, currentSubset []int, res *[][]int) {
    // base case is when the res we are creating reaches the length of the originalSubset we then append the currentSubset to the res and return
    if index == len(originalSubset) {
        // * references the value of the pointer
        *res = append(*res, append([]int{}, currentSubset...))
        return
    }

    // recursive case
    // exclude the current element
    // recurse all the way to the end of the array and then backtrack to the previous element and include it
    generateAllSubsetsHelper(originalSubset, index+1, currentSubset, res)

    // include the current element
    currentSubset = append(currentSubset, originalSubset[index])

    // recurse all the way to the end of the array and then backtrack to the previous element and exclude it
    generateAllSubsetsHelper(originalSubset, index+1, currentSubset, res)
    
    // remove the last element from the currentSubset so that we can backtrack to the previous element to continue the recursion
    currentSubset = currentSubset[:len(currentSubset)-1]

    return
}

func main() {
	res := generateAllSubsets([]int{1, 2, 3})
	fmt.Println(res)
}