export default function Footer() {
  return (
    <div className="bg-gray-900 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="flex items-center">
          <h2 className="font-bold text-2xl text-purple-500">Mindmap Flow</h2>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Liên kết nhanh</h2>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/aboutUs">Giới thiệu</a>
            </li>
            <li>
              <a href="/feature">Tính năng</a>
            </li>
            <li>
              <a href="/prices">Bảng giá</a>
            </li>
            <li>
              <a href="/contact">Liên hệ</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Liên hệ</h2>
          <p>Việt Nam</p>
          <p>Email: hieu@gmail.com</p>
          <p>Điện thoại: 0123456789</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Theo dõi chúng tôi</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/duyhieu.nguyen.311493/">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/duyhieu.nguyen.311493/">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </div>
  );
}
