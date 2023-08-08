// var showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

// var number = function (n) {
//   console.log(n);
//   if (n === 1) {
//     return 1;
//   }
//   return n + number(n - 1);
// };

// console.log(number(8));

var fibinaci = function (n) {
  //   console.log(n);
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibinaci(n - 1) + fibinaci(n - 2);
};
console.log(fibinaci(3));
// var email = "duyhieu06112003@gmail.com";
// var username = email.slice(0, email.indexOf("@"));
// console.log(username);

// var fullname = "TẠ HOÀNG An";

// if (fullname === fullname.toUpperCase()) {
//   console.log("Viet hoa");
// } else {
//   console.log("khong viet hoa");
// }

var fullname = "tạ hoàng an";
var result = "";
var index;

for (var i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  var charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    index = i + 1;
  }
  if (i === index) {
    result += char.toUpperCase();
  } else {
    result += char;
  }
}
console.log(result);
