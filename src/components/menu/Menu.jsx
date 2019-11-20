import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { StyledLink } from "../lib/Link";
import styled from "styled-components";

const StyledNav = styled.nav`
  max-width: 980px;
  margin: 10px auto;
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
  padding: 10px;
  min-width: 75px;
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
        {loggedInLink}
      </StyledHeaderFullscreen>
    </StyledNav>
  );
}
