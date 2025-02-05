class Stack {
  constructor() {
    this.stack = [];
    this.top = -1; // Start with an empty stack (top points before index 0)
  }

  push(element) {
    this.top += 1; // Move the top index up
    this.stack[this.top] = element; // Place the element at the new "top"
  }

  pop() {
    if (this.top === -1) {
      throw new Error("Stack underflow");
    }
    const poppedElement = this.stack[this.top]; // Get the top element
    this.top -= 1; // Move the top index down
    return poppedElement; // Return the popped element
  }

  peek() {
    if (this.top === -1) {
      throw new Error("Stack is empty");
    }
    return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
