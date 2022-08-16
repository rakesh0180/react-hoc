import React from "react";
import WithHOC from "./hoc-component/WithHOC";

const UserList = (props) => {
  // console.log("2");

  const { data } = props;
  let userDetails = props?.data?.map((ele) => {
    return <li key={ele.id}>{ele.name}</li>;
  });
  return (
    <div>
      <h2>Users List</h2>
      <ul>{userDetails}</ul>
    </div>
  );
};
const Hoc = WithHOC(UserList, "users");

export default Hoc;
