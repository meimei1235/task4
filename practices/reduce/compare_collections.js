'use strict';

function compare_collections(collection_a, collection_b) {
 let str_a = collection_a.reduce((a, b) => {
   return a + b;
 }, "");
 let str_b = collection_b.reduce((a, b) => {
   return a + b;
 }, "");
 return str_a === str_b;
}

module.exports = compare_collections;
// var collection_a = [1,11,27,20,4,9,15];
// var collection_b = [1,11,27,20,4,9,15];
// let a = compare_collections(collection_a, collection_b);


