import React from "react";
import WithHOC from "./hoc-component/WithHOC";

const TodoList = (props) => {
  // console.log("3");

  const { data } = props;
  let todoDetails = props?.data?.slice(0, 10)?.map((ele) => {
    return <li key={ele.id}>{ele.title}</li>;
  });
  return (
    <div>
      <h2>Todo List</h2>
      <ul>{todoDetails}</ul>;
    </div>
  );
};
const Hoc = WithHOC(TodoList, "todos");

export default Hoc;
