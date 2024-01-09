export default function Contact() {
  return (
    <div
      className="container  my-10 p-8 bg-gray-300 shadow-md  "
      style={{ width: "800px" }}
    >
      <h1 className="text-3xl text-blue-800 font-bold mb-8 text-center">
        Liên Hệ
      </h1>

      <form className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Họ và Tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600">
            Nội dung
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-400 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Gửi Liên Hệ
        </button>
      </form>
    </div>
  );
}
