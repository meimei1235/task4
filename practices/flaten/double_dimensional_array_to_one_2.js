'use strict';

function double_to_one(collection) {
  let result = [];
  let arr = collection.join(",").split(",");
  arr.forEach(coll => {
    coll = parseInt(coll);
    if (!result.includes(coll)) {
      result.push(coll);
    }
  });
  return result;
}

module.exports = double_to_one;
// let collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
// let a = double_to_one(collection);
