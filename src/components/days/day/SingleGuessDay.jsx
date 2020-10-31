import React from "react";
import GuessDay from "./GuessDay";
import { useDays } from "../../../hooks/useData";

export function SingleGuessDay() {
  const { days, date, today, answers, user } = useDays();

  const todayDetails = days.filter((day) => day.revealDateAsString === date);

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
