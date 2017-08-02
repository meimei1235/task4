'use strict';

function get_integer_interval_2(number_a, number_b) {
  var arr = [];
  if (number_a <number_b) {
    arr = normal_arr(number_a, number_b);
    return arr;
  }else if (number_a > number_b) {
    arr = normal_arr(number_b, number_a).reverse();
    return arr;
  } else {
    arr.push(number_a % 2 ? number_a : '');
    return arr;
  }
}
  function normal_arr(min, max) {
    var a = [];
    for (var i = min; i <= max; i++) {
      if (i % 2 == 0) {
        a.push(i);
        return a;
      }
    }
}

module.exports = get_integer_interval_2;
