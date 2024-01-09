import Image from "next/image";
import homeImg from "./assets/home.jpg";

export default function Home() {
  return (
    <div className="bg-purple-500 text-white p-8 ">
      <div className="container mx-auto mt-8 text-center ">
        <h1 className="text-3xl font-bold mb-4">
          Chào mừng đến với Mindmap Flow
        </h1>
        <p className="text-lg mb-4">
          Nền tảng tuyệt vời để tổ chức ý tưởng và thông tin của bạn.
        </p>
      </div>
      <Image src={homeImg} alt="img" />
    </div>
  );
}
