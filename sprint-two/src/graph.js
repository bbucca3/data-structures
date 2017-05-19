// Instantiate a new graph
var Graph = function() {
  this.nodes = [];  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(targetNode) {
  // for each node in graph
  for (let index = 0; index < this.nodes.length; index++) {
    // if that node is equal targetNode, return true
    if (this.nodes[index].value === targetNode) {
      return true;
    }
  }
  // if node not found return false
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(targetNode) {
  // for each node in graph
  for (let index = 0; index < this.nodes.length; index++) {
    // if that node equals targetNode, splice it out
    if (this.nodes[index].value === targetNode) {
      this.nodes.splice(this.nodes[index], 1);
    }    
  }  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // for each node in nodes array
  for (let index = 0; index < this.nodes.length; index++) {
  // check node value property to be fromNode
    if (this.nodes[index].value === fromNode) {
      // check if toNode exists in edges property of node
      if (_.indexOf(this.nodes[index].edges, toNode) !== -1) {
        return true;
      }
    }  
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // for each node in nodes array
  for (let index = 0; index < this.nodes.length; index++) {
    // if node value equals fromNode
    if (this.nodes[index].value === fromNode) {
      // node edges will then push toNode
      this.nodes[index].edges.push(toNode);
    }
    if (this.nodes[index].value === toNode) {
      this.nodes[index].edges.push(fromNode);
    }
  }  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // for each node in the graph
  for (let index = 0; index < this.nodes.length; index++) {
   // if the node value is fromNode, then
    if (this.nodes[index].value === fromNode) {
      // declare target to remove
      let target = _.indexOf(this.nodes[index].edges, toNode);
      // remove edge between fromNode to toNode
      this.nodes[index].edges.splice(target, 1);
    }
    if (this.nodes[index].value === toNode) {
      let otherTarget = _.indexOf(this.nodes[index].edges, fromNode);
      this.nodes[index].edges.splice(otherTarget, 1);
    } 
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // for each object in the nodes array
  for (let index = 0; index < this.nodes.length; index++) {
    cb(this.nodes[index].value);
  }
    // access node value
    // map to new array
  // for each  new array
    // pass callback function
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


