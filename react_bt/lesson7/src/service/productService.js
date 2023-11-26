import { client } from "./apiClient";

const getProductList = async (request) => {
  return await client.get("/products", request);
};

const getProductItem = async (productId) => {
  return await client.get(`/products${productId}`);
};

export { getProductList, getProductItem };
