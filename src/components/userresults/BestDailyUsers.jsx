import React, { useContext } from "react";
import BestDailyUsersList from "./BestDailyUsersList";
import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";
import { H2 } from "../lib/Heading";

export function BestDailyUsers() {
  const { days, today, userResult } = useContext(DataContext);

  const theDay = days.filter((day, i) => day.id === today);

  return (
    <StyledMainBox>
      <H2>Dagens beste: </H2>
      {theDay.length === 1 ? (
        <BestDailyUsersList
          key={theDay[0].id}
          day={theDay[0]}
          userResult={userResult}
        />
      ) : (
        <p>Ingen oppgave i dag</p>
      )}
    </StyledMainBox>
  );
}
