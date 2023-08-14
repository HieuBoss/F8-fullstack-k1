// Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

// Sắp xếp mảng theo thứ tự tăng dần

// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
var numbers = [5, 1, 9, 8, 10],
  element = 4;

numbers.sort(function (a, b) {
  return a - b;
});

numbers.splice(1, 0, element);
console.log(numbers);
