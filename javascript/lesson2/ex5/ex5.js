console.log(`========bài 5========`);
var a = 20,
  b = 22,
  c = 6,
  arrange;
if (a > b) {
  arrange = a;
  a = b;
  b = arrange;
}
if (a > c) {
  arrange = a;
  a = c;
  c = arrange;
}
if (b > c) {
  arrange = b;
  b = c;
  c = arrange;
}
console.log(`Xắp xếp theo thứ tự tăng dần :${a}, ${b}, ${c}`);
