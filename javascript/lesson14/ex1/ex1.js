var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

var isDrag = false;
var initialClientX = 0;
var initalRate = 0;
var rate = 0;

progressBar.addEventListener("mousedown", function (e) {
  //   console.log(e.offsetX, progressBarWidth);
  //Tính tỷ lệ phần trăm giữa vị trí click với chiều rộng
  rate = (e.offsetX * 100) / progressBarWidth;

  //Update CSS vào progress
  progress.style.width = `${rate}%`;

  initalRate = rate;

  isDrag = true;

  initialClientX = e.clientX;

  //   console.log("progress bar");

  handleChange(rate);
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
  //   console.log(initalRate);
  //   console.log("progress dot");
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    // console.log(space);
    rate = (space * 100) / progressBarWidth + initalRate;
    if (rate < 0) {
      rate = 0;
    }

    if (rate > 100) {
      rate = 100;
    }

    progress.style.width = `${rate}%`;
    handleChange(rate);
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  initalRate = rate;

  audio.currentTime = currentTime;
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
  //   console.log(audio.duration);
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
  if (!isDrag) {
    currentTimeEl.innerText = getTime(this.currentTime);

    //Tính tỷ lệ phần trăm
    rate = (this.currentTime / this.duration) * 100;

    //Update vào timer
    progress.style.width = `${rate}%`;

    currentTime = this.currentTime;

    handleKaraoke(currentTime);
  }
});

audio.addEventListener("ended", function () {
  rate = 0;
  currentTime = 0;
  audio.currentTime = 0;
  progress.style.width = 0;
  playBtn.innerHTML = playIcon;
});

