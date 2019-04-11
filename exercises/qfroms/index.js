// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.queOne = new Stack()
    this.queTwo = new Stack()
  }

  add(n) {
    this.queOne.push(n)
  }

  remove() {
    while(this.queOne.peek()) {
      this.queTwo.push(this.queOne.pop())
    }

    const removed = this.queTwo.pop()

    while(this.queTwo.peek()) {
      this.queOne.push(this.queTwo.pop())
    }


    return removed
  }

  peek() {
    while (this.queOne.peek()) {
      this.queTwo.push(this.queOne.pop())
    }

    const peeked = this.queTwo.peek()

    while(this.queTwo.peek()) {
      this.queOne.push(this.queTwo.pop())
    }

    return peeked
  }
}

module.exports = Queue;
