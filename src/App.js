import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", taskArray: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ taskArray: [...this.state.taskArray, this.state.value] });
  }

  render() {
    const { value, taskArray } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            id="taskInput"
          />
        </label>
        <input type="submit" value="Submit" />
        <div>
          <Overview tasks={taskArray} />
        </div>
      </form>
    );
  }
}

export default App;
