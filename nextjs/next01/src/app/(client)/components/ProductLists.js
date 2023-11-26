"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function ProductLists() {
  const [form, setForm] = useState({
    status: "all",
    keywords: "",
  });
  const router = useRouter();
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = pathName + "/?" + new URLSearchParams(form).toString();
    router.push(url);
  };
  return (
    <div>
      <h1>Đây là danh sách sản phẩm</h1>
      <h3>Trạng thái:{searchParam.get("status")} </h3>
      <h3>Từ khóa:{searchParam.get("keywords")} </h3>
      <form action="" onSubmit={handleSubmit}>
        <select onChange={handleChange} name="status">
          <option value="all">Tất cả</option>
          <option value="active">Kích hoạt</option>
          <option value="inactive">Chưa kích hoạt</option>
        </select>
        <input
          type="search"
          placeholder="Từ khóa tìm kiếm..."
          onChange={handleChange}
          name="keywords"
        />
        <button>Lọc</button>
      </form>
    </div>
  );
}
