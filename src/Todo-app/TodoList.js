import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";


const TodoList = () =>{
    const [Todos, setTodos] = useState([]);

    const addTodo = ({id, task, description})=> {
        setTodos(todos => [...todos, {id, task, description}]);
    }

    const remove = (id) => {
        console.log('removed');
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return(
        <div>
            <NewTodoForm addTodo = {addTodo} />
            <div>
                <ul>
                    {Todos.map(todo => 
                    <li key={Todos.id} >{todo.task}({todo.description}) <button onClick={()=> remove(todo.id)}>X</button></li>
                   )}
                </ul>
            </div>
        </div>
    )
}


export default TodoList;
