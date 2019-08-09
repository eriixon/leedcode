var romanToInt = function (s) {
    const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
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
        let x = 0;
        switch (e) {
            case 'V':
            case 'X':
                if ( p === 'I') x = symbols[p]        
                break;
            case 'L':
            case 'C':
                if (p === 'X') x = symbols[p]
                break;
            case 'D':
            case 'M':
                if (p === 'C') x = symbols[p]
                break;
        }
        total += symbols[e] - x*2
    }
    return total
};
// function romanToArabic(romanNumber) {
//     romanNumber = romanNumber.toUpperCase();
//     const romanNumList = ["CM", "M", "CD", "D", "XC", "C", "XL", "L", "IX", "X", "IV", "V", "I"];
//     const corresp = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
//     let index = 0, num = 0;
//     for (let rn in romanNumList) {
//         index = romanNumber.indexOf(romanNumList[rn]);
//         while (index != -1) {
//             num += parseInt(corresp[rn]);
//             romanNumber = romanNumber.replace(romanNumList[rn], "-");
//             index = romanNumber.indexOf(romanNumList[rn]);
//         }
//     }
//     return num;
// }

// console.log(romanToInt('MX'))
// console.log(romanToInt('MCMXCIV'))

// console.log(romanToArabic('MX'))
// console.log(romanToArabic('MCMXCIV'))
