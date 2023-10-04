// Async Await

/*
Async là một function->luôn trả về 1 promise

*/
// const getData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve("Hoàng an");
//       reject("Loi mang");
//     }, 1000);
//   });
// };

// (async () => {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Hoan thanh");
//   }
// })();

// const getName = async () => {
//   // return "Hoàng an";
//   // getData().then((data) => {
//   //   console.log(data);
//   // });

// };
// console.log(getName());
// getName();

// console.log(getName());
// getName().then((data) => {
//   console.log(data);
// });

// const getA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Get A");
//     }, 1000);
//   });
// };
// const getB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Get B");
//     }, 2000);
//   });
// };

// const getC = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Get C");
//     }, 500);
//   });
// };
// (async () => {
//   try {
//     const dataA = await getA();
//     console.log(dataA);

//     const dataB = await getB();
//     console.log(dataB);
//     const dataC = await getC();
//     console.log(dataC);
//   } catch (e) {
//     console.log("Loi roi");
//   }
// })();

const getRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        text: () => {
          return new Promise((resolve) => {
            resolve(JSON.stringify(data));
          });
        },
        json: () => {
          return new Promise((resolve) => {
            resolve(data);
          });
        },
      };
      const data = {
        name: "Hieu",
        email: "hieu@gmail.com",
      };
      resolve(response);
    }, 1000);
  });
};
// getRequest()
// .then((response) => {
//   // console.log(response);
//   // return response.json(); //data tra ve object
//   return response.text(); //data tra ve json
// })
// .then((data) => {
//   console.log(data);
// });
(async () => {
  const response = await getRequest();
  const data = await response.json();
  console.log(data);
})();
