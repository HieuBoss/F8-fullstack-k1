// var btn = document.querySelector(".btn");
// 1. parentElement => chọn từ cấp cha từ element hiện tại

// Ngoài ra còn có parentNode => học kỹ ở DOM node
// btn.addEventListener("click", function () {
//   console.log(this);
//   console.log(this.parentElement);
//   console.log(this.parentElement.parentElement);
// });

// var btn = document.querySelectorAll(".btn-remove");

// btn.forEach(function (xoa) {
//   xoa.addEventListener("click", function () {
//     xoa.parentElement.remove();
//   });
// });

// 2.childen => lấy danh sách các phần tử con cấp gần nhất
var menu = document.querySelector(".menu");
// console.log(menu);
var items = menu.querySelectorAll("ul li a");
// var items = menu.children; // Array like object
// console.log(items);
if (items.length) {
  items.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      var children = this.parentElement.children;
      if (children.length === 2) {
        children[1].style.background = "yellow";
      } else {
        this.style.color = "red";
      }
    });
  });
}
