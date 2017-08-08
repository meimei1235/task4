'use strict';

function find_last_even(collection) {
  let arr = collection.reverse();
  for (let coll of collection) {
    if (coll % 2 === 0) {
      return coll;
    }
  }
}

module.exports = find_last_even;
