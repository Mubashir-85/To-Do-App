import React from "react";

function TodoItems({ todolist, onDelete }) {
  return (
    <>
      <div className="mt-10">
        <ul>
          {todolist.map((item, index) => (
            <li
              key={index}
              className="items-center gap-4 w-70% border  bg flex border-gray-300 rounded-md p-2 mb-2 w-96"
            >
              <div className="font-semibold w-[50%] border p-1 rounded">
                {item.name}
              </div>
              -
              <div className="border p-1 rounded w-[50%] bg font-semibold">
                {item.date}
              </div>
              <button
                className="bg-red-500 text-white rounded-md p-1 ml-2"
                onClick={() => onDelete(item.name)}
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
