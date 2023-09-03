var track_art = document.querySelector(".track-art");
var track_name = document.querySelector(".track-name");
var track_artist = document.querySelector(".track-artist");
var playpause_btn = document.querySelector(".playpause-track");
var next_btn = document.querySelector(".next-track");
var prev_btn = document.querySelector(".prev-track");
var seek_slider = document.querySelector(".seek_slider");
var curr_time = document.querySelector(".current-time");
var total_duration = document.querySelector(".total-duration");
var curr_track = document.createElement("audio");

var track_index = 0;
var isPlaying = false;
var isRandom = false;
var updateTimer;
var music_list = [
  {
    name: "Cứ Chill Thôi",
    artist: "ft. Suni Hạ Linh & Rhymastic",
    music: "./music/song1.mp3",
    img: "./img/img1.jpg",
  },
  {
    name: "Giàu Vì Bạn Sang Vì Vợ",
    artist: "MCK",
    music: "./music/song2.mp3",
    img: "./img/img2.jpg",
  },
  {
    name: "Người Chơi Hệ Đẹp",
    artist: "Cukak Remix",
    music: "./music/song3.mp3",
    img: "./img/img3.jpg",
  },
  {
    name: "Xích Thêm Chút",
    artist: "RPT Groovie X Tlinh X RPT MCK",
    music: "./music/song4.mp3",
    img: "./img/img4.jpg",
  },
  {
    name: "SIMPLE LOVE",
    artist: "Obito x Seachains x Davis x Lena",
    music: "./music/song5.mp3",
    img: "./img/img5.jpg",
  },
  {
    name: "OK",
    artist: "BINZ",
    music: "./music/song6.mp3",
    img: "./img/img6.jpg",
  },
  {
    name: "THEY SAID",
    artist: "TOULIVER X BINZ",
    music: "./music/song7.mp3",
    img: "./img/img7.jpg",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();
  curr_track.src = music_list[track_index].music;
  curr_track.load();
  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    var random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  var seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setUpdate() {
  var seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    var currentMinutes = Math.floor(curr_track.currentTime / 60);
    var currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    var durationMinutes = Math.floor(curr_track.duration / 60);
    var durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

var timer_span = document.querySelector(".timer");

seek_slider.addEventListener("mousemove", function (event) {
  var rect = seek_slider.getBoundingClientRect();
  var offsetX = event.clientX - rect.left;
  var percentage = (offsetX / rect.width) * 100;

  var duration = curr_track.duration || 0;
  var currentTime = (duration * percentage) / 100;

  var currentMinutes = Math.floor(currentTime / 60);
  var currentSeconds = Math.floor(currentTime - currentMinutes * 60);

  var formattedTime =
    ("0" + currentMinutes).slice(-2) + ":" + ("0" + currentSeconds).slice(-2);

  timer_span.textContent = formattedTime;
  timer_span.style.display = "block";
  timer_span.style.left = offsetX + "px";
});

seek_slider.addEventListener("mouseleave", function () {
  timer_span.style.display = "none";
});