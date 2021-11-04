/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  tempArray = [];

  for (i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      console.log(i);
    }
  }
};

const res = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(res);
