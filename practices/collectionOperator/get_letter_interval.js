'use strict';

function get_letter_interval(number_a, number_b) {
  var arr = [];
  if (number_a < number_b) {
    arr = letter_arr(number_a, number_b);
    return arr;
  }else if (number_a > number_b) {
    arr = letter_arr(number_b, number_a).reverse();
    return arr;
  }else {
    arr.push(String.fromCharCode(97 + number_a - 1));
    return arr;
  }
  function letter_arr(min, max) {
    var a = [];
    for (var i = min; i <= max; i++) {
      a.push(String.fromCharCode(97+i-1));
    }
    return a;
  }
}

module.exports = get_letter_interval;
