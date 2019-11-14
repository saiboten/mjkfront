import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { StyledLink } from "../lib/Link";

export function Menu() {
  const { user } = useContext(DataContext);

  // Quick note: this.props.loggedIn is a string
  var loggedInLink =
    user !== null ? (
      <a className="header__menu-item" href="/logout">
        Logg ut
      </a>
    ) : (
      <StyledLink to="/login" className="header__menu-item">
        Logg inn
      </StyledLink>
    );

  return (
    <nav className="header">
      <div className="header__fullscreen">
        <StyledLink to="/" className="header__menu-item">
          Forsiden
        </StyledLink>
        {loggedInLink}
      </div>
    </nav>
  );
}
