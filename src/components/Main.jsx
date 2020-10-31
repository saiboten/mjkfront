import React from "react";
import { Days } from "./days/Days";
import { Footer } from "./footer/Footer";
import { Facebook } from "./facebook/Facebook";
import { Wrapper } from "./lib/Wrapper";
import styled from "styled-components";
import { BestDailyUsers } from "./userresults/BestDailyUsers";
import { CurrentUserStatistics } from "./user/CurrentUserStatistics";
import { HighScoreList } from "./highscore/HighScoreList";
import { H1 } from "./lib/Heading";
import { StyledLoader } from "./lib/StyledLoader";
import { GoToToday } from "./GoToToday";
import { backgroundSnow } from "./lib/SnowAnimation";
import { HorisontalDraggable } from "./lib/HorisontalDraggable";
import { useDays } from "../hooks/useData";

const StyledSanta = styled.img`
  height: 30rem;
  margin: 0 auto;

  @media screen and (max-width: 45rem) {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;

const StyledTwoColumns = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 45rem) {
    flex-direction: column;
  }
`;

const StyledHeader = styled.div`
  text-align: left;
  padding-top: 1rem;
  color: #fff;
  display: flex;

  @media screen and (max-width: 45rem) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;

    background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),
      url("/static/images/s3.png");
    z-index: 1;
    animation: ${backgroundSnow} 10s linear infinite;
  }
`;

export function Main() {
  const { date, isLoading, isError } = useDays();

  if (isLoading) {
    return "Laster...";
  }

  if (isError) {
    return "Noe har gått fryktelig galt";
  }

  if (date === "") {
    return <StyledLoader />;
  }

  return (
    <>
      <Wrapper>
        <StyledHeader>
          <H1>Musikkjulekalender!</H1>
          <HorisontalDraggable>
            <StyledSanta
              src="/static/images/julenissetransparent.png"
              alt="Julenisse"
              draggable={false}
            />
          </HorisontalDraggable>
        </StyledHeader>
        <GoToToday />
        <StyledTwoColumns>
          <BestDailyUsers />
          <HighScoreList />
          <CurrentUserStatistics />
        </StyledTwoColumns>
        <Days />
        <Facebook />
      </Wrapper>
      <Footer />
    </>
  );
}
