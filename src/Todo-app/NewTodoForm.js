import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = ({addTodo})=> {
    const INITIAL_STATE = {task : "", description : ""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(data=> ({...data, [name] : value, id: uuid()}));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>

            <label>Task: </label>
            <input type="text" name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="Enter Task"/>

            <label>Description: </label>
            <input type="text" name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"/>
            <button>Add to Todo List!</button>
        </form>
    )
}

export default NewTodoForm;