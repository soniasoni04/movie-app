import React, { Component } from "react";
import Movies from "./components/movies";
import DatePick from "./components/datePick";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>
          <u>Movie-App</u>
        </h1>
        <b>Date to do actions : </b> <DatePick />
        <Movies />
      </div>
    );
  }
}

export default App;
