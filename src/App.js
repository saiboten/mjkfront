import React from "react";
import { Providers } from "./components/Providers";
import { Main } from "./components/Main";
import { Menu } from "./components/menu/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/about/About";
import { Login } from "./components/login/Login";
import { createGlobalStyle, keyframes } from "styled-components";

const backgroundSnow = keyframes`
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  50% {
    background-position: 500px 500px, 100px 200px, -100px 150px;
  }
  100% {
    background-position: 500px 1000px, 200px 400px, -100px 300px;
  }
`;

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
      background-color: #adc3de;
      background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),
        url("/static/images/s3.png");
      z-index: 1;
      animation: ${backgroundSnow} 10s linear infinite;
      font-family: "Rubik", sans-serif;
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
