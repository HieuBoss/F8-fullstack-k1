"use client";

import { useState } from "react";
import { todoApi } from "./TodoList";
import { useRouter } from "next/navigation";

export default function TodoAdd() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    postTodo({ name });
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const postTodo = async (data) => {
    const response = await fetch(todoApi, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.refresh();
      setName("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name Work1..."
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
