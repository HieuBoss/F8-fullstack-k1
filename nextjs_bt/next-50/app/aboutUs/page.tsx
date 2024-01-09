// pages/AboutUs.js
import Image from "next/image";
import aboutUsImg from "../assets/aboutus-1.jpg";
export default function AboutUs() {
  return (
    <div className="bg-black-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">
          Về Chúng Tôi và Mindmap Flow
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2">
            <Image src={aboutUsImg} alt="About Us" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              <span className="font-bold">Mindmap là gì?</span>
            </p>
            <p className="text-lg mb-4">
              Mindmap (sơ đồ tư duy) là một trong những phương thức dùng để tận
              dụng khả năng ghi nhận hình ảnh của bộ não. Mindmap là phương pháp
              dùng để ghi nhớ chi tiết hay tổng hợp để phân tích một vấn đề nào
              đó thành một dạng lược đồ phân nhánh.
            </p>
            <p className="text-lg mb-4">
              Phương pháp này khai thác khả năng ghi nhớ và liên hệ các dữ kiện
              lại với nhau bằng cách sử dụng màu sắc và nét vẽ. Một cấu trúc cơ
              bản được phát triển rộng ra từ trung tâm, chúng dùng các đường kẻ,
              các biểu tượng, từ ngữ và hình ảnh theo một bộ các quy tắc đơn
              giản, cơ bản, tự nhiên và dễ hiểu. Với một Mindmap , một danh sách
              dài những thông tin đơn điệu có thể biến thành một bản đồ đầy màu
              sắc, sinh động, dễ nhớ, được tổ chức chặt chẽ. Nó kết hợp nhịp
              nhàng với cơ chế hoạt động tự nhiên của não chúng ta. Việc nhớ và
              gợi lại thông tin sau này sẽ dễ dàng, đáng tin cậy hơn so với khi
              sử dụng kỹ thuật ghi chép truyền thống.
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Mindmap có hai yếu tố bao gồm:</span>
            </p>
            <p className="text-lg mb-4">
              + Điểm trung tâm: Đây chính là ý tưởng lớn mà chúng ta đang tìm
              hiểu, nằm ở trung tâm sơ đồ tư duy. Đây chính là điểm nút, nơi các
              “nhánh” tỏa ra khắp nơi.
            </p>
            <p className="text-lg mb-4">
              + “Nhánh”: Chính là những đường thẳng nối điểm trung tâm tới những
              ý tưởng nhỏ hơn. Từ các nhánh lớn, người thiết lập bản đồ tư duy
              có thể trỏ ra những “nhánh” nhỏ hơn, làm rõ nội dung của các đường
              nhánh lớn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
