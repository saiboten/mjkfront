import React, { useContext } from "react";
import moment from "moment";
import GuessDay from "./GuessDay";
import { DataContext } from "../../../context/DataContext";
import { StyledMainBox } from "../../lib/MainBox";
import { H1 } from "../../lib/Heading";

export function SingleGuessDay() {
  const { days, date, today, answers, user } = useContext(DataContext);

  const todayDetails = days.filter(day => day.revealDateAsString === date);

  const quizTodayExists = todayDetails.length === 1;

  return (
    <StyledMainBox>
      <H1>Dagens oppgave: {moment(date).format("DD. MMMM")}</H1>
      <>
        {quizTodayExists ? (
          <div>
            <GuessDay
              key={todayDetails[0].revealDateAsInt}
              today={today}
              date={date}
              day={todayDetails[0]}
              answers={answers}
              user={user}
            />
          </div>
        ) : (
          <p>Ingen oppgave i dag</p>
        )}
      </>
    </StyledMainBox>
  );
}
