import { useRef } from 'react';

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = null;
    this.tail = null;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // move to front
      this.moveToFront(key);
    } else {
      if (this.cache.size === this.capacity) {
        // remove from last
        this.removeFromLast();
      }

      // add to front
      this.addToFront(key, value);
    }
    return this;
  }

  addToFront(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.cache.set(key, value);
  }

  moveToFront(key) {
    // node in start
    if (this.head.key === key) return;

    let curr = this.head;
    let prev = null;
    while (curr.key !== key && curr) {
      prev = curr;
      curr = curr.next;
    }

    if (curr === this.tail) {
      this.tail = prev;
    }

    if (prev) {
      prev.next = curr.next;
    }
    //remove node and insert to front
    curr.next = this.head;
    this.head = curr;
  }

  removeFromLast() {
    if (!this.head) return undefined;
    let curr = this.head;
    let prev = curr;
    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    this.tail = prev;
    this.cache.delete(curr.key);
  }

  get(key) {
    if (this.cache.has(key)) {
      this.moveToFront(key);
      return this.cache.get(key);
    }
    return null;
  }
}

class Node {
  constructor(key, val) {
    this.next = null;
    this.val = val;
    this.key = key;
  }
}

const useLruCache = (capacity) => {
  // used useRef to avoid new instance creation on re-render
  // useRef make class persistant
  const cacheRef = useRef(new LRUCache(capacity));
  return {
    get: (key) => cacheRef.current.get(key),
    put: (key, value) => cacheRef.current.put(key, value),
  };
};

export default useLruCache;
