// Bài 4
// Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện
var posts = [
  {
    title: "Tiêu đề bài viết 1",
    thumbnail: "./img/img.jpg",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
    aperiam vitae odit in culpa ipsa, possimus harum nam temporibus
    ullam quidem voluptatibus unde. Saepe magnam, harum ipsum laboriosam
    cumque quasi`,
  },
  {
    title: "Tiêu đề bài viết 2",
    thumbnail: "./img/img.jpg",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
    aperiam vitae odit in culpa ipsa, possimus harum nam temporibus
    ullam quidem voluptatibus unde. Saepe magnam, harum ipsum laboriosam
    cumque quasi`,
  },
  {
    title: "Tiêu đề bài viết 3",
    thumbnail: "./img/img.jpg",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
    aperiam vitae odit in culpa ipsa, possimus harum nam temporibus
    ullam quidem voluptatibus unde. Saepe magnam, harum ipsum laboriosam
    cumque quasi`,
  },
  {
    title: "Tiêu đề bài viết 4",
    thumbnail: "./img/img.jpg",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
    aperiam vitae odit in culpa ipsa, possimus harum nam temporibus
    ullam quidem voluptatibus unde. Saepe magnam, harum ipsum laboriosam
    cumque quasi`,
  },
];
var html = `<div class="posts">
  ${
    posts?.length
      ? posts
          .map?.(function (post, index) {
            return `<div class="post-item ${index % 2 !== 0 ? "right" : ""}">
                  <img src="${post.thumbnail}" 
                  alt="${post.title}"/>
                  <div class="text">
                    <h3>${post.title}</h3>
                    <p>
                    ${post.excerpt}
                    </p>
                  </div>
                </div>`;
          })
          .join("")
      : "Không có gì!"
  }
  </div>
  `;
document.write(html);
