'use strict';

function compute_chain_median(collection) {
  let arr = collection.split("->").sort((a, b) => {
    return a - b;
  });
  let mid = 0;
  if (arr.length % 2 == 0) {
     mid = (parseInt(arr[arr.length / 2 - 1]) + parseInt(arr[arr.length / 2])) / 2;
  }else {
   mid =  parseInt(arr[(arr.length - 1) / 2]);
  }
  return mid;
}

module.exports = compute_chain_median;
// var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
// let a = compute_chain_median(chain);
