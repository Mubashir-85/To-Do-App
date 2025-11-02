import React from "react";
import { useState } from "react";

function AddToDo({ newitems }) {
  const [todoname, setTodoname] = useState("");
  const [date, setDate] = useState("");

  const handlename = (e) => {
    setTodoname(e.target.value);
  };
  const handledate = (e) => {
    setDate(e.target.value);
    
  };

  const handlebutton = () => {
    newitems(todoname, date);
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
        />
        <input
          type="date"
          className="border border-gray-300 rounded-md p-2 w-64 mt-5"
          onChange={handledate}
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
