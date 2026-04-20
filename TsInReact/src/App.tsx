import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      taskId: Date.now(),
      taskName: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.taskId === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.taskId !== id));
  };

 return (
  <div className="app">
    <div className="header">
      <h1>To-Do App (TS)</h1>
    </div>

    <div className="input-container">
      <input
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder="Enter task..."
      />

      <button onClick={addTodo}>Add</button>
    </div>

    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.taskId}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  </div>
);
}

export default App;