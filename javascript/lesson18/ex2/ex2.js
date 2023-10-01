import getModules from "./modules/module.js";

getModules();
const btn = document.querySelector(".btn");
const action = document.querySelector(".action");
const warning = document.createElement("div");
const result = document.querySelector(".result");
result.append(warning);
var recognizing = false;
var css = {
  padding: "10px",
  margin: "20px 0",
};
Object.assign(warning.style, css);
var messages = "";
var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.continuous = false;
recognition.lang = "vi-VN";

recognition.onresult = function (e) {
  messages = e.results[0][0].transcript.toLowerCase();
  action.textContent = `Đang tìm kiếm ${messages}`;

  if (results(messages)) {
    warning.innerText = "Thực hiện thành công";
    warning.style.border = "solid 1px green";
    warning.style.color = "green";
  } else {
    warning.innerText = "Không thực hiện được yêu cầu";
    warning.style.border = "solid 1px red";
    warning.style.color = "red";
  }
};
recognition.onstart = function () {
  recognizing = true;
  action.textContent = "Đang nghe...";
  btn.style.background = "green";
  action.style.color = "black";
};
recognition.onend = function () {
  recognizing = false;
  action.textContent = "Đã kết thúc quá trình nghe!mong tìm kiếm đúng ý bạn...";
  btn.style.background = "red";
  action.style.color = "green";
};
recognition.onerror = function () {
  recognizing = false;
};
function record() {
  if (!recognizing) {
    recognition.start();
  }
}

btn.addEventListener("click", record);

function results(message) {
  switch (message) {
    case "google":
      window.open("https://google.com");
      return true;

    case "youtube":
      window.open("https://youtube.com");
      return true;

    case "facebook":
      window.open("https://facebook.com");
      return true;

    case "google dịch":
      window.open(
        "https://www.google.com/search?q=gg+d%E1%BB%8Bch&rlz=1C1CHZN_viVN977VN977&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQsxNjQ0MTg2ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8"
      );
      return true;

    case "google maps":
    case "bản đồ":
    case "maps":
      window.open("https://maps.google.com");
      return true;

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
        return true;
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
        return true;
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
        return true;
      }
      return false;
  }
}
