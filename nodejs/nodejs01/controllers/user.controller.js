const userController = {
  index: (req, res) => {
    const { status, keyword } = req.query;
    console.log(status, keyword);
    res.send(`<h1>Danh sách người dùng</h1>
        <h2>Status: ${status}</h2>
        <h2>Keyword: ${keyword}</h2>`);
  },
  add: (req, res) => {
    res.send("<h1>Thêm người dùng</h1>");
  },
  edit: (req, res) => {
    const id = req.params.id;
    res.send("<h1>Sửa người dùng: " + id + "</h1>");
  },
  orderList: (req, res) => {
    res.send("<h1>Danh sách đơn hàng");
  },
  orderCompleted: (req, res) => {
    res.send("<h1>Đơn hàng đã hoàn thành</h1>");
  },
  orderCancel: (req, res) => {
    res.send("<h1>Đơn hàng đã được hủy</h1>");
  },
};

export default userController;
