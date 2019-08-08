const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
var romanToInt = function (s) {
    let total = 0
    var arr = s.split('')
    if (arr.length === 1) return symbols[s]
    else {
        let x = symbols[arr[0]]
        total += x
    }
    for (let index = 1; index < arr.length; index++) {
        const e = arr[index];
        const p = arr[index-1];
        total+=symbols[e];
        if ((e === 'V' || e === 'X') && p==='I') total -= symbols[p]
        else if ((e === 'L' || e === 'C') && p==='X') total -= symbols[p]
        else if ((e === 'D' || e === 'M') && p==='C') total -= symbols[p]
    }
    return total
};

console.log(romanToInt('MX'))
console.log(romanToInt('MCMXCIV'))
