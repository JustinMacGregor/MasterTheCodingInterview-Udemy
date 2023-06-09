// Spartans, pay heed! This class Node, akin to our helot servant, carries and passes on our messages, our values.

class Node {
    constructor(value){
        this.value = value; // This value, each Spartan's honour, the heart of our Node.
        this.next = null; // The Spartan following us, we pass our messages to him. This is the next Node.
    }
}

// This class Stack, it's like our phalanx formation, strong and unyielding. Each Spartan is a Node, standing shoulder to shoulder, passing their shield to the next.
class Stack {
    constructor(){
        this.top = null; // This is the brave one, the first of our Spartan Nodes in the Stack.
        this.length = 0; // The size of our formation, how many Nodes, how many Spartans we command in this Stack.
    }

    // This method allows us to see the one standing at the forefront, the top Node, without disturbing the formation.
    peek() {
        if (this.isEmpty()) {    // If there are no Spartans in our phalanx.
            return console.log("Peek: Stack is empty!")   // We'll roar, letting them know our formation is empty.
        }
        return console.log("Peek: " + this.top.value)   // We're Spartans, we're bold. Show us the value of the Node at the front!
    }

    // Spartans advance! This method allows a new Spartan, a new Node to join the front of our formation, strengthening our Stack.
    push(value){
        const newNode = new Node(value, null);  // A new recruit has joined, a new Node is created.

        if (this.length === 0) {  // If there are no Spartans in formation.
            this.top = newNode;    // Our newcomer stands alone at the front.
        } else {
            const holdingPointer = this.top;  // Hold the position, let the newcomer move in.
            this.top = newNode;               // The newcomer is now at the top.
            this.top.next = holdingPointer;   // He gets his shield, now points to the Node that was once at the top.
        }
        this.length++  // One more Spartan in our formation.
        return this;   // Return our formation, stronger than before.
    }

    // Sometimes, a Spartan falls, but we never forget them. This method removes the top Node from the Stack.
    pop() {
        if (!this.top) {  // If there are no Spartans in formation, we've no one to lose.
            throw new Error("Stack is empty"); // We'll roar our sorrow, our formation is empty.
        }
        const poppedValue = this.top.value; // We remember the one who's fallen, the value of the Node at the top.
        this.top = this.top.next;           // The next Spartan takes his place at the top.
        this.length--;                      // One Spartan less in our formation.
        return poppedValue;                 // We remember our fallen Spartan, return the value of the popped Node.
    }

    // Spartans! Show your might! This method prints the value of every Node in the Stack.
    printStack() {
        let currentNode = this.top;   // We start from the Spartan at the front.
        while (currentNode !== null) {   // While there's a Spartan in our formation.
            console.log(currentNode.value);  // Show his might, print his value.
            currentNode = currentNode.next;  // On to the next Spartan.
        }
    }

    // A quick look at our phalanx, is it formed? This method tells us if the Stack is empty.
    isEmpty() {
        return this.length === 0;  // If no Spartans are in formation, it's a sad truth, our Stack is empty.
    }
}

// Now, let's form our phalanx! Create our Stack.
const myStack = new Stack();
myStack.push("Discord") // A Spartan named "Discord" joins the front.
myStack.push("Udemy") // Another, named "Udemy" moves to the front.
myStack.push("Google") // "Google", our newest Spartan, takes the lead.
myStack.pop() // Alas, our Spartan "Google" has fallen.
myStack.peek() // Who leads our phalanx now? Let's have a peek.

console.log(myStack.printStack()); // Spartans! Show your might! Print the values of all the Nodes in our Stack.