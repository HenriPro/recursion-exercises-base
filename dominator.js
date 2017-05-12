const { flattenTreeToArray } = require('./dom-util');
//const _ = require('underscore');

const getElementById = function(root, id) {
  const flatRoot = flattenTreeToArray(root);
  for (let i = 0; i < flatRoot.length; i++) {
    if (flatRoot[i].id !== undefined && flatRoot[i].id === id) {
      return flatRoot[i];
    }
  }
};

const getElementsByClassName = function(root, className) {
  const flatRoot = flattenTreeToArray(root);
  const result = [];
  for (let i = 0; i < flatRoot.length; i++) {
    if (flatRoot[i].className !== undefined && flatRoot[i].className.includes(className)) {
       result.push(flatRoot[i]);
    }
  }
  return result;
};

const getElementsByTagName = function(root, tagName) {
  const flatRoot = flattenTreeToArray(root);
  const result = [];
  for (let i = 0; i < flatRoot.length; i++) {
    if (flatRoot[i].tagName !== undefined && flatRoot[i].tagName === tagName) {
       result.push(flatRoot[i]);
    }
  }
  return result;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
