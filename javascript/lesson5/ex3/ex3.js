// Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý

var number = [9, 1, 3, 4, 3, 6, 7, 4, 7, 8];

if (number.length !== 0) {
  var result = number.filter((item, index) => number.indexOf(item) === index);
} else {
  console.log(`Đây là mảng rỗng`);
}
console.log(result);
