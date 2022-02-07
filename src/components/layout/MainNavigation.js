import React from "react";
import { NavLink } from "react-router-dom";
import styleclass from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styleclass.header}>
      <div className={styleclass.logo}>Simple queots App</div>
      <nav className={styleclass.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styleclass.active} to="/allquests">
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styleclass.active} to="/add/queots">
              Add quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation