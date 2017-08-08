'use strict';

function calculate_elements_sum(collection) {
  let sum = collection.reduce((a, b) => {
    return a + b;
  });
  return sum;
}

module.exports = calculate_elements_sum;

