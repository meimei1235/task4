'use strict';

function find_first_even(collection) {
  // collection.forEach(coll => {
  //   if (coll % 2 === 0) {
  //     return coll;
  //   }
  // });
  for (var elem of collection) {
    if (elem % 2 === 0) {
      return elem;
    }
  }
}

module.exports = find_first_even;
// var collection = [1,11,27,20,4,9,15];
// let a = find_first_even(collection);

