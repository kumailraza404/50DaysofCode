/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const temp1 = arr[i];

    for (let j = 0; j < arr.length; j++) {
      const temp2 = arr[j];

      if (temp2 === 2 * temp1 && i !== j) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let goUpCheck = false;
  let goDownCheck = true;
  //will start from first index and check previous
  let index = 1;

  while (arr[index] > arr[index - 1]) {
    index++;
    goUpCheck = true;
  }

  if (arr[index] == arr[index + 1]) return false;

  while (arr[index] > arr[index]) {
    index++;
    goDownCheck = true;
  }

  return goUpCheck & goDownCheck && index == arr.length;
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  if (arr.length == 1) return [-1];

  for (i = 0; i < arr.length - 1; i++) {
    let max;

    max = Math.max(...arr.slice(i + 1, arr.length));

    arr[i] = max;
  }

  arr[arr.length - 1] = -1;
  return arr;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  // Loop for all the elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is equal to the next element, we skip
    if (nums[i] == nums[i + 1]) {
      continue;
    }
    // We will update the array in place
    nums[count] = nums[i];
    count++;
  }
  return count;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let evenArr = nums.filter((num) => num % 2 === 0);
  let oddArr = nums.filter((num) => num % 2 !== 0);

  return [...evenArr, ...oddArr];
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
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => a - b);
  console.log(heights);
  console.log(expected);
  let counter = 0;

  for (i = 0; i < expected.length; i++) {
    if (expected[i] !== heights[i]) counter++;
  }

  return counter;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let maxArray = [];

  nums = [...new Set(nums)];

  if (nums.length === 3) {
    console.log("length is eq to 3");
    maxArray = nums.sort((a, b) => a - b);
    return maxArray[0];
  }
  if (nums.length < 3) {
    maxArray = nums.sort((a, b) => a - b);
    return maxArray[nums.length - 1];
  }

  for (i = 0; i < 3; i++) {
    let tempMax;
    tempMax = Math.max(...nums);
    maxArray.push(tempMax);
    nums = nums.filter((num) => num !== tempMax);
  }

  return Math.min(...maxArray);
};
