const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count2 = {};

  for (let char of s2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  let result = 0;

  for (let char of s1) {
    if (count2[char]) {
      result++;
      count2[char]--;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};