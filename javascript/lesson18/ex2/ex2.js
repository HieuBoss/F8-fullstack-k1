import getModules from "./modules/module.js";

getModules();
const btn = document.querySelector(".btn");
const action = document.querySelector(".action");
var recognizing = false;
if ((recognizing = false)) {
  const warning = action.createElement("p");
  warning.innerText = "Không thực hiện được yêu cầu";
  warning.style.color = "red";
  warning.style.border = "solid 1px green";
  action.append("warning");
}
// Tạo biến để lưu trữ văn bản đã nhận dạng
var messages = "";

// Khởi tạo đối tượng nhận dạng giọng nói
var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = "vi-VN";

// Xử lý sự kiện khi có kết quả từ nhận dạng
recognition.onresult = function (e) {
  messages = e.results[0][0].transcript.toLowerCase();
  action.textContent = `Đang tìm kiếm${messages}`;
  results(messages);
};

// Xử lý sự kiện khi bắt đầu nhận dạng
recognition.onstart = function () {
  recognizing = true;
  action.textContent = "Đang nghe...";
  btn.style.background = "green";
  action.style.color = "black";
};

// Xử lý sự kiện khi kết thúc nhận dạng
recognition.onend = function () {
  recognizing = false;
  action.textContent = "Đã kết thúc quá trình nghe!mong tìm kiếm đúng ý bạn...";
  btn.style.background = "red";
  action.style.color = "green";
};

// Xử lý sự kiện khi lỗi xảy ra trong quá trình nhận dạng
recognition.onerror = function () {
  recognizing = false;
};

// Hàm bắt đầu ghi âm khi nút được nhấn
function record() {
  if (!recognizing) {
    recognition.start();
  }
}

// Lắng nghe sự kiện khi nút được nhấn
btn.addEventListener("click", record);

function results(message) {
  switch (message) {
    case "google":
      window.open("https://google.com");
      break;

    case "youtube":
      window.open("https://youtube.com");
      break;

    case "facebook":
      window.open("https://facebook.com");
      break;

    case "google dịch":
      window.open(
        "https://www.google.com/search?q=gg+d%E1%BB%8Bch&rlz=1C1CHZN_viVN977VN977&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQsxNjQ0MTg2ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8"
      );
      break;

    case "google maps":
    case "bản đồ":
    case "maps":
      window.open("https://maps.google.com");
      break;

    default:
      if (
        message.includes("chỉ đường") ||
        message.includes("tới") ||
        message.includes("đường tới")
      ) {
        const transcriptNew = message
          .replace("chỉ đường", "")
          .replace("tới", "")
          .replace("đường tới", "")
          .trim();

        const url = `https://www.google.com/maps/search/${transcriptNew}`;
        window.open(url.trim());
      } else if (
        message.includes("bài hát") ||
        message.includes("mở bài hát") ||
        message.includes("nghe bài hát")
      ) {
        const transcriptNew = message
          .replace("bài hát", "")
          .replace("mở bài hát", "")
          .replace("nghe bài hát", "")
          .trim();

        const url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${transcriptNew}`;
        window.open(url.trim());
      } else if (
        message.includes("video") ||
        message.includes("mở video") ||
        message.includes("xem video")
      ) {
        const transcriptNew = message
          .replace("video", "")
          .replace("mở video", "")
          .replace("xem video", "")
          .trim();

        const url = `https://www.youtube.com/results?search_query=${transcriptNew}`;
        window.open(url.trim());
      }
      break;
  }
}
