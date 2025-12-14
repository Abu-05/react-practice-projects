import styles from "../styles/todo.module.css";

function TodoItem({ todo, dispatch }) {
    console.log(todo);
  return (
    <li className={styles.item}>
      <span
        className={`${styles.text} ${
          todo.completed ? styles.completed : ""
        }`}
        onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
      >
        {todo.text}
      </span>

      <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
