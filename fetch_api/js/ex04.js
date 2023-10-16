/*
Authentication xác thực
Đăng nhập, đăng kí,...

Authorization vai trò ,ủy quyền
=>được làm gì?Quyền hạn như thế nào

1.Authentication
-Session-based Authentication

-Token-based Authentication

logout 
-call api logout
-xóa storage

xử lý khi user thay đổi accessToken => Verify Server
- nếu trả 200 =>ok
-nếu tả về 401 => xử ly logout

khi accessToken hết hạn => xử lý luôn cấp lại accessToken mới => lưu storage => call lại api cần lấy dữ liệu

ví dụ: 
1. lấy danh sách sản phẩm -> lấy được 

2. lấy danh sách bài viết ->accessToken hết hạn -> không lấy được bài viết
-call api /refresh -> lấy access mới -> lưu localStorage -> call lại danh sách bài viết

3.lấy danh sách khóa học ->
*/
import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;

client.setUrl(SERVER_AUTH_API);

const root = document.querySelector("#root");
const getProfile = async () => {
  const token = localStorage.getItem("access_token");
  const { data } = await client.get("/auth/profile", token);
  const nameEl = root.querySelector(".profile .name");
  console.log(data);
  nameEl.innerText = data.name;
};
const render = () => {
  const loginHtml = `   <div class="container py-3">
<h2 class="text-center">Đăng nhập</h2>
<hr />
<form action="" class="login">
  <div class="mb-3">
    <label for="">Email</label>
    <input
      type="email"
      class="form-control email"
      autocomplete="username"
      placeholder="Email..."
      required
    />
  </div>
  <div class="mb-3">
    <label for="">Password</label>
    <input
      type="password"
      class="form-control password"
      placeholder="Password..."
      autocomplete="current-password"
      required
    />
  </div>
  <div class="d-grid">
    <button class="btn btn-primary">Đăng nhập</button>
  </div>
</form>
</div>`;
  const welcomeHtml = `
    <div class="container py-3">
        <h2 class = "text-center">hi chào cậu <3</h2>
        <ul class="profile list-unstyled d-flex gap-2">
        <li>Chào bạn:<span class="name"></span></br></li>
        <li><a href="#" class="logout">Đăng xuất</a></li>
        </ul>
        
    </div>`;
  if (localStorage.getItem("access_token")) {
    root.innerHTML = welcomeHtml;
    getProfile();
    // Lấy thông tin user

    const logout = root.querySelector(".profile .logout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      render();
    });
  } else {
    root.innerHTML = loginHtml;
  }
};

render();

const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailEl = e.target.querySelector(".email");
  const passwordEl = e.target.querySelector(".password");

  const email = emailEl.value;
  const password = passwordEl.value;

  handleLogin({ email, password });
  emailEl.value = "";
  passwordEl.value = "";
});

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  console.log(tokens);
  const { access_token, refresh_token } = tokens;

  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
  render();
};

/*
localStorage: lưu trữ vĩnh viễn
sessionStorage: lưu trữ theo phiên
cookie: lưu trữ có thời hạn

chỉ lưu trữ text
*/
