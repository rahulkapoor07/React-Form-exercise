import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewBoxForm = ({formOutput}) => {
    const INITIAL_STATE = {color : "", width : "", height : ""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(data => ({...data,
        [name] : value}));
        }
    const handleSubmit = (e)=> {
        e.preventDefault();
        formOutput({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
        }
    return (
        <form onSubmit={handleSubmit}>
            <label>Color: </label>
            <input type="text" placeholder="Enter Color"
            name="color" value={formData.color}
            onChange={handleChange}
            />

            <label>Width: </label>
            <input type="text" placeholder="Enter width"
            name="width" value={formData.width}
            onChange={handleChange}
            />

            <label>height: </label>
            <input type="text" placeholder="Enter height"
            name="height" value={formData.height}
            onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}

export default NewBoxForm;