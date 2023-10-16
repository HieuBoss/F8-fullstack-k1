/*
1. localStorage -> lưu trữ vô thơi hạn
1.1 set localStorage: localStorage.setItem('key','value')
1.2 get localStorage: localStorage.getItem('key')
1.3 remove localStorage: localStorage.removeItem('key')
1.4 xoá tất cả localStorage : localStorage.clear()

2.sessionStorage -> lưu trữ theo phiên (tắt trình duyệt tự xóa)-> tương tự localStorage

3.Cookie -> lưu trữ theo phiên, lưu trữ theo thơi gian xác định

localStorage.setItem('userName', 'hoangan.web')
*/

// if (typeof Storage !== "undefined") {
//   console.log(localStorage.setItem("userName"));

//   sessionStorage.setItem("userName", "hoangan.wed@gmail.com");
// }

// cookie -> tự động đính kèm vào http request (với điều kiện tự dùng trình duyệt)
// chuỗi cookie : key1 = value1, key2 = value2

// 1.set cookie

// Expire sẽ chấp nhận định dạng thơi gian UTC

const expire = new Date("2023-10-26 09:00:00").toUTCString;
// document.cookie = `userName=duyhieu@gmail.com; expire=${expire}`;
document.cookie = "username = hieu0611@gmail.com;path=/";
document.cookie = "username = hieu06@gmail.com";

// 2.Đọc cookie
// console.log(document.cookie);

// 3.cập nhật cookie
// document.cookie = "username = hieu0611";

// 4.xoá cookie
// document.cookie = `username=;expires=${new Date().toUTCString}`;

/*
    HttpOnly -> chỉ cho phép  back-end lấy cookie (lấy thông qua http)
    secure -> Thao tác với cookie nếu sử dụng https
*/
