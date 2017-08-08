'use strict';

function collect_max_number(collection) {
  return collection.reduce((a, b) => {
    if (a < b) {
      return b;
    }
    return a;
  });
}

module.exports = collect_max_number;
