var Stack = function() {
  var stack = {};
  stack.counter = 0;
  stack.storage = {};
  
  _.extend(stack, stackMethods);
  
  return stack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function() {
    var remove = this.storage[this.counter - 1];
    this.counter--;
    return remove;
  },
  size: function() {
    if (this.counter < 0) {
      return 0;
    }
    return this.counter;
  }
};


