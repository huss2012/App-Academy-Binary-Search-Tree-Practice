// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let newNode = new TreeNode(val);
    //Check if the tree is empty: In case the tree is empty.
    if (currentNode === null) return this.root = newNode;
    //In case the inseted value is smaller then the root node value:
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left);
      }
    }
    //In case the inserted value is larger then the root node value:
    if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;

    while (currentNode !== null) {

      if (val === currentNode.val) return true;

      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
