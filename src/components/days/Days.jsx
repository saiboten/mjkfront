import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import DaySelector from "./day/DaySelector";
import { fetchDays } from "../../api/daysApi";
import { DataContext } from "../../context/DataContext";
import { H1 } from "../lib/Heading";
import { StyledMainBox } from "../lib/MainBox";

const StyledDaysContainer = styled(StyledMainBox)`
  width: calc(100% - 10px);
`;

export const Days = function() {
  const {
    days,
    setDays,
    answers,
    setAnswers,
    date,
    setDate,
    today,
    setToday,
    user,
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

  return (
    <StyledDaysContainer>
      <H1>Løsninger</H1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {days
          .filter(day => day.realDate !== new Date(date).getDate().toString())
          .map((day, i) => (
            <DaySelector
              key={day.id}
              answers={answers}
              user={user}
              today={today}
              date={date}
              day={day}
            />
          ))}
      </div>
    </StyledDaysContainer>
  );
};
