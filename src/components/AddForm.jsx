import { useContext } from "react";
import { AppContext } from "../contekxt";
import "../App.css"


function AddForm(props){
    const {addTodo} = useContext(AppContext);

    function handleKeyUp(event){
        if(event.key === 'Enter'){
            addTodo(event.target.value)
        }
    }

    return (
        <div className="input_elem">
            <input onKeyUp={handleKeyUp}/>
        </div>
    )
}

export default AddForm