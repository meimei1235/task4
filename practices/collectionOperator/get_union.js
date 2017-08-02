'use strict';

function get_union(collection_a, collection_b) {
  var arr = collection_a.concat(collection_b);
  var s = new Set();
  arr.forEach(item => {
      s.add(item);
  });
  return Array.from(s);
}
module.exports = get_union;

