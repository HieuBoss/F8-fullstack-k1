import { client } from "./apiClient";
export const login = async (value) => {
  const response = await client.get(`/api-key?email=${value}`);
  return response;
};
