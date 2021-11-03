/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (i = 0; i < arr.length - 1; i++) {
    //iterate through arr
    if (arr[i] == 0) {
      // if 0 is found, iterate the array from j(last index) to i *backwards* and push values
      for (j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums2.forEach((el, index) => (nums1[m + index] = el));
  nums1.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // let res = nums.filter((el) => el !== val);

  // nums.map((el, index) =>
  //     nums[index] = res[index]
  // )

  // return nums.length

  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let temp = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      continue;
    }
    nums[temp] = nums[i];
    temp++;
  }
  return temp;
};
