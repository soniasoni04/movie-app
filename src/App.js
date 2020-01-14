import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Movie-App</h1>
        <Movies />
      </div>
    );
  }
}

export default App;
