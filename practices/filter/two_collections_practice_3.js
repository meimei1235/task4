'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let results = [];
  collection_a.forEach(colla => {
    collection_b.forEach(collb => {
      if (colla % collb == 0) {
        results.push(colla);
      }
    });
  });
  return results;
}

module.exports = choose_divisible_integer;
// var collection_a = [4,7,9,25,16,21,64,32,35,49];
// var collection_b = [2,3,5];
// let a = choose_divisible_integer(collection_a, collection_b);
