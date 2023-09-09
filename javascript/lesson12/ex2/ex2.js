var todo = document.querySelector(".todo");
var todoList = todo.querySelector(".todo-list");
var todoForm = todo.querySelector("form");
// console.log(todoForm);
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var inputEl = this.children[0];
  var doName = inputEl.value;
  if (!doName.length) {
    return;
  }
  // todoList.innerHTML += `<p>${doName}</p>`;
  var p = document.createElement("p");
  var btn = document.createElement("button");
  btn.innerText = "xoa";

  p.innerText = doName;
  todoList.append(p);
  p.append(btn);
  inputEl.value = "";
  btn.addEventListener("click", handleRemove);
});

function handleRemove() {
  this.parentNode.remove();
}

// var content = document.querySelector(".content");
// console.log(content.childNodes);
// // console.log(content.children);
// content.childNodes[0].data = "Hello F88";

var h2 = document.querySelector(".content h2");
console.log(h2.parentNode);
