import React from "react";
import BestDailyUsersList from "./BestDailyUsersList";
import { StyledMainBox } from "../lib/MainBox";
import { H2 } from "../lib/Heading";
import { useDays } from "../../hooks/useData";

export function BestDailyUsers() {
  const { days, today, userResult } = useDays();

  const theDay = days.filter((day) => day.id === today);

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
