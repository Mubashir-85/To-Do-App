import React, { useState } from "react";
import { useContext } from "react";
import { ToDoContext } from "./Context.jsx";

function TodoItems({ onDelete }) {
  const { todo } = useContext(ToDoContext);
  const { handleDelete, handleUpate } = useContext(ToDoContext);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const startedit = (index, item) => {
    setEditIndex(index);
    setEditedName(item.name);
    setEditedDate(item.date);
  };

  const saveEdit = (oldName) => {
    handleUpate(oldName, editedName, editedDate);
    setEditIndex(null);
  };
  // const todolist = todo;
  return (
    <>
      <div className="mt-10">
        <ul>
          {todo.map((item, index) => (
            <li
              key={index}
              className="items-center gap-4 w-70% border  bg flex border-gray-300 rounded-md p-2 mb-2 w-96"
            >
              {editIndex == index ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => {
                      setEditedName(e.target.value);
                    }}
                    className="border p-1 rounded w-[50%]"
                  />

                  <input
                    type="text"
                    value={editedDate}
                    onChange={(e) => {
                      setEditedName(e.target.value);
                    }}
                    className="border p-1 rounded w-[50%]"
                  />

                  <button onClick={()=>{saveEdit(item.name)}}
                    className="bg-green-500 text-white rounded-md p-1 ml-2">
                    save
                  </button>
                </>
              ) : (
                <>
                  <div className="font-semibold w-[50%] border p-1 rounded">
                    {item.name.toUpperCase()}
                  </div>
                  -
                  <div className="border p-1 rounded w-[50%] bg font-semibold">
                    {item.date}
                  </div>
                  <button onClick={()=>{startedit(index, item)}}
                    className="bg-yellow-500 text-white rounded-md p-1 ml-2">
                    Edit
                  </button>


                  <button
                    className="bg-red-500 text-white rounded-md p-1 ml-2"
                    onClick={() => handleDelete(item.name)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoItems;
