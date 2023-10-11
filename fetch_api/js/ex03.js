import { config } from "./config.js";
import { client } from "./client.js";

const { PAGE_LIMIT } = config;
const renderPaginate = (totalPage) => {
  const paginateEl = document.querySelector(".paginate");

  paginateEl.innerText = "";
  if (totalPage > 1) {
    const spanPrev = document.createElement("span");
    const aPrev = document.createElement("a");
    aPrev.href = "#";
    aPrev.innerText = "Prev";
    spanPrev.append(aPrev);
    paginateEl.append(spanPrev);

    if (currentPage === 1) {
      aPrev.style.display = "none";
    }

    aPrev.addEventListener("click", (e) => {
      if (currentPage > 1) {
        currentPage--;
      }
      getPosts({
        q: keyWord,
        _sort: sort,
        _order: order,
        _limit: limit,
        _page: currentPage,
      });
    });
    for (let page = 1; page <= totalPage; page++) {
      // console.log(currentPage);
      const span = document.createElement("span");
      if (+page === +currentPage) {
        span.classList.add("active");
      }
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = page;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(page);
      });
      span.append(a);
      paginateEl.append(span);
    }

    const spanNext = document.createElement("span");
    const aNext = document.createElement("a");
    aNext.href = "#";
    aNext.innerText = "Next";
    spanNext.append(aNext);
    paginateEl.append(spanNext);

    if (currentPage === totalPage) {
      aNext.style.display = "none";
    }
    aNext.addEventListener("click", (e) => {
      if (currentPage < totalPage) {
        currentPage++;
      }

      getPosts({
        q: keyWord,
        _sort: sort,
        _order: order,
        _limit: limit,
        _page: currentPage,
      });
    });
  }
};

const goPage = (page) => {
  currentPage = page;
  getPosts({
    q: keyWord,
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
  });
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

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
      const removeBtn = document.createElement("span");
      // removeBtn.href = "#";
      removeBtn.innerText = "Xóa";
      removeBtn.classList.add("remove");
      removeBtn.addEventListener("click", function () {
        if (confirm("Bạn có chắc chắn ")) {
          removePost(id);
        }
      });
      postsItem.append(p);
      postsEl.append(postsItem);
      postsItem.append(removeBtn);
    });
  }
};
const removePost = async (id) => {
  const { response } = await client.delete(`/posts/${id}`);
  if (response.ok) {
    currentPage = 1;
    getPosts({
      _sort: "id",
      _order: "desc",
      _limit: limit,
      _page: currentPage,
    });

    sortByEl.value = "latest";
  }
};
const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/posts?${queryString}`);

  const total = response.headers.get("x-total-count");

  const totalPage = Math.ceil(total / PAGE_LIMIT);
  renderPaginate(totalPage);
  render(data);
};

const addPost = async (data) => {
  // console.log(data);
  const { response } = await client.post("/posts", data);
  if (response.ok) {
    getPosts({
      _sort: "id",
      _order: "desc",
      _limit: limit,
      _page: 1,
    });
    // Dong form
    postForm.innerText = "";

    // reset select sort
    sortByEl.value = "latest";
  }
};

let sort = "id";
let order = "desc";
let keyWord = "";
let limit = PAGE_LIMIT;
let currentPage = 1;

getPosts({
  q: keyWord,
  _sort: sort,
  _order: order,
  _limit: limit,
  _page: currentPage,
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  keyWord = e.target.children[0].value;
  getPosts({
    q: keyWord,
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
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
    _limit: limit,
    _page: currentPage,
  });
});

const postNewBtn = document.querySelector(".post-new");
const postForm = document.querySelector(".post-form");

postNewBtn.addEventListener("click", () => {
  postForm.innerText = "";
  const form = document.createElement("form");

  form.addEventListener("submit", handleSubmitForm);

  const titleEl = document.createElement("input");
  titleEl.placeholder = `Tiêu đề bài viết`;
  titleEl.required = true;
  form.append(titleEl);
  // console.log(form);
  const excerptEl = document.createElement("textarea");
  excerptEl.placeholder = "Mô tả ngắn";
  excerptEl.required = true;
  form.append(excerptEl);

  const contentEl = document.createElement("textarea");
  contentEl.placeholder = "Nội dung";
  contentEl.required = true;

  form.append(contentEl);

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Lưu";
  form.append(submitBtn);

  postForm.append(form);
});

const handleSubmitForm = (e) => {
  e.preventDefault();
  const fieldList = e.target.children;

  const [titleEl, excerptEl, contentEl] = Array.from(fieldList);
  const title = titleEl.value;
  const excerpt = excerptEl.value;
  const content = contentEl.value;
  // console.log(title, excerpt, content);
  addPost({ title, excerpt, content });
};
