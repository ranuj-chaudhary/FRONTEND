class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class UndoRedo {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    this.tail = temp.prev;
    if (this.tail) {
      this.tail.next = null;
    }
    temp.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    if (!this.head) return undefined;
    let current = this.head;
    const history = [];
    while (current) {
      history.push(current.val);
      current = current.next;
    }
    return history;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length || typeof index !== "number")
      return undefined;
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(val, index) {
    if (typeof val !== "string") return undefined;
    if (index < 0 || index >= this.length || typeof index !== "number") {
      return undefined;
    }
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    current.val = val;
    return true;
  }

  insert(val, index) {
    if(typeof index !== 'number'){
      console.error('only string params are allowed')
      return undefined;
    }
    if (index < 0 || index >= this.length)
      return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);
    const newNode = new Node(val);
    const current = this.get(index);
    const prev = current.prev;
    prev.next = newNode;
    newNode.next = current;
    newNode.prev = prev;
    current.prev = newNode;
    this.length++;
    return true;
  }

  remove(index){
    if(typeof index !== 'number'){
      console.error('only string params are allowed')
      return undefined;
    }
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0 ) return !!this.shift();
    if(index === this.length - 1) return !!this.pop();
    let current = this.get(index);
    const prev = current.prev;
    prev.next = current.next;
    current.next.prev = prev;
    current.prev = null;
    current.next = null;
    this.length--;
    return true;
  }
}

const history = new UndoRedo();

history.push("home page");
history.push("contact us page");
history.push("about us page");
// console.log(history);
history.unshift("google");
// console.log(history);
// console.log(history.print());
// console.log(history.shift());
// console.log(history.shift());
// console.log(history)
// console.log(history.get(true));
// console.log(history.get(-1));
// console.log(history.get(10));
// console.log(history.get(4));
console.log(history.set("bing", 0));
history.insert("yahoo", 1);
console.log(history.print());
console.log(history.remove(4));
console.log(history.print());
