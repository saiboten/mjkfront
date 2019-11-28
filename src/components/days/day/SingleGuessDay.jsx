import React, { useContext } from "react";
import GuessDay from "./GuessDay";
import { DataContext } from "../../../context/DataContext";

export function SingleGuessDay() {
  const { days, date, today, answers, user } = useContext(DataContext);

  const todayDetails = days.filter(day => day.revealDateAsString === date);

  const quizTodayExists = todayDetails.length === 1;

  return (
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
  );
}
