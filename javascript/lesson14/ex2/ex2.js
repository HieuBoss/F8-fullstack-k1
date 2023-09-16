var list = document.querySelector(".list");
var listItem = document.querySelectorAll(".list .list-item:not(.module)");
var moduleItem = document.querySelectorAll(".module");
// console.log(moduleItem);
// console.log(listItem);

var itemIndex = 0,
  moduleIndex = 0;
var draggedItem = null;
function renderItem(listItem) {
  listItem.forEach(function (item, index) {
    item.setAttribute("draggable", true);
    var name = "Bài";
    var span = document.createElement("span");
    var itemText = item.innerText;
    span.innerText = itemText;
    item.innerHTML = "";
    itemIndex = index + 1;
    item.innerText = name + " " + itemIndex + ": ";
    item.appendChild(span);

    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  });
}

function renderModule(moduleItem) {
  moduleItem.forEach(function (item, index) {
    item.setAttribute("draggable", true);
    var name = "Module";
    var span = document.createElement("span");
    var moduleText = item.innerText;
    span.innerText = moduleText;
    item.innerHTML = "";
    moduleIndex = index + 1;
    item.innerText = name + " " + moduleIndex + ": ";
    item.appendChild(span);
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  });
}
renderItem(listItem);
renderModule(moduleItem);

function handleDragStart(e) {
  draggedItem = this;

  e.currentTarget.classList.add("dragging");
  draggedItem = e.target;
  // console.log(draggedItem);
}

function handleDragEnd(e) {
  e.target.classList.remove("dragging");
}

list.addEventListener("dragover", function (e) {
  e.preventDefault();
  if (draggedItem) {
    var test = e.target.closest(".list-item");
  }
});
