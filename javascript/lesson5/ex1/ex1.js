// var a = 4,
//   max = a,
//   b = 8,
//   c = 6;

// if (max < b) {
//   max = b;
// }
// if (max < c) {
//   max = c;
// }
// console.log(`Số lớn nhất là ${max}`);

// function income(n) {
//   var result = 1;
//   // core = 0;

//   for (i = n; i >= 1; i--) {
//     // console.log(i);
//     result = result * i;
//   }

//   return result;
// }

// // income(5);
// console.log(income(5));

// function even(n) {
//   for (var i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// console.log(even(10));
// var n = 13;
// function num(n) {
//   if (n <= 1 || n % 1 !== 0) {
//     return false;
//   } else {
//     for (var i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//         // break;
//       }
//       return true;
//     }
//   }
// }
// if (num(n)) {
//   console.log(`La so nguyen to`);
// } else {
//   console.log(`khong La so nguyen to`);
// }

// var num = [3, 5, 2, 7, 8, 10, 9];

// // console.log(num[2]);

// function findIndex(n) {
//   for (var i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     if (n === num[i]) {
//       return i;
//       //   console.log(i);
//     }
//   }

//   return `Khong tim thay so thoa man`;
// }

// // findIndex(8);
// console.log(findIndex(3));
// var content = "this is a string";
// var split = content.split(" ");
// function upperCase(str) {
//   var result = str.charAt(0).toUpperCase();
//   return (result += str.slice(1, str.length));
// }

// for (var element of split) {
//   console.log(upperCase(element) + " ");
// }
// var str2 = "";
// for (var element of split) {
//   str2 += upperCase(element) + " ";
// }

// console.log(str2);

// var content = "javascript is cool";
// console.log(
//   content
//     .replaceAll("a", "4")
//     .replaceAll("e", "3")
//     .replaceAll("i", "1")
//     .replaceAll("o", "0")
//     .replaceAll("s", "5")
// );

// var number = [1, -2, -3, 4, 5];

// var result = number.filter(function (num) {
//   return num > 0;
// });
// console.log(result);

// var number = [1, -2, -3, 4, 5];

// result = number.map(function (num, index) {
//   if (num < 0) {
//     num = num * -1;
//   }
//   return num;
// });
// console.log(result);

function uniqueArray(str) {
  var str1 = "";
  for (var i = 0; i < str.length; i++) {
    if (!str1.includes(str.charAt(i))) {
      str1 += str.charAt(i);
    }
  }
  return str1;
}
var str = "abbcccddddrttgdfe";

var uniqueStr = uniqueArray(str);
console.log(uniqueStr);

for (var i = 0; i < uniqueStr.length; i++) {
  var count = 0;
  for (var j = 0; j < str.length; j++) {
    if (uniqueStr[i] === str[j]) {
      count++;
    }
  }
  console.log(`${uniqueStr[i]} : ${count}`);
}
