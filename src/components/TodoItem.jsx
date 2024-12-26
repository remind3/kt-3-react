import { useContext } from "react";
import { AppContext } from "../contekxt";
import "../App.css"

function TodoItem(props){

    const {title, completed, id} = props
    const {deleteTodoByid, changeTodos } = useContext(AppContext);
    return (
        <div 
            className="todo_card"
            style={{backgroundColor: completed ? 'green' : 'red'}}
            onDoubleClick={() => deleteTodoByid(id)}
            onClick={() => changeTodos(id)}
        >
            <h2>{title}</h2>
        </div>
    )
}

export default TodoItem