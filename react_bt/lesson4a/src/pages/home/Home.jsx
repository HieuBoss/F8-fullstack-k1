import React, { useEffect, useState, createContext, useContext } from "react";
import { handleGetProductList } from "../../helper/productHelper";
import ProductList from "../../Component/productLists/ProductList";

export const MyContext = React.createContext();

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState();

  const RenderListProduct = async () => {
    const response = await handleGetProductList();
    console.log(response);
    setProductList(response.data.data);
  };

  useEffect(() => {
    RenderListProduct();
  }, []);

  const addToCart = (product) => {
    setCart([...(cart || []), product]);
  };

  return (
    <MyContext.Provider value={{ cart, addToCart }}>
      <ProductList productList={productList} />
    </MyContext.Provider>
  );
}
