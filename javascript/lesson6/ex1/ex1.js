// Bài 1
// Lấy kết quả giao giữa 2 mảng

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = (function () {
  if (Array.isArray(arrA) && Array.isArray(arrB)) {
    var newArr = arrA.reduce((prev, current) => {
      if (arrB.includes(current) && !prev.includes(current)) {
        prev.push(current);
      }
      return prev;
    }, []);
    if (newArr.length === 0) return `Cả hai mảng phần tử đều khác nhau`;
    else return `Các phần tử giống nhau là ${newArr}`;
  } else return `Một hoặc hai phần tử không phải mảng`;
})();
console.log(result);
