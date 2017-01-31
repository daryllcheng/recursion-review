// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 // if (typeof obj === 'functions' || typeof obj === undefined) {
  //   return;
  // }
  //check type
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (obj === null) {
    return "" + obj;
  }
  
  if (Array.isArray(obj)) {
    var stringifiedArr = [];
    if (obj.length === 0) {
      return '[]';
    }
    _.each(obj, function(element) {
      stringifiedArr.push(stringifyJSON(element));
    });
    return '[' + stringifiedArr.join(',') + ']';
  }
  if(typeof obj === 'object') {
    //iterate through the object
    var stringifiedObj = [];
    for (var key in obj) {
      if (typeof key === 'function' || obj[key] === undefined) {
        return '{}';
      }
      if (stringifyJSON(obj[key]) !== '') {
        stringifiedObj.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + stringifiedObj.join(',') + '}';
      // check it's key and it's value
      // run our recursion on each key and each value
        // stringify those elements
        // return the obj with string curly braces
  }


  return "" + obj;
    //stringify each type
    //return stringified version

  //if object is function/undefined
   //return 

  //if obj === array
    //iterate through obj
    //stringifyJSON(each element)
    //return string with brackets and quotatation marks

  //if obj == object
    //same as above
    //return string with curly brace 
}
