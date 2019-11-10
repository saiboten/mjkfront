import React, { useContext } from "react";
import moment from "moment";
import GuessDay from "./GuessDay";
import { DataContext } from "../../../context/DataContext";

const Days = function() {
  const { days, date, today, answers, user } = useContext(DataContext);

  return (
    <>
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
              <h1>Dagens oppgave</h1>
              <div>
                <h3>{moment(date).format("DD. MMMM")}</h3>
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
    </>
  );
};

export default Days;
