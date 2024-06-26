import './ToDoList.css'
import ToDoItem from './ToDoItem'
import AddItem from './AddItem'
import { useState } from 'react'

function ToDoList() {

    const [todos, setTodos] = useState([])

    function addToDoItem(todo) {
        setTodos([...todos, todo]);
    }

    function removeToDoItem(index) {
        setTodos(todos.filter((_, i)=> i !== index));
    }

    return (
        <div>
            <div className="list-container">
                <ul>
                    {todos.map((todo, index) => (
                        <ToDoItem key={index} index={index} todo={todo} removeTodo={removeToDoItem}/>
                    ))}
                </ul>
            </div>
            <AddItem addToDoItem={addToDoItem}/>
        </div>
    )
}

export default ToDoList