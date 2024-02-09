function isPalindrome(x: number): boolean {
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    if (reversed === x) {
        return true;
    } return false;
};