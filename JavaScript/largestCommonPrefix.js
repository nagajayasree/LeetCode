//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  // console.log(strs.sort());

  let max = strs.length;
  let index = 0;
  let prefix = '';

  for (let i = 0; i < max; i++) {
    if (strs[i][index] === strs[i + 1][index]) {
      prefix += strs[i][index];
      // index++;
      // console.log(prefix);
      // console.log(index);
      return prefix;
    }
    return '';
  }
};

longestCommonPrefix(['flower', 'flow', 'flight']);

// let s = 'flower';
// console.log(s.slice(0, 2));
// console.log(s.substring(0, 2));
