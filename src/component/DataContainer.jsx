import React from "react";
import UsersList from "./UserList";
import TodoList from "./TodoList";
import "./style.css";
const DataContainer = () => {
  return (
    <div className='container'>
      <UsersList />
      <TodoList />
    </div>
  );
};

export default DataContainer;
