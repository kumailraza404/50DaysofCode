/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  //find largest number of 1s
  //count if the number is 1 else set temp to 0
  // compare the temp with largestCount and replace if temp is larger than largestCount

  let temp = 0;
  let largestCount = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp = temp + 1;
    } else {
      temp = 0;
    }

    if (temp > largestCount) {
      largestCount = temp;
    }
  }

  return largestCount;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let temp = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 == 0) {
      temp = temp + 1;
    }
  }

  return temp;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let arr = [];

  for (i = 0; i < nums.length; i++) {
    arr.push(nums[i] * nums[i]);
  }

  console.log(arr);

  return arr.sort(function (a, b) {
    return a - b;
  });
};
