'use strict';

function grouping_count(collection) {
  let obj = { };
 let keys =  collection.filter((coll, index, arr) => {
    return arr.indexOf(coll) === index;
  });
 keys.forEach(key => {
   obj[key] = 0;
 });
 collection.forEach(coll => {
   obj[coll]++;
 });
 return obj;
}
 module.exports = grouping_count;
//  var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
// let a = grouping_count(collection);
