import React from "react";
import styles from "./styles/TodoItem.module.scss";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className={styles["todo-item"]}>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
