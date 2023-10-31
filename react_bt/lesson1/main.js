// import "./src/scss/Style.scss";
import About from "./src/page/About";
import Home from "./src/page/Home";
import Products from "./src/page/Products";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";

const root = document.querySelector("#root");
function main() {
  const container = document.createElement("div");
  container.classList.add("container");
  const html = `   ${Header()}
  <hr />
  <div class="content">
    <ul class="list">
      <li><a href="/trang_chu">Trang chủ</a></li>
      <li><a href="/gioi_thieu">Giới thiệu</a></li>
      <li><a href="/san_pham">Sản phẩm</a>
     ${Products()}
      </li>
    </ul>
    
  </div>
  <hr />
  ${Footer()}`;
  container.innerHTML = html;
  root.appendChild(container);
}
main();
