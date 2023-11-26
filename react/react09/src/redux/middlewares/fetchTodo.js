// thunk middleware -> function trả về một function khác
export const fetchTodo = () => {
  return async (dispatch) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();

    dispatch({
      type: "todo/fetch",
      payload: data,
    });
  };
};
