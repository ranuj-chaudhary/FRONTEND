// FIRST IN FIRST OUT
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++
        return this;
    }

    deQueue(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next
        temp.next = null;
        this.size--;
        if(this.size === 0){
            this.last = null;
        }
        return temp;
    }

    printQueue(){
        let current = this.head;
        const queue = []
        while(current && current.next){
            queue.push(current.val);
            current = current.next;
        }
        return queue;
    }
    peek(){
        if(!this.head) return undefined;
        return this.head.val;
    }
    empty(){
        if(!this.head || this.size === 0) return true;
        return false;
    }
 }


 const movieTickets = new Queue();
 movieTickets.enqueue({
    movieName:  "ajey",
    date: new Date(),
    seatNo: 'K-10',
     noOfSeats: 1,
    combo:'none'
 })
 movieTickets.enqueue({
    movieName:  "Deamon Slayer",
    date: new Date(),
    seatNo: 'K-10,K-11',
    noOfSeats: 2,
    combo:'none'
 })
 movieTickets.enqueue({
    movieName:  "Jolly LLB 3",
    date: new Date(),
    seatNo: 'H-10,H-11',
    noOfSeats: 2,
    combo:'big basket'
 })


//  console.log(movieTickets)
movieTickets.deQueue()
movieTickets.deQueue()
movieTickets.deQueue()
const firstTicketBooked = movieTickets.peek()
if(firstTicketBooked){
    console.log(firstTicketBooked?.movieName)
} else {
    console.log('no movie tickets are sold yet')
}
 console.log(movieTickets)