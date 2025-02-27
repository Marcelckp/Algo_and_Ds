# https://leetcode.com/problems/reverse-linked-list/
# Recursive solution using tuples for new head and tail of the reversed list storage
# Time complexity: O(n)
# Space complexity: O(n) due to recursion stack
# Where n is the number of nodes in the linked list
# Python3 implementation
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def traverse(h: Optional[ListNode], newHead: Optional[ListNode]):
            if h is None or h.next is None:
                return (h, h)
        
            (nh, newHead) = traverse(h.next, newHead)
            nh.next = h
            return (h, newHead)

        (h, newHead)= traverse(head, head)
        if h: 
            h.next = None
        return newHead