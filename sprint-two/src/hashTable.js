

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // for each storage
  //console.log(this._storage);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if storage index is undefined
  var update = true;
  var node = this._storage.get(index);
  if (node === undefined) {
    this._storage.set(index, []);
    node = this._storage.get(index);
    node.push([k, v]);
  } else {
    // looping through node array
    for (var i = 0; i < node.length; i++) {
      // checking if key aleady exists
      if (node[i][0] === k) {
        // update value if key already exists
        node[i][1] = v;
        update = false;
      }
    }
  }
  if (update) {
    node.push([k, v]);
  }
    // if undefined
      // set empty array
    // if key is set
      // overwrite previous value
    // 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // utilize get method to access storage nodes
  var node = this._storage.get(index);
  // loop through storage node
  
  for (var i = 0; i < node.length; i++) {
    // if node key equals index
    if (node[i] && node[i][0] === k) {
      // return value
      return node[i][1];
    }  
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = this._storage.get(index);
  for (var i = 0; i < node.length; i++) {
    if (node[i][0] === k) {
      node[i] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


