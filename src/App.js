import React from "react";
import { Providers } from "./components/Providers";
import { Main } from "./components/Main";
import { Menu } from "./components/menu/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";

export const App = function() {
  return (
    <Providers>
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
