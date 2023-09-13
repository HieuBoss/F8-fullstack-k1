/*
JSON (JavaScript Object Notation)
- là chuỗi
- dùng để mô tả dữ liệu một cách chính xác
-được dùng để giao tiếp dữ liệu giữa các nền tảng với nhau 

ví dụ: 

các thao tác với json

1. chuyển từ các kiểu dũ liệu thành json
JSON.stringify()

2. chuyển từ json về kiểu dữ liêuj tương ứng 
JSON.parse()
*/

var users = [
  {
    id: 1,
    name: "Hieu 1",
    email: "hieudzai1@gmail.com",
  },
  {
    id: 2,
    name: "Hieu 2",
    email: "hieudzai2@gmail.com",
  },
  {
    id: 3,
    name: "Hieu 3",
    email: "hieudzai3@gmail.com",
  },
];

var json = JSON.stringify(users);
// console.log(json);

var users = JSON.parse(json);
console.log(users);

/*
nguyên tắc
- key phải nằm trong dấu nháy kép
- kết thúc cặp key ,value cuối cùng k đc có dấu phẩy
- bắt đầu chuỗi json bằng cặp ngoặc nhọn
*/
