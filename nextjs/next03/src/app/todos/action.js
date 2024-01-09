"use server";
import { revalidatePath } from "next/cache";
import { todoApi } from "./TodoList";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
const postTodo = async (data) => {
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log(response);
  }
};

export const addTodo = async (formData) => {
  // console.log(formData);
  const name = formData.get("name");
  await postTodo({ name });
  const headerList = headers();
  const pathName = headerList.get("next-url");

  revalidatePath(pathName);
  // redirect("/");
};
