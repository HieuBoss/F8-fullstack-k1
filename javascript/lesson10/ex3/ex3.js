var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");
var carouselItems = carouselInner.querySelectorAll(".item");
var formInput = document.querySelector(".form-input");

if (carouselItems.length) {
  var inputActive = "";
  carouselItems.forEach(function (item, index) {
    // console.log(index);
    var check = document.createElement("span");
    inputActive += `<span class="${index === 0 ? "active" : ""}"
       data-index="${index}"></span>`;
    formInput.appendChild(check);
    formInput.innerHTML = inputActive;
  });
  var formActive = document.querySelector(".form-input .active");
  var formSpan = document.querySelectorAll("span");
  // console.log(formActive);
  var itemWidth = carouselInner.clientWidth;
  var totalWidth = itemWidth * carouselItems.length;

  carouselInner.style.width = `${totalWidth}px`;

  var position = 0;
  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
    var nextElement = formActive.nextElementSibling;
    nextElement.classList.add("active");
    formActive.classList.remove("active");
    formActive = nextElement;
  });

  navPrev.addEventListener("click", function () {
    if (position < 0) {
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
    var prevElement = formActive.previousElementSibling;
    prevElement.classList.add("active");
    formActive.classList.remove("active");
    formActive = prevElement;
  });
  formSpan.forEach(function (span) {
    span.addEventListener("click", function () {
      var index = parseInt(this.getAttribute("data-index"));
      var newPosition = -index * itemWidth;
      carouselInner.style.transform = `translateX(${newPosition}px)`;
      updateFormSpan(index);
    });
  });

  function updateFormSpan(index) {
    formSpan.forEach(function (span, spanIndex) {
      if (span.classList.contains("active")) {
        span.classList.remove("active");
      }
      if (index === spanIndex) {
        span.classList.add("active");
      }
    });
    // span.classList.add("active");
  }
}
