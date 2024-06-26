import './Header.css'
import sketchImage from '../assets/sketch.png'

function Header() {

    return (
        <div className='header-container'> 
            <h1 className="title">To-Do List</h1>
            <img src={sketchImage} className='image'/>
        </div>
        
        
    )
}

export default Header