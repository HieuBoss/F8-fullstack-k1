export default function getModules() {
  const root = document.querySelector("#root");
  const searchBox = document.createElement("div");
  searchBox.classList.add("search-box");
  root.append(searchBox);
  const h1 = document.createElement("h1");
  h1.innerText = "Bạn muốn làm gì? Hãy nói cho tôi biết";
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = "Bấm vào đây để nói";
  const divAction = document.createElement("div");
  divAction.classList.add("action");
  const result = document.createElement("div");
  result.classList.add("result");

  searchBox.append(h1);
  searchBox.append(btn);
  searchBox.append(divAction);
  searchBox.append(result);
}
