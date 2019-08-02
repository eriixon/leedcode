from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, num in enumerate(nums):
            n = target - num
            if n in map:
                return [map[n], i]
            else:
                map[num] = i
    
s = Solution()
print(s.twoSum([2,7,11,15,3,4,21], 15))
