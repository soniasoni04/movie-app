import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>
          <u>Movie-App</u>
        </h1>
        <Movies />
      </div>
    );
  }
}

export default App;
