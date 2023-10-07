import { config } from "./config.js";
import { client } from "./client.js";
const SERVER_API = config;

const getPosts = async () => {
  const { data } = await client.get(`${SERVER_API}/posts`);
  console.log(data);
};
