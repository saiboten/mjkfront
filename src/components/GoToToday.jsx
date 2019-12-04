import React from "react";
import styled from "styled-components";
import { StyledLink } from "./lib/StyledLink";

const Styled = styled.div`
  border-radius: 1rem;
  background-color: #fff;
  font-size: 2rem;
  text-align: center;
  margin: 0.5rem;

  @media screen and (max-width: 450px) {
    margin: 0;
    border-radius: 0;
  }
`;

export function GoToToday() {
  return (
    <Styled>
      <StyledLink href="#today">Gå til dagens luke</StyledLink>
    </Styled>
  );
}
