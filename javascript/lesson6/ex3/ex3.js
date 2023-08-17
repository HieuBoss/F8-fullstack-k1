// Bài 3
// Tách phần tử trong mảng theo đúng kiểu dữ liệu

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var newArr = [];
if (Array.isArray(arr)) {
  newArr = arr.flat(1);
} else {
  console.log(`Đây không phải là mảng nhập lại!!!`);
}

var results = [];
for (var key in newArr) {
  var datatypes = newArr[key];
  var type = typeof datatypes;
  if (!results[type]) {
    results[type] = [];
  }

  results[type].push(datatypes);
}
console.log(results);
