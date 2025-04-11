function twoSumSorted(arr, target) {
    let left = 0;               // First pointer at the start
    let right = arr.length - 1; // Second pointer at the end
  
    while (left < right) {
      let sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [arr[left], arr[right]]; // Found the pair!
      } else if (sum < target) {
        left++; // Move left pointer right to make the sum bigger
      } else {
        right--; // Move right pointer left to make the sum smaller
      }
    }
  
    return []; // No pair found
  }
  
  // Example usage:
  const numbers = [1, 3, 4, 5, 7, 10, 12];
  const target = 9;
  
  console.log(twoSumSorted(numbers, target)); // Output: [4, 5]