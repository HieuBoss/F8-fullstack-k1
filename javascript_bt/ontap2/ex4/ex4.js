/*object = đối tượng => kiểu dữ liệu tham chiếu hàm tạo của hàm object:Object

cấu tạo của object

*/
// var user = {
//   name: "Hoang An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
//   getName: function () {
//     return "Hoang An";
//   },
// };
// delete user.age;

// user.contry = "Viet Nam";
// user["address"] = "Cau Giay - Ha Noi";
// // console.log(user);
// // console.log(user.name);
// // console.log(user.email);
// // console.log(user.getName());
// // console.log(user["age"]);

// for (var key in user) {
//   //   console.log(key);
//   if (typeof user[key] === "function") {
//     console.log(user[key]);
//   } else {
//     console.log(user[key]);
//   }
// }

// console.log("========================");

// Object.keys(user).forEach(function (key) {
//   if (typeof user[key] === "function") {
//     console.log(user[key]);
//   } else {
//     console.log(user[key]);
//   }
// });

// var users = [
//   {
//     id: 1,
//     name: "Hoang An",
//     email: "hoangan@gmail.com",
//   },

//   {
//     id: 2,
//     name: "Ngoc Son",
//     email: "ngocson@gmail.com",
//   },

//   {
//     id: 3,
//     name: "Duy Hieu",
//     email: "duyhieu@gmail.com",
//   },
// ];

// console.log(users);

// var html = `<table width="100%" border="1">
//     <tr>
//         <th>ID</th>
//         <th>Ten</th>
//         <th>Email</th>
//     </tr>
//     ${users
//       .map(function (user) {
//         return `<tr>
//             <td>${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.email}</td>
//         </tr>`;
//       })
//       .join("")}
// </table>`;
// document.write(html);
var user = {
  name: "Hoang An",
  email: "hoangan.web@gmail.com",
  getName: function () {
    console.log(this);
    return this.name;
  },
  jobs: {
    name: "Giang vien",
    salary: 5000000,
    histories: [
      {
        year: 2021,
        name: "cong viec 1",
      },
      {
        year: 2022,
        name: "cong viec 2",
      },
      {
        year: 2023,
        name: "cong viec 3",
      },
    ],
  },
};

console.log(user.getName());
console.log(user.jobs.name);
// console.log(user.jobs.histories(0).name);

var a = [];
// console.log(typeof a);
Object.isObject = function (variable) {
  return;
};
// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log(`day la object`);
// } else {
//   console.log(`day khong la object`);
// }

if (Object.isObject(a)) {
  console.log(`day la object`);
} else {
  console.log(`day khong la object`);
}
