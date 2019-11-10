import React from "react";
import { Wrapper } from "../lib/Wrapper";

export function Login() {
  return (
    <Wrapper>
      <h1>Innlogging</h1>
      <button
        class="button"
        onClick={() => (window.location = "/login/google")}
      >
        Logg inn med Google
      </button>
    </Wrapper>
  );
}
