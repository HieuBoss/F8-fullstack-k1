import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";

export default function EmailForm() {
  const form = useRef();
  const { user } = useAuth0();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kfaed5p",
        "template_ke3166c",
        form.current,
        "DAFHxf53yTKVM7a9V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group  my-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control text-center"
                name="user_email"
                defaultValue={user.email}
              />
            </div>
            <div className="form-group  my-3">
              <label>Message</label>
              <textarea
                className="form-control text-center"
                name="message"
                rows="4"
                defaultValue="Tôi cần hỗ trợ sos ?"
              />
            </div>
            <button type="submit" className="btn btn-success my-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
