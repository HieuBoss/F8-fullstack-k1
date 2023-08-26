var wrapper = document.querySelector(".from-wrapper ");
var input = wrapper.querySelector(".form-input");
var show = document.querySelector(".show-text");
console.log(show);

showList = [];
wrapper.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!input.value.trim()) return false;
  if (e.type === "submit") {
    showList.push(input.value);
    console.log(showList);
  }
  renderList();
  input.value = "";
});

function renderList() {
  var renderHtml = "";

  showList.map(function (post) {
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

  renderHtml = show.innerHTML;
}
