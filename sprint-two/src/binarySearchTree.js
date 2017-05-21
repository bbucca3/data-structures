var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(binaryTreeMethods);
  binarySearchTree.right;
  binarySearchTree.left;
  binarySearchTree.value = value;
  return binarySearchTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  // check value for greater than or less than root
  if (value < this.value) {
    // if left node does exist, recurse
    if (this.left) {
      this.left.insert(value);
    // if left node does not exist, then create new
    } else {
      this.left = BinarySearchTree(value);
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  // check if value equals target value
  if (this.value === value) {
    return true;
  }
  if (this.right === undefined || this.left === undefined) {
    return false;
  }
  if (value < this.value) {
    return this.left.contains(value);
  }
  if (value > this.value) {
    return this.right.contains(value);
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  // callback on first node
  callback(this.value);
  // check left then recurse
  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
  // check right then recurse
  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
