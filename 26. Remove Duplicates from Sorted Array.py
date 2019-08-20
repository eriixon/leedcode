class Solution:
    # def removeDuplicates(self, nums: List[int]) -> int:
    # def removeDuplicates(self, nums):
    #     if len(nums) == 0: return 0
    #     l, cur, n = 1, 0, 1;
    #     while n < len(nums):
    #         if nums[cur] != nums[n]:
    #             l += 1
    #             if (cur + 1) != n:
    #                 nums[cur + 1], nums[n] = nums[n], nums[cur + 1]
    #             cur+= 1
    #         n+=1
    #     return l
    def removeDuplicates(self, nums):
        i=0
        while i<len(nums)-1:
            if nums[i]==nums[i+1]:
                nums.remove(nums[i])
            else:i+=1
        return len(nums)
s = Solution()
z = s.removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,5,5,5])
print(z)
