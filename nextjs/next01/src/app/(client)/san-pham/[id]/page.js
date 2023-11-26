import React from "react";
export const generateMetadata = ({ params }) => {
  return { title: "sản phẩm - " + params.id };
};
export default function ProductsDetail({ params }) {
  return (
    <div>
      <h1>Đây là sản phẩm {params.id == 1 ? "mới ra mắt" : `${params.id}`}</h1>
    </div>
  );
}
