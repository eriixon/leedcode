/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     if (nums.length === 0 ) return 0;
//     let x = 0;
//     for (let i = 0; i < nums.length; i++) {
//         const e = nums[i];
//         if (nums[x] !== nums[i]) {
//             x++;
//             nums[x] = nums[i];
//         }        
//     }
//     return x+1;
// };

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let len = 1, cur = 0, next = 1;
    while (next < nums.length) {
      if (nums[cur] !== nums[next]) {
        len++;
        if (cur + 1 !== next) {
          [nums[cur + 1], nums[next]] = [nums[next], nums[cur + 1]];
        }
        cur++;
      }
      next++;
    }
    return len;
  };