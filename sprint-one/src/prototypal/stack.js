var Stack = function() {
  
  var obj = Object.create(stackMethods);
  obj.counter = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};
stackMethods.pop = function () {
  let remove = this.storage[this.counter - 1];
  this.counter--;
  return remove;
};
stackMethods.size = function () {
  if (this.counter < 0) {
    return 0;
  } else {
    return this.counter;
  }
};