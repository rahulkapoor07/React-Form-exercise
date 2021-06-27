import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const formOutput = ({id, color, width, height}) => {
        setBoxes(data => [...data, {id, color, width, height}]);
    }
    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }
    return(
        <div>
            <NewBoxForm formOutput={formOutput}/>
            <div>
            
            {boxes.map(box =>
            <Box key={box.id} id={box.id} 
            removeBox={removeBox} color={box.color} 
            width={box.width} height={box.height}
            />)}
            </div>
        </div>
    )
}

export default BoxList;