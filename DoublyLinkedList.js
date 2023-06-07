// Define a Node class to create individual elements of the linked list
class LinkedListNode {
// Constructor takes a value and previous/next node references (default to null)
    constructor(nodeValue, previousNode = null, nextNode = null) {
        this.nodeValue = nodeValue; // The value that this node holds
        this.previousNode = previousNode; // Reference to the previous node in the list
        this.nextNode = nextNode; // Reference to the next node in the list
    }
}

// Define a LinkedList class to manage and perform operations on the doubly linked list
class LinkedList {
// Constructor initializes the list with one node using the given value
    constructor(firstNodeValue) {
        const firstNode = new LinkedListNode(firstNodeValue, null, null); // Create a new node with the given value
        this.headNode = firstNode; // Set this new node as the head (start) of the list
        this.tailNode = this.headNode; // At this point, the head is also the tail (end) of the list
        this.listLength = 1; // The list starts with one node
    }

    // Add a node to the end of the list
    append(nodeValue) {
        const newNode = new LinkedListNode(nodeValue, this.tailNode, null);  // Create a new node with the given value
        this.tailNode.nextNode = newNode;  // Add the new node to the end of the list
        this.tailNode = newNode;  // Update the tail to the new node
        this.listLength++;  // Increase the length of the list by 1
        return this;  // Return the updated list
    }

// Add a node to the start of the list
    prepend(nodeValue) {
        const newNode = new LinkedListNode(nodeValue, null, this.headNode);  // Create a new node with the given value
        this.headNode.previousNode = newNode;  // Update the previous reference of the current head node
        this.headNode = newNode;  // Update the head to the new node
        this.listLength++;  // Increase the length of the list by 1
        return this;  // Return the updated list
    }

// Insert a node at a specific position in the list
    insert(index, nodeValue) {
        if (index === 0) { // If the index specified is 0...
            return this.prepend(nodeValue); //... just add a new node at the beginning
        }

        if (index >= this.listLength) {  // If the position is beyond the current list length...
            return this.append(nodeValue);  // ...just add the new node at the end
        }

        const newNode = new LinkedListNode(nodeValue, null, null);  // Create a new node with the given value
        const current = this.traverseToIndex(index);  // Get the node currently at the desired index
        const precedingNode = current.previousNode;  // Get the node preceding the current node

        precedingNode.nextNode = newNode;  // Point the preceding node to the new node
        newNode.previousNode = precedingNode;  // Point the new node to the preceding node
        newNode.nextNode = current;  // Point the new node to the current node
        current.previousNode = newNode;  // Point the current node to the new node

        this.listLength++;  // Increase the length of the list by 1
        return this.printList();  // Return the updated list
    }

// Helper method to get a node at a specific index
    traverseToIndex(index) {
        let counter = 0;  // Initialize a counter
        let currentNode = this.headNode;  // Start with the head node
        while (counter !== index) {  // While we haven't reached the desired index...
            currentNode = currentNode.nextNode;  // ...move on to the next node
            counter++;  // ...and increase the counter
        }
        return currentNode;  // Return the node at the desired index
    }

    remove(index) {
        if (index === 0) {  // If the index specified is 0...
            this.headNode = this.headNode.nextNode;  // ...update the head to the next node
            this.headNode.previousNode = null;  // ...set the previous reference of the new head to null
            this.listLength--;  // Decrease the length of the list by 1
            return this.printList();  // Return the updated list
        }

        if (index >= this.listLength) {  // If the position is beyond the current list length, do nothing
            return this.printList();  // Return the current list
        }

        const current = this.traverseToIndex(index);  // Get the node currently at the desired index
        const precedingNode = current.previousNode;  // Get the node preceding the current node
        const followingNode = current.nextNode;  // Get the node following the current node

        precedingNode.nextNode = followingNode;  // Point the preceding node to the following node
        followingNode.previousNode = precedingNode;  // Point the following node to the preceding node
        this.listLength--;  // Decrease the length of the list by 1

        return this.printList();  // Return the updated list
    }

// Output the values of the list from start to end
    printList() {
        const listValues = [];  // Initialize an empty array to hold the node values
        let currentNode = this.headNode;  // Start with the head node
        while (currentNode !== null) {  // While we haven't reached the end of the list...
            listValues.push(currentNode.nodeValue);  // ...add the current node's value to the array
            currentNode = currentNode.nextNode;  // ...and move on to the next node
        }
        return listValues; // Return the array of node values
    }
}

// Create a new linked list with 10 as the first node value
const myLinkedList = new LinkedList(10); // --> [10]
myLinkedList.append(5); // Append 5 to the list --> [10, 5]
myLinkedList.append(16); // Append 16 to the list --> [10, 5, 16]
myLinkedList.prepend(1); // Prepend 1 to the list --> [1, 10, 5, 16]
myLinkedList.insert(2, 99); // Insert 99 at index 2 --> [1, 10, 99, 5, 16]
myLinkedList.remove(2) // Remove at index 2 --> [1, 10, 5, 16]

console.log(myLinkedList.printList()); // Print the list --> [1, 10, 5, 16]