/*
Event Object
*/
var btn = document.querySelector(".btn");
var nameEl = document.querySelector(".name");
// btn.addEventListener("click", function (e) {
//   console.log(this);
//   console.log(e);
//   if (!e.ctrlKey) {
//     this.style.background = "green";
//   } else {
//     this.style.background = "red";
//   }
// });

// nameEl.addEventListener("mouseup", function (e) {
//   console.log(e);
// });

var isDown = false;
var offsetX = 0;
var offsetY = 0;
btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDown = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  }
});
document.addEventListener("mousemove", function (e) {
  if (isDown) {
    // console.log("Dang keo");
    var css = {
      top: `${e.clientY - offsetY}px`,
      left: `${e.clientX - offsetX}px`,
    };
    Object.assign(btn.style, css);
  }
});
document.addEventListener("mouseup", function () {
  isDown = false;
});

var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this.href);
});

link.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("khong duoc click chuot phai");
});

var content = document.querySelector(".content");
var span = content.querySelector("span");
// content.addEventListener("click", function () {
//   console.log("content clicked");
// });
// span.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("span clicked");
// });

content.addEventListener("click", function (e) {
  console.log(e.target);
});
