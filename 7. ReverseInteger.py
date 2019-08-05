import math

class Solution:
    def reverse(self, x: int) -> int:
        if x >= 2**31-1 or x <= -2**31: return 0
        sign = x < 0
        x = abs(x)
        rev = 0
        while x:
            rev = rev*10 + (x % 10)
            x = math.floor(x/10)
        if rev >= 2**31-1 or rev <= -2**31: return 0
        else: return -rev if sign else rev


s = Solution()

print(s.reverse(1534236469))
print(s.reverse(-123))
print(s.reverse(900000))
print(s.reverse(-11100))
