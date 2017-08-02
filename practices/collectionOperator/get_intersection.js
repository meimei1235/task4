'use strict';

function get_intersection(collection_a, collection_b) {
  var arr = [];
  collection_b.forEach(function (item) {
    collection_a.forEach(function (data) {
      if (item == data) {
        arr.push(item);
      }
    });
  });
  return arr;
}

module.exports = get_intersection;
