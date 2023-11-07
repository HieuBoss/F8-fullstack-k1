import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { useSelect } from "../core/useSelecter";
export default function chat() {
  const { state, dispatch } = useSelect();
  const handleChat = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    dispatch({
      type: "chat/message",
      payload: { id: state.count + 1, message },
    });
  };
  const { message } = state;
  return (
    <div className="container shadow-lg p-2">
      <div className="chat my-3">
        <div className="message">
          {message.map((messages) => (
            <div className="mb-2" key={messages.id}>
              {messages.message}
            </div>
          ))}
        </div>
        <form onSubmit={handleChat}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="chat..."
              name="message"
            />
            <button className=" btn btn-warning">Gửi</button>
          </div>
        </form>
      </div>
    </div>
  );
}
