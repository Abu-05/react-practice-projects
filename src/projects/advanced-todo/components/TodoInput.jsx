import { useState } from "react";
function TodoInput({dispatch}){
    const [text,setText] = useState("");
    function addTodo(){
        if(text.trim()==="") return;
        dispatch({type: "ADD" , playload : text});
        setText("");
    }
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add new task" />
            <button onClick={addTodo}>Add task</button>
        </div>
    );
}
export default TodoInput;