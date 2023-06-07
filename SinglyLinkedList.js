// Define a Node class to create individual elements of the linked list
class LinkedListNode {
    // Constructor takes a value and a next node reference (default to null)
    constructor(nodeValue, nextNode=null) {
        this.nodeValue = nodeValue;  // The value that this node holds
        this.nextNode = nextNode;  // Reference to the next node in the list
    }
}

// Define a SinglyLinkedList class to manage and perform operations on the linked list
class SinglyLinkedList {
    // Constructor initializes the list with one node using the given value
    constructor(firstNodeValue) {
        const firstNode = new LinkedListNode(firstNodeValue, null);  // Create a new node with the given value
        this.headNode = firstNode;  // Set this new node as the head (start) of the list
        this.tailNode = this.headNode;  // At this point, the head is also the tail (end) of the list
        this.listLength = 1;  // The list starts with one node
    }
    // Add a node to the end of the list
    append(nodeValue) {
        const newNode = new LinkedListNode(nodeValue, null);  // Create a new node
        this.tailNode.nextNode = newNode;  // Add the new node to the end of the list
        this.tailNode = newNode;  // Update the tail to the new node
        this.listLength++;  // Increase the length of the list by 1
        return this;  // Return the updated list
    }

    // Add a node to the start of the list
    prepend(nodeValue) {
        const newNode = new LinkedListNode(nodeValue, this.headNode);  // Create a new node that points to the current head
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
        const newNode = new LinkedListNode(nodeValue, null);  // Create a new node
        const precedingNode = this.traverseToIndex(index-1);  // Get the node currently at the desired index - 1
        const followingNode = precedingNode.nextNode;  // Get the node currently at the desired position
        precedingNode.nextNode = newNode;  // Point the preceding node to the new node
        newNode.nextNode = followingNode;  // Point the new node to the following node
        this.listLength++;  // Increase the length of the list by 1
        return this.printList();  // Return the updated list
    }

    // Helper method to get a node at a specific index
    traverseToIndex(index) {
        let counter = 0;  // Initialize a counter
        let currentNode = this.headNode;  // Start with the head node
        while (counter != index) {  // While we haven't reached the desired index...
            currentNode = currentNode.nextNode;  // ...move on to the next node
            counter++;  // ...and increase the counter
        }
        return currentNode;  // Return the node at the desired index
    }

    remove(index) {
        const precedingNode = this.traverseToIndex(index - 1); // Get preceding node before index
        const unwantedNode = precedingNode.nextNode; // Get node to delete
        precedingNode.nextNode = unwantedNode.nextNode; // Set the preceding node index to the node after the node to delete
        this.listLength--; // Decrement the list length
        return this.printList(); //
    }

    reverse() {
        if (!this.headNode.nextNode) { // Check if the list has only one node
            return this.headNode; // Return the headNode as it is
        }

        let first = this.headNode; // Initialize 'first' as the current head node
        let second = first.nextNode; // Initialize 'second' as the next node after 'first'
        while (second) { // Loop until 'second' becomes null (end of the list)
            const temp = second.nextNode; // Store the next node after 'second' in 'temp'
            second.nextNode = first; // Reverse the direction of 'second.nextNode' to point to 'first'
            first = second; // Move 'first' to 'second' for the next iteration
            second = temp; // Move 'second' to the next node stored in 'temp' for the next iteration
        }

        this.headNode.nextNode = null; // Set the nextNode of the previous head to null (new tail node)
        this.headNode = first; // Update the headNode to the reversed list
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
const myLinkedList = new SinglyLinkedList(10);  // --> [10]
myLinkedList.append(5);  // Append 5 to the list --> [10, 5]
myLinkedList.append(16);  // Append 16 to the list --> [10, 5, 16]
myLinkedList.prepend(1);  // Prepend 1 to the list --> [1, 10, 5, 16]
myLinkedList.insert(2, 99);  // Insert 99 at index 2 --> [1, 10, 99, 5, 16]
myLinkedList.remove(2) // Remove at index 2 --> [1, 10, 5, 16]
myLinkedList.reverse() // [16, 5, 10, 1]

console.log(myLinkedList.printList());  // Print the list --> [16, 5, 10, 1]