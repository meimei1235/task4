'use strict';

function compute_average(collection) {
  let sum = collection.reduce((a, b ) => {
    return a + b;
  });
  return sum / collection.length;
}

module.exports = compute_average;

