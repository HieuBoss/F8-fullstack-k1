// bài 3

function user(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
}

var registerUser = [];
function register(name, password, email) {
  if (!name || !password || !email) {
    return "vui lòng nhập đầy đủ thông tin cá nhân!";
  }

  var checkUser = registerUser.find((user) => {
    user.email === email;
  });
  if (checkUser) {
    return "Email đã tồn tại!";
  }

  var newUser = new user(name, password, email);
  newUser.role = "user";
  registerUser.push(newUser);
  console.log("Đăng kí thành công");
  return;
}
function login(email, password) {
  for (var key of registerUser) {
    if (key.email === email && key.password === password) {
      return key;
    } else {
      return "Thông tin đăng nhập không hợp lệ";
    }
  }
}
register("Hieu", "128334", "hieu@gmail.com");
register("boss", "136567", "boss@gmail.com");
console.log(registerUser);
var test = login("boss@gmail.com", "");
console.log(test);
