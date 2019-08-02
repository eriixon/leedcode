
var reverse = function (x) {
    var reverseN = 0;
    var sign = x < 0;
    x = Math.abs(x);
    while (x) {
        reverseN = reverseN*10 + (x % 10);
        x = Math.floor(x/10);
    }
    return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
};

console.log(reverse(-123))
console.log(reverse(900000))
console.log(reverse(-11100))