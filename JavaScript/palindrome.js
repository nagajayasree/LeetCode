//Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let isPalindrome = parseInt(x.toString().split('').reverse().join(''));
    if (isPalindrome === x) {
        return true;
    } return false;
};

