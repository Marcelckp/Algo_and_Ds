class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function createLinkedListWithCycle() {
    let head = new ListNode(1);
    let second = new ListNode(2);
    let third = new ListNode(3);
    let fourth = new ListNode(4);
    let fifth = new ListNode(5);

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth;
    fifth.next = third; // Creating a cycle here

    return head;
}

let head = createLinkedListWithCycle();

function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // The fast will catch up with the slow if there is a cycle
        if (slow === fast) {
            return true;
        }
    }
}