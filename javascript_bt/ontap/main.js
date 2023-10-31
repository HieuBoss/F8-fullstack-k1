//Async Await -> ES7
//Async Function -> Luôn trả về 1 promise
//Muốn resolve 1 promise => Dùng từ khóa await trước function cần gọi

// const getUser = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("F8");
//     }, 1000);
//   });
// };

// const showUser = async () => {
//   const user = await getUser(); //Mỗi 1 lần await -> 1 lần then
//   console.log(user);
//   console.log("Hoàn thành");
// };

// showUser();

//IIFE
// (async () => {
//   const user = await getUser();
//   console.log(user);
// })();

const download1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 1");
    }, 1000);
  });
};

const download2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 2");
    }, 1500);
  });
};

const download3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 3");
    }, 500);
  });
};

const getImage = async () => {
  const image1 = await download1();
  //   console.log(image1);
  const image2 = await download2();
  //   console.log(image2);
  const image3 = await download3();
  console.log(image1, image2, image3);
};

getImage();
