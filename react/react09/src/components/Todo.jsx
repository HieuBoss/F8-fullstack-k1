import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../redux/middlewares/fetchTodo";

export default function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    // 1. dispatch tới action --> reducer của store
    // 2. dispatch tới middleware --> middleware call api --> dispatch tới action --> Reducer của store
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
    </div>
  );
}
