'use strict';

function collect_min_number(collection) {
  return collection.reduce((a, b) => {
    if (a > b) {
      return b;
    }
    return a;
  });
}

module.exports = collect_min_number;

