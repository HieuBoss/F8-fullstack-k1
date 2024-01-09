"use client";
import { useState } from "react";
import { postApi } from "./PostList";
import { useSWRConfig } from "swr";
export default function PostAdd() {
  const [title, setTitle] = useState("");
  const { mutate } = useSWRConfig();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addPost({ title });
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const addPost = async (data) => {
    const response = await fetch(postApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: "no-cache",
    });
    if (response.ok) {
      mutate(postApi);
      setTitle("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
