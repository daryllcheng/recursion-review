// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var rememberNodes = [];
  function searchNode(node) {
    if (_(node.classList).contains(className)) {
      rememberNodes.push(node);
    }
    node.childNodes.forEach(function(childNode) {
      searchNode(childNode);
    })
  }
  searchNode(document.body);
  console.log(rememberNodes);
  return rememberNodes;
};