var currentTime = 0;
var handleChange = function (value) {
  currentTime = (value / 100) * audio.duration;

  currentTimeEl.innerText = getTime(currentTime);

  if (!isDrag) {
    audio.currentTime = currentTime;
  }
};
var lyric = `{
    "err": 0,
    "msg": "Success",
    "data": {
      "sentences": [
        {
          "words": [
            {
              "startTime": 1170,
              "endTime": 1700,
              "data": "Hỡi"
            },
            {
              "startTime": 1700,
              "endTime": 1700,
              "data": "diêu"
            },
            {
              "startTime": 1700,
              "endTime": 2240,
              "data": "bông"
            },
            {
              "startTime": 2240,
              "endTime": 2760,
              "data": "ơi"
            },
            {
              "startTime": 2760,
              "endTime": 2760,
              "data": "hỡi"
            },
            {
              "startTime": 2760,
              "endTime": 3310,
              "data": "diêu"
            },
            {
              "startTime": 3310,
              "endTime": 3850,
              "data": "bông"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 3850,
              "endTime": 3850,
              "data": "Bình"
            },
            {
              "startTime": 3850,
              "endTime": 4360,
              "data": "minh"
            },
            {
              "startTime": 4360,
              "endTime": 4880,
              "data": "chưa"
            },
            {
              "startTime": 4880,
              "endTime": 5460,
              "data": "hé"
            },
            {
              "startTime": 5460,
              "endTime": 5460,
              "data": "tôi"
            },
            {
              "startTime": 5460,
              "endTime": 5970,
              "data": "phải"
            },
            {
              "startTime": 5970,
              "endTime": 6480,
              "data": "tìm"
            },
            {
              "startTime": 6480,
              "endTime": 8070,
              "data": "xong"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 8070,
              "endTime": 8610,
              "data": "Vì"
            },
            {
              "startTime": 8610,
              "endTime": 8610,
              "data": "mai"
            },
            {
              "startTime": 8610,
              "endTime": 9140,
              "data": "người"
            },
            {
              "startTime": 9140,
              "endTime": 9140,
              "data": "ta"
            },
            {
              "startTime": 9140,
              "endTime": 9680,
              "data": "đã"
            },
            {
              "startTime": 9680,
              "endTime": 10770,
              "data": "đi"
            },
            {
              "startTime": 10770,
              "endTime": 11810,
              "data": "lấy"
            },
            {
              "startTime": 11810,
              "endTime": 14810,
              "data": "chồng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 56710,
              "endTime": 57230,
              "data": "Ai"
            },
            {
              "startTime": 57230,
              "endTime": 57230,
              "data": "tìm"
            },
            {
              "startTime": 57230,
              "endTime": 57730,
              "data": "ai"
            },
            {
              "startTime": 57730,
              "endTime": 58290,
              "data": "trên"
            },
            {
              "startTime": 58290,
              "endTime": 58290,
              "data": "phố"
            },
            {
              "startTime": 58290,
              "endTime": 59880,
              "data": "vắng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 59880,
              "endTime": 59880,
              "data": "Ngược"
            },
            {
              "startTime": 59880,
              "endTime": 60420,
              "data": "lối"
            },
            {
              "startTime": 60420,
              "endTime": 60420,
              "data": "cơn"
            },
            {
              "startTime": 60420,
              "endTime": 60920,
              "data": "mưa"
            },
            {
              "startTime": 60920,
              "endTime": 61470,
              "data": "chiều"
            },
            {
              "startTime": 61470,
              "endTime": 61470,
              "data": "giăng"
            },
            {
              "startTime": 61470,
              "endTime": 63070,
              "data": "giăng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 63070,
              "endTime": 63620,
              "data": "Ai"
            },
            {
              "startTime": 63620,
              "endTime": 63620,
              "data": "tìm"
            },
            {
              "startTime": 63620,
              "endTime": 64140,
              "data": "ai"
            },
            {
              "startTime": 64140,
              "endTime": 64670,
              "data": "dưới"
            },
            {
              "startTime": 64670,
              "endTime": 66170,
              "data": "trăng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 66170,
              "endTime": 66680,
              "data": "Nghiêng"
            },
            {
              "startTime": 66680,
              "endTime": 66680,
              "data": "bóng"
            },
            {
              "startTime": 66680,
              "endTime": 67200,
              "data": "ngõ"
            },
            {
              "startTime": 67200,
              "endTime": 67750,
              "data": "dài"
            },
            {
              "startTime": 67750,
              "endTime": 68280,
              "data": "vằng"
            },
            {
              "startTime": 68280,
              "endTime": 69330,
              "data": "vặc"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 69330,
              "endTime": 69860,
              "data": "Ai"
            },
            {
              "startTime": 69860,
              "endTime": 70400,
              "data": "đặt"
            },
            {
              "startTime": 70400,
              "endTime": 70930,
              "data": "tên"
            },
            {
              "startTime": 70930,
              "endTime": 71470,
              "data": "cho"
            },
            {
              "startTime": 71470,
              "endTime": 71470,
              "data": "ký"
            },
            {
              "startTime": 71470,
              "endTime": 73060,
              "data": "ức"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 73060,
              "endTime": 73060,
              "data": "Là"
            },
            {
              "startTime": 73060,
              "endTime": 73580,
              "data": "nỗi"
            },
            {
              "startTime": 73580,
              "endTime": 74140,
              "data": "đau"
            },
            {
              "startTime": 74140,
              "endTime": 74670,
              "data": "của"
            },
            {
              "startTime": 74670,
              "endTime": 75200,
              "data": "ngày"
            },
            {
              "startTime": 75200,
              "endTime": 75200,
              "data": "hôm"
            },
            {
              "startTime": 75200,
              "endTime": 76780,
              "data": "qua"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 76780,
              "endTime": 77300,
              "data": "Ai"
            },
            {
              "startTime": 77300,
              "endTime": 77300,
              "data": "đặt"
            },
            {
              "startTime": 77300,
              "endTime": 77840,
              "data": "tên"
            },
            {
              "startTime": 77840,
              "endTime": 78360,
              "data": "chúng"
            },
            {
              "startTime": 78360,
              "endTime": 79460,
              "data": "ta"
            },
            {
              "startTime": 79460,
              "endTime": 79980,
              "data": "là"
            },
            {
              "startTime": 79980,
              "endTime": 80500,
              "data": "người"
            },
            {
              "startTime": 80500,
              "endTime": 83150,
              "data": "lạ"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 83150,
              "endTime": 83710,
              "data": "Có"
            },
            {
              "startTime": 83710,
              "endTime": 84210,
              "data": "phải"
            },
            {
              "startTime": 84210,
              "endTime": 84740,
              "data": "đêm"
            },
            {
              "startTime": 84740,
              "endTime": 85300,
              "data": "qua"
            },
            {
              "startTime": 85300,
              "endTime": 85790,
              "data": "thức"
            },
            {
              "startTime": 85790,
              "endTime": 86880,
              "data": "trắng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 86880,
              "endTime": 86880,
              "data": "Để"
            },
            {
              "startTime": 86880,
              "endTime": 87400,
              "data": "gấp"
            },
            {
              "startTime": 87400,
              "endTime": 87930,
              "data": "con"
            },
            {
              "startTime": 87930,
              "endTime": 88460,
              "data": "tim"
            },
            {
              "startTime": 88460,
              "endTime": 88460,
              "data": "làm"
            },
            {
              "startTime": 88460,
              "endTime": 88980,
              "data": "hai"
            },
            {
              "startTime": 88980,
              "endTime": 90080,
              "data": "ngăn"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 90080,
              "endTime": 90600,
              "data": "Ngăn"
            },
            {
              "startTime": 90600,
              "endTime": 91120,
              "data": "phải"
            },
            {
              "startTime": 91120,
              "endTime": 91670,
              "data": "ôm"
            },
            {
              "startTime": 91670,
              "endTime": 92190,
              "data": "nỗi"
            },
            {
              "startTime": 92190,
              "endTime": 93260,
              "data": "đau"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 93260,
              "endTime": 93780,
              "data": "Còn"
            },
            {
              "startTime": 93780,
              "endTime": 93780,
              "data": "ngăn"
            },
            {
              "startTime": 93780,
              "endTime": 94290,
              "data": "trái"
            },
            {
              "startTime": 94290,
              "endTime": 94840,
              "data": "chứa"
            },
            {
              "startTime": 94840,
              "endTime": 95360,
              "data": "hạt"
            },
            {
              "startTime": 95360,
              "endTime": 95890,
              "data": "nhiệm"
            },
            {
              "startTime": 95890,
              "endTime": 96980,
              "data": "màu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 96980,
              "endTime": 97480,
              "data": "Kịp"
            },
            {
              "startTime": 97480,
              "endTime": 98050,
              "data": "sáng"
            },
            {
              "startTime": 98050,
              "endTime": 98050,
              "data": "mang"
            },
            {
              "startTime": 98050,
              "endTime": 98560,
              "data": "đến"
            },
            {
              "startTime": 98560,
              "endTime": 99100,
              "data": "làm"
            },
            {
              "startTime": 99100,
              "endTime": 99640,
              "data": "quà"
            },
            {
              "startTime": 99640,
              "endTime": 99640,
              "data": "cô"
            },
            {
              "startTime": 99640,
              "endTime": 100720,
              "data": "dâu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 100720,
              "endTime": 100720,
              "data": "Sợ"
            },
            {
              "startTime": 100720,
              "endTime": 101250,
              "data": "mai"
            },
            {
              "startTime": 101250,
              "endTime": 101790,
              "data": "kia"
            },
            {
              "startTime": 101790,
              "endTime": 101790,
              "data": "sương"
            },
            {
              "startTime": 101790,
              "endTime": 102300,
              "data": "phai"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 102300,
              "endTime": 102830,
              "data": "Hoa"
            },
            {
              "startTime": 102830,
              "endTime": 103370,
              "data": "úa"
            },
            {
              "startTime": 103370,
              "endTime": 103370,
              "data": "áo"
            },
            {
              "startTime": 103370,
              "endTime": 104430,
              "data": "nhàu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 104430,
              "endTime": 104430,
              "data": "Anh"
            },
            {
              "startTime": 104430,
              "endTime": 104980,
              "data": "đợi"
            },
            {
              "startTime": 104980,
              "endTime": 105510,
              "data": "em,"
            },
            {
              "startTime": 105510,
              "endTime": 106020,
              "data": "anh"
            },
            {
              "startTime": 106020,
              "endTime": 106570,
              "data": "chọn"
            },
            {
              "startTime": 106570,
              "endTime": 107090,
              "data": "ngăn"
            },
            {
              "startTime": 107090,
              "endTime": 107090,
              "data": "nỗi"
            },
            {
              "startTime": 107090,
              "endTime": 110090,
              "data": "đau"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 110280,
              "endTime": 110800,
              "data": "Ngày"
            },
            {
              "startTime": 110800,
              "endTime": 110800,
              "data": "hôm"
            },
            {
              "startTime": 110800,
              "endTime": 111350,
              "data": "ấy"
            },
            {
              "startTime": 111350,
              "endTime": 111880,
              "data": "em"
            },
            {
              "startTime": 111880,
              "endTime": 112390,
              "data": "đi"
            },
            {
              "startTime": 112390,
              "endTime": 112920,
              "data": "trong"
            },
            {
              "startTime": 112920,
              "endTime": 113470,
              "data": "mưa"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 113470,
              "endTime": 113990,
              "data": "Thế"
            },
            {
              "startTime": 113990,
              "endTime": 113990,
              "data": "nhưng"
            },
            {
              "startTime": 113990,
              "endTime": 114510,
              "data": "lại"
            },
            {
              "startTime": 114510,
              "endTime": 115060,
              "data": "quên"
            },
            {
              "startTime": 115060,
              "endTime": 115610,
              "data": "tim"
            },
            {
              "startTime": 115610,
              "endTime": 115610,
              "data": "không"
            },
            {
              "startTime": 115610,
              "endTime": 116120,
              "data": "khóa"
            },
            {
              "startTime": 116120,
              "endTime": 117200,
              "data": "cửa"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 117200,
              "endTime": 117710,
              "data": "Để"
            },
            {
              "startTime": 117710,
              "endTime": 118250,
              "data": "cho"
            },
            {
              "startTime": 118250,
              "endTime": 118250,
              "data": "mưa"
            },
            {
              "startTime": 118250,
              "endTime": 118800,
              "data": "lân"
            },
            {
              "startTime": 118800,
              "endTime": 119300,
              "data": "la"
            },
            {
              "startTime": 119300,
              "endTime": 119830,
              "data": "hỏi"
            },
            {
              "startTime": 119830,
              "endTime": 120370,
              "data": "thăm"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 120370,
              "endTime": 120370,
              "data": "Lẻn"
            },
            {
              "startTime": 120370,
              "endTime": 120900,
              "data": "vào"
            },
            {
              "startTime": 120900,
              "endTime": 121420,
              "data": "trộm"
            },
            {
              "startTime": 121420,
              "endTime": 121970,
              "data": "đi"
            },
            {
              "startTime": 121970,
              "endTime": 121970,
              "data": "khế"
            },
            {
              "startTime": 121970,
              "endTime": 122480,
              "data": "ước"
            },
            {
              "startTime": 122480,
              "endTime": 123010,
              "data": "trăm"
            },
            {
              "startTime": 123010,
              "endTime": 124110,
              "data": "năm"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 124110,
              "endTime": 124630,
              "data": "Ngày"
            },
            {
              "startTime": 124630,
              "endTime": 124630,
              "data": "em"
            },
            {
              "startTime": 124630,
              "endTime": 125170,
              "data": "đi"
            },
            {
              "startTime": 125170,
              "endTime": 125710,
              "data": "theo"
            },
            {
              "startTime": 125710,
              "endTime": 125710,
              "data": "cơn"
            },
            {
              "startTime": 125710,
              "endTime": 126200,
              "data": "mưa"
            },
            {
              "startTime": 126200,
              "endTime": 126750,
              "data": "ngâu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 126750,
              "endTime": 127300,
              "data": "Bầy"
            },
            {
              "startTime": 127300,
              "endTime": 127300,
              "data": "chim"
            },
            {
              "startTime": 127300,
              "endTime": 127870,
              "data": "lạc"
            },
            {
              "startTime": 127870,
              "endTime": 128370,
              "data": "cánh"
            },
            {
              "startTime": 128370,
              "endTime": 128880,
              "data": "khóc"
            },
            {
              "startTime": 128880,
              "endTime": 129430,
              "data": "hoảng"
            },
            {
              "startTime": 129430,
              "endTime": 129430,
              "data": "tìm"
            },
            {
              "startTime": 129430,
              "endTime": 131050,
              "data": "nhau"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 131050,
              "endTime": 131050,
              "data": "Ai"
            },
            {
              "startTime": 131050,
              "endTime": 131550,
              "data": "đong"
            },
            {
              "startTime": 131550,
              "endTime": 132090,
              "data": "ai"
            },
            {
              "startTime": 132090,
              "endTime": 132640,
              "data": "đếm"
            },
            {
              "startTime": 132640,
              "endTime": 133150,
              "data": "hết"
            },
            {
              "startTime": 133150,
              "endTime": 133150,
              "data": "bao"
            },
            {
              "startTime": 133150,
              "endTime": 134230,
              "data": "giọt"
            },
            {
              "startTime": 134230,
              "endTime": 137230,
              "data": "sầu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 137950,
              "endTime": 138470,
              "data": "Hỏi"
            },
            {
              "startTime": 138470,
              "endTime": 138470,
              "data": "mùa"
            },
            {
              "startTime": 138470,
              "endTime": 139020,
              "data": "thu"
            },
            {
              "startTime": 139020,
              "endTime": 139540,
              "data": "đang"
            },
            {
              "startTime": 139540,
              "endTime": 139540,
              "data": "ru"
            },
            {
              "startTime": 139540,
              "endTime": 140040,
              "data": "miên"
            },
            {
              "startTime": 140040,
              "endTime": 140600,
              "data": "man"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 140600,
              "endTime": 141120,
              "data": "Mỗi"
            },
            {
              "startTime": 141120,
              "endTime": 141640,
              "data": "năm"
            },
            {
              "startTime": 141640,
              "endTime": 141640,
              "data": "mùa"
            },
            {
              "startTime": 141640,
              "endTime": 142160,
              "data": "rơi"
            },
            {
              "startTime": 142160,
              "endTime": 142720,
              "data": "bao"
            },
            {
              "startTime": 142720,
              "endTime": 142720,
              "data": "chiếc"
            },
            {
              "startTime": 142720,
              "endTime": 143240,
              "data": "lá"
            },
            {
              "startTime": 143240,
              "endTime": 144830,
              "data": "vàng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 144830,
              "endTime": 144830,
              "data": "Liệu"
            },
            {
              "startTime": 144830,
              "endTime": 145370,
              "data": "có"
            },
            {
              "startTime": 145370,
              "endTime": 145930,
              "data": "biết"
            },
            {
              "startTime": 145930,
              "endTime": 145930,
              "data": "ở"
            },
            {
              "startTime": 145930,
              "endTime": 146450,
              "data": "nơi"
            },
            {
              "startTime": 146450,
              "endTime": 146970,
              "data": "nào"
            },
            {
              "startTime": 146970,
              "endTime": 147520,
              "data": "không"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 147520,
              "endTime": 148040,
              "data": "Có"
            },
            {
              "startTime": 148040,
              "endTime": 148040,
              "data": "lá"
            },
            {
              "startTime": 148040,
              "endTime": 148550,
              "data": "nào"
            },
            {
              "startTime": 148550,
              "endTime": 149090,
              "data": "trông"
            },
            {
              "startTime": 149090,
              "endTime": 149620,
              "data": "như"
            },
            {
              "startTime": 149620,
              "endTime": 149620,
              "data": "lá"
            },
            {
              "startTime": 149620,
              "endTime": 150150,
              "data": "diêu"
            },
            {
              "startTime": 150150,
              "endTime": 151750,
              "data": "bông"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 151750,
              "endTime": 151750,
              "data": "Hỡi"
            },
            {
              "startTime": 151750,
              "endTime": 152290,
              "data": "diêu"
            },
            {
              "startTime": 152290,
              "endTime": 152810,
              "data": "bông"
            },
            {
              "startTime": 152810,
              "endTime": 152810,
              "data": "ơi"
            },
            {
              "startTime": 152810,
              "endTime": 153320,
              "data": "hỡi"
            },
            {
              "startTime": 153320,
              "endTime": 153850,
              "data": "diêu"
            },
            {
              "startTime": 153850,
              "endTime": 154430,
              "data": "bông"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 154430,
              "endTime": 154430,
              "data": "Bình"
            },
            {
              "startTime": 154430,
              "endTime": 154940,
              "data": "minh"
            },
            {
              "startTime": 154940,
              "endTime": 155450,
              "data": "chưa"
            },
            {
              "startTime": 155450,
              "endTime": 156000,
              "data": "hé"
            },
            {
              "startTime": 156000,
              "endTime": 156550,
              "data": "tôi"
            },
            {
              "startTime": 156550,
              "endTime": 157070,
              "data": "phải"
            },
            {
              "startTime": 157070,
              "endTime": 157070,
              "data": "tìm"
            },
            {
              "startTime": 157070,
              "endTime": 158730,
              "data": "xong"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 158730,
              "endTime": 158730,
              "data": "Vì"
            },
            {
              "startTime": 158730,
              "endTime": 159230,
              "data": "mai"
            },
            {
              "startTime": 159230,
              "endTime": 159780,
              "data": "người"
            },
            {
              "startTime": 159780,
              "endTime": 160320,
              "data": "ta"
            },
            {
              "startTime": 160320,
              "endTime": 160840,
              "data": "đã"
            },
            {
              "startTime": 160840,
              "endTime": 161910,
              "data": "đi"
            },
            {
              "startTime": 161910,
              "endTime": 162420,
              "data": "lấy"
            },
            {
              "startTime": 162420,
              "endTime": 165420,
              "data": "chồng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 192680,
              "endTime": 193210,
              "data": "Có"
            },
            {
              "startTime": 193210,
              "endTime": 193730,
              "data": "phải"
            },
            {
              "startTime": 193730,
              "endTime": 194260,
              "data": "đêm"
            },
            {
              "startTime": 194260,
              "endTime": 194800,
              "data": "qua"
            },
            {
              "startTime": 194800,
              "endTime": 194800,
              "data": "thức"
            },
            {
              "startTime": 194800,
              "endTime": 196400,
              "data": "trắng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 196400,
              "endTime": 196400,
              "data": "Để"
            },
            {
              "startTime": 196400,
              "endTime": 196940,
              "data": "gấp"
            },
            {
              "startTime": 196940,
              "endTime": 197460,
              "data": "con"
            },
            {
              "startTime": 197460,
              "endTime": 198000,
              "data": "tim"
            },
            {
              "startTime": 198000,
              "endTime": 198540,
              "data": "làm"
            },
            {
              "startTime": 198540,
              "endTime": 198540,
              "data": "hai"
            },
            {
              "startTime": 198540,
              "endTime": 199590,
              "data": "ngăn"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 199590,
              "endTime": 200130,
              "data": "Ngăn"
            },
            {
              "startTime": 200130,
              "endTime": 200650,
              "data": "phải"
            },
            {
              "startTime": 200650,
              "endTime": 201180,
              "data": "ôm"
            },
            {
              "startTime": 201180,
              "endTime": 201180,
              "data": "nỗi"
            },
            {
              "startTime": 201180,
              "endTime": 201760,
              "data": "đau"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 201760,
              "endTime": 202780,
              "data": "Còn"
            },
            {
              "startTime": 202780,
              "endTime": 203320,
              "data": "ngăn"
            },
            {
              "startTime": 203320,
              "endTime": 203850,
              "data": "trái"
            },
            {
              "startTime": 203850,
              "endTime": 204370,
              "data": "chứa"
            },
            {
              "startTime": 204370,
              "endTime": 204920,
              "data": "hạt"
            },
            {
              "startTime": 204920,
              "endTime": 205460,
              "data": "nhiệm"
            },
            {
              "startTime": 205460,
              "endTime": 207050,
              "data": "màu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 207050,
              "endTime": 207050,
              "data": "Kịp"
            },
            {
              "startTime": 207050,
              "endTime": 207570,
              "data": "sáng"
            },
            {
              "startTime": 207570,
              "endTime": 208090,
              "data": "mang"
            },
            {
              "startTime": 208090,
              "endTime": 208090,
              "data": "đến"
            },
            {
              "startTime": 208090,
              "endTime": 208630,
              "data": "làm"
            },
            {
              "startTime": 208630,
              "endTime": 209160,
              "data": "quà"
            },
            {
              "startTime": 209160,
              "endTime": 209680,
              "data": "cô"
            },
            {
              "startTime": 209680,
              "endTime": 210260,
              "data": "dâu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 210260,
              "endTime": 210260,
              "data": "Sợ"
            },
            {
              "startTime": 210260,
              "endTime": 210780,
              "data": "mai"
            },
            {
              "startTime": 210780,
              "endTime": 211300,
              "data": "kia"
            },
            {
              "startTime": 211300,
              "endTime": 211300,
              "data": "sương"
            },
            {
              "startTime": 211300,
              "endTime": 211860,
              "data": "phai"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 211860,
              "endTime": 212380,
              "data": "Hoa"
            },
            {
              "startTime": 212380,
              "endTime": 212900,
              "data": "úa"
            },
            {
              "startTime": 212900,
              "endTime": 212900,
              "data": "áo"
            },
            {
              "startTime": 212900,
              "endTime": 213450,
              "data": "nhàu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 213450,
              "endTime": 213990,
              "data": "Anh"
            },
            {
              "startTime": 213990,
              "endTime": 214510,
              "data": "đợi"
            },
            {
              "startTime": 214510,
              "endTime": 215050,
              "data": "em,"
            },
            {
              "startTime": 215050,
              "endTime": 215600,
              "data": "anh"
            },
            {
              "startTime": 215600,
              "endTime": 215600,
              "data": "chọn"
            },
            {
              "startTime": 215600,
              "endTime": 216150,
              "data": "ngăn"
            },
            {
              "startTime": 216150,
              "endTime": 216650,
              "data": "nỗi"
            },
            {
              "startTime": 216650,
              "endTime": 219650,
              "data": "đau"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 219860,
              "endTime": 220380,
              "data": "Ngày"
            },
            {
              "startTime": 220380,
              "endTime": 220910,
              "data": "hôm"
            },
            {
              "startTime": 220910,
              "endTime": 221450,
              "data": "ấy"
            },
            {
              "startTime": 221450,
              "endTime": 221450,
              "data": "em"
            },
            {
              "startTime": 221450,
              "endTime": 221970,
              "data": "đi"
            },
            {
              "startTime": 221970,
              "endTime": 221970,
              "data": "trong"
            },
            {
              "startTime": 221970,
              "endTime": 223030,
              "data": "mưa"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 223030,
              "endTime": 223030,
              "data": "Thế"
            },
            {
              "startTime": 223030,
              "endTime": 223570,
              "data": "nhưng"
            },
            {
              "startTime": 223570,
              "endTime": 224120,
              "data": "lại"
            },
            {
              "startTime": 224120,
              "endTime": 224650,
              "data": "quên"
            },
            {
              "startTime": 224650,
              "endTime": 224650,
              "data": "tim"
            },
            {
              "startTime": 224650,
              "endTime": 225160,
              "data": "không"
            },
            {
              "startTime": 225160,
              "endTime": 225690,
              "data": "khóa"
            },
            {
              "startTime": 225690,
              "endTime": 227280,
              "data": "cửa"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 227280,
              "endTime": 227280,
              "data": "Để"
            },
            {
              "startTime": 227280,
              "endTime": 227820,
              "data": "cho"
            },
            {
              "startTime": 227820,
              "endTime": 228350,
              "data": "mưa"
            },
            {
              "startTime": 228350,
              "endTime": 228350,
              "data": "lân"
            },
            {
              "startTime": 228350,
              "endTime": 228880,
              "data": "la"
            },
            {
              "startTime": 228880,
              "endTime": 229420,
              "data": "hỏi"
            },
            {
              "startTime": 229420,
              "endTime": 229940,
              "data": "thăm"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 229940,
              "endTime": 229940,
              "data": "Lẻn"
            },
            {
              "startTime": 229940,
              "endTime": 230460,
              "data": "vào"
            },
            {
              "startTime": 230460,
              "endTime": 231030,
              "data": "trộm"
            },
            {
              "startTime": 231030,
              "endTime": 231550,
              "data": "đi"
            },
            {
              "startTime": 231550,
              "endTime": 231550,
              "data": "khế"
            },
            {
              "startTime": 231550,
              "endTime": 232050,
              "data": "ước"
            },
            {
              "startTime": 232050,
              "endTime": 232600,
              "data": "trăm"
            },
            {
              "startTime": 232600,
              "endTime": 233670,
              "data": "năm"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 233670,
              "endTime": 233670,
              "data": "Ngày"
            },
            {
              "startTime": 233670,
              "endTime": 234200,
              "data": "em"
            },
            {
              "startTime": 234200,
              "endTime": 234730,
              "data": "đi"
            },
            {
              "startTime": 234730,
              "endTime": 235250,
              "data": "theo"
            },
            {
              "startTime": 235250,
              "endTime": 235250,
              "data": "cơn"
            },
            {
              "startTime": 235250,
              "endTime": 235790,
              "data": "mưa"
            },
            {
              "startTime": 235790,
              "endTime": 236330,
              "data": "ngâu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 236330,
              "endTime": 236850,
              "data": "Bầy"
            },
            {
              "startTime": 236850,
              "endTime": 237380,
              "data": "chim"
            },
            {
              "startTime": 237380,
              "endTime": 237380,
              "data": "lạc"
            },
            {
              "startTime": 237380,
              "endTime": 238450,
              "data": "cánh"
            },
            {
              "startTime": 238450,
              "endTime": 238450,
              "data": "khóc"
            },
            {
              "startTime": 238450,
              "endTime": 238970,
              "data": "hoảng"
            },
            {
              "startTime": 238970,
              "endTime": 239510,
              "data": "tìm"
            },
            {
              "startTime": 239510,
              "endTime": 240550,
              "data": "nhau"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 240550,
              "endTime": 241100,
              "data": "Ai"
            },
            {
              "startTime": 241100,
              "endTime": 241660,
              "data": "đong"
            },
            {
              "startTime": 241660,
              "endTime": 241660,
              "data": "ai"
            },
            {
              "startTime": 241660,
              "endTime": 242150,
              "data": "đếm"
            },
            {
              "startTime": 242150,
              "endTime": 242720,
              "data": "hết"
            },
            {
              "startTime": 242720,
              "endTime": 243250,
              "data": "bao"
            },
            {
              "startTime": 243250,
              "endTime": 244290,
              "data": "giọt"
            },
            {
              "startTime": 244290,
              "endTime": 247290,
              "data": "sầu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 247470,
              "endTime": 248010,
              "data": "Hỏi"
            },
            {
              "startTime": 248010,
              "endTime": 248010,
              "data": "mùa"
            },
            {
              "startTime": 248010,
              "endTime": 248530,
              "data": "thu"
            },
            {
              "startTime": 248530,
              "endTime": 248530,
              "data": "đang"
            },
            {
              "startTime": 248530,
              "endTime": 249060,
              "data": "ru"
            },
            {
              "startTime": 249060,
              "endTime": 249610,
              "data": "miên"
            },
            {
              "startTime": 249610,
              "endTime": 250130,
              "data": "man"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 250130,
              "endTime": 250650,
              "data": "Mỗi"
            },
            {
              "startTime": 250650,
              "endTime": 250650,
              "data": "năm"
            },
            {
              "startTime": 250650,
              "endTime": 251190,
              "data": "mùa"
            },
            {
              "startTime": 251190,
              "endTime": 251730,
              "data": "rơi"
            },
            {
              "startTime": 251730,
              "endTime": 252260,
              "data": "bao"
            },
            {
              "startTime": 252260,
              "endTime": 252800,
              "data": "chiếc"
            },
            {
              "startTime": 252800,
              "endTime": 252800,
              "data": "lá"
            },
            {
              "startTime": 252800,
              "endTime": 254400,
              "data": "vàng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 254400,
              "endTime": 254930,
              "data": "Liệu"
            },
            {
              "startTime": 254930,
              "endTime": 254930,
              "data": "có"
            },
            {
              "startTime": 254930,
              "endTime": 255450,
              "data": "biết"
            },
            {
              "startTime": 255450,
              "endTime": 255970,
              "data": "ở"
            },
            {
              "startTime": 255970,
              "endTime": 255970,
              "data": "nơi"
            },
            {
              "startTime": 255970,
              "endTime": 256500,
              "data": "nào"
            },
            {
              "startTime": 256500,
              "endTime": 257040,
              "data": "không"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 257040,
              "endTime": 257560,
              "data": "Có"
            },
            {
              "startTime": 257560,
              "endTime": 258100,
              "data": "lá"
            },
            {
              "startTime": 258100,
              "endTime": 258100,
              "data": "nào"
            },
            {
              "startTime": 258100,
              "endTime": 258620,
              "data": "trông"
            },
            {
              "startTime": 258620,
              "endTime": 259150,
              "data": "như"
            },
            {
              "startTime": 259150,
              "endTime": 259700,
              "data": "lá"
            },
            {
              "startTime": 259700,
              "endTime": 259700,
              "data": "diêu"
            },
            {
              "startTime": 259700,
              "endTime": 261330,
              "data": "bông"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 261330,
              "endTime": 261870,
              "data": "Hỡi"
            },
            {
              "startTime": 261870,
              "endTime": 262390,
              "data": "diêu"
            },
            {
              "startTime": 262390,
              "endTime": 262390,
              "data": "bông"
            },
            {
              "startTime": 262390,
              "endTime": 262920,
              "data": "ơi"
            },
            {
              "startTime": 262920,
              "endTime": 263450,
              "data": "hỡi"
            },
            {
              "startTime": 263450,
              "endTime": 263450,
              "data": "diêu"
            },
            {
              "startTime": 263450,
              "endTime": 263980,
              "data": "bông"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 263980,
              "endTime": 264510,
              "data": "Bình"
            },
            {
              "startTime": 264510,
              "endTime": 264510,
              "data": "minh"
            },
            {
              "startTime": 264510,
              "endTime": 265030,
              "data": "chưa"
            },
            {
              "startTime": 265030,
              "endTime": 265560,
              "data": "hé"
            },
            {
              "startTime": 265560,
              "endTime": 266090,
              "data": "tôi"
            },
            {
              "startTime": 266090,
              "endTime": 266640,
              "data": "phải"
            },
            {
              "startTime": 266640,
              "endTime": 267160,
              "data": "tìm"
            },
            {
              "startTime": 267160,
              "endTime": 268240,
              "data": "xong"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 268240,
              "endTime": 268750,
              "data": "Vì"
            },
            {
              "startTime": 268750,
              "endTime": 268750,
              "data": "mai"
            },
            {
              "startTime": 268750,
              "endTime": 269280,
              "data": "người"
            },
            {
              "startTime": 269280,
              "endTime": 269820,
              "data": "ta"
            },
            {
              "startTime": 269820,
              "endTime": 270370,
              "data": "đã"
            },
            {
              "startTime": 270370,
              "endTime": 271400,
              "data": "đi"
            },
            {
              "startTime": 271400,
              "endTime": 271940,
              "data": "lấy"
            },
            {
              "startTime": 271940,
              "endTime": 274940,
              "data": "chồng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 275150,
              "endTime": 275670,
              "data": "Ngày"
            },
            {
              "startTime": 275670,
              "endTime": 275670,
              "data": "hôm"
            },
            {
              "startTime": 275670,
              "endTime": 276180,
              "data": "ấy"
            },
            {
              "startTime": 276180,
              "endTime": 276730,
              "data": "em"
            },
            {
              "startTime": 276730,
              "endTime": 276730,
              "data": "đi"
            },
            {
              "startTime": 276730,
              "endTime": 277250,
              "data": "trong"
            },
            {
              "startTime": 277250,
              "endTime": 277810,
              "data": "mưa"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 277810,
              "endTime": 277810,
              "data": "Thế"
            },
            {
              "startTime": 277810,
              "endTime": 278330,
              "data": "nhưng"
            },
            {
              "startTime": 278330,
              "endTime": 278860,
              "data": "lại"
            },
            {
              "startTime": 278860,
              "endTime": 279390,
              "data": "quên"
            },
            {
              "startTime": 279390,
              "endTime": 279920,
              "data": "tim"
            },
            {
              "startTime": 279920,
              "endTime": 280460,
              "data": "không"
            },
            {
              "startTime": 280460,
              "endTime": 280460,
              "data": "khóa"
            },
            {
              "startTime": 280460,
              "endTime": 281530,
              "data": "cửa"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 281530,
              "endTime": 282060,
              "data": "Để"
            },
            {
              "startTime": 282060,
              "endTime": 282570,
              "data": "cho"
            },
            {
              "startTime": 282570,
              "endTime": 282570,
              "data": "mưa"
            },
            {
              "startTime": 282570,
              "endTime": 283090,
              "data": "lân"
            },
            {
              "startTime": 283090,
              "endTime": 283640,
              "data": "la"
            },
            {
              "startTime": 283640,
              "endTime": 283640,
              "data": "hỏi"
            },
            {
              "startTime": 283640,
              "endTime": 284690,
              "data": "thăm"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 284690,
              "endTime": 284690,
              "data": "Lẻn"
            },
            {
              "startTime": 284690,
              "endTime": 285240,
              "data": "vào"
            },
            {
              "startTime": 285240,
              "endTime": 285770,
              "data": "trộm"
            },
            {
              "startTime": 285770,
              "endTime": 286270,
              "data": "đi"
            },
            {
              "startTime": 286270,
              "endTime": 286830,
              "data": "khế"
            },
            {
              "startTime": 286830,
              "endTime": 287350,
              "data": "ước"
            },
            {
              "startTime": 287350,
              "endTime": 287350,
              "data": "trăm"
            },
            {
              "startTime": 287350,
              "endTime": 288430,
              "data": "năm"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 288430,
              "endTime": 288940,
              "data": "Ngày"
            },
            {
              "startTime": 288940,
              "endTime": 288940,
              "data": "em"
            },
            {
              "startTime": 288940,
              "endTime": 289460,
              "data": "đi"
            },
            {
              "startTime": 289460,
              "endTime": 289990,
              "data": "theo"
            },
            {
              "startTime": 289990,
              "endTime": 290570,
              "data": "cơn"
            },
            {
              "startTime": 290570,
              "endTime": 290570,
              "data": "mưa"
            },
            {
              "startTime": 290570,
              "endTime": 291060,
              "data": "ngâu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 291060,
              "endTime": 291590,
              "data": "Bầy"
            },
            {
              "startTime": 291590,
              "endTime": 292150,
              "data": "chim"
            },
            {
              "startTime": 292150,
              "endTime": 292680,
              "data": "lạc"
            },
            {
              "startTime": 292680,
              "endTime": 293210,
              "data": "cánh"
            },
            {
              "startTime": 293210,
              "endTime": 293210,
              "data": "khóc"
            },
            {
              "startTime": 293210,
              "endTime": 293750,
              "data": "hoảng"
            },
            {
              "startTime": 293750,
              "endTime": 294250,
              "data": "tìm"
            },
            {
              "startTime": 294250,
              "endTime": 295340,
              "data": "nhau"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 295340,
              "endTime": 295840,
              "data": "Ai"
            },
            {
              "startTime": 295840,
              "endTime": 296380,
              "data": "đong"
            },
            {
              "startTime": 296380,
              "endTime": 296380,
              "data": "ai"
            },
            {
              "startTime": 296380,
              "endTime": 296920,
              "data": "đếm"
            },
            {
              "startTime": 296920,
              "endTime": 297450,
              "data": "hết"
            },
            {
              "startTime": 297450,
              "endTime": 297990,
              "data": "bao"
            },
            {
              "startTime": 297990,
              "endTime": 299060,
              "data": "giọt"
            },
            {
              "startTime": 299060,
              "endTime": 302060,
              "data": "sầu"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 302770,
              "endTime": 302770,
              "data": "Hỏi"
            },
            {
              "startTime": 302770,
              "endTime": 303290,
              "data": "mùa"
            },
            {
              "startTime": 303290,
              "endTime": 303830,
              "data": "thu"
            },
            {
              "startTime": 303830,
              "endTime": 303830,
              "data": "đang"
            },
            {
              "startTime": 303830,
              "endTime": 304370,
              "data": "ru"
            },
            {
              "startTime": 304370,
              "endTime": 304370,
              "data": "miên"
            },
            {
              "startTime": 304370,
              "endTime": 304870,
              "data": "man"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 304870,
              "endTime": 305430,
              "data": "Mỗi"
            },
            {
              "startTime": 305430,
              "endTime": 305950,
              "data": "năm"
            },
            {
              "startTime": 305950,
              "endTime": 306480,
              "data": "mùa"
            },
            {
              "startTime": 306480,
              "endTime": 306480,
              "data": "rơi"
            },
            {
              "startTime": 306480,
              "endTime": 307020,
              "data": "bao"
            },
            {
              "startTime": 307020,
              "endTime": 307540,
              "data": "chiếc"
            },
            {
              "startTime": 307540,
              "endTime": 307540,
              "data": "lá"
            },
            {
              "startTime": 307540,
              "endTime": 309130,
              "data": "vàng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 309130,
              "endTime": 309650,
              "data": "Liệu"
            },
            {
              "startTime": 309650,
              "endTime": 309650,
              "data": "có"
            },
            {
              "startTime": 309650,
              "endTime": 310190,
              "data": "biết"
            },
            {
              "startTime": 310190,
              "endTime": 310750,
              "data": "ở"
            },
            {
              "startTime": 310750,
              "endTime": 311270,
              "data": "nơi"
            },
            {
              "startTime": 311270,
              "endTime": 311270,
              "data": "nào"
            },
            {
              "startTime": 311270,
              "endTime": 311790,
              "data": "không"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 311790,
              "endTime": 312310,
              "data": "Có"
            },
            {
              "startTime": 312310,
              "endTime": 312860,
              "data": "lá"
            },
            {
              "startTime": 312860,
              "endTime": 313400,
              "data": "nào"
            },
            {
              "startTime": 313400,
              "endTime": 313930,
              "data": "trông"
            },
            {
              "startTime": 313930,
              "endTime": 313930,
              "data": "như"
            },
            {
              "startTime": 313930,
              "endTime": 314450,
              "data": "lá"
            },
            {
              "startTime": 314450,
              "endTime": 314970,
              "data": "diêu"
            },
            {
              "startTime": 314970,
              "endTime": 316050,
              "data": "bông"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 316050,
              "endTime": 316570,
              "data": "Hỡi"
            },
            {
              "startTime": 316570,
              "endTime": 316570,
              "data": "diêu"
            },
            {
              "startTime": 316570,
              "endTime": 317100,
              "data": "bông"
            },
            {
              "startTime": 317100,
              "endTime": 317650,
              "data": "ơi"
            },
            {
              "startTime": 317650,
              "endTime": 317650,
              "data": "hỡi"
            },
            {
              "startTime": 317650,
              "endTime": 318160,
              "data": "diêu"
            },
            {
              "startTime": 318160,
              "endTime": 318710,
              "data": "bông"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 318710,
              "endTime": 319220,
              "data": "Bình"
            },
            {
              "startTime": 319220,
              "endTime": 319760,
              "data": "minh"
            },
            {
              "startTime": 319760,
              "endTime": 319760,
              "data": "chưa"
            },
            {
              "startTime": 319760,
              "endTime": 320820,
              "data": "hé"
            },
            {
              "startTime": 320820,
              "endTime": 320820,
              "data": "tôi"
            },
            {
              "startTime": 320820,
              "endTime": 321330,
              "data": "phải"
            },
            {
              "startTime": 321330,
              "endTime": 321890,
              "data": "tìm"
            },
            {
              "startTime": 321890,
              "endTime": 322960,
              "data": "xong"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 322960,
              "endTime": 323470,
              "data": "Vì"
            },
            {
              "startTime": 323470,
              "endTime": 324020,
              "data": "mai"
            },
            {
              "startTime": 324020,
              "endTime": 324540,
              "data": "người"
            },
            {
              "startTime": 324540,
              "endTime": 324540,
              "data": "ta"
            },
            {
              "startTime": 324540,
              "endTime": 325070,
              "data": "đã"
            },
            {
              "startTime": 325070,
              "endTime": 326130,
              "data": "đi"
            },
            {
              "startTime": 326130,
              "endTime": 326650,
              "data": "lấy"
            },
            {
              "startTime": 326650,
              "endTime": 329650,
              "data": "chồng"
            }
          ]
        },
        {
          "words": [
            {
              "startTime": 329860,
              "endTime": 330400,
              "data": "Vì"
            },
            {
              "startTime": 330400,
              "endTime": 330940,
              "data": "mai"
            },
            {
              "startTime": 330940,
              "endTime": 331450,
              "data": "người"
            },
            {
              "startTime": 331450,
              "endTime": 332000,
              "data": "ta"
            },
            {
              "startTime": 332000,
              "endTime": 332000,
              "data": "đã"
            },
            {
              "startTime": 332000,
              "endTime": 336230,
              "data": "đi"
            },
            {
              "startTime": 336230,
              "endTime": 337810,
              "data": "lấy"
            },
            {
              "startTime": 337810,
              "endTime": 338810,
              "data": "chồng"
            }
          ]
        }
      ],
      "file": "https://static-zmp3.zmdcdn.me/lyrics/f/c/6/4/fc647fdf3815b45e281c95b7e5eab68d.lrc",
      "enabledVideoBG": true,
      "defaultIBGUrls": [
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/a/b/e/aabe12ef3831ad70b24e56f82357d071.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/9/1/a/091aecb90fbe0dbf8a8c6c6ac565fbcd.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/8/e/9/48e954d466b4d4a58ed993de9c4ad4ae.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/d/7/4/fd749a0e9647048d3b3206d0d43f38b7.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/e/6/6ce66414fd305c2959833eb7262fda3e.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/f/8/c/df8c6b2b33f04bfb15bdf8f26ecc30b2.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/d/2/6/8d264b2ba5ede2840f812a0434f7e81a.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/1/3/e/e13eba8bece6dee40b09d08e33f50129.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/7/2/9/272971adef5ceb4168162061a306f433.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/d/8/3/dd83ba455be609b02b580c47a3e386dc.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/9/6/a/196a6ed5b7d85cb123ae33c537638223.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/9/7/b/497b06ff1829f7d22ae3f11486869743.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/7/3/f/b73f9b5c9102bec98bbd5e6ff993174b.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/c/3/6/5c368a95018189a5c90f1039fdf5c2de.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/f/3/62f38a21f5c83cc179f81e89c389696c.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/d/8/5/fd854be8bf431f5bb384ab03b0e1fa1b.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/c/0/7/dc071f8de1b454c358921a70ab5f21ef.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/3/f/a/13fa5e6f2b4479025dd5f808a21b5874.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/a/6/5/ba650b55b4a1d68bcb2cb5d029073b87.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/9/4/bd9477b80b517b2a9322058821db1363.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/7/a/1/47a1fec2cce8c8eca0337dca4154f24b.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/d/2/5/fd252316a37b098a7a77eeb463d65cca.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/3/b/e83beaed8abad7d6c3b1cf02cc379ea6.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/8/7/9/5879ebba5e2e6a7b5a197162a6c94f1a.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/d/6/f/5d6f23707a58be5a5beea2660e4b9af4.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/2/5/6c255e0ec433d35ac7b5e3af59258158.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/8/2/1/08214d7defd091ac608cb863cb9857f2.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/3/7/e/a37e18aebdc451d3d3e8bb705bffcb6e.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/d/5/00d553598a7921475262cb17ddf12da2.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/7/2/1/b72105d67c52e5c2fdb68d34fa0196de.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/6/1/3/2613dc722b4fc8fc5c06da57d517eb20.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/1/9/a/219aac49fa229688b53c5e66b6bec0e5.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/8/0008bbee62e41eda31706fc3fc228567.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/8/e/a/78ea5eab2baced8e667a7e1f7c53d0eb.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/d/5/edd5491004b631f26820ded0cbfefd7c.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/8/d/3/58d376691c64ac0cefd79aa38e98dd79.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/7/4/8/6748ebf095213b3e10ecdc8cd2d058f6.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/e/f/1/5ef1aea7dacb513c04e81ef0f83eee9c.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/5/b/e/45bedc3b6c02268986cfa53351120729.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/1/2/7/812763374b713681c32447874c0d8d02.jpg"
      ],
      "BGMode": 0
    },
    "timestamp": 1694597508471
  }`;

