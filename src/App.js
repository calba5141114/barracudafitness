import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import Pricing from "./components/Pricing.js";
import NavigationMenu from "./components/NavigationMenu.js";
import Testimonials from "./components/Testimonials";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationMenu />
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Testimonials} />
        </div>
      </Router>
    );
  }
}

export default App;
