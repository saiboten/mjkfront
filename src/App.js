import React from "react";
import { Providers } from "./components/Providers";
import { Main } from "./components/Main";
import { Menu } from "./components/menu/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
      font-size: 62.5%; // 1 rem == 10px
  }

  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  body {
      box-sizing: border-box;
  }
`;

export const App = function() {
  return (
    <Providers>
      <GlobalStyle whiteColor />
      <Router>
        <Menu isLogged={false} />
        <Switch>
          <Route path="/om">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Providers>
  );
};
