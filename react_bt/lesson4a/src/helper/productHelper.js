import { getProduct } from "../Service/productService";

export const handleGetProductList = async () => {
  try {
    const response = await getProduct();
    return response;
  } catch (err) {
    console.log(err);
  }
};
