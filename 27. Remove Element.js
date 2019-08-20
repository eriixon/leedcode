var removeElement = function(nums, val) {
    if (nums.length === 0 ) return 0;
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j] !== val){
            nums[i] = nums[j]
            i++
        }
        j++
    }
    return i
};

var removeElement2 = function(nums, val) {
    nums = nums.filter(v => { return v != val });
    return nums.length
    // return (nums.splice(0, nums.length, ...nums.filter(v => { return v != val }))).length
  };

console.log(removeElement2([0,0,1,1,1,2,2,3,3,4,4,5,5,5]))