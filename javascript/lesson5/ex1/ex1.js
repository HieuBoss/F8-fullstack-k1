// Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

var number = [10, 1, 4, 5, 3, 7];
var getMinMax = (arr) => {
  var min = arr[0],
    max = arr[0],
    indexMax = 0,
    indexMin = 0;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      indexMax = i;
    }
    if (min > arr[i]) {
      min = arr[i];
      indexMin = i;
    }
  }
  console.log(`Số lớn nhất là ${max} ở vị trí ${indexMax}`);
  console.log(`Số nhỏ nhất là ${min} ở vị trí ${indexMin}`);
};
getMinMax(number);