lyric = JSON.parse(lyric).data.sentences;
console.log(lyric);

//Xây dựng tính năng karaoke
var karaoke = document.querySelector(".karaoke");
var karaokePlayBtn = document.querySelector(".play");
var karaokeInner = karaoke.querySelector(".karaoke-inner");
var karaokeClose = karaokeInner.querySelector(".close");
var karaokeContent = karaokeInner.querySelector(".karaoke-content");

var songInfo = `
  <p>người ta đi lấy chồng</p>
  <p>Ca sỹ: Lưu Anh Quân</p>
  `;

karaokePlayBtn.addEventListener("click", function () {
  karaokeInner.classList.add("show");
  // karaokeContent.innerHTML = songInfo;
});

karaokeClose.addEventListener("click", function () {
  karaokeInner.classList.remove("show");
  // karaokeContent.innerHTML = "";
});

var number = 2;
var currentPage;
var handleKaraoke = function (currentTime) {
  //Quy đổi currentTime ra mili giây
  currentTime *= 1000;

  var index = lyric.findIndex(function (wordItem) {
    var wordItemArr = wordItem.words;
    return (
      currentTime >= wordItemArr[0].startTime &&
      currentTime <= wordItemArr[wordItemArr.length - 1].endTime
    );
  });

  if (index !== -1) {
    // var karaokeContent = karaokeInner.querySelector(".karaoke-content");

    /*
      Page = 1 -> index = 0 đến 1
      Page = 2 -> index = 2 đến 3
      Page = 3 -> index = 4 đến 5
  
      index = (page - 1) * 2
      Công thức: page = index / 2 + 1
      */

    var page = Math.floor(index / number + 1);

    handleColor(currentTime);

    if (page !== currentPage) {
      var offset = (page - 1) * number;

      // console.log(`Màn hình thứ: ${page}`);
      // console.log(`Index = ${index}`, `Offset = ${offset}`);

      if (index >= offset && index < offset + number) {
        // console.log(index);
        karaokeContent.innerText = "";
        var div = document.createElement("div");

        for (var i = offset; i < offset + number; i++) {
          //Vòng lặp các câu trong 1 màn hình
          var p = document.createElement("p");

          //Vòng lặp các từ trong 1 câu
          lyric[i].words.forEach(function (word) {
            var wordEl = document.createElement("span");
            wordEl.classList.add("word");
            wordEl.innerText = word.data;
            wordEl.dataset.startTime = word.startTime;
            wordEl.dataset.endTime = word.endTime;

            var span = document.createElement("span");
            span.innerText = word.data;
            wordEl.append(span);

            p.append(wordEl);

            // if (currentTime >= word.startTime) {
            //   span.style.width = `100%`;

            //   if (
            //     currentTime >= word.startTime &&
            //     currentTime <= word.endTime
            //   ) {
            //     // console.log(word.data);
            //     var wordTime = word.endTime - word.startTime;

            //     span.style.transition = `width ${wordTime}ms linear`;
            //   }
            // }
          });

          div.append(p);

          // if (p.previousElementSibling !== null) {
          //   p.previousElementSibling.remove();
          // }
        }

        karaokeContent.append(div);
      }

      currentPage = page;
    }
  }
};

var handleColor = function (currentTime) {
  // console.log(page);
  var wordItems = karaokeContent.querySelectorAll(".word");
  wordItems.forEach(function (wordItem, i) {
    if (currentTime >= wordItem.dataset.startTime) {
      wordItem.children[0].style.width = "100%";
      var wordTime = wordItem.dataset.endTime - wordItem.dataset.startTime;
      if (wordTime > 50) {
        wordItem.children[0].style.transition = `width ${wordTime}ms linear`;
      }
    }
  });
};
