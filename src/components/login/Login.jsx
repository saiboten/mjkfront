import React from "react";
import styled from "styled-components";
import { Wrapper } from "../lib/Wrapper";
import { StyledButton } from "../lib/StyledButton";
import { H1 } from "../lib/Heading";
import { ReactComponent as Facebook } from "./Facebook.svg";
import { ReactComponent as Google } from "./Google.svg";

const StyledFacebook = styled(Facebook)`
  margin-left: 1rem;
  fill: #4267ae;
  flex: 0 0 3.2rem;
`;

const StyledGoogle = styled(Google)`
  margin-left: 1rem;
  width: 3.2rem;
  height: 3.2rem;
  flex: 0 0 3.2rem;
`;

const StyledLoginWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const StyledLoginButton = styled(StyledButton)`
  margin-left: 2rem;
  margin-top: 2rem;
`;

export function Login() {
  return (
    <Wrapper>
      <StyledLoginWrapper>
        <H1>Innlogging</H1>
        <StyledButtons>
          <StyledLoginButton
            onClick={() => (window.location = "/login/google")}
          >
            <span>Logg inn med Google</span>
            <StyledGoogle />
          </StyledLoginButton>
          <StyledLoginButton
            onClick={() => (window.location = "/login/facebook")}
          >
            <span>Logg inn med Facebook </span>
            <StyledFacebook />
          </StyledLoginButton>
        </StyledButtons>
      </StyledLoginWrapper>
    </Wrapper>
  );
}
