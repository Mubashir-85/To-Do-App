import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo.jsx'
import TodoItems from './components/TodoItems.jsx'

function App() {
  const [todo , setTodo] = useState([])

  const newItems = (itemname, itemdate)=>{
    if(itemname === "" || itemdate === ""){
      alert("Please enter both task name and date");
      return;
    }
    const newitems = {name: itemname, date: itemdate}
    setTodo([...todo, newitems])
    
  }


  return (
    <>
    <center>
    <h1 className='text-4xl font-bold mt-5'>To-Do App</h1>
    <AddToDo newitems={newItems} />
    <TodoItems todolist={todo} />

    </center>
    </>
  )
}

export default App
