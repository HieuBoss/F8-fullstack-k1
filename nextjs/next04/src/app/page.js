import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1>HomePage</h1>
      <Image src="/assets/img/image.jpg" width="300" height="400" alt="Img" />
    </div>
  );
}

/*
SEO Onpage

- Semantic
- Meta:
+ title
+ meta description
+ Open Graph (các mạng xã hội phổ biến)

- File robots.txt: cho phép và ngăn chặn bot của các bộ máy tìm kiếm truy cập vào các đường dẫn trên website để thu nhập dữ liệu (index)
- File sitemap.xml --> khai báo file sitemap.xml cho công cụ: Goole Search Console
- File favicon.ico 
- json-ld
*/
