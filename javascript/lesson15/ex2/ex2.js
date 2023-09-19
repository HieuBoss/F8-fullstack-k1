// console.log(title);
// var p = document.querySelector("p");
// console.log(p);

// console.log(HTMLElement.prototype);
// var css = {
//   border: "1px solid black",
//   background: "yellow",
// };

// var changeCSS = function (element, style) {
//   Object.assign(element.style, style);
// };
// changeCSS(title, css);

// title.changeCSS(style);

HTMLElement.prototype.changeCSS = function (style) {
  Object.assign(this.style, style);
};

var title = document.querySelector(".title");

title.changeCSS({
  border: "4px solid red",
  background: "yellow",
});
document.querySelector("p").changeCSS({
  color: "red",
});
