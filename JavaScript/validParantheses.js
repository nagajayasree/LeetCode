// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let left = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            left.push(s[i]);
        } else if (s[i] === ")" && left.length !== 0 && left[left.length - 1] === "(") {
            left.pop();
        } else if (s[i] === "]" && left.length !== 0 && left[left.length - 1] === "[") {
            left.pop();
        } else if (s[i] === "}" && left.length !== 0 && left[left.length - 1] === "{") {
            left.pop();
        } else {
            return false;
        }
    }
    return left.length === 0;
};