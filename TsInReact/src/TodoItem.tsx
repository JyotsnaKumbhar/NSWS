// import React from "react";
import { Todo } from "./types";

type Prop = {
    todo : Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id:number) => void;
}

function TodoItem({todo, toggleTodo, deleteTodo}: Prop)
{
    return (
        <div className="todo-item">
            <span 
            onClick={()=> toggleTodo(todo.taskId)}
                style={{textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",}}> {todo.taskName}</span>
            <button onClick={() => deleteTodo(todo.taskId)}>Delete</button>
        </div>
    )
    
}

export default TodoItem;