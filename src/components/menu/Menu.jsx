import React from "react";

export class Menu extends React.Component {
  getInitialState() {
    return {
      menuOpen: false
    };
  }

  frontPage() {
    window.location = "/";
  }

  logInOrOut() {
    this.props.loggedIn === true
      ? (window.location = "/logout")
      : (window.location = "/secure");
  }

  render() {
    // Quick note: this.props.loggedIn is a string
    var loggedInLink =
      this.props.loggedIn === "true" ? (
        <a className="header__menu-item" href="/logout">
          Logg ut
        </a>
      ) : (
        <a className="header__menu-item" href="/secure">
          Logg inn
        </a>
      );

    return (
      <nav className="header">
        <div className="header__fullscreen">
          <a className="header__menu-item" href="/">
            {" "}
            Forsiden{" "}
          </a>
          {loggedInLink}
        </div>
      </nav>
    );
  }
}

export default Menu;
