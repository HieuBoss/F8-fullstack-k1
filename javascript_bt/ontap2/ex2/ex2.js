// bai 1 lay ten trong ho va ten

// var fullname = "Tạ Hoàng An";
// var firstname = fullname.split(" ").slice(-1).join();
// console.log(firstname);

// bai 2 sap xep danh sach khach hang tang dan theo ten

// var customer = [
//   "Nguyễn Đại Thế",
//   "Nguyễn Dương",
//   "Tạ Hoàng An",
//   "Đặng Ngọc Sơn",
//   "Trần Công Lực",
// ];

// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };
// customer.sort(function (a, b) {
//   //   console.log(b, a);
//   //   a = sau;
//   //   b = truoc;

//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });
// console.log(customer);

// bai 3 tim kiem danh sach khach hang theo tu khoa

// var customer = [
//   "Nguyễn Đại Thế",
//   "Nguyễn Dương",
//   "Tạ Hoàng An",
//   "Đặng Ngọc Sơn",
//   "Trần Công Lực",
//   "Hoàng Anh",
// ];
// var keyword = "Hoàng";
// var result = customer.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);

// var numbers = [5, 10, 15, 20, 25];
// var results = numbers.reduce(function (prev, current, index) {
//   console.log(prev, current);
//   return current;
// }, 0);
// console.log(results);

// var result = numbers.reduce(function (total, number) {
//   return total + number;
// }, 0);
// console.log(result);

// tìm max trong mảng sau, dùng reduce
// var numbers = [5, 1, 9, 2, 6];
// var result = numbers.reduce(function (max, number) {
//   return max < number ? number : max;
// }, 0);
// console.log(result);
// tìm phần tử khác giữa 1 và 2
// var arr1 = [5, 2, 1, 9];

// var arr2 = [3, 2, 9];

// var result = arr1.reduce(function (prev, current) {
//   //   if (!arr2.includes(current)) {
//   //     prev.push(current);
//   //   }
//   !arr2.includes(current) && prev.push(current);
//   return prev;
// }, []);
// console.log(result);
