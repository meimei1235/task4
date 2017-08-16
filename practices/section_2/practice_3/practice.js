function count_same_elements(collection) {
  let result = [];
  let regx = /[\[\]\-:]/g;
  collection.forEach(coll => {
    let temp_name = coll.replace(regx, ',').split(',')[0];
    let temp_summary = parseInt(coll.replace(regx, ',').split(',')[1]);
    /*result.forEach(elem => {
      if (temp_name == elem.name) {
        elem.summary += temp_summary ? temp_summary : 1;
        return;
      }
    });*/
    for (let i =0; i < result.length; i++) {
      if (temp_name == result[i].name) {
        result[i].summary += temp_summary ? temp_summary : 1;
        return;
      }
    }
    result[result.length] = {
      name: temp_name,
      summary: temp_summary ? temp_summary : 1
    };
  });
  return result;
}
module.exports = count_same_elements;
/*var collection = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
  "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c:8",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
];
let a = count_same_elements(collection);
console.log(a);*/
