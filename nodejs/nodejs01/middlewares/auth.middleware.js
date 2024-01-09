// middleware là 1 funcition có 3 tham số
/*
-req-->object
-res-->object
-next-->hàm
*/

const authMiddleware = (req, res, next) => {
  const isLogin = true;
  if (!isLogin) {
    res.redirect("/dang-nhap");
  }
  next();
};
export default authMiddleware;
