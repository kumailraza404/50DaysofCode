/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let min;
  let minSum = 0;

  for (i = 0; i < nums.length; i = i + 2) {
    min = Math.min(nums[i], nums[i + 1]);
    console.log(min);
    minSum = minSum + min;
  }
  return minSum;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //   nums = nums.filter((el) => el !== val);

  //   console.log(nums);

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      let counter = 0;
      let j = i + 1;
      while (i < nums.length) {
        counter++;
        if (nums[j] !== val) {
          break;
        }

        j++;
      }
      nums.splice(i, counter);
    }
  }
  console.log(nums);

  return nums.length;
};

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
