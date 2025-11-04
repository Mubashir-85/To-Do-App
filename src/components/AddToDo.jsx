import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ToDoContext } from "./Context.jsx";

function AddToDo() {
  const  { addnewitems }  = useContext(ToDoContext);
  const [todoname, setTodoname] = useState("");
  const [date, setDate] = useState("");

  const handlename = (e) => {
    setTodoname(e.target.value);
  };
  const handledate = (e) => {
    setDate(e.target.value);
  };

  const handlebutton = () => {
    addnewitems(todoname, date);
    setTodoname("");
    setDate("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          className="border border-gray-300 rounded-md p-2 w-64 mt-5"
          onChange={handlename}
          value={todoname}
        />
        <input
          type="date"
          className="border border-gray-300 rounded-md p-2 w-64 mt-5"
          onChange={handledate}
          value={date}
        />
        <button
          className="bg-blue-500 text-white rounded-md p-2 ml-2 mt-5"
          onClick={handlebutton}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddToDo;
