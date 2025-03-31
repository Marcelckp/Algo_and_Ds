package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func isPalindrome(head *ListNode) bool {
	fast, slow := head, head
	for fast != nil && fast.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
	}
	// Once the fast pointer reaches the end of the list our slow pointer will be at the middle of the list so we can reverse the second half of the list and compare it to the first half

	// reverse the second half of the linked list
	var prev *ListNode
	for slow != nil {
		// We store a ref to the next node
		temp := slow.Next
		// We set the next node to the previous node. At first it will be nil, then it will be the last node of the list
		slow.Next = prev

		// We move the prev pointer to the current node
		prev = slow

		// We move the slow pointer to the next node
		slow = temp
	}
	// By the end of this the prev pointer will be the last node of the list and will reference the nodes until the middle of the list from the back

	// The middle point of the original list will now be the head of the second half of the list
	
	// compare the first half and the second half of the list until the prev pointer reference reaches nil as it will reach nil before the head pointer reaches nil
	for prev != nil && head != nil {
		if prev.Val != head.Val {
			return false
		}
		prev = prev.Next
		head = head.Next
	}
	return true
}

func main() {
	// Positive case
	head := &ListNode{
		Val: 'L', 
		Next: &ListNode{
			Val: 'E', 
			Next: &ListNode{
				Val: 'V', 
				Next: &ListNode{
					Val: 'E', 
					Next: &ListNode{
						Val: 'L',
						Next: nil,
					},
				},
			},
		},
	}

	fmt.Println(isPalindrome(head)) // true

	// False case
	head = &ListNode{
		Val: 'L',
		Next: &ListNode{
			Val: 'E',
			Next: &ListNode{
				Val: 'V',
				Next: &ListNode{
					Val: 'E',
					Next: &ListNode{
						Val: 'L',
						Next: &ListNode{
							Val: 'S',
							Next: nil,
						},
					},
				},
			},
		},
	}
	
	fmt.Println(isPalindrome(head)) // false
}