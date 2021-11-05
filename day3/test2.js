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

const input1 = ["flower", "flow", "flight"];

const input2 = ["dog", "racecar", "car"];

const ans = longestCommonPrefix(input1);

console.log(ans);
