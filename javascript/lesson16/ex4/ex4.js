const count = document.querySelector(".counter");
const btn = document.querySelector(".btn");
let timeStart = 30;
let timeEnd = 0;
function showTime(time) {
  if (!showTime.lastTime) {
    showTime.lastTime = time;
  }
  if (time - showTime.lastTime >= 1000) {
    showTime.lastTime = time;

    if (timeStart < timeEnd) {
      clearInterval(showTime);
      btn.disabled = false;
      btn.addEventListener("click", function () {
        window.location.href = "https://fullstack.edu.vn/";
      });
    } else {
      count.textContent = timeStart;
      btn.disabled = true;
      timeStart--;
    }
  }
  requestAnimationFrame(showTime);
}
showTime();
