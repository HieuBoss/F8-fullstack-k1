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
    item.setAttribute("data-index", index);
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
    item.setAttribute("data-index", index);
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
  draggedItem = null;
  e.target.classList.remove("dragging");
}

list.addEventListener("dragover", function (e) {
  e.preventDefault();
  if (draggedItem) {
    var targetItem = e.target.closest(".list-item");
    if (targetItem) {
      var rect = targetItem.getBoundingClientRect();
      var mouseY = e.clientY;

      if (mouseY < rect.bottom / 2) {
        list.insertBefore(draggedItem, targetItem);
      } else {
        list.insertBefore(draggedItem, targetItem.nextSibling);
      }
    }
  }

  var items = document.querySelectorAll(".list-item:not(.module)");
  items.forEach(function (item, index) {
    item.setAttribute("data-index", index);
    var name = "Bài";
    var span = item.querySelector("span");
    item.innerText = name + " " + (index + 1) + ": ";
    item.appendChild(span);
  });

  var modules = document.querySelectorAll(".list-item.module");
  modules.forEach(function (module, index) {
    module.setAttribute("data-index", index);
    var name = "Module";
    var span = module.querySelector("span");
    module.innerText = name + " " + (index + 1) + ": ";
    module.appendChild(span);
  });
});
