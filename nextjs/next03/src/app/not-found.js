import Link from "next/link";
import errorImage from "@/assets/img/img.jpg";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Image
        src={errorImage}
        alt="page noy found"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>lạc rồi.vui lòng về trang chủ</p>
      <Link href={"/"}>về trang chủ</Link>
    </div>
  );
}
