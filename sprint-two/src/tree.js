var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  }
  for (var index = 0; index < this.children.length; index++) {
    result = result || this.children[index].contains(target);
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */