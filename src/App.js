import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import NavigationMenu from "./components/NavigationMenu.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationMenu />
          <Route path="/" exact component={Home} />
          
        </div>
      </Router>
    );
  }
}

export default App;
