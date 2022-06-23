import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.value;
    const todoItems = tasks.map((todo, index) => <li key={index}>{todo}</li>);
    return (
      <div>
        <ul>{todoItems}</ul>
      </div>
    );
  }
}

export default Overview;
