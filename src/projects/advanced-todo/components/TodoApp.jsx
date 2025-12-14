import { useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp(){
    const [todos,dispatch] = useReducer(todoReducer,[]);
    return(
        <div>
            <h2>Advanced Todo</h2>
            <TodoInput dispatch={dispatch} />
            <TodoList todos={todos} dispatch={dispatch} />
        </div>
    );
}
export default TodoApp;