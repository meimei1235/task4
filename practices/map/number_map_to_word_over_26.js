'use strict';
var number_map_to_word_over_26 = function(collection){
  let result = [];
  let letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
  collection.forEach(coll => {
    if (coll <= 26) {
      result.push(letters[coll]);
    }else {
      let str = letters[Math.floor(coll / 26)] + letters[coll % 26];
      result.push(str);
    }
  });
  return result;
};

 module.exports = number_map_to_word_over_26;
// var collection_a = [1, 13, 27, 30, 25, 27];
// // var collection_b = ['a', 'm', 'aa', 'ad', 'y', 'aa'];
// let a = number_map_to_word_over_26(collection_a);
