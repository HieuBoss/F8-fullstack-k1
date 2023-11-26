"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();

  useEffect(() => {
    console.log("Hello");
  });
  return (
    <div className="menu">
      <ul className="list">
        <li className={clsx(pathName === "/" && "active")}>
          <Link href="/">trang chủ</Link>
        </li>
        <li className={clsx(pathName === "/san-pham" && "active")}>
          <Link href="/san-pham">sản phẩm</Link>
        </li>
        <li className={clsx(pathName === "/tin-tuc" && "active")}>
          <Link href="/tin-tuc">tin tức</Link>
        </li>
      </ul>
    </div>
  );
}
