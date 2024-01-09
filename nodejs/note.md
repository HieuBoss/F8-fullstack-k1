#layout

- Header
- Body--> view
- Footer

# cách làm việc với request - response theo cơ chế Server Side (MVC)

- view chỉ được vào method get
- logic: viết ở post, put, patch, delete --> redirect về Get để trình duyệt hiển thị giao diện
  Lưu ý: Tuyệt đối không được gọi giao diện vào các phương thức trên

  Có 2 cách để gửi message giữa các request

- cách 1: Dùng search params
- cách 2: Dùng session(Flash session)
