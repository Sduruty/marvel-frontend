import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Marvel-Comics-Logo.png";

const Header = ({ setLoginModal }) => {
  return (
    <header>
      <div className="headerDivision">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo Marvel" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/characters">CHARACTERS</Link>
            </li>
            <li>
              <Link to="/comics">COMICS</Link>
            </li>
            <li>
              <Link to="/favs">MY FAVS</Link>
            </li>
          </ul>
        </nav>
        <div className="login">
          <button className="Button">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
