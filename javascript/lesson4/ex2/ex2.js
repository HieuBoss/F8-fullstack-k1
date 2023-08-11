// var user = [];
// console.log(user, typeof user);
// var user = new Array();
// console.log(user, typeof user);
// console.log(Array.prototype);
// console.log([Array]);

/*
học mảng là học gì?
- cách hoạt động
- khai báo
- các thao tác : thêm , sửa, xóa , duyệt
- các hàm sử lí
- làm bt

*/
var user = ["An", "Anh", "Dũng ", "Dương"];
console.log(user);
// 1 lấy số lương phần tử
// console.log(user.length);
// 2 truy cập 1 phần tử của mảng
// console.log(user[3]);
// 3 Thêm phần tử mới vào mảng
// tenbien[index]=giatri

// user[user.length] = "A";

// 4 sửa phần tử trong mảng
// user[1] = "Hoàng Anh";

// // không có để sửa thì nó sẽ tự thêm
// user[4] = "Hoàng ";

// 5 Duyệt mảng
// for (var i = 0; i < user.length; i++) {
//   console.log(user[i]);
// }

// for (var index in user) {
//   console.log(user[index]);
// }

// for (var use in user) {
//   console.log(user[use]);
// }

// 6 Xoá mảng

// var indexDel = 2;
// var newArr = [];
// for (var index in user) {
//   if (+index === +indexDel) {
//     continue;
//   }
//   newArr[newArr.length] = user[index];
// }

// console.log(newArr);

// var customers = [1, 2, 3];
// var value = 0;
// var newArr = [];
// newArr[newArr.length] = value;
// for (var index in customers) {
//   newArr[newArr.length] = customers[index];
// }
// // console.log(customers);
// console.log(newArr);

var arr = [];
arr["a"] = "Hoang An";
arr["b"] = "Duong";
arr["c"] = "Dai the";

for (var key in arr) {
  console.log(arr[key]);
}
