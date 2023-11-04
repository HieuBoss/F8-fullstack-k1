import { login } from "../Service/authService";

export const handleLogin = async (data) => {
  try {
    const response = await login(data);
    return response;
  } catch (err) {
    console.log(err);
  }
};
