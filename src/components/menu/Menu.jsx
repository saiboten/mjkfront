import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { StyledLink } from "../lib/Link";
import styled from "styled-components";
import { backgroundSnow } from "../lib/SnowAnimation";

const StyledNav = styled.nav`
  max-width: 980px;
  margin: 10px auto;

  @media screen and (max-width: 450px) {
    background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),
      url("/static/images/s3.png");
    z-index: 1;
    animation: ${backgroundSnow} 10s linear infinite;
  }
`;

const StyledHeaderFullscreen = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 450px) {
    justify-content: flex-start;
    margin-bottom: 0;
    margin-left: 1rem;
  }
`;

const StyledMenuItemLink = styled(StyledLink)`
  font-size: 1.5rem;
  padding: 15px;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  text-decoration: none;
  overflow-wrap: break-word;
  border-radius: 5px;
  box-shadow: 0px 2px 8px black;
  background-color: white;
  margin-right: 10px;

  &:visited,
  &:link {
    color: black;
  }

  @media screen and (max-width: 450px) {
    margin-left: 0;
    padding: 10px;
    min-width: 75px;
    font-size: 1.2rem;
  }
`;

export function Menu() {
  const { user } = useContext(DataContext);

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
