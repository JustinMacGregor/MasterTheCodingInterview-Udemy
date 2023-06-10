class Queue {
    constructor() {
        this.enqueueStack = [];
        this.dequeueStack = [];
    }

    enqueue(item) {
        this.enqueueStack.push(item);
        this.printQueue();
    }

    dequeue() {
        if (this.dequeueStack.length === 0) {
            if (this.enqueueStack.length === 0) {
                console.log("Queue is empty");
                return;
            }
            while (this.enqueueStack.length > 0) {
                const item = this.enqueueStack.pop();
                this.dequeueStack.push(item);
            }
        }
        const item = this.dequeueStack.pop();
        this.printQueue();
        return item;
    }

    peek() {
        if (this.dequeueStack.length === 0) {
            if (this.enqueueStack.length === 0) {
                console.log("Queue is empty");
                return;
            }
            while (this.enqueueStack.length > 0) {
                const item = this.enqueueStack.pop();
                this.dequeueStack.push(item);
            }
        }
        const item = this.dequeueStack[this.dequeueStack.length - 1];
        this.printQueue();
        return item;
    }

    isEmpty() {
        const empty = this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
        this.printQueue();
        return empty;
    }

    printQueue() {
        console.log('Enqueue Stack: ', this.enqueueStack);
        console.log('Dequeue Stack: ', this.dequeueStack.slice().reverse());
        console.log(' ');
    }
}

const myQueue = new Queue();
console.log("Enqueue")
myQueue.enqueue(1);
console.log("Enqueue")
myQueue.enqueue(2);
console.log("Enqueue")
myQueue.enqueue(3);
console.log("Dequeue")
myQueue.dequeue();
console.log("Enqueue")
myQueue.enqueue(15);
console.log("Enqueue")
myQueue.enqueue(27);
console.log("Dequeue")
myQueue.dequeue();
console.log("Dequeue")
myQueue.dequeue();
console.log("Dequeue")
myQueue.dequeue();
console.log("Dequeue")
myQueue.dequeue();