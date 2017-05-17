var Queue = function() {
  var someInstance = {};
  
  let size = 0;
  let next = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var remove = storage[next];
    next++;
    //size--;
    return remove;
  };

  someInstance.size = function() {
    var totalSize = size - next;
    if (totalSize < 0) {
      return 0;
    }
    return totalSize;
  };

  return someInstance;
};
