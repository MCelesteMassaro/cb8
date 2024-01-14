import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./styles/TodoList.module.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    // ... altri task
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles["todo-list"]}>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
