import React from "react";
import { Providers } from "./components/Providers";
import { Main } from "./components/Main";

export const App = function() {
  return (
    <Providers>
      <Main />
    </Providers>
  );
};
