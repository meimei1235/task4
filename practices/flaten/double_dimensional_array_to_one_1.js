'use strict';

function double_to_one(collection) {
  let result = [];
  let arr = collection.join(',').split(',');  //变成字符串数组
  arr.forEach(item => {
    result.push(parseInt(item));
  });
  return result;
}

module.exports = double_to_one;
// let collection = [1, [2], [3, 4]];
// let a = double_to_one(collection);
