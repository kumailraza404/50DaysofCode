/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let allSum = nums.reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    let rightSum = allSum - leftSum - nums[i];
    if (leftSum == rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;

  let sortedArr = [...nums];

  sortedArr = [...sortedArr.sort((a, b) => a - b)];

  let max = sortedArr[sortedArr.length - 1];

  console.log("here is sorted arrar", sortedArr);

  if (sortedArr[sortedArr.length - 2] * 2 > sortedArr[sortedArr.length - 1])
    return -1;

  return nums.indexOf(max);
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var i = digits.length - 1;
  var val = 0;
  var carry = 1;
  while (i >= 0 && carry) {
    val = digits[i] + carry;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
  }
  if (carry) digits.unshift(carry);
  return digits;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == "") return 0;

  return haystack.indexOf(needle);
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0;

  while (i < strs[0].length) {
    if (!strs.every((str) => str[i] === strs[0][i])) break;
    i++;
  }

  if (i == 0) return "";
  return strs[0].slice(0, i);
};
