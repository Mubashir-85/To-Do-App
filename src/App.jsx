import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddToDo from "./components/AddToDo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import { ToDoContext } from "./components/Context.jsx";

function App() {
  const [todo, setTodo] = useState([]);

  const addnewItems = (itemname, itemdate) => {
    if (itemname === "" || itemdate === "") {
      alert("Please enter both task name and date");
      return;
    }
    const newitems = { name: itemname, date: itemdate };
    setTodo([...todo, newitems]);
  };
  const handleDelete = (TodoItemsName) => {
    const newList = todo.filter((item) => item.name !== TodoItemsName);
    setTodo(newList);
  };

  const handleUpate = (oldName, newName, newDate)=>{
    const updateList = todo.map((item)=>{
      if(item.name === oldName){
        return {name: newName, date: newDate};
      }
      return item;
    }) 
    setTodo(updateList);
  }

  return (
    <>
      <ToDoContext.Provider value={{ todo, addnewitems :addnewItems, handleDelete, handleUpate }}>
        <center>
          <h1 className="text-4xl font-bold mt-5">To-Do App</h1>
          <AddToDo />
          <TodoItems />
        </center>
      </ToDoContext.Provider>
    </>
  );
}

export default App;
