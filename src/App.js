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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <div>
          <Overview value={this.state.taskArray} />
        </div>
      </form>
    );
  }
}

export default App;
