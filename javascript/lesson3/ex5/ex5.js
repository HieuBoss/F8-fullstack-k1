// Bài 5: Vẽ tam giác số
// Vẽ tam giác số sau với N dòng

// 1

// 2 3

// 4 5 6

// 7 8 9 10

// 11 12 13 14 15

function isTriangle(n) {
  var row = "";
  var triangle = 1;
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      row += `${triangle} `;
      triangle++;
    }
    row += "\n";
  }
  console.log(row);
}
console.log(isTriangle(5));
