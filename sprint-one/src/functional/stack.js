var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    let remove = storage[size - 1];
    delete remove;
    size--;
    if (size < 0) { 
      size = 0;
    }
    return remove;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
