'use strict';
function choose_even(collection) {
  return collection.filter(coll => {
    return coll % 2 === 0;
  });
}
// let collection = [0, 1, 2, 3, 4, 6];
// let result = choose_even(collection);
 module.exports = choose_even;
