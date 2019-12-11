import React, { useContext, useEffect } from "react";
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

import { DataContext } from "../context/DataContext";
import { fetchDays } from "../api/daysApi";
import { GoToToday } from "./GoToToday";
import { backgroundSnow } from "./lib/SnowAnimation";
import { HorisontalDraggable } from "./lib/HorisontalDraggable";

const StyledSanta = styled.img`
  height: 300px;
  margin: 0 auto;

  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const StyledTwoColumns = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const StyledHeader = styled.div`
  text-align: left;
  padding-top: 1rem;
  color: #fff;
  display: flex;

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),
      url("/static/images/s3.png");
    z-index: 1;
    animation: ${backgroundSnow} 10s linear infinite;
  }
`;

export function Main() {
  const {
    setDays,
    setAnswers,
    date,
    setDate,
    setToday,
    setUser,
    setUserResult,
    setTopList
  } = useContext(DataContext);

  useEffect(() => {
    fetchDays().then(
      ({ days, date, user, answers, today, userResult, topList }) => {
        setDays(days);
        setDate(date);
        setUser(user);
        setAnswers(answers);
        setToday(today);
        setUserResult(userResult);
        setTopList(topList);
      }
    );
  }, [
    setAnswers,
    setDate,
    setDays,
    setToday,
    setUser,
    setUserResult,
    setTopList
  ]);

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
