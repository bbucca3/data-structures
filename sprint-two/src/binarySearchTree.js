var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(binaryTreeMethods);
  binarySearchTree.right = Object.create(binaryTreeMethods);
  binarySearchTree.left = Object.create(binaryTreeMethods);
  return binarySearchTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  // get bst and insert value
  
};
binaryTreeMethods.contains = function(value) {};
binaryTreeMethods.depthFirstLog = function(value) {};



/*
 * Complexity: What is the time complexity of the above functions?
 */
