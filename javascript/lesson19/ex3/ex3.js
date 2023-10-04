const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
      ];

      const user = users.find(({ id: _id }) => _id === id);
      resolve(user);
    }, 1000);
  });
};

const lists = [1, 2, 3];
let sum = 0;
// // tính tổng các user có trong if
// lists.forEach(async (id) => {
//   const user = await getUser(id);
//   sum += user.salary;
// });
// console.log(sum);

// let sum = 0;
// getSalary = async () => {
//   for (let id of lists) {
//     console.log(id);
//     const user = await getUser(id);
//     sum += user.salary;
//   }
//   console.log(sum);
// };
// getSalary();

const requests = lists.map(async (id) => await getUser(id));
// console.log(requests);
Promise.all(requests).then((users) => {
  const sum = users.reduce((prev, current) => (prev += current.salary), 0);
  console.log(sum);
});
