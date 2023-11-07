# vấn đề

-chia sẻ dữ liệ giữa các component với nhau -> render props + state của component cha
-Dữ liệu dùng chung cho các component -> thông tin user sau khi đăng nhập,...

# giải pháp

-local State -> dùng useState
-Global State: Context API + useReducer , Thư viện bên ngoài : Redux

muốn lấy dữ liệu từ context

import đối tượng context
import hook useContext

=>gom thành 1 hook mới => Tạo 1 hàm bắt đầu từ khóa use
