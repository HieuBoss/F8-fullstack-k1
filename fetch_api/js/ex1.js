/*
API application programming interface
-> Giao diện lập trình ứng dụng

+Front-end với back-end
+Back-end với Back-end
+sử dụng các hàm trong 1 thư viện
+...
khi làm việc với ưeb API => thường sử dụng chuẩn RESTFUL

-URL:Server API + resource
-Http Method: phương thức giao tiếp
+GET lấy dữ liệu
+POST thêm mới dữ liệu
+PUT cập nhật dữ liệu
+PATCH cập nhật dữ liệu
+DELETE xóa dữ liệu

=> Back-end sẽ xây dựng

ví dụ:
-Url: http://api.fullstack.edu.vn/users

- Tổng hợp Http Method + resource => Endpoints

ví dụ:

-POST/users
-GET/ users

làm sao để có API 
-sử dụng các dịch vụ có sẵn 
-FAKE bằng thư viện : JSON VERVER
*/

// sử dụng hàm fetch() để gọi API
// fetch() trả về promise
const apiUrl = "http://localhost:3000/users";

const getUsers = async () => {
  const response = await fetch(apiUrl);
  //   response trả về thông tin của response sau khi gọi API
  const users = await response.json();
  // response message body
  //   console.log(users);

  document.body.innerHTML = users
    .map(({ name, email }) => `<h2>${name}</h2><h3>${email}</h3><hr>`)
    .join("");
};
getUsers();

const getUser = async (id) => {
  const response = await fetch(apiUrl + "/" + id);
  const user = await response.json();
  console.log(user);
};
getUser(1);

const postUser = async (data) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("Thanh cong");
  }
};
postUser({
  name: "User 4",
  email: "user4@gmail.com",
});
