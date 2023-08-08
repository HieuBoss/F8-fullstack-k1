// Bài 4: Viết hàm kiểm tra số nguyên tố
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?

// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về
// Gọi hàm trong câu điều kiện if else
var n = 5;
function Prime(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
        n = i;
      }
    }
  }
  return true;
}

if (Prime(n)) {
  console.log(`${n} là số nguyên tố`);
} else {
  console.log(`${n} không là số nguyên tố `);
}
