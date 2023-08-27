var wrapper = document.querySelector(".from-wrapper ");
var input = wrapper.querySelector(".form-input");
var btn = wrapper.querySelector(".form-btn");
var show = document.querySelector(".show");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
});
wrapper.addEventListener("click", function (e) {
  e.preventDefault();
  var showText = input.value.trim();
  if (showText !== "") {
    renderList("add", showText);
    input.value = "";
  }
});

function renderList(action, valueText) {
  if (action === "add") {
    var renderHtml = `
      <div class="show">
        <p class="show-text">${valueText}</p>
        <div class="show-icon">
          <button class="btn btn-edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btn btn-remove">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>`;
    show.innerHTML += renderHtml;

    var removes = document.querySelectorAll(".show .btn-remove");
    removes.forEach(function (remove) {
      remove.addEventListener("click", function () {
        renderList("remove", this);
      });
    });

    var edits = document.querySelectorAll(".show .btn-edit");
    edits.forEach(function (edit) {
      edit.addEventListener("click", function () {
        manageTodoItem("edit", this);
      });
    });
  } else if (action === "remove") {
    var showItem = valueText.closest(".show");
    if (showItem) {
      showItem.remove();
    }
  } else if (action === "edit") {
    var showItem = valueText.closest(".show");
    if (showItem) {
    }
  }
}
