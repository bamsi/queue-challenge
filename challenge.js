// Start with your code from LinkedList challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Queue {
  add(number) {
    let current = this.head;
    if (this.head == null) {
      this.head = new Node(number);
      return;
    }

    while (current.next_node != null) {
      current = current.next_node;
    }
    current.next_node = new Node(number);
  }

  remove() {
    let current = this.head;
    if (current == null) {
      return -1;
    }
    if (current.next_node == null) {
      this.head = null;
      return current.value;
    }
    this.head = current.next_node;
    return current.value;
  }
}

const queue = new Queue();

queue.add(3);
queue.add(5);
console.log(queue.remove());
// => 3

queue.add(2);
queue.add(7);
console.log(queue.remove());
// => 5

console.log(queue.remove());
// => 2

console.log(queue.remove());
// => 7

console.log(queue.remove());
// => -1

module.exports = Queue;
