import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    // console.log(this);
    this.setState((curstate) => {
      return { count: curstate.count - 1 };
    });
  }
  handleIncrement() {
    // console.log(this);
    this.setState((curstate) => {
      return { count: curstate.count + 1 };
    });
  }

  render() {
    const date = new Date("June 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]{" "}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div>app</div>
//   );
// }

// export default App;
