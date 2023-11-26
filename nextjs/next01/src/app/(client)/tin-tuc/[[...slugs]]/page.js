import React from "react";
export const metadata = {
  title: "tin tức về sản phẩm",
};
export default function PostsDetail({ params }) {
  const slugs = params.slugs;
  console.log(slugs);
  if (!slugs) {
    return <h1>Danh sách bài viết</h1>;
  }
  return (
    <div>
      <h1>Chuyên mục:{slugs[0]}</h1>
      <h1>Bài viết:{slugs[1]}</h1>
    </div>
  );
}
