'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  if (number % interval == 0) {
    for (let i = number; i > 0; i = (i - interval).toFixed(1)) {
      result.push(parseFloat(i));
    }
    result.push(0);
    return result;
  }
  for (let i = number; i > 0 - interval; i = (i - interval).toFixed(1)) {
    result.push(parseFloat(i));
  }
  return result;
}

module.exports = spilt_to_zero;
// var result1 = split_to_zero(0.8, 0.2);
// var result2 = split_to_zero(0.7, 0.3);
// console.log(result1 + "\n"+ result2);
