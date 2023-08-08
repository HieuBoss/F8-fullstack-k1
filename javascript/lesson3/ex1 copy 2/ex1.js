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
