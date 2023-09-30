// const step1 = () => {
//   console.log("Step1");
// };
// const step2 = () => {
//   setTimeout(() => {
//     console.log("Step2");
//   }, 1000);
// };
// const step3 = () => {
//   console.log("Step3");
// };
// step1();
// step2();
// step3();

/*
3 cách xử lý bất đồng bộ

1 Callback

2 Promise

3 Async Await Function
*/

// const getUsers = () => {
//   setTimeout(() => {
//     console.log("Danh Sach user");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const showMessage = () => {
//   console.log("Lay du lieu thanh cong");
// };
// getUsers(showMessage);

// const getUsers = () => {
//   const promises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = [
//         {
//           name: "Hoang An",
//           email: "hoangan@gmail.com",
//         },
//       ];
//       // console.log("ok");
//       resolve(data);
//       reject("Loi ket noi");
//     }, 1000);
//   });
//   return promises;
// };
// const showMessage = () => {
//   console.log("Lay du lieu thanh cong");
// };
// getUsers()
//   .then((users) => {
//     console.log(users);
//     showMessage();
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(getUsers());

const getA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getA");
    }, 1000);
  });
};
const getB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getB");
    }, 2000);
  });
};
const getC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getC");
    }, 1500);
  });
};

// getA().then((data) => {
//   console.log(data);
//   getB().then((data) => {
//     console.log(data);
//     getC().then((data) => {
//       console.log(data);
//     });
//   });
// });
getA()
  .then((data) => {
    console.log(data);
    return getB();
  })
  .then((data) => {
    console.log(data);
    return getC();
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Da xong");
  });
