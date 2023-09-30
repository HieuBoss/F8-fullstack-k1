export default function getModules() {
  const root = document.querySelector("#root");
  const div = document.createElement("div");
  div.classList.add("search-box");
  root.append(div);
  const h1 = document.createElement("h1");
  h1.innerText = "Bạn muốn làm gì? Hãy nói cho tôi biết";
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = "Bấm vào đây để nói";
  const divAction = document.createElement("div");
  divAction.classList.add("action");
  div.append(h1);
  div.append(btn);
  div.append(divAction);
}
