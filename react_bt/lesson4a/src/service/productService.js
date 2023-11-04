import { client } from "./apiClient";

export const getProduct = async () => {
  const response = await client.get(`/products`);
  return response;
};

export const postOrder = async (body) => {
  const response = await client.post(`/orders`, body);
  return response;
};
