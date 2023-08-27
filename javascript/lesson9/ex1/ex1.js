var wrapper = document.querySelector(".from-wrapper ");
var input = wrapper.querySelector(".form-input");
var btn = wrapper.querySelector(".form-btn");
var show = document.querySelector(".show-group");

showList = [];
wrapper.addEventListener("submit", function (e) {
  e.preventDefault();
  const trimmedValue = input.value.trim();
  if (!trimmedValue) return false;
  if (e.type === "submit") {
    showList.push(trimmedValue);
  }

  renderList();
  input.value = "";
  console.log(showList);
});

function renderList() {
  var renderHtml = "";
  showList.forEach(function (post, index) {
    renderHtml += `
      <div class="show">
        <p class="show-text">${post}</p>
        <div class="show-icon">
          <button class="btn btn-edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btn btn-remove">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>`;
  });

  show.innerHTML = renderHtml;
}
