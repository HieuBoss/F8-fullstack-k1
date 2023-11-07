import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      className="shadow text-center "
      style={{ width: "400px", height: "200px", margin: "40px auto" }}
    >
      <button
        onClick={() => loginWithRedirect()}
        className="btn btn-primary mt-5"
      >
        Đăng nhập
      </button>
    </div>
  );
}
