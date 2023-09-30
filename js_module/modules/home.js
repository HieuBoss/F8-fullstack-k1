/*
Nguyên tắc chung 
-muốn import từ file khác vào -> File được import phải được export
- có hai loại import và export
+default
+named
*/
const user = {
  name: "Hoang an",
  email: "hoangan@gmail.com",
};

const course = {
  name: "Fullstack",
  price: 5000,
};
export const getCourse = () => {
  return ["A", "B", "C"];
};
export default function getUser() {
  return user;
}
// Export default->trong một file chỉ có 1 export default
// với function và class -> sử dụng export trực tiếp trước từ khóa function,class
// export default getUser;
export { user, course };
