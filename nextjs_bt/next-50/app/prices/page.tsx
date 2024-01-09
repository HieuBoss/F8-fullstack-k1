export default function Prices() {
  return (
    <div>
      <div className="container mx-auto my-10 p-8 bg-white shadow-md">
        <h1 className="text-3xl text-blue-800 font-bold mb-8">
          Bảng Giá Dịch Vụ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="prices bg-red-400 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4 ">Gói Cơ Bản</h2>
            <p className="text-gray-600 mb-4">
              Mô tả về Gói Cơ Bản. Bạn sẽ nhận được những gì khi chọn gói này.
            </p>
            <p className="text-2xl text-blue-500 font-bold mb-4">$100</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Mua Ngay
            </button>
          </div>
          <div className="prices bg-yellow-500 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Gói Nâng Cao</h2>
            <p className="text-gray-600 mb-4">
              Mô tả về Gói Nâng Cao. Bạn sẽ nhận được những gì khi chọn gói này.
            </p>
            <p className="text-2xl text-blue-500 font-bold mb-4">$300</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Mua Ngay
            </button>
          </div>
          <div className="prices bg-blue-300 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Gói Tiêu Chuẩn</h2>
            <p className="text-gray-600 mb-4">
              Mô tả về Gói Tiêu Chuẩn. Bạn sẽ nhận được những gì khi chọn gói
              này.
            </p>
            <p className="text-2xl text-blue-500 font-bold mb-4">$200</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
