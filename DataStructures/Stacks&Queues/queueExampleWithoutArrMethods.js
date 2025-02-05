class Queue {
  constructor() {
    this.queue = [];
    this.front = 0; // Points to the front of the queue
    this.back = 0; // Points to the next empty position in the queue
  }

  enqueue(element) {
    this.queue[this.back] = element; // Place the element at the "back"
    this.back += 1; // Move the back pointer to the next position
  }

  dequeue() {
    if (this.front === this.back) {
      throw new Error("Queue underflow");
    }
    const dequeuedElement = this.queue[this.front]; // Get the element at the front
    this.front += 1; // Move the front pointer to the next position
    return dequeuedElement; // Return the dequeued element
  }

  peek() {
    if (this.front === this.back) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.front];
  }

  isEmpty() {
    return this.front === this.back;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
