// // var a = "co" ;
// // var b = a == undefined || a ==null ? a : "f8";
// // console.log(b);
// // var a= 10;
// // console.log("Hieu boss");
// // if (a >=10){
// //     console.log("f8");
// // }

// // var total = 15000000;
// // var income = 0;
// // if (total < 5000000){
// //     income = total - (total * 1/100) ;
// // } else if (5000000 <= total <= 15000000){
// //     income = total - (total * 3/100) ;
// // }
// // else{
// //     income = total- (total * 5/100);
// // }
// // console.log(income);

// var month = 15;
// if (month % 1 === 0 && month >= 1 && month <= 12) {
//   var days;
//   switch (month) {
//     case 2:
//       days = 29;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;
//     default:
//       days = 31;
//       break;
//   }
//   console.log(`thang ${month} co ${days} ngay`);
// } else {
//   console.log(`khong co thang ${month}`);
// }
// for (var i = 1; i <= 10; i++) {
//   console.log(`chao ${i}`);
// }
// for (var i = 10; i >= 1; i--) {
//   console.log(`xin  ${i}`);
// }

// var n = 5;
// var results = 0;
// var subResult = 1;
// // for (var i = 1; i <= n; i++) {
// //   results = results + i;
// // }
// // console.log(results);

// for (var i = 1; i <= n; i++) {
//   subResult *= i;
//   results += subResult;
// }
// console.log(results);
// console.log(subResult);
var n = 15;
var check = true;
if (n <= 1) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      i = n;
    }
  }
}

if (check) {
  console.log(`${n} la so nguyen to`);
} else {
  console.log(`${n} khong la so nguyen to`);
}
