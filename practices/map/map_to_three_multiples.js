'use strict';
var map_to_three_multiples = function(collections){
  let result = [];
  collections.forEach(coll => {
    result.push(coll *3);
  });
  return result;
};

module.exports = map_to_three_multiples;
