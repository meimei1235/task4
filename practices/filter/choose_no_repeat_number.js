'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((coll, index, arr) => {
    return arr.indexOf(coll)  === index;
  });
}

module.exports = choose_no_repeat_number;
