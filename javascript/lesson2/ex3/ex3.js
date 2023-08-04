console.log(`========bài 3========`);
var a = 15,
  b = 11,
  c = 6;
var results;
if (a > b && a > c) {
  console.log(`Giá trị lớn nhất là a: ${a}`);
} else if (b > a && b > c) {
  console.log(`Giá trị lớn nhất là b: ${b}`);
} else {
  console.log(`Giá trị lớn nhất là c: ${c}`);
}
console.log(Math.max(a, b, c));
