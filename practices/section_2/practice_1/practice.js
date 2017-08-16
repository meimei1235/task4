//方法1：
/*function count_same_elements(collection) {
  let result = [];
  collection.map(coll => {
    for (let i = 0; i < result.length; i++) {
      if (coll === result[i].key) {
        result[i].count++;
        return;
      }
    }
    result[result.length] = {
      key: coll,
      count: 1
    };
  });
  return result;
}*/
function getCount(collection, key_value, count_value) {
  for(let i = 0; i < collection.length; i++) {
    if (collection[i] === key_value) {
      count_value++;
      collection[i] = 0;
    }
  }
  let obj = {key: key_value, count: count_value};
  return obj;
}

//方法2：
function count_same_elements(collection) {
  let result = [];
  let key_value = '';
  let count_value = 0;
  collection.forEach(coll => {
    if (coll) {
      key_value = coll;
      let obj = getCount(collection, key_value, count_value);
      result.push(obj);
      count_value = 0;
    }
  });
  return result;
}

module.exports = count_same_elements;
// var collection = [
//   "a", "a", "a",
//   "e", "e", "e", "e", "e", "e", "e",
//   "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
//   "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
//   "f", "f", "f", "f", "f", "f", "f", "f", "f",
//   "c", "c", "c", "c", "c", "c", "c", "c",
//   "g", "g", "g", "g", "g", "g", "g",
//   "b", "b", "b", "b", "b", "b",
//   "d", "d", "d", "d", "d"
// ];
// let a = count_same_elements(collection);
// console.log(a);
