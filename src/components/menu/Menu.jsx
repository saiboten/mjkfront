import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

export function Menu() {
  const { user } = useContext(DataContext);

  // Quick note: this.props.loggedIn is a string
  var loggedInLink =
    user !== null ? (
      <a className="header__menu-item" href="/logout">
        Logg ut
      </a>
    ) : (
      <Link to="/login" className="header__menu-item">
        Logg inn
      </Link>
    );

  return (
    <nav className="header">
      <div className="header__fullscreen">
        <Link to="/" className="header__menu-item">
          Forsiden
        </Link>
        {loggedInLink}
      </div>
    </nav>
  );
}
