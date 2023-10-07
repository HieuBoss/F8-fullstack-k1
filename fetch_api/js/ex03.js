import { config } from "./config.js";
import { client } from "./client.js";

const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  postsEl.innerText = ``;
  if (posts.length) {
    posts.forEach(({ id, title, excerpt }) => {
      const postsItem = document.createElement("div");
      postsItem.classList.add("posts-item");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      a.innerText = title;
      a.href = "#";

      h2.append(a);
      postsItem.append(h2);

      const p = document.createElement("p");
      p.innerText = excerpt;
      postsItem.append(p);
      postsEl.append(postsItem);
    });
  }
};

const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/posts?${queryString}`);
  render(data);
};
let sort = "id";
let order = "desc";
let keyWord = "";

getPosts({
  _sort: sort,
  _order: order,
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  keyWord = e.target.children[0].value;
  getPosts({
    q: keyWord,
    _sort: sort,
    _order: order,
  });
  e.target.children[0].value = "";
});

const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  order = e.target.value === "latest" ? "desc" : "asc";
  getPosts({
    q: keyWord,
    _sort: sort,
    _order: order,
  });
});
