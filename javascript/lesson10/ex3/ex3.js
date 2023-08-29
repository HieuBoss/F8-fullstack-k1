var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");

//Tính toán số lượng ảnh

var carouselItems = carouselInner.querySelectorAll(".item");
var formInput = document.querySelector(".form-input"); // Lấy phần tử chứa input

carouselItems.forEach(function (item, index) {
  console.log(item);
  var input = document.createElement("span");

  formInput.appendChild(input);
});

if (carouselItems.length) {
  //Xử lý
  //Lấy chiều rộng của 1 item
  var itemWidth = carouselInner.clientWidth; //Trả về chiều cộng của element

  //Tính tổng chiều rộng các item
  var totalWidth = itemWidth * carouselItems.length;

  //Cập nhật CSS cho carousel-inner
  carouselInner.style.width = `${totalWidth}px`;

  //Xử lý chuyển slide khi click vào nút next
  var position = 0;
  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
  });

  navPrev.addEventListener("click", function () {
    if (position < 0) {
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
  });
}
// var handleNext = function () {
//   if (Math.abs(position) < totalWidth - itemWidth) {
//     position -= itemWidth;
//     carouselInner.style.translate = `${position}px`;
//   }
// };

// var isHover = false;

// carouselInner.addEventListener("mouseover", function () {
//   isHover = true;
// });

// carouselInner.addEventListener("mouseout", function () {
//   isHover = false;
// });
// setInterval(function () {
//   if (!isHover) {
//     handleNext();
//   }
// }, 1000);
