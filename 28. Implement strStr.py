class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return 0 if len(needle) == 0 else haystack.find(needle)