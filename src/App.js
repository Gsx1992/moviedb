import MovieGrid from "./components/MovieGrid";
import Layout from "./components/Layout";
import "./App.css";
import React, { Component } from "react";
import movie from "./api/movie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
