import React from "react";
import styled from "styled-components";
import { H1 } from "../lib/Heading";

const Wrapper = styled.div`
  background-color: linear-gradient(#e66465, #9198e5);
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

const StyledImage = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledContent = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  padding: 1rem;
`;

export function Profile({ name, image, children }) {
  return (
    <Wrapper>
      <StyledImage src={image} alt={name} />
      <H1>{name}</H1>
      <StyledContent>{children}</StyledContent>
    </Wrapper>
  );
}
