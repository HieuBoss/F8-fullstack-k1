export const todoApi = `http://localhost:3000/api/todos`;
const getTodos = async () => {
  const response = await fetch(todoApi, {
    // cache: "no-cache",
  });
  const data = await response.json();
  return data;
};
const TodoList = async () => {
  const todoList = await getTodos();
  return (
    <div>
      <ul>
        {todoList.data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
