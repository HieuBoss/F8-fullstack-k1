// DOM node

/*
sự kiện onload => trang web đc tải xong (Tải xong tất cả các tài nguyên audio,img,video...)

*/
// window.addEventListener("load", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

// window.addEventListener("DOMContentloaded", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

/*
Tạo element node 
dùng phương thức : document.createElement('tag')
*/

var root = document.querySelector("#root");
console.log(root);

var h1 = document.createElement("h1");
h1.innerHTML = "Hello F8";
h1.classList.add("title");
console.log(h1);
// render Element node lên UI ( User Interface)
// điều kiện phải có 1 element thật

root.appendChild(h1);
var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerText = "Item 1";
ul.appendChild(li);
var li = document.createElement("li");
li.innerText = "Item 2";
ul.appendChild(li);
var li = document.createElement("li");
li.innerText = "Item 3";
ul.appendChild(li);
root.append(ul);

var h2 = document.createElement("h2");
h2.innerHTML = "Fullstack";
root.prepend(h2);

h1.innerText = "Hello F88";
h2.remove();

// ví dụ: xây dựng ứng dụng counter dùng DOM node

var handleIncrement = function () {
  countNumber.data++;
  if (+countNumber.data === 10) {
    countNumber.remove();
  }
};
var h2Counter = document.createElement("h2");
h2Counter.innerText = "count : ";

// root.append(h2Counter);

var countNumber = document.createTextNode(0);
h2Counter.append(countNumber);
root.append(h2Counter);

var btnIncre = document.createElement("button");
btnIncre.innerText = "+";
btnIncre.addEventListener("click", handleIncrement);
root.append(btnIncre);

var counterComment = document.createComment("Counter App");
root.append(counterComment);

// thêm một node mới vào trc một node khác

var h2title = document.createElement("h2");
h2title.innerText = "counter App";
root.insertBefore(h2title, h2Counter);

var h2titleNew = document.createElement("h2");
h2titleNew.innerText = "ung dung dem";
root.replaceChild(h2titleNew, h2title);
