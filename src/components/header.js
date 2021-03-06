import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, 
  NavLink,
  Prompt
} from "react-router-dom";

export default function Header() {
    return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/user">User</NavLink></li>
        <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
        <li><NavLink activeClassName="active" to="/fitness">Fitness</NavLink></li>
        <li><NavLink activeClassName="active" to="/trip">Trip</NavLink></li>
        <li><NavLink activeClassName="active" to="/guide">Guide</NavLink></li>
      </ul>
    </div>
    );
  }