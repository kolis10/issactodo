import React, { useState } from "react";

export function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleNewTodoChange(e) {
    e.preventDefault();
    setNewTodo(e.target.value);
  }
  function handleNewTodo(e) {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    e.target.reset();
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className="demo">
      <h1>Todos</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="to do..." onChange={handleNewTodoChange} />
        <ul className="todolist">
          {todos.map(todo => (
            <li className="to-do" key={todo.id}>
              {todo.text}
              <a href="#" onClick={() => removeTodo(todo.id)}>
                X
              </a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
