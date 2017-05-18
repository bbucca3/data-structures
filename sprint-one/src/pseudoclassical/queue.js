var Queue = function() {
  this.counter = 0;
  this.next = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};
Queue.prototype.dequeue = function () {
  let remove = this.storage[this.next];
  this.next++;
  return remove;
};
Queue.prototype.size = function () {
  let totalSize = this.counter - this.next;
  if (totalSize < 0) {
    return 0;
  }
  return totalSize;
};


var queue = new Queue();