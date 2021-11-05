/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let temp = digits.join("");

  console.log(temp, parseInt(temp));

  return Array.from(String(temp), Number);
};

const input1 = [1, 2, 3];
const input2 = [4, 3, 2, 1];
const input3 = [0];

const input4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

const res = plusOne(input4);
console.log(res);

let t = "6145390195186705543";

console.log(parseInt(t));

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  console.log(nums);

  console.log(nums.slice(1));
  console.log(nums.slice(1).reduce((a, b) => a + b));

  if (nums.slice(0, nums.length - 1).reduce((a, b) => a + b) == 0)
    return nums.length - 1;

  for (i = 1; i < nums.length - 1; i++) {
    let firstHalf = [...nums.slice(0, i)].reduce((a, b) => a + b);
    let secondHalf = [...nums.slice(i + 1)].reduce((a, b) => a + b);

    console.log("for i:", i);

    console.log(firstHalf);
    console.log(secondHalf);
    if (firstHalf === secondHalf) return i;
  }

  if (nums.slice(1).reduce((a, b) => a + b) == 0) return 0;

  return -1;
};
