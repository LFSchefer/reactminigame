import * as React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { Routes, Route, Outlet } from "react-router-dom";



export default function Navbar(props) {
  return (

    <div className="navbar">
    <nav>
      <ul>
        <li>
          <Link to="/">All Games</Link>
        </li>
        <li>
          <Link to="/rock">Rock</Link>
        </li>
        <li>
          <Link to="/tenzies">Tenzies</Link>
        </li>
        <li>
          <Link to="/navbar">Navbar</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Outlet />
  </div>
  )
}
