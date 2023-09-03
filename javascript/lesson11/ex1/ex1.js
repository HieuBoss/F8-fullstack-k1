var songs = [
  {
    name: "Cứ Chill Thôi",
    singer: "ft. Suni Hạ Linh & Rhymastic",
    link: "./music/song1.mp3",
    image: "./img/img1.jpg",
  },
  {
    name: "Giàu Vì Bạn Sang Vì Vợ",
    singer: "MCK",
    link: "./music/song2.mp3",
    image: "./img/img2.jpg",
  },
  {
    name: "Người Chơi Hệ Đẹp",
    singer: "Cukak Remix",
    link: "./music/song3.mp3",
    image: "./img/img3.jpg",
  },
  {
    name: "Xích Thêm Chút",
    singer: "RPT Groovie X Tlinh X RPT MCK",
    link: "./music/song4.mp3",
    image: "./img/img4.jpg",
  },
  {
    name: "SIMPLE LOVE",
    singer: "Obito x Seachains x Davis x Lena",
    link: "./music/song5.mp3",
    image: "./img/img5.jpg",
  },
  {
    name: "OK",
    singer: "BINZ",
    link: "./music/song6.mp3",
    image: "./img/img6.jpg",
  },
  {
    name: "THEY SAID",
    singer: "TOULIVER X BINZ",
    link: "./music/song7.mp3",
    image: "./img/img7.jpg",
  },
];

var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progress.querySelector("span");
var startTime = document.querySelector(".start-time");
var endTime = document.querySelector(".start-time");
// console.log(progressDot);

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

/*
Khi bấm chuột xuống vào chấm màu tím
- Lấy được clientX tại ví trí bấm chuột

Khi kéo chuột
- Lấy được clientX ở vị trí gần nhất (kéo đến đâu lấy vị trí ở đó)
- Tính khoảng cách kéo: clientX mới nhất - clientX ban đầu khi click
*/

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

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
