
var isPalindrome = function(x) {
    let reverseN = 0;
    if (x<0) return false
    const z = x
    while (x) {
        reverseN = reverseN*10 + (x % 10);
        x = Math.floor(x/10);
    }
    return z === reverseN;
};

console.log(isPalindrome(121))