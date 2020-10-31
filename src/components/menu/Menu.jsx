import React from "react";
import { StyledLink } from "../lib/Link";
import styled from "styled-components";
import { backgroundSnow } from "../lib/SnowAnimation";
import { useDays } from "../../hooks/useData";

const StyledNav = styled.nav`
  max-width: 120rem;
  margin: 1rem auto;

  @media screen and (max-width: 45rem) {
    background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),
      url("/static/images/s3.png");
    z-index: 1;
    animation: ${backgroundSnow} 10s linear infinite;
  }
`;

const StyledHeaderFullscreen = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 45rem) {
    justify-content: flex-start;
    margin-bottom: 0;
    margin-left: 1rem;
  }
`;

const StyledMenuItemLink = styled(StyledLink)`
  font-size: 1.5rem;
  padding: 1.5rem;
  min-width: 10rem;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  text-decoration: none;
  overflow-wrap: break-word;
  border-radius: 5px;
  box-shadow: 0px 2px 8px black;
  background-color: white;
  margin-right: 1rem;

  &:visited,
  &:link {
    color: black;
  }

  @media screen and (max-width: 45rem) {
    margin-left: 0;
    padding: 1rem;
    min-width: 7.5rem;
    font-size: 1.2rem;
  }
`;

export function Menu() {
  const { user } = useDays();

  // Quick note: this.props.loggedIn is a string
  var loggedInLink =
    user !== null ? (
      <StyledMenuItemLink as="a" href="/logout" to="/logout">
        Logg ut
      </StyledMenuItemLink>
    ) : (
      <StyledMenuItemLink to="/login">Logg inn</StyledMenuItemLink>
    );

  return (
    <StyledNav>
      <StyledHeaderFullscreen>
        <StyledMenuItemLink to="/">Forsiden</StyledMenuItemLink>
        <StyledMenuItemLink to="/om">Om</StyledMenuItemLink>
        {loggedInLink}
      </StyledHeaderFullscreen>
    </StyledNav>
  );
}
