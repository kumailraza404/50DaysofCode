/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  s.split("").reverse().join("");
};

const input1 = ["flower", "flow", "flight"];

const input2 = ["dog", "racecar", "car"];

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  

    let arr = nums.splice(nums.length - k);
  console.log(nums);
  console.log(arr);

  

  for (var i = arr.length - 1; i >= 0; i--) {
    nums.unshift(arr[i]);
  }
  return nums;
};

let ans = rotate([1, 2, 3, 4, 5, 6, 7], 3);

console.log(ans);
