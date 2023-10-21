// regex
// regular Expression
// Biểu thức chính quy

/*
Biểu thức chính quy 
-tập hợp các kí hiệu theo 1 quy tắc nhất định để xử lý chuỗi
-viết bằng ngôn ngữ perl

tác dụng

-so khớp -> test()
-cắt chuỗi -> match()
-thay thế -> replace()


cú pháp /regex/modifier
-regex => các ký hiệu của biểu thức chính quy
-modifier => cấu hình cho biểu thức chính quy


g-global
i-không phân biệt chữ hoa chữ thường
m-multi line = khớp nhiều dòng
s-single line = khớp 1 dòng

các kí hiệu cơ bản
-char -> tìm chuỗi char trong chuỗi gốc
-khớp đầu chuỗi : ^
-khớp cuối chuỗi:$
-khớp kí tự đại diện
+[A-Z]-> chữ hoa
+[a-z]-> chữ thường
+[0-9]->  số
+[charlist]-> các ký tự chỉ định (khớp theo điều kiện hoặc...)
-khớp độ dài: Mặc định các biểu thức chỉ có độ dài là 1
{min,max}->độ dài từ min đến max
{min,}->độ dài min đến vô cùng
{max}->độ dài cố định

-ký hiệu viết tắt của độ dài
{0,1} ->?
{1,} ->+
{0,} ->*

nếu muốn so khớp các kí hiệu bị trùng với ký hiệu của biểu thức chính quy => thêm dâu \ phía trước

dấu (.)
dấu ([])
dấu (/)
...
*/

const str = "hieu.@gmail.com";
const pattern = /^[a-z][a-z\.0-9-_]{3,}@[a-z-_\.0-9]+\.[a-z]{2,}/;
// const pattern = /^[a-zA-Z]/;
const check = pattern.test(str);
console.log(check);
