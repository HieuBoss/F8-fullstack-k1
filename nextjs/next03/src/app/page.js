import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href={"/todos"}> chuyen sang trang todos</Link>
    </div>
  );
}
