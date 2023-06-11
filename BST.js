class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // Create a new node
        const newNode = new Node(value);

        // If the tree is empty, make the new node the root.
        if (!this.root) {
            this.root = newNode;
            return this;
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

                // Iterate to the left side of the element
                currentNode = currentNode.left;
            } else {
                // Go to the right subtree.

                // If there is no right child, attach the new node and return the tree.
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }

                // Iterate to the right side of the element
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        // If the tree is empty, return null
        if (!this.root) {
            return null;
        }

        // Get the value at the root
        let currentNode = this.root;

        // Traverse the tree to find the node with the given value
        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                // Go to the left subtree
                currentNode = currentNode.left;
            } else {
                // Go to the right subtree
                currentNode = currentNode.right;
            }
        }

        // If the value is not found, return null
        return null;
    }

    remove(value) {
        // We define a helper function called removeNode that takes a node and a value as parameters.
        const removeNode = (node, value) => {
            // If the current node is null, it means we have reached the end of the tree or the value is not found, so we return null.
            if (node === null) {
                return null;
            }

            // If the value of the current node is equal to the value we want to remove, we have found the node to remove.
            if (value === node.value) {

                // Case 1: Node has no children
                // If the node has no children, we simply return null to remove it from the tree.
                if (node.left === null && node.right === null) {
                    return null;
                }

                // Case 2: Node has no left child
                // If the node has no left child, we return the right child to replace the current node.
                if (node.left === null) {
                    return node.right;
                }

                // Case 3: Node has no right child
                // If the node has no right child, we return the left child to replace the current node.
                if (node.right === null) {
                    return node.left;
                }

                // Case 4: Node has both left and right children
                // If the node has both left and right children, we find the minimum value in the right subtree
                // and replace the value of the current node with that minimum value. Then we recursively remove
                // the node with the minimum value from the right subtree.
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                // If the value we want to remove is less than the value of the current node, we go to the left subtree.
                // We recursively call removeNode() on the left child of the current node and update the left child accordingly.
                node.left = removeNode(node.left, value);
                return node;
            } else {
                // If the value we want to remove is greater than the value of the current node, we go to the right subtree.
                // We recursively call removeNode() on the right child of the current node and update the right child accordingly.
                node.right = removeNode(node.right, value);
                return node;
            }
        };

        // We call the removeNode() function starting from the root of the tree and pass the value to be removed.
        // The result of the function call will be the updated root of the tree.
        // Note: The original root may change if the value to be removed is the root itself.
        // The updated root is returned as the result of the remove() function.
        // If the value to be removed is not found in the tree, the original root is returned unchanged.
        return removeNode(this.root, value);
    }

    traverse(node = this.root) {
        const tree = { value: node.value };
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(6);
tree.remove(20);
console.log(JSON.stringify(tree.traverse(), null, 2));

//     9
//  4     20
//1  6  15  170

// Let's say we have the following binary search tree and we want to remove 3:
//          8
//         / \
//        3   10
//       / \    \
//      1   6    14
//         / \   /
//        4   7  13

// Now, let's say we want to remove the node with the value 3. We will follow the "Case 4" scenario where the node to be removed has both left and right children.
//
// 1.0 - Starting from the node we want to remove (value 3), we find the minimum value in the right subtree, we d. In this case, the right subtree of 3 is {6, 4, 7}, and the minimum value is 4.
// The minimum value in the right subtree is the leftmost node in that subtree. By finding the minimum value in the right subtree, we can guarantee that the replacement node will have a value greater than all nodes in its left subtree and less than all nodes in its right subtree.

//          8
//         / \
//        3   10
//       / \    \
//      1   6    14
//         / \   /
//        4   7  13

// 2.0 - We replace the value of the node we want to remove (3) with the minimum value we found (4). The tree now becomes:

//          8
//         / \
//        4   10
//       / \    \
//      1   6    14
//         / \   /
//        4   7  13

// 3.0 - Now, we need to remove the node with the minimum value (4) from the right subtree. We recursively call the removeNode() function on the right subtree with the value 4. The updated right subtree after removing 4 becomes {6, 7}.
//         8
//        / \
//       4   10
//      / \    \
//     1   6    14
//          \   /
//           7  13

// 4.0 - Finally, we return the updated node (which is now the root of the subtree) to maintain the tree structure.
//         8
//        / \
//       4   10
//      / \    \
//     1   6    14
//          \   /
//           7  13
