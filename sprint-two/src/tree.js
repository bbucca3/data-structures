var Tree = function(value) {
  var newTree = Object.create(treeMethods); // was an object {}
  newTree.value = value;

  // your code here
  newTree.children = [];  // was null // fix me //Object.create(treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value); // child is an instantiation of Tree class
  this.children.push(child); // pushing that created child obj to children array of tree
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var index = 0; index < this.children.length; index++) {
    
    var child = this.children[index];
    treeMethods.contains.call(child, target);
  }
  return false;
// A .contains() method, takes any input and
// returns a boolean reflecting whether it can be found as the value
// of the target node or any descendant node
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 
  //  if (this.value === target) {
  //   return true;
  // }
  // for (let index = 0; index < this.children.length; index++) {
  //   let child = this.children[index];
  //   return treeMethods.contains.call(child, target);
  // }
  // return false;