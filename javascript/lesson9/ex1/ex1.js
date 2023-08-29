var wrapper = document.querySelector(".from-wrapper ");
var input = wrapper.querySelector(".form-input");
var btn = wrapper.querySelector(".form-btn");
var show = document.querySelector(".show-group");

showList = [];
wrapper.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!input.value.trim()) return false;
  if (e.type === "submit") {
    showList.push(input.value.trim());
  }

  renderList();
  input.value = "";
  // console.log(showList);
});

function renderList() {
  var renderHtml = "";
  showList.forEach(function (post, index) {
    renderHtml += `
      <div class="show">
        <p class="show-text">${post}</p>
        <div class="show-icon">
          <button class="btn btn-edit" onclick="startEdit(${index})">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btn btn-remove" onclick="removeTask(${index})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <form class="form-edit d-none" onsubmit="endEdit(${index})">
            <input
              type="text"
              class="edit"
              placeholder="Edit Task"
            />
            <button type="submit" class="form-btn">Add Task</button>
          </form>
      `;
  });

  show.innerHTML = renderHtml;
}

function startEdit(index) {
  // console.log(index);
  var showElement = document.querySelectorAll(".show")[index];
  var formElement = document.querySelectorAll(".form-edit")[index];
  var valueInput = document.querySelectorAll(".edit")[index];
  // console.log(showElement);
  showElement.classList.add("d-none");
  formElement.classList.remove("d-none");
  // console.log(showList);
  valueInput.value = showList[index];
}

function endEdit(index) {
  var valueInput = document.querySelectorAll(".edit")[index];
  var showElement = document.querySelectorAll(".show")[index];

  var showText = document.querySelectorAll(".show-text")[index];
  var formElement = document.querySelectorAll(".form-edit")[index];

  // console.log(valueInput);
  // console.log(valueInput.value);
  if (valueInput.value) {
    showText.innerText = valueInput.value;
    showElement.classList.remove("d-none");
    formElement.classList.add("d-none");
    showList[index] = valueInput.value;
  } else {
    showElement.classList.add("d-none");
    formElement.classList.add("d-none");
    showList.splice(index, 1);
  }
}

function removeTask(index) {
  var showElement = document.querySelectorAll(".show")[index];
  showElement.classList.add("d-none");
  showList.splice(index, 1);
}
