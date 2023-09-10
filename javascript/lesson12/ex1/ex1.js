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
        <button class="add-cart" data-index="${index}" type="submit">Thêm vào giỏ</button>
      </td>
    `;
    productItem.innerHTML = html;
    showList.appendChild(productItem);

    var btnProduct = productItem.querySelector("button.add-cart");
    btnProduct.addEventListener("click", function (e) {
      var quantity = parseInt(productItem.querySelector(".quantity").value);
      var name = product.name;
      var price = parseInt(product.price);
      var index = parseInt(btnProduct.getAttribute("data-index"));
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
  localStorage.setItem("cart", JSON.stringify(cart));
  renderListCart();
}

function renderListCart() {
  var showListCart = document.querySelector(".show-list-cart");
  showListCart.innerHTML = "";
  if (cart.length === 0) {
    warning.style.display = "block";
    tableCart.style.display = "none";
  } else {
    warning.style.display = "none";
  }
  cart.forEach(function (product, index) {
    var productItem = document.createElement("tr");
    var html = `
      <td>${index + 1}</td>
      <td>${product.name}</td> 
      <td>${product.price}</td>
      <td> <input type="number" value="${
        product.quantity
      }" class="quantity"/></td>
      <td>${product.total}</td>
      <td>
        <button class="remove-cart" data-index="${index}" type="submit">Xóa</button>
      </td>
    `;

    productItem.innerHTML = html;
    showListCart.appendChild(productItem);

    var btnRemove = productItem.querySelector("button.remove-cart");
    btnRemove.addEventListener("click", function (e) {
      var check = confirm("Bạn có chắc muốn xóa không");
      if (check) {
        var index = parseInt(btnRemove.getAttribute("data-index"));
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderListCart();
      } else {
        alert("Không xóa nữa");
      }
    });
  });

  if (cart.length > 0) {
    var totalQuantity = cart.reduce(function (sum, product) {
      return sum + product.quantity;
    }, 0);

    var totalPrice = cart.reduce(function (sum, product) {
      return sum + product.total;
    }, 0);

    var totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td colspan="3">Tổng:</td>
      <td>${totalQuantity}</td>
      <td>${totalPrice}</td>
      <td></td>
    `;
    showListCart.appendChild(totalRow);

    var buttonRow = document.querySelector(".btn-footer");
    if (!buttonRow) {
      buttonRow = document.createElement("div");
      buttonRow.classList.add("btn-footer");
      buttonRow.innerHTML = `
        <button class="update-all">Cập nhật giỏ hàng</button>
        <button class="delete-all">Xóa giỏ hàng</button>
      `;
      tableCart.appendChild(buttonRow);
    }
  } else {
    var buttonRow = document.querySelector(".btn-footer");
    if (buttonRow) {
      buttonRow.remove();
    }
  }

  var btnUpdateAll = document.querySelector(".update-all");
  if (btnUpdateAll) {
    btnUpdateAll.addEventListener("click", function () {
      // Đặt hành động cập nhật giỏ hàng ở đây
    });
  }

  var btnDeleteAll = document.querySelector(".delete-all");
  if (btnDeleteAll) {
    btnDeleteAll.addEventListener("click", function () {
      var check = confirm("Bạn có chắc muốn xóa giỏ hàng không?");
      if (check) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        renderListCart();
      }
    });
  }
}
