import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { handleLogin } from "../../helper/authHelper";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const reducer = (prev, action = {}) => {
    switch (action.type) {
      case "form/onchange": {
        return {
          ...prev,
          form: { [action.payload.name]: action.payload.value },
        };
      }
      default:
        return prev;
    }
  };

  const [loginState, dispatch] = useReducer(reducer, {
    form: {
      email: "",
    },
  });

  const handleOnChange = (e) => {
    dispatch({
      type: "form/onchange",
      payload: { name: "email", value: e.target.value },
    });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const response = await handleLogin(loginState.form.email);
    if (response.data.code === 200) {
      localStorage.setItem("apiKey ", response.data.data.apiKey);
      alert("đăng nhâp thanh cong");
      navigate("/home");
    } else {
      alert("Email nhập sai ! Nhập lại ");
    }
    console.log(response.data.data.apiKey);
  };

  // handleSubmitLogin();

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <form
          onSubmit={handleSubmitLogin}
          className="col-md-4 bg-white p-3 rounded shadow"
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleOnChange}
              name="email"
              className="form-control"
              value={loginState.form.email}
              placeholder="example@example.com"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
