// LAST IN FIRST OUT
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(val){
      const newNode = new Node(val)
        this.top = newNode;
        this.length = 1;
    }
    push(val){
        const newNode = new Node(val)
        if(this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.size--
        return temp;
    }
    peek(){
        if(!this.top) return undefined;
        return this.top.val;
    }
}