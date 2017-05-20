var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(binaryTreeMethods);
  binarySearchTree.right = {};
  binarySearchTree.left = {};
  binarySearchTree.value = value;
  return binarySearchTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (value > this.value) {
    this.right.value = BinarySearchTree(value); 
  } else {
    this.left.value = BinarySearchTree(value);
  }
};

binaryTreeMethods.contains = function(value) {};
binaryTreeMethods.depthFirstLog = function(value) {};



/*
 * Complexity: What is the time complexity of the above functions?
 */
