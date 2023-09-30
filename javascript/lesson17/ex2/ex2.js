// ES6 với object,array
/*
1 Destructuring

2 spread

3 Enhance Object
*/

// Destructuring => phá vỡ cấu trúc của array, object dể có thể truy cập vào các phần tử và lưu thành các biến riêng biệt

// var user = {
//   name: "Hoang An",
//   age: 31,
//   email: "hoangan@gmail.com",
//   address: "Hai Duong",
// };
// // const name = user.name;
// // const email = user.email;
// const { name: _name, email, age, address = "Ha Noi" } = user;
// console.log(_name, email, age, address);

// const { name: _name, email, ...reset } = user;
// console.log(_name, email);
// console.log(reset);

// const user = ["Hoàng An", "hoangan@gmail.com", "31", "Hồ Chí Minh", 5000000];
// // const [username, email, , address, salary = 1000000] = user;
// // console.log(username, email, address, salary);
// const [username, email, ...reset] = user;
// console.log(username, email);
// console.log(reset);

var customers = [
  { id: 1, name: "nguyen van a" },
  { id: 2, name: "nguyen van b" },
  { id: 3, name: "nguyen van c" },
];
var html = customers
  .map(({ id, name }, index) => `<h3>${index}-${id}-${name}</h3>`)
  .join("");
console.log(html);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`a=${a}`);
console.log(`b=${b}`);

const oldObj = {
  name: "Hoang An F8",
  email: "hoangan@gmail.com",
};
const newObj = {
  course: "fullstack",
  teacher: "Hoang an",
  ...oldObj,
};
console.log(newObj);
const oldArr = ["Hoang An", "hoangan@gmail.com"];
const newArr = ["Fullstack", ...oldArr];

console.log(newArr);

const getTotal = (a, b) => {
  console.log(a, b);
};
var values = [5, 10];
// var values = { value1: 5, value2: 6 };
getTotal(...values);
