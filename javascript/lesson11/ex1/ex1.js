var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progress.querySelector("span");
// console.log(progressDot);
var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");
var setTime = progressBar.querySelector(".set-time");
var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;
var progressBarWidth = progressBar.clientWidth;

var isDrag = false;
var initialClientX = 0;
var initialRate = 0;
var rate = 0;

var handleChange = function (value) {
  // console.log(value);
};

progressBar.addEventListener("mousedown", function (e) {
  //   console.log(e.offsetX, progressBarWidth);
  //Tính tỷ lệ phần trăm giữa vị trí click với chiều rộng
  rate = (e.offsetX * 100) / progressBarWidth;

  //Update CSS vào progress
  progress.style.width = `${rate}%`;

  initialRate = rate;

  isDrag = true;

  initialClientX = e.clientX;

  //   console.log("progress bar");

  handleChange(rate);

  var newTime = (audio.duration * rate) / 100;
  // console.log(newTime);
  currentTimeEl.innerText = getTime(newTime);
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;

  // console.log(e.clientX);
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    // console.log(space);
    rate = (space * 100) / progressBarWidth + initialRate;
    if (rate >= 0 && rate <= 100) {
      progress.style.width = `${rate}%`;
      handleChange(rate);
    }
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialRate = rate;
    var newTime = (audio.duration * rate) / 100;
    audio.currentTime = newTime;
  }
});
progressBar.addEventListener("mousemove", function (e) {
  var mouseX = e.clientX - progressBar.getBoundingClientRect().left;
  var Time = (mouseX / progressBarWidth) * audio.duration;
  setTime.textContent = getTime(Time);
  setTime.style.left = `${mouseX}px`;
});

progressBar.addEventListener("mouseout", function () {
  setTime.style.display = "none";
});

progressBar.addEventListener("mouseover", function () {
  setTime.style.display = "block";
});

/*
Khi bấm chuột xuống vào chấm màu tím
- Lấy được clientX tại ví trí bấm chuột

Khi kéo chuột
- Lấy được clientX ở vị trí gần nhất (kéo đến đâu lấy vị trí ở đó)
- Tính khoảng cách kéo: clientX mới nhất - clientX ban đầu khi click
*/

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  // console.log(audio.duration);
  durationTimeEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //   console.log("đang chạy: ", this.currentTime);
  currentTimeEl.innerText = getTime(this.currentTime);

  //Tính tỷ lệ phần trăm
  var rate = (this.currentTime / this.duration) * 100;

  //Update vào timer
  progress.style.width = `${rate}%`;
});
