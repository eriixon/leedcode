let twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i]
        if(map[v] >= 0) return [map[v], i]
        map[target - v] = i
    }
};

console.log(twoSum([2,7,11,15,3,4,21], 15));
