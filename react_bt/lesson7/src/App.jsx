import React from "react";
import HomePage from "./page/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProductList } from "./service/productService";

export default function App() {
  const test = () => {
    const test = getProductList("limit=20&page=1");
    console.log(test);
  };

  test();
  return (
    <>
      <div className="container">
        <HomePage />
      </div>
    </>
  );
}
