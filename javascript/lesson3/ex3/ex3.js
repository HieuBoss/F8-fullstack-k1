// Bài 3: Tính giá trị biểu thức
// Cho trước số nguyên n. Tính giá trị biểu thức sau

// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
var n = 2,
  s = 0;
if (n % 1 === 0 && n > 0) {
  for (var i = 1; i <= n; i++) {
    s += i * (i + 1);
  }
  console.log(`Giá trị của biểu thức là: ${s} `);
}
