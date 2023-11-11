import React from "react";

export default function Input(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="game">Hãy thử nhập một số</label>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Thử một số ..."
          autoComplete="off"
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          value={props.value}
          id="game"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn"
          style={{ background: "#319795", color: "#fff" }}
        >
          Kiểm tra
        </button>
      </div>
    </form>
  );
}
