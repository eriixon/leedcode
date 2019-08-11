class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix=''
        if len(strs)==0: return prefix
        for x in zip(*strs):
            if len(set(x)) == 1:
                prefix += x[0]
            else: return prefix
        return prefix