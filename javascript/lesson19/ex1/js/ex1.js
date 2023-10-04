import { get, post, renderItem, postAndRender, remove } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  get();
  const btnAdd = document.querySelector(".btn-add");
  const btnSearch = document.querySelector(".btn-search");
  const btnCancel = document.querySelector(".btn-cancel");
  const btnSave = document.querySelector(".btn-save");
  const inputAdd = document.querySelector(".input-add");
  const formAdd = document.querySelector(".form-add");
  const btnDelete = document.querySelector(".delete");
  btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    formAdd.classList.toggle("show");
  });

  btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
  });

  btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    formAdd.classList.remove("show");
    inputAdd.value = "";
  });

  btnSave.addEventListener("click", async (e) => {
    e.preventDefault();
    const inputValue = inputAdd.value.trim();
    if (!inputValue) {
      alert("Phải điền nội dung");
      return;
    }
    postAndRender(inputValue, formAdd);
  });
  btnSearch.addEventListener("click", () => {});
  remove();
});
