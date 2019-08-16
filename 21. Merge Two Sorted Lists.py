# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        prev = ListNode(-1)
        now = prev
        while l1 or l2:
            if l1 and l2:
                l1, l2 = (l1, l2) if l1.val < l2.val else (l2, l1)
                now.next = l1
                now = now.next
                l1 = l1.next
            else:
                now.next = l1 or l2
                l1, l2 = None, None

        return prev.next