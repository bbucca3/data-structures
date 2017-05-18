//const _ = require(['../lib/underscore/underscore.js']);

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
    counter: 0, 
    next: 0,
    storage: {}
  };
  _.extend(queue, queueMethods);
  return queue;
};



var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    let remove = this.storage[this.next];
    this.next++;
    return remove;
  },
  size: function() {
    let differentSize = this.counter - this.next;
    if (differentSize < 0) {
      return 0;
    }
    return differentSize;
  }
  
};

