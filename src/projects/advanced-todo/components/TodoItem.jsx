function TodoItem(){
    return (
        <li>
            <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}>
        {todo.text}
      </span>
      <button onClick={()=> dispatch({type:"DELETE",id:todo.id})}>Delete</button>
        </li>
    );
}
export default TodoItem;