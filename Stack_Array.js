// This class Stack, it's like our phalanx formation, strong and unyielding. Each Spartan is a Node, standing shoulder to shoulder, passing their shield to the next.
class Stack {
    constructor(){
        this.formation = []
    }

    // This method allows us to see the one standing at the forefront, the top Node, without disturbing the formation.
    peek() {
        if (this.isEmpty()) {    // If there are no Spartans in our phalanx.
            return console.log("Peek: Stack is empty!")   // We'll roar, letting them know our formation is empty.
        }
        return this.formation[this.formation.length-1]   // We're Spartans, we're bold. Show us the value of the Node at the front!
    }

    // Spartans advance! This method allows a new Spartan, a new Node to join the front of our formation, strengthening our Stack.
    push(value){
        this.formation.push(value)
        return this;   // Return our formation, stronger than before.
    }
    
    pop() {
        this.formation.pop()
        return this;
    }

    // Spartans! Show your might! This method prints the value of every Node in the Stack.
    printStack() {
        console.log(this.formation)
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