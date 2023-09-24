var btn = document.querySelector(".btn");
var contentEl = document.querySelector(".content");
var downloadBtn = document.querySelector(".dow");

btn.addEventListener("click", function () {});
downloadBtn.addEventListener("click", function () {
  var content = contentEl.innerText;
  var blod = new Blob([content]);
});
