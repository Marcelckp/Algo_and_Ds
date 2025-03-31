class linkedListNode:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

def find_middle_of_linked_list(head):
    slow, fast = head, head
    
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next

    return slow


# Example usage
# Create a linked list
node7 = linkedListNode(7)
node6 = linkedListNode(6, node7)
node5 = linkedListNode(5, node6)

node4 = linkedListNode(4, node5) # Middle

node3 = linkedListNode(3, node4)
node2 = linkedListNode(2, node3)
node1 = linkedListNode(1, node2)

print(find_middle_of_linked_list(node1).value)  # Output: 4