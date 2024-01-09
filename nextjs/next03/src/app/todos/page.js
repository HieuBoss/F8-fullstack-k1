import TodoAdd from "./TodoAdd";
import TodoAdd2 from "./TodoAdd2";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <div>
      <h1>Todo app</h1>
      <TodoList />
      <TodoAdd2 />
    </div>
  );
}
