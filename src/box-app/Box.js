import React from "react";
import "./Box.css"
const Box = ({id, color, width, height, removeBox}) => {
    const remove = ()=>{
        removeBox(id);
    }
    return (
        <div className="Box">
        <div 
        style={{backgroundColor : color, width, height}}>
        </div>
        <button onClick={remove}>X</button>
        </div>
    )
}


export default Box;