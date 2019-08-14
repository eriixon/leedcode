/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     if(s.length % 2 !== 0) return false;
//     while (s.indexOf("()") > -1 || s.indexOf('{}') > -1 || s.indexOf('[]') > -1){
//         s = s.replace('()', '').replace('{}', '').replace('[]', '')
//     }
//     return s.length === 0
// };

var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    pmap = { ")": "(", "}": "{", "]": "[" }
    stack = []
    for (const c of s) {
         if (c in pmap){
            let topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement != pmap[c]) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};

isValid('()')