'use strict';
var rank_asc = function(collection){
  return collection.sort((a, b) => {
    return b - a;
  });
};

module.exports = rank_asc;
// var collection_a = [3, 2, 4, 5, 6];
//  var collection_b = [6, 5, 4, 3, 2];
// let a = rank_asc(collection_a);
