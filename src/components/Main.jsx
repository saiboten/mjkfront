import React from "react";
import { Days } from "./days/Days";
import { Footer } from "./footer/Footer";
import { Facebook } from "./facebook/Facebook";
import { SingleGuessDay } from "./days/day/SingleGuessDay";
import { Wrapper } from "./lib/Wrapper";
import styled, { keyframes } from "styled-components";
import { UserStatistics } from "./userresults/UserStatistics";
import { CurrentUserStatistics } from "./user/CurrentUserStatistics";
import { HighScoreList } from "./highscore/HighScoreList";
import { H1 } from "./lib/Heading";

const moveBackAndForwards = keyframes`
  0% {
    transform: translateX(0);
  }

  33% {
    transform: translateX(200px);
  }

  66% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-200px);
  }
`;

const StyledTwoColumns = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  padding-top: 1rem;

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
`;

const StyledSanta = styled.img`
  height: 300px;
  width: 232px;
  margin: 0 auto;
  animation: ${moveBackAndForwards} 180s infinite;
  animation-direction: alternate;

  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    animation: none;
  }
`;

export class Main extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <StyledHeader>
            <H1>Musikkjulekalender!</H1>
            <StyledSanta src="/static/images/santas.png" alt="Julenisse" />
          </StyledHeader>
          <StyledTwoColumns>
            <SingleGuessDay />
            <CurrentUserStatistics />
          </StyledTwoColumns>
          <StyledTwoColumns>
            <UserStatistics />
            <HighScoreList />
          </StyledTwoColumns>
          <Days />
          <Facebook />
        </Wrapper>
        <Footer />
      </>
    );
  }
}
