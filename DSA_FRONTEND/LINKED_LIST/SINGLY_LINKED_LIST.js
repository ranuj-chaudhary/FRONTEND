class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = null;
    while (current && current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;

    if (prev) {
      prev.next = null;
    }

    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let count = 0;
    let current = this.head;
    while (index !== count) {
      current = current.next;
      count++;
    }
    return current;
  }
  insert(val, index) {
   
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    // create new node
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const current = prev.next;
    prev.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return !!this.shift();
    if(index === this.length) return !!this.pop();
    const prev = this.get(index - 1)
    const temp = prev.next;
    prev.next = temp.next;
    temp.next = null;
    this.length--
    return true;
  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = node.next
    while(next){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    node = prev;
    return node;
  }

}

const mathsTopper = new SinglyList(1);
mathsTopper.push(2);
mathsTopper.push(3);
console.log(mathsTopper);
mathsTopper.reverse();
console.log(mathsTopper);
