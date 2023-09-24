// "use strict";

// a = 10;
// console.log(a);

// var getMessage = function () {
//   "use strict";
//   a = 10;
//   console.log(a);
// };
// getMessage();
// b = 20;

// Hoisting
/*
là một cơ chế mặc định của js
hoisting sẽ tự động đẩy phần khai báo lên trước 
hoisting không lấy giá trị của biến mà chỉ đẩy phần khai báo
*/
"use strict";

// a = 10;
// console.log(a);
// var a;

// console.log(b);
// var b = 10;

getMSg();
function getMSg() {
  console.log("Hello");
}
getTotal();
var getTotal = function () {
  console.log("Total");
};
