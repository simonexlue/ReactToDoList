import { useState } from 'react'
import './App.css'
import Header from'./components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ToDoList />
    </>
  )
}

export default App
