const count = document.querySelector(".counter");
const btn = document.querySelector(".btn");
let timeStart = 30;
let timeEnd = 0;
count.textContent = timeStart;
btn.disabled = true;

let showTime = setInterval(function () {
  count.textContent = timeStart;
  timeStart--;
  if (timeStart < timeEnd) {
    clearInterval(showTime);
    btn.disabled = false;
    btn.href = "https://fullstack.edu.vn/";
    btn.addEventListener("click", function () {
      window.location.href = btn.href;
    });
  } else {
    btn.disabled = true;
  }
}, 1000);
