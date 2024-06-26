import { useState } from 'react'
import check from '../assets/empty_check.png'
import '../components/ToDoItem.css'

function ToDoItem(props) {

    const [checked, setChecked] = useState(false)

    function handleCheck() {
        const newCheckedState = !checked;
        
        setChecked(newCheckedState);

        if (newCheckedState) {
            setTimeout(() => {
                setTimeout(() => {
                    props.removeTodo(props.index);
                }, 500);
            }, 800);
        }
    }

    return (
        <li className="item_container">
            <button type="button" className='checkbox' onClick={() => {setChecked(true); handleCheck()}}>
                <img src={check} className='image-checkbox'></img>
            </button> 
            <p className={`item ${checked ? 'crossed-off' : ''}`}>{props.todo}</p>
        </li>
    )
}

export default ToDoItem