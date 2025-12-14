import { useState } from "react";
import styles from "../styles/todo.module.css";

function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function saveEdit() {
    if (editText.trim() === "") return;
    dispatch({
      type: "EDIT",
      id: todo.id,
      newText: editText
    });
    setIsEditing(false);
  }

  return (
    <li className={styles.item}>
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            className={`${styles.text} ${
              todo.completed ? styles.completed : ""
            }`}
            onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
          >
            {todo.text}
          </span>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
