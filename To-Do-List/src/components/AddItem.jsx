import '../components/AddItem.css'
import addImage from '../assets/add.png'
import {useState} from 'react'

function AddItem(props) {

    const [todo, setToDo] = useState('')

    function addItem(event) {
        event.preventDefault();

        if(todo != "") {
            props.addToDoItem(todo);
        } else {
            alert("Cannot be empty")
        }
        
        setToDo('');
    }

    return (
        <form className='add-item-container' onSubmit={addItem}>
            <button type='submit' className='image-button'>
                <img src={addImage} className='image' ></img>
            </button>
            <input type="text" id='todo' className="textbox" value={todo} onChange={(e)=> setToDo(e.target.value)}></input>
        </form>
    )
}

export default AddItem