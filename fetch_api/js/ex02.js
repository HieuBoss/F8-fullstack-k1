const serverApi = `http://localhost:3000`;
const postUser = async (data) => {
  const dataUrlEncoded = new URLSearchParams(data).toString();
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // body: JSON.stringify(data),
    body: dataUrlEncoded,
  });
  console.log(response);
};

// postUser({
//   name: "User 8",
//   email: "user8@gmail.com",
// });
const getUsers = async (e) => {
  const response = await fetch(`${serverApi}/users`);
  const users = await response.json();

  console.log(response.headers.get("content-type"));
  //   console.log(users);
};
getUsers();
