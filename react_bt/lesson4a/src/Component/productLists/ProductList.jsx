import React, { useContext } from "react";
import { MyContext } from "../../pages/home/Home";

export default function ProductList({ productList }) {
  const { cart, addToCart } = useContext(MyContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to Shop!</h1>
      <div className="row">
        {productList.map((product) => (
          <div key={product._id} className="col-md-3 mb-4 ">
            <div className="card shadow">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ maxHeight: "300px" }}
              />
              <div className="card-body text-center">
                {" "}
                {/* Đặt lớp text-center ở đây */}
                <h5 className="card-title">{product.name}</h5>
                <p
                  className="card-text"
                  style={{ color: "orange", fontWeight: 600 }}
                >
                  ${product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="btn text-white bg-success"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
