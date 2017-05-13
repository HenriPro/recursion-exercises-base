const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  let result = "";

  if (typeof obj === "number") {
    result += obj.toString(10);
  }
  else if (obj === null) {
    result += "null";
  }
  else if (typeof obj === "boolean") {
    result += obj.toString();
  }
  else if (typeof obj === "string") {
    result += '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
    result += "[";

    for (let i = 0; i < obj.length; i++) {
      if (i === 0) {
        result += stringify(obj[i]);
      } else {
        result += "," + stringify(obj[i]);
      }
    }
    result += "]"

  } else {
    result += "{";
    let firstKey = true;

    for (key in obj) {

      if (!firstKey) {
        result += ", ";
      }
      result += stringify(key);
      result += ":";
      result += stringify(obj[key])
    }

    result += "}";
  }




  return result;
};

module.exports = {
  stringify: stringify
};
