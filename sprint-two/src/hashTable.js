

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // for each in this._storage
  this._storage.each(function (node, index, storage) {
    node = LimitedArray(this._limit);
  });
  // set value to new instance of Limited Array
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through first storage array
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // // pass through parent storage
  // let targetIndex = this._storage.get(index);
  // targetIndex.each(function(node) {
  // }
  //   // pass through storage node
  //     // locate target tuple
  //     // return tuple
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // pass through parent storage
    // pass through storage nodes
      // locate tuple
      // set value to undefined
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


