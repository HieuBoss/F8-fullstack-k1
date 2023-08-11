// 1 length
var str = "nguyen hieu f8";
// console.log(str.length);

// 2 charAt tra ve ky tu 0
// console.log(str.charAt(2));
// console.log(str.at(5));

// 3 charCodeAt tra về mã ASCII của ký tự theo index
// console.log(str.charCodeAt(1));

// 4 concat(str2, str3, ...) nối chuỗi
// console.log(str.concat("A", "B", "C"));

// 5 indexOf(subStr) tìm vị trí đầu tiên chuỗi subStr trong chuỗi cha. Nếu tìm thấy trả về index , không tìm trả về -1
// console.log(str.indexOf("F8"));

// 6 lastIndexOf(subStr) tìm vị trí cuối
// console.log(str.lastIndexOf("F8"));

// 7 includes(subStr) tìm chuỗi nhưng trả về True và False
// console.log(str.includes("F8"));

// 8 slice(strart, end) cắt chuỗi nhưng từ start đến end
// console.log(str.slice(3, 8));

// console.log(str.slice(-5));

// 9 replace(search, with) tìm và thay thế (chỉ thay thế vị trí đầu tiên)
// console.log(str.replace(/f8/g, "F88"));

// 10 replaceAll(search, with) tìm và thay thế tất cả
// console.log(str.replace("f8", "F10"));

// 11 split(char) tách chuỗi thành mảng
// console.log(str.split(" "));

// 12 match(pattern) cắt chuỗi dựa vào biểu thức chính quy
// var content = `lsajbkasjdbkjwdn   hhnkjjwbrj uwhjuhbdjhvsfytd asusygdsbeirieka 0385669002 jashbashbd 012345678`;
// var pattern = /(0|\+84)\d{9}/g;
// var phones = content.match(pattern);
// console.log(phones);

// 13 toLowerCase() chuyển thành chữ thường
// 14 toUpperCase() chuyển thành chữ hoa
// 15 trim() loại bỏ khẳng trắng đầu và cuối chuỗi
// 16 trimStart() loại bỏ khoảng trắng đầu chuỗi
// 17 trimEnd() loại bỏ khoảng trắng cuối chuỗi

// mảng

console.log(Array.prototype);

var users = ["An", "Anh", "Dũng ", "Dương"];
console.log(users);
// 1 at() lấy phần tử trong mảng theo index
// console.log(users.at(0));
// 2 concat nối mảng và trả về mảng mới sau khi nối
// console.log(users.concat([1, 2, 3], [4, 5, 6]));
// console.log(users.concat("Tuấn"));

// 3 indexOf() tìm vị trí xuất hiện đầu tiên  của phần tư  mảng theo  giá trị
// console.log(users.indexOf("Dũng"));

// 4 lastIndexOf() tìm vị trí cuối

// 5 includes(value) tìm phần tử trong mảng trả về true false

// 6 slice(start, end) trả về một mảng bao gồm các phàn tử từ start đến end
// console.log(users.slice(-1));

// 7 join() gộp các phần tử mảng thành chuỗi
// console.log(users.join("_"));

// // 8 push() thêm phần tử cào cuối mảng và trả về số lượng sau khi thêm
// var count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

// 9 unshift() thêm phần tử vào đầu mảng
// console.log(users);
// console.log(count);

// 10 pop() xoá phần tử cuối mảng và trả về giá trị phần tử vừa xóa
// 11 shift() xóa phần tử đầu mảng
// var value = users.shift();
// console.log(users, value);

// 12 reverse() Đảo ngược mảng
// 13 sort() sắp xếp mảng theo thứ tự tăng dần

// users.sort().reverse();
// console.log(users);

// var numbers = [5, 1, 12, 24, 100];
// numbers.sort(function (a, b) {
//   return a - b;
//   // a-b tang dan
//   // b- a giam dan
// });
// console.log(numbers);

// // 14 fill thay thế tất cả các phần tử thành 1 giá trị
// users.fill("An");
// console.log(users);

// 15 forEach() Duyệt từng phần tử

// lưu ý
// không trả về gtri
// không dừng đc k break không return
// users.forEach(function (users, index) {
//   console.log(users, index);
// });

// 16 map() duyệt các phần tử và trả về 1 mảng mới
// result = users.map(function (users, index) {
//   console.log(users, index);
//   return `<h3>${users}</h3>`;
// });
// console.log(result);
// document.write(result.join(""));

/* 
17 some()
trả về true nếu có 1 phần tử return về true
trả về false nếu không có phần tử nào return về true
*/
// var check = users.some(function (user) {
//   if (user === "An") {
//     return true;
//   }
// });
// console.log(check);

/*
18 every()
trả về true nếu tất cả phần tử trả về true
trả về false nếu ít nhất 1 phần tử trả về false
 */
// var numbers = [1, 3, 5, 7, 8];
// var check = numbers.every(function (numbers) {
//   if (numbers % 2 !== 0) {
//     return true;
//   }
// });
// console.log(check);

// 19 filter()
// trả về 1 mảng
// lấy ra các phần tử được return true

// var result = users.filter(function (user) {
//   if (user === "An" || user === "Dũng") {
//     return true;
//   }
// });
// console.log(result);

// 20 find()
// trả về 1 phần của mảng
// thỏa mãn dkien phần tử đầu tiên return true

// var result = users.find(function (user) {
//   if (user === "An" || user === "Dũng") {
//     return true;
//   }
// });
// console.log(result);
