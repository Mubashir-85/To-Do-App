import {  createContext } from "react";
export  const ToDoContext = createContext({
    todo: [],
    addnewitems: () => {},
    handleDelete: () => {},
    handleUpate: () => {},
});