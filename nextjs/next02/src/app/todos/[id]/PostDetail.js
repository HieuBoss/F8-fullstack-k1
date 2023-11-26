"use client";
import { useState } from "react";

export default function PostDetail({ title, body }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>{title}</h1>
      {show && <div>{body}</div>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Thu gọn
      </button>
    </div>
  );
}
// swr
