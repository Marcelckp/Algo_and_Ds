/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 */

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     for(var i=0;i<n;i++)
//     {
//        nums1[m+i]=nums2[i];
//     }
//     nums1.sort((a,b)=>{return a-b});
// };


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // pointer for the nums1 array (i - the amount of 0 in the array) & nums2 array (j)
    let i = m - 1, j = n - 1;
    // indicator for us to remove a space from the origin array so that we know that space has been covered
    let end = m + n - 1;
    // create a while loop that runs util the pointers have reached 0
    // We compare the values at each array pointer index and then if the value if less than or grater since we know its a ordered array we can place the grater of the values at the end of the array and the decrement the necessary pointers util the loops run condition fails
    while (i >= 0 && j >= 0) {
        console.log(nums1[i], nums2[j])
        
        if (nums1[i] < nums2[j]) {
            nums1[end--] = nums2[j--];
        } else {
            nums1[end--] = nums1[i--];
        }
        console.log(nums1[end], nums1, nums1[i], nums2[j])
    }
    // if the length of nums1 / value of m is 0 -> meaning that the nums1 array has no values to check against
    while (j >= 0) {
        nums1[end--] = nums2[j--];
        console.log(nums1[i], nums2[j])
    }
    // T.C: O(M + N)
    // S.C: O(1)
};