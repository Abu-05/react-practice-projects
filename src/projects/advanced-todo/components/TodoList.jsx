import TodoItem from "./TodoItem";

function TodoList({todos,dispatch}){
    return (
        <div>
            <ul>
                {todos.map(todo=>(<TodoItem
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />))}
            </ul>
        </div>
    );
}
export default TodoList;