import React from "react";

const Overview = (props) => {
  const { tasks } = props;
  const todoItems = tasks.map((todo, index) => <li key={index}>{todo}</li>);

  return (
    <div>
      <ul>{todoItems}</ul>
    </div>
  );
};

export default Overview;
