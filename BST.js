class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        // Create a new node
        const newNode = new Node(value, null, null);

        // If the tree is empty, make the new node the root.
        if (!this.root) {
            this.root = newNode;
        }

        // Get the value at the root
        let currentNode = this.root;
        // Traverse the tree to find the appropriate position for the new node.
        while (true) {
            if (value < currentNode.value) {
                // Go to the left subtree.

                // If there is no left child, attach the new node and return the tree.
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }

                // iterate to the left side of the element, this is almost like saying i++ (but not exactly)
                currentNode = currentNode.left;
            } else {
                // Go to the right subtree.

                // If there is no right child, attach the new node and return the tree.
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }

                // iterate to the left side of the element, this is almost like saying i++ (but not exactly)
                currentNode = currentNode.right;
            }
        }
    }
    //
    // lookup(value){
    //     //Code here
    // }
    // remove(value) {
    //
    // }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree)));

//     9
//  4     20
//1  6  15  170

//helper function to print tree
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
// tree.lookup(6)
// tree.remove(20)
