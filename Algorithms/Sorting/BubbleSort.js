function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // We continue to loop until swapped is false (i.e. no more swaps are needed)
    // We continue to compare the current index if it's greater than the next index
    // And we do this until we reach the end of the array (n - 1) 
    // We then reduce the range of comparison by 1 so that we don't wast time comparing the last element as they are already sorted and will be larger
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Reduce the range of comparison
    } while (swapped);
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));