import React, { useContext } from "react";
import moment from "moment";
import GuessDay from "./GuessDay";
import { DataContext } from "../../../context/DataContext";
import { StyledMainBox } from "../../lib/MainBox";
import { H1, H2 } from "../../lib/Heading";

export function SingleGuessDay() {
  const { days, date, today, answers, user } = useContext(DataContext);

  return (
    <StyledMainBox>
      {days
        .filter(day => day.revealDateAsString === date)
        .map((day, i) => {
          console.log(
            "Reveal day as string + this.props.date: ",
            day.revealDateAsString,
            date
          );
          return (
            <>
              <H1>Dagens oppgave: {moment(date).format("DD. MMMM")}</H1>
              <div>
                <GuessDay
                  key={day.revealDateAsInt}
                  today={today}
                  date={date}
                  day={day}
                  answers={answers}
                  user={user}
                />
              </div>
            </>
          );
        })}
    </StyledMainBox>
  );
}
