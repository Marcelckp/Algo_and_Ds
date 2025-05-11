const binSearch = (nums: number[], k: number) => {
  nums = nums.sort((a, b) => a - b);

  while (nums.length) {
    const halfWay = Math.round(Math.abs(nums.length / 2));
    if (nums[halfWay] === k || (nums.length === 1 && nums[0] === k))
      return true;
    if (nums[halfWay] >= k) nums = nums.slice(0, halfWay);
    else nums = nums.slice(halfWay);
    console.log(nums);
  }
  return false;
};

// Findable
// console.log(binSearch([1, 3, 4, 8, 7, 2, 6, 7, 5], 5));
// console.log(binSearch([1, 2, 3, 4], 2));

// Not findable
// console.log(binSearch([1, 9, 3], 2));
// console.log(binSearch([1, 9, 7, 50, 33, 2, 1, 2, 4, 5, 5, 0, 1, 3], 6));
