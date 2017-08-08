'use strict';

function compute_median(collection) {
  let arr = collection.sort((a, b) => {   //先对集合进行排序
    return a - b;
  });
  let result = 0;
  if (arr.length % 2 == 0) {
    result = (arr[arr.length / 2 -1] + arr[arr.length / 2]) / 2;
  }else {
    result = arr[(arr.length - 1) / 2]
  }
  return result;
}

module.exports = compute_median;
// var collection_a = [1, 1, 1, 2, 3];
// var collection_b = [1, 1, 2, 3];
// var collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30];
// let  a = compute_median(collection_a);
// let b = compute_median(collection_b);
// let c = compute_median(collection_c);


