var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list[value] = new Node(value);
    let newNode = list[value];
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode.value;
      list.tail = newNode;
    }
  };  

  list.removeHead = function() {
    if (list.head) {
      let formerHead = list.head;
      list.head = list[list.head.next];
      return formerHead.value;
    }
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    } else if (list.head.next !== null) {
      list.head = list[list.head.next];
      return list.contains(target);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
