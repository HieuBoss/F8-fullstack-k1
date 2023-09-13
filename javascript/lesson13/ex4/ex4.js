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
  rate = (e.offsetX * 100) / progressBarWidth;
  progress.style.width = `${rate}%`;
  initialRate = rate;
  isDrag = true;
  initialClientX = e.clientX;
  handleChange(rate);
  var newTime = (audio.duration * rate) / 100;
  currentTimeEl.innerText = getTime(newTime);
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    rate = (space * 100) / progressBarWidth + initialRate;
    if (rate < 0) {
      rate = 0;
    }
    if (rate > 100) {
      rate = 100;
    }
    progress.style.width = `${rate}%`;
    handleChange(rate);
    var newTime = (audio.duration * rate) / 100;
    currentTimeEl.innerText = getTime(newTime);
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
  var time = (mouseX / progressBarWidth) * audio.duration;
  setTime.textContent = getTime(time);
  setTime.style.left = `${mouseX}px`;
});

progressBar.addEventListener("mouseout", function () {
  setTime.style.display = "none";
});

progressBar.addEventListener("mouseover", function () {
  setTime.style.display = "block";
});
audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  audio.play();
});
var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
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
  currentTimeEl.innerText = getTime(this.currentTime);
  var rate = (this.currentTime / this.duration) * 100;
  progress.style.width = `${rate}%`;

  getAudio(lyric);
});
var btnOpenKaraoke = document.querySelector(".open-karaoke");
var karaoke = document.querySelector(".karaoke");
var btnCloseKaraoke = document.querySelector(".close");
btnOpenKaraoke.addEventListener("click", function () {
  karaoke.classList.add("show");
});
btnCloseKaraoke.addEventListener("click", function () {
  karaoke.classList.remove("show");
});

var textKaraoke = document.querySelector(".karaoke-inner");
var text = document.createElement("div");
textKaraoke.append(text);
var lyric = JSON.parse(lyricData).data.sentences;
// console.log(lyric);
var getSecond = function (miliSecond) {
  return miliSecond / 1000;
};

var getAudio = function (lyric) {
  var checkWord = lyric.find((word) => {
    var startTime = getSecond(word.words[0].startTime);
    var endTime = getSecond(word.words[word.words.length - 1].endTime);
    return audio.currentTime >= startTime && audio.currentTime <= endTime;
  });

  if (checkWord) {
    var html = "";
    checkWord.words.forEach((word) => {
      html += `<span>${word.data} </span> `;
    });
    text.innerHTML = html;
  } else {
    text.innerHTML =
      "Không tìm thấy từ nào phù hợp với thời gian hiện tại của âm thanh.";
  }
};

getAudio(lyric);
