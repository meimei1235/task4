function collect_same_elements(collection_a, collection_b) {
  let result = collection_a.filter(coll => {
    return collection_b.indexOf(coll) > -1;
  });
  return result;
}

module.exports = collect_same_elements;
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = ["a", "d", "e", "f"];
// let a = collect_same_elements(collection_a, collection_b);
// console.log(a);
