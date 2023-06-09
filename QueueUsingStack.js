// This code defines a class called Queue.
class Queue {
    // The constructor is a special method that gets called when an object is created from this class.
    constructor() {
        // Initialize two arrays, enqueueStack and dequeueStack, to store the elements of the queue.
        this.enqueueStack = [];
        this.dequeueStack = [];
    }
    // This method adds an item to the queue.
    enqueue(item) {
        // Push the item to the enqueueStack array.
        this.enqueueStack.push(item);
    }

    // This method removes and returns an item from the queue.
    dequeue() {
        // Check if the dequeueStack is empty.
        if (this.dequeueStack.length === 0) {
            // If the dequeueStack is empty, check if the enqueueStack is also empty.
            if (this.enqueueStack.length === 0) {
                // If both stacks are empty, return the message "Queue is empty".
                return "Queue is empty";
            }
            // If the dequeueStack is empty but the enqueueStack is not, move the items from the enqueueStack to the dequeueStack.
            while (this.enqueueStack.length > 0) {
                // Remove an item from the enqueueStack and push it to the dequeueStack.
                const item = this.enqueueStack.pop();
                this.dequeueStack.push(item);
            }
        }
        // Remove and return the item from the dequeueStack.
        return this.dequeueStack.pop();
    }

    // This method returns the item at the front of the queue without removing it.
    peek() {
        // Check if the dequeueStack is empty.
        if (this.dequeueStack.length === 0) {
            // If the dequeueStack is empty, check if the enqueueStack is also empty.
            if (this.enqueueStack.length === 0) {
                // If both stacks are empty, return the message "Queue is empty".
                return "Queue is empty";
            }
            // If the dequeueStack is empty but the enqueueStack is not, move the items from the enqueueStack to the dequeueStack.
            while (this.enqueueStack.length > 0) {
                // Remove an item from the enqueueStack and push it to the dequeueStack.
                const item = this.enqueueStack.pop();
                this.dequeueStack.push(item);
            }
        }
        // Return the item at the top of the dequeueStack without removing it.
        return this.dequeueStack[this.dequeueStack.length - 1];
    }

    // This method checks if the queue is empty.
    isEmpty() {
        // Return true if both the enqueueStack and dequeueStack are empty.
        return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
    }

    // This method returns the number of items in the queue.
    size() {
        // Return the sum of the lengths of the enqueueStack and dequeueStack.
        return this.enqueueStack.length + this.dequeueStack.length;
    }
}