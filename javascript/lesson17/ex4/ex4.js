// function User() {
//   this.name = "Hoang An";
//   this.email = "hoangan2gmail.com";
//   this.getName = function () {
//     return this.name;
//   };
// }

class User {
  // khai báo contructor()
  // dùng để khai báo các thuộc tính và giá trị khởi tạo
  // chạy đầu tiên khi object đc khởi tạo
  constructor(name, email) {
    // định nghĩa thuộc tính

    this.name = name;
    this.email = email;

    // các giá trị khởi tạo

    // các phương thức
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
// User.prototype.message = "hoang an F8";
// const user = new User("hoang an", "hoangan@gmail.com");

// console.log(user.name);
// console.log(user.email);
// console.log(user.getEmail());
// console.log(user.message);
class Authentication extends User {
  constructor(name, email, age) {
    // console.log("constructor Authentication");
    super(name, email);
    this.age = age;
  }
  getUser() {
    return {
      name: this.getName(),
      email: this.getEmail(),
    };
  }
}

var auth = new Authentication("Hoang an", "hoangan@gmail.com", 31);
// console.log(auth);
// console.log(auth.getUser());
const root = document.querySelector("#root");

class Counter {
  constructor() {
    this.count = 0;
    this.h1 = null;
  }
  handleIncrement() {
    // console.log(this.count);
    this.count++;
    // btn.innerText = this.count;
    this.h1.innerText = this.count;
  }
  render() {
    this.h1 = document.createElement("h1");
    this.h1.innerText = this.count;
    const btn = document.createElement("button");
    btn.innerText = "+";
    btn.addEventListener("click", this.handleIncrement);

    root.append(this.h1);
    root.append(btn);
  }
}
const myCounter = new Counter().render();
