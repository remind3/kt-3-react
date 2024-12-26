import { useContext } from "react";
import TodoItem from "./TodoItem"
import { AppContext } from "../contekxt";


function TodoList(props){
    const { todos, deleteTodoByid, changeTodos } = useContext(AppContext);
    return (
        <div>
           {todos.map(elem => <TodoItem 
                                key={elem.id}
                                id={elem.id}
                                title={elem.title}
                                completed={elem.completed}
                                deleteTodoByid={deleteTodoByid}
                                changeTodos={changeTodos}
                            />)}
        </div>
    )
}

export default TodoList