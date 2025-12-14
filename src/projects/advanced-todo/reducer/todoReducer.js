export function todoReducer(state,action){
    switch(action.type){
        case "ADD":
            return [...state,{id:Date.now(),text:action.plaload,completed:false}];
        case "TOGGLE":
            return state.map(todo=>(todo.id===action.id)?{...todo,completed:!todo.completed}:todo);
        case "DELETE":
            return state.filter(todo=>todo.id!==action.id);
        default:
            return state;
    }
}