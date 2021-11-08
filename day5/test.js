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

const input1 = [1, 4, 3, 2];
const input2 = [6, 2, 6, 5, 1, 2];

const ans = arrayPairSum(input2);
console.log(ans);
