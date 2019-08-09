class Solution:
    def romanToInt(self, s: str) -> int:
        symbols = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        total = 0
        if len(s) == 1: return symbols[s]
        else: total += symbols[s[0]]
        for i in range(1, len(s)):
            c = s[i]
            x = 0
            if ((c == 'V' or c == 'X') and s[i-1] == 'I') \
                    or ((c == 'L' or c == 'C') and s[i-1] == 'X') \
                    or ((c == 'D' or c == 'M') and s[i-1] == 'C'):
                x = symbols[s[i-1]]
            total += symbols[c] - x*2
        return total

s = Solution()
print(s.romanToInt('MCMXCIV'))
