var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = carousel.querySelector(".carousel-nav");
var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");
var carouselItems = carouselInner.querySelectorAll(".item");
var formInput = document.querySelector(".form-input");
var formSpan = [];

var itemWidth = carouselInner.clientWidth;
var totalWidth = itemWidth * carouselItems.length;

carouselInner.style.width = `${totalWidth}px`;

var position = 0;
var spanIndex = 0;

if (carouselItems.length) {
  var inputActive = "";
  carouselItems.forEach(function (item, index) {
    var check = document.createElement("span");
    check.classList.add("carousel-dot");
    check.setAttribute("data-index", index);
    formInput.appendChild(check);
    formSpan.push(check); // Thêm vào mảng formSpan
    handle(check, index);
  });
  formSpan[0].classList.add("active"); // Thêm lớp active cho span đầu tiên
}

navNext.addEventListener("click", function () {
  console.log(position);
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    updateFormSpan(spanIndex + 1);
    // console.log(spanIndex);
  }
});

navPrev.addEventListener("click", function () {
  if (position < 0) {
    position += itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    updateFormSpan(spanIndex - 1);
    // console.log(spanIndex);
  }
});

function handle(span, index) {
  span.addEventListener("click", function () {
    var newPosition = -index * itemWidth;
    carouselInner.style.transform = `translateX(${newPosition}px)`;
    updateFormSpan(index);
    position = newPosition;
    // console.log(index);
  });
}

function updateFormSpan(index) {
  formSpan[spanIndex].classList.remove("active");
  formSpan[index].classList.add("active");
  spanIndex = index;
}
