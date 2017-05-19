var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (_.indexOf(this._storage, item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // check storage for item index
  if (_.indexOf(this._storage, item) !== -1) {
    // return true if found
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  // check storage for item index
  if (_.indexOf(this._storage, item) !== -1) {
    this._storage.splice(item, 1);   
  }
  // if item index exists, call splice to remove item
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
