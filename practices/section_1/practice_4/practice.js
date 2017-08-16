function collect_same_elements(collection_a, object_b) {
  let arr = collection_a.map(coll => {
    return coll.key;
  })
  let result = arr.filter(coll=> {
    return object_b.value.indexOf(coll) > -1;
  });
  return result;
}

module.exports = collect_same_elements;
// var collection_a = [
//   {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
// ];
// var collection_b = {value: ["a", "d", "e", "f"]};
// let a = collect_same_elements(collection_a, collection_b);
// console.log(a);
