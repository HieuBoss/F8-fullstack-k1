// customElements

/*
- kỹ thuật tạo ra 1 thẻ html riêng 
- thẻ html này phải có 2 từ trở lên và có gạch ngang
-kỹ thuật để phân chia các thành phần trong trang web -> hay gọi là component


sử dụng
-customElements
- kế thừa từ HTMLElement
-lifecycle callbacks-> vòng đời từ 1 component đc tạo ra cho tơi lúc xóa nó
*/
// tạo component 1 hàm hoặc 1 class

var HelloWorld = function () {
  return Reflect.construct(HTMLElement, [], this.constructor);
};

HelloWorld.prototype = Object.create(HTMLElement.prototype);

HelloWorld.prototype.constructor = HelloWorld;

HelloWorld.prototype.connectedCallback = function () {
  console.log("connected");
  // this.innerText = "Hello world";
  // this.dataset.index = "1";
  // var name = this.getAttribute("name");
  // console.log(name);
  var defaultValue = this.getAttribute("defaultValue");
  var h1 = document.createElement("h1");
  h1.innerText = "Count: ";
  var text = document.createTextNode(defaultValue);
  h1.append(text);
  this.append(h1);

  var button = document.createElement("button");
  button.innerText = "+";
  this.append(button);
  button.addEventListener("click", function () {
    text.data++;
  });
};

customElements.define("hello-world", HelloWorld);
