// Bài 2
// Làm phẳng array sau (Chuyển về mảng 1 chiều)

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

if (Array.isArray(arr)) {
  var newArr = arr.flat(Infinity);
} else {
  console.log(`Đây không phải là mảng nhập lại!!!`);
}
console.log(newArr);
