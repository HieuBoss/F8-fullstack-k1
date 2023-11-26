"use client";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleAdmin = () => {
    router.push("/admin");
  };
  return (
    <div className="home">
      <h1>Home f8</h1>
      <h3>
        <Link href="/san-pham">Danh sách sản phẩm</Link>
      </h3>
      <button onClick={handleAdmin}>Vào quản trị</button>
    </div>
  );
}
