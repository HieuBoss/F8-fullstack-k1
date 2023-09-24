/*
tạo component tên là : image để hiển thị một hình ảnh

các thuộc tính
link ->đường dẫn ảnh
width ->chiều rộng
height ->chiều cao
style ->CSS inlines
*/

Component.create("image-component", function () {
  var shadow = this.attachShadow({ mode: "open" });
  var link = this.getAttribute("link");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var style = this.getAttribute("style");

  shadow.innerHTML = `<img src="${link}" width = "${width}" height = "${height}" style = "${style}"/>`;
  var styleEl = document.createElement("style");
  styleEl.textContent = `img{
  box-shadow: 5px 5px 5px gray;
}`;
  shadow.appendChild(styleEl);
});
// componentImg.prototype = Object.create(HTMLElement.prototype);
// componentImg.prototype.constructor = componentImg;
// componentImg.prototype.connectedCallback = function () {};
// customElements.define("componentImg-link", componentImg);
Component.create("box-image", function () {
  var style = document.createElement("style");
  style.innerHTML = `.box-image{
    border: 3px solid red;
    padding:10px;
    display:inline-block;
  }`;
  this.prepend(style);
  this.innerHTML = `<div class="box-image">${this.innerHTML}</div>`;
});
