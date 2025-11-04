import React from "react";
import { useContext } from "react";
import { ToDoContext } from "./Context.jsx";

function TodoItems({ onDelete }) {
  const  {todo}  = useContext(ToDoContext);
  const { handleDelete } = useContext(ToDoContext);
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
              <div className="font-semibold w-[50%] border p-1 rounded">
                {item.name.toUpperCase()}
              </div>
              -
              <div className="border p-1 rounded w-[50%] bg font-semibold">
                {item.date}
              </div>
              <button
                className="bg-red-500 text-white rounded-md p-1 ml-2"
                onClick={() =>
                  alert(
                    `are you sure you want to delete this item?${item.name.toUpperCase()}`
                  ) || handleDelete(item.name)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoItems;
