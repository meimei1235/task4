'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result = [];
  collection.forEach(coll => {
    result.push(coll * 4 +1);
  });
  return result;
};

module.exports = map_to_four_multiples_add_one;
