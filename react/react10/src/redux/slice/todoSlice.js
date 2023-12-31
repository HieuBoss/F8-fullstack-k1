import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: ["Item 1", "Item 2"],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    update: (state, action) => {
      state.todoList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.status = "success";
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "errorr";
      });
  },
});

export const fetchTodos = createAsyncThunk("fetchTodo", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();
  return data;
});

/*
createAsyncThunk
-pending
*/
//Redux Thunk
// export const fetchTodos = () => {
//   return async (dispatch) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     const data = await response.json();
//     dispatch(todoSlice.actions.update(data));
//   };
// };
