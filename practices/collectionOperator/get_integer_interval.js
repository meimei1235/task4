'use strict';

function get_integer_interval(number_a, number_b) {
  var arr = [];
  if(number_a < number_b) {
    arr = normal_arr(number_a, number_b);
    return;
  } else if (number_a > number_b){
    arr = normal_arr(number_b, number_a).reverse();
    return;
  } else if(number_a % 2 ==0){
    arr.push(number_b);
    return arr;
  }
  return arr;
}
function normal_arr(min, max) {
  var a = [];
  for (var i = min; i <= max; i++) {
    a.push(i);
  }
  return a;
}

module.exports = get_integer_interval;

