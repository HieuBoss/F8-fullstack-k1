window.addEventListener("scroll", function () {
  console.log("scrolling...", window.scrollY);
});
// // Dừng scroll => window lắng nghe đc sự kiện
// window.addEventListener("scrollend", function () {
//   console.log("Het roi");
// });
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   window.scroll(0, 500);
// });

/*
Window.scrollY => lấy tọa độ vị trí scroll so vs top
Window.scrollX => lấy tọa độ vị trí scroll so vs left
Window.scroll(x,y) => thiết lập vị trí scroll theo trục x,y
*/

var back = document.querySelector(".back");
window.addEventListener("scroll", function () {
  var position = window.scrollY;

  if (position >= 10) {
    back.classList.add("show");
  } else {
    back.classList.remove("show");
  }
});

back.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  // window.scroll(0, 0);
  scrollTo(0);
});

var scrollTo = function (position) {
  // console.log(window.scrollY);
  var currentScrollY = window.scrollY;
  var id = setInterval(function () {
    currentScrollY -= 100;
    window.scroll(0, currentScrollY);
    if (currentScrollY < position) {
      clearInterval(id);
    }
  }, 20);
};
