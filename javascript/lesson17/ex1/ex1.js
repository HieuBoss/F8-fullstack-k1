// Arrow function không tham số

// var message = () => {
//   return "Hello";
// };
// console.log(message());
// Arrow function có 1 tham số
// var message = (msg) => {
//   return msg;
// };

// console.log(message("Hello f8"));
// Arrow function có nhiều tham số
// var getMessage = (msg, type = "success") => {
//   console.log(`msg: ${msg}`);
//   console.log(`type:${type}`);
// };
// getMessage("Hello", "error");

// Arrow function có return
// var getTotal = (a, b) => a + b;
// console.log(getTotal(1, 2));

// // lưu ý nếu return về 1 object -> bọc cặp ngoặc()->ngoặc tròn
// var getCustomer = () => ({ name: "Hieu", email: "hieu2gmail.com" });
// console.log(getCustomer());

// var users = [
//   {
//     name: "Nguyen van A",
//     email: "Nguyenvana@gmail.com",
//   },
//   {
//     name: "Nguyen van B",
//     email: "Nguyenvanb@gmail.com",
//   },
//   {
//     name: "Nguyen van C",
//     email: "Nguyenvanc@gmail.com",
//   },
// ];
// var html = users
//   .map(
//     (user) =>
//       `<h3>${user.name}</h3>
//   <h3>${user.email}</h3>`
//   )
//   .join("");
// document.body.innerHTML = html;

/*
Lưu ý khi dùng arrow function 
-
*/

// var btn = document.querySelector(".btn");
// var content = document.querySelector(".content");
// content.addEventListener("click", () => {
//   btn.addEventListener("click", () => {
//     console.log(this);
//   });
// });

// var products = document.querySelector(".product h2");
// products.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(this);
//   });
// });

// for (var i = 0; products.clientHeight; i++) {
//   products.addEventListener("click", () => {
//     console.log(this);
//   });
// }

// var getMax = () => {
//   console.log(arguments);
// };
// var user = {
//   name: "Hoang An",
//   email: "hoangan@gmail.com",
//   getName: () => {
//     console.log(this);
//     return this.name;
//   },
// };
// console.log(user.getName());
// var Customer = () => {
//   this.name = "Hoang An";
//   this.getName = function () {
//     return "hoang an";
//   };
// };
// var customer = new Customer();
