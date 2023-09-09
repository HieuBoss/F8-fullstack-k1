var tableAdd = document.querySelector(".table-add");
var tableCart = document.querySelector(".table-cart");
var warning = document.querySelector(".warning");
var products = [
  {
    name: "Sản phẩm 1",
    price: 1000,
  },
  {
    name: "Sản phẩm 2",
    price: 2000,
  },
  {
    name: "Sản phẩm 3",
    price: 3000,
  },
  {
    name: "Sản phẩm 4",
    price: 4000,
  },
];
var cart = JSON.parse(localStorage.getItem("cart")) || [];
function renderProductList() {
  var showList = document.querySelector(".show-list");
  products.forEach(function (product, index) {
    var productItem = document.createElement("tr");
    var html = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td> 
        <input type="number" value="1" class="quantity"/>
        <button class="add-cart" button-index="${index}" type="submit">Thêm vào giỏ</button>
      </td>
    `;
    productItem.innerHTML = html;
    showList.appendChild(productItem);

    var btnProduct = productItem.querySelector("button.add-cart[button-index]");
    btnProduct.addEventListener("click", function (e) {
      var quantity = parseInt(productItem.querySelector(".quantity").value);
      var name = product.name;
      var price = parseInt(product.price);
      var index = parseInt(btnProduct.getAttribute("button-index"));
      var total = quantity * price;
      addCart(quantity, name, price, index, total);
    });
  });
}

renderProductList();

function addCart(quantity, name, price, index, total) {
  tableCart.style.display = "block";
  warning.style.display = "none";
  var existingProduct = cart.find(function (product) {
    return product.index === index;
  });
  if (quantity < 0) {
    alert("Đặt hàng phải là số dương");
    return;
  }
  if (existingProduct) {
    existingProduct.quantity += quantity;
    existingProduct.total += total;
  } else {
    cart.push({
      quantity: quantity,
      name: name,
      price: price,
      index: index,
      total: total,
    });
  }
  console.log(total);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderListCart();
}

function renderListCart() {
  var showListCart = document.querySelector(".show-list-cart");
  showListCart.innerHTML = "";
  cart.forEach(function (product, index) {
    var productItem = document.createElement("tr");
    var html = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td> <input type="number" value="${
        product.quantity
      }" class="quantity"/></td>
      <td>${product.price}</td>
      <td>${product.total}</td>
      <td>
        <button class="remove-cart" button-index="${index}" type="submit">Xóa</button>
      </td>
    `;

    productItem.innerHTML = html;
    showListCart.appendChild(productItem);
  });
}
