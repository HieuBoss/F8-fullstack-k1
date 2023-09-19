var btn = document.querySelector(".btn");
var countEl = document.querySelector(".count");
var message = document.querySelector(".message");

// var countEvent = new Event("count");
// console.log(countEvent);
// btn.addEventListener("click", function () {
//   countEl.innerText++;
//   if (+countEl.innerText === 10) {
//     // message.innerText = "Hello";
//     countEl.dispatchEvent(countEvent);
//   }
// });

// countEl.addEventListener("count", function () {
//   // console.log("súc xắc");
// });

// giữ chuột thì cộng nhả ra mất
var increment = new Event("increment");

btn.addEventListener("mouseup", function () {
  isMouseDown = false;
});
btn.addEventListener("mousedown", function () {
  isMouseDown = true;
  handleIncrement(countEl);
});
var isMouseDown = false;
var handleIncrement = function (current) {
  current.innerText++;
  var id = setTimeout(function () {
    handleIncrement(current);
  }, 100);
  if (!isMouseDown) {
    clearTimeout(id);
  }
};
// countEl.addEventListener("increment", function () {
//   isMouseDown = true;
//   handleIncrement(this);
// });

var quantity = document.querySelector(".quantity");
var quantityInput = quantity.querySelector("input");
var minusBtn = quantityInput.previousElementSibling;
var plusBtn = quantityInput.nextElementSibling;
var changeEvent = new Event("change");
plusBtn.addEventListener("click", function () {
  quantityInput.value++;
  quantityInput.dispatchEvent(changeEvent);
});
minusBtn.addEventListener("click", function () {
  quantityInput.value--;
  if (quantityInput.value < 1) {
    quantityInput.value = 1;
    alert("phải mua ít nhất 1 hàng");
  }
  quantityInput.dispatchEvent(changeEvent);
});

quantityInput.addEventListener("change", function () {
  console.log(this.value);
});

var timer = document.querySelector(".timer");
// timer.addEventListener("change", function () {
//   console.log(this.value);
// });
var initialValue = null;
var dragEvent;
document.addEventListener("mouseup", function () {
  initialValue = null;
});
timer.addEventListener("input", function () {
  if (!initialValue) {
    initialValue = this.value;
    dragEvent = new CustomEvent("drag", {
      detail: { initialValue: initialValue },
    });
  }
  if (this.value !== initialValue) {
    timer.dispatchEvent(dragEvent);
  }
});
timer.addEventListener("drag", function (e) {
  console.log(this.value, e.detail.initialValue);
});
