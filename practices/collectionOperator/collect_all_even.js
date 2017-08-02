'use strict';

function collect_all_even(collection) {
  var arr = [];
  collection.forEach(function(item) {
    if(item % 2 == 0) {
      arr.push(item);
    }
  });
  return arr;
}
module.exports = collect_all_even;
