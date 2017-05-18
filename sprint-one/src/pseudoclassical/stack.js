var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};
Stack.prototype.pop = function() {
  let remove = this.storage[this.counter - 1];
  this.counter--;
  return remove;
};
Stack.prototype.size = function() {
  if (this.counter < 0) {
    return 0;
  }
  return this.counter;
};

let stack = new Stack();


