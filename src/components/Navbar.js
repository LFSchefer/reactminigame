import * as React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/rock">Rock</Link></li>
      <li><Link to="/tenzies">Tenzies</Link></li>
      </ul>
    </div>
  )
}
