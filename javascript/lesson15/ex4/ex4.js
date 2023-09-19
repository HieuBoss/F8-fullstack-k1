var body = document.body;
var btnPrimary = document.querySelector(".btn-primary");
var menu = document.querySelector(".menu");
var text = document.querySelector("#text");
var quantity = document.querySelector(".quantity");
var quantity1 = quantity.querySelector(".quantity-1");
var quantity2 = quantity.querySelector(".quantity-2");
var btnNew = menu.querySelector("#new-btn");
var btnTXT = menu.querySelector("#txt-btn");
var btnPDF = menu.querySelector("#pdf-btn");
var nameFileInput = document.querySelector("#file-input");
var btnBold = document.querySelector(".btn-bold");
var btnUnderlined = document.querySelector(".btn-underlined");
var btnItalics = document.querySelector(".btn-italics");
var btnColor = document.querySelector("#color-input");
// console.log(quantity);
btnPrimary.addEventListener("click", function () {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    body.addEventListener("mouseup", function () {
      menu.classList.remove("show");
    });
  }
});
text.setAttribute("contenteditable", true);

text.addEventListener("input", function () {
  //   console.log(text.innerText);
  var characters = text.innerText.trim();
  quantity1.innerText = `Số ký tự: ${characters.length}`;

  var sentence = characters.split(/\s+/).filter(Boolean);
  quantity2.innerText = `Số từ: ${sentence.length}`;
});

btnBold.addEventListener("click", function () {
  document.execCommand("bold", false, null);
});
btnUnderlined.addEventListener("click", function () {
  document.execCommand("underline", false, null);
});
btnItalics.addEventListener("click", function () {
  document.execCommand("italic", false, null);
});
btnColor.addEventListener("change", function () {
  document.execCommand("foreColor", false, this.value);
});

var nameFile = nameFileInput.value;
btnNew.addEventListener("click", () => {
  text.innerText = "";
});
btnTXT.addEventListener("click", () => {
  var bolb = new Blob([text.innerText], { type: "text / plain " });
  var url = URL.createObjectURL(bolb);
  var link = document.createElement("a");
  link.href = url;
  link.download = `${nameFile}.txt`;
  link.click();
});
btnPDF.addEventListener("click", () => {
  var bolb = new Blob([text.innerText], { type: "application/pdf" });
  var url = URL.createObjectURL(bolb);
  var link = document.createElement("a");
  link.href = url;
  link.download = `${nameFile}.pdf`;
  link.click();
});
