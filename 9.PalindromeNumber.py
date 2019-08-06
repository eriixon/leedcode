import math

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if (x <0):
            return False
        rev, z = 0, x
        while (x) :
            rev = rev*10 + (x % 10);
            x = math.floor(x/10)
        return z == rev
    

s= Solution()
print(s.isPalindrome(-101))