import React from "react";
import { Link } from "react-router-dom";

class NavigationMenu extends React.Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavigationMenu;
