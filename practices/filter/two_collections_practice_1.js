'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(coll => {
    return collection_b.indexOf(coll) != -1;
  });
}

module.exports = choose_common_elements;
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = ["a", "d", "e", "f"];
// let a = choose_common_elements(collection_a, collection_b);
