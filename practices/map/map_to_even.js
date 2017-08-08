'use strict';
function map_to_even(collection){
  let result = [];
  collection.forEach(coll => {
    result.push(coll * 2);
  });
  return result;
}
module.exports = map_to_even;
// var collection_a = [1, 2, 3, 4, 5];
// var collection_b = [2, 4, 6, 8, 10];
// let a = map_to_even(collection_a);
