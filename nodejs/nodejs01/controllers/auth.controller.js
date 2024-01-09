import { object, string } from "yup";
import { getError } from "../utils/validate.js";

const authController = {
  login: (req, res) => {
    const errors = req.flash("errors");

    // delete req.session.msg;
    res.render("auth/login", {
      layout: "layout/layout.auth.ejs",
      errors,
      getError,
    });
  },
  handleLogin: async (req, res) => {
    // const { email, password } = req.body;
    // const error = {};
    // req.flash("msg", "Đăng nhập thành công");

    // if (!email) {
    //   error.errEmail = "Lỗi email";
    // }
    // if (!password) {
    //   error.errPassword = "Lỗi password";
    // }
    const schema = object({
      email: string()
        .required("email bắt buộc phải nhập")
        .email("email không đúng địn dạng"),
      password: string().required("password bắt buộc phải nhập"),
    });
    try {
      const data = await schema.validate(req.body, {
        abortEarly: false,
      });
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map(({ path, message }) => [path, message])
      );
      req.flash("errors", errors);
    }

    // req.session.msg = "";
    // return res.send("submit");
    return res.redirect("/dang-nhap");
    // return res.status(404).json(data);
  },
};
export default authController;
