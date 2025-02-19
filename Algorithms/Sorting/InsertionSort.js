function insertionSort(arr) {
    // Loop through each element in the array starting from the second element

    // We sort the array from the current index backwards to the beginning of the array.
    for (let i = 1; i < arr.length; i++) {
        // Store the current element in a variable
        let current = arr[i];
        // Initialize a variable to keep track of the previous index
        let j = i - 1;

        // Loop through the sorted portion of the array and shift elements to the right
        // until we find the correct position for the current element
        while (j >= 0 && arr[j] > current) {
            console.log(arr[j])
            console.log(arr)
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }

    // Return the sorted array
    return arr;
}

// Example usage:
const array = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(array)); // Output: [1, 2, 5, 5, 6, 9]