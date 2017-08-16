function collect_same_elements(collection_a, object_b) {
  let result = collection_a.filter(coll => {
    return object_b.value.indexOf(coll) > -1;
  });
  return result;
}

module.exports = collect_same_elements;
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = {value: ["a", "d", "e", "f"]};
// let a = collect_same_elements(collection_a, collection_b);
// console.log(a);
