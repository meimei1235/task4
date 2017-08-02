'use strict';

function get_letter_interval_2(number_a, number_b) {
  var arr = [];
  var letter = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if (number_a < number_b) {
    arr = letter_arr(number_a, number_b, letter);
    return arr;
  }
  if (number_a > number_b) {
    arr = letter_arr(number_b, number_a, letter).reverse();
    return arr;
  }
  if (number_a === number_b) {
    arr = letter_arr(number_a, number_a, letter);
    return arr;
  }
}
function letter_arr(min, max, a) {
  var b = [];
  for (var i = min; i <= max; i++) {
    if(i % 26 === 0){
      b.push(a[Math.floor(i / 26) - 1].concat(a[26]));
    }else {
      b.push(a[Math.floor(i / 26)].concat(a[i % 26]));
    }
  }
  return b;
}
module.exports = get_letter_interval_2;

