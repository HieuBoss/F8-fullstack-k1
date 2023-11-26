import React from "react";
import LogoCart from "../components/cart/LogoCart";
import Logo from "../components/logo/Logo";
import "./Home.scss";
import Product from "../components/products/Product";
export default function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <LogoCart />
      </div>
      <Product />
    </div>
  );
}
