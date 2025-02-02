const divAndConquer = (arr) => {
  const values = { max: -Infinity, min: Infinity };

  const helper = (arr) => {
    if (arr.length === 1) {
      values.max = Math.max(values.max, arr[0]);
      values.min = Math.min(values.min, arr[0]);
      return;
    }

    const mid = Math.floor(arr.length / 2);

    // Would this be considered a tail recursion? 
    // No, because the function is called twice, not once.
    // The function is called twice because the array is divided into two halves.
    // We recurse on the first half and then recurse on the second half. Until we reach the base case.
    // The base case will be when the array has only one element. And we will update the max and min values. Each of the values will be in an array of length 1.
    helper(arr.slice(0, mid));
    helper(arr.slice(mid));

    return values;
  };
  helper(arr);
  return values;
};

console.log(divAndConquer([2, 8, 1, 4, 9, 7])); // Max: 9, Min: 1
// Division steps:
// [2, 8, 1, 4, 9, 7]
// [2, 8, 1] [4, 9, 7]
// [2] [8, 1] [4] [9, 7]
// [2] [8] [1] [4] [9] [7]

console.log(divAndConquer([2, 8, 1, 4, 9, 7, 10])); // Max: 10, Min: 1
// Division steps:
// [2, 8, 1, 4, 9, 7, 10]
// [2, 8, 1] [4, 9, 7, 10]
// [2] [8, 1] [4, 9] [7, 10]
// [2] [8] [1] [4] [9] [7] [10]
