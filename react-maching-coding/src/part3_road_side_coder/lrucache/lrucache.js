class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  push(key, value) {
    if (this.cache[key]) {
      // move recent value to front;

      this.moveToFront(key);
      return;
    } else if (Object.keys(this.cache).length === this.capacity) {
      // 1) Remove last node if cache limit exceeds reomve last element;
      this.removeLastNode(key);

      // 2) Insert new element to the front of LRUcache
      this.addToFront(key, value);
      return;
    }
    // if value not exist in cache add new value to LRUcache
    this.addToFront(key, value);
  }

  addToFront(key, value) {
    let newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // add new value to cache;
    this.cache[key] = newNode;
  }

  removeLastNode(key) {
    let node = this.head;
    let prev = node;
    while (node && node.next) {
      prev = node;
      node = node.next;
    }
    // remove key from cache;
    delete this.cache[node.key];
    prev.next = null;
    this.tail = prev;
  }

  moveToFront(key) {
    // 1st edge case
    if (this.head.key === key) return;
    let node = this.head;
    let prev = node;
    while (node.key !== key) {
      prev = node;
      node = node.next;
    }
    // 2nd edge case
    if (node === this.tail) {
      this.tail = prev;
    }

    prev.next = node.next;
    node.next = this.head;
    this.head = node;
  }

  get(key) {
    if (!this.head) return null;
    console.log(typeof this.cache.key);
    if (this.cache[key] && this.cache[key].key === key) {
      this.moveToFront(key);
      return { key: this.cache[key].val };
    }
    return null;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
  }
}

export default LRUCache;
