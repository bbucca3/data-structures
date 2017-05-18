var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.counter = 0;
  obj.next = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};
queueMethods.dequeue = function() {
  var remove = this.storage[this.next];
  this.next++;
  return remove;
};
queueMethods.size = function() {
  var totalSize = this.counter - this.next;
  if (totalSize < 0) {
    return 0;
  }
  return totalSize;
};


