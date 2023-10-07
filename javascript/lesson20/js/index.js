import { config } from "./config.js";
import { client } from "./client.js";

const showLoading = () => {
  const loadingElement = document.querySelector(".loading");
  if (loadingElement) {
    loadingElement.style.display = "block";
  }
};

const hideLoading = () => {
  const loadingElement = document.querySelector(".loading");
  if (loadingElement) {
    loadingElement.style.display = "none";
  }
};
const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  postsEl.innerText = ``;
  if (posts.length) {
    posts.forEach(({ id, title, content, thumbnail_url }) => {
      const postsItem = document.createElement("div");
      postsItem.classList.add("posts-item");

      postsEl.append(postsItem);
      const h3 = document.createElement("h3");
      h3.classList.add("name");
      h3.innerText = title;
      const p = document.createElement("p");
      p.classList.add("text-content");
      p.innerText = content;
      const image = document.createElement("img");
      image.src = thumbnail_url;

      postsItem.append(h3);
      postsItem.append(p);
      postsItem.append(image);
    });
  }
};

const getPosts = async (query = {}) => {
  showLoading();
  try {
    const queryString = new URLSearchParams(query).toString();
    const { data } = await client.get(`/posts?${queryString}`);
    render(data);
  } catch (error) {
    console.log(`Đang có lỗi ở ${error}`);
  } finally {
    hideLoading();
  }
};

getPosts();
