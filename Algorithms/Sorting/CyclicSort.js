// Cyclic sort is an efficient sorting algorithm that works well when the elements to be sorted are in the range from 1 to n. The algorithm places each element at its correct position in the array by swapping elements.

// Step 1: Iterate through the array from the beginning to the end.

// Step 2: For each element, if the element is not at its correct position (i.e., the value at the current index is not equal to the index + 1), swap it with the element at its correct position.

// Step 3: Repeat the process until all elements are in their correct positions.

// The time complexity of the Cyclic sort algorithm is O(n), where n is the number of elements in the array.

function cyclicSort(arr) {
    let i = 0;
    while (i < arr.length) {
        const j = arr[i] - 1;
        j
        if (arr[i] !== arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            // console.log(arr)
            // console.log([arr[i], arr[j]])
        } else {
            i++;
        }
    }
    return arr;
}

// Examples:
const arr = [3, 1, 5, 4, 2];
console.log(cyclicSort(arr));

// const arr2 = [2, 6, 4, 3, 1, 5];
// console.log(cyclicSort(arr2));

// const arr3 = [1, 5, 6, 4, 3, 2];
// console.log(cyclicSort(arr3));

// Tough case
// const arr4 = [5, 4, 3, 2, 1];
// console.log(cyclicSort(arr4));

// Hard case
// const arr5 = [1, 2, 3, 4, 5];
// console.log(cyclicSort(arr5));

// Edge case 
// const arr6 = [1];
// console.log(cyclicSort(arr6));

// Edge case
// const arr7 = [];
// console.log(cyclicSort(arr7));

// NOTE
/**
 * Cyclic sort relies on the property that each number should be placed at the index equal to its value minus one.
 * 
 * the cyclic sort algorithm is specifically designed to work with arrays where the numbers are in the range from 1 to n, where n is the length of the array.
 * 
 * If the number of elements in the array is N and the elements in the array are greater than the range of 1 - N, then the cyclic sort algorithm will not work correctly.
 */