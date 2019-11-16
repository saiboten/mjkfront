import React, { useContext } from "react";
import UserResultList from "./UserResultList";
import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";
import { H1 } from "../lib/Heading";

export function UserStatistics() {
  const { days, today, userResult } = useContext(DataContext);

  const theDay = days.filter((day, i) => day.id === today);

  return (
    <StyledMainBox>
      <H1>Dagens beste: </H1>
      {theDay.length === 1 ? (
        <UserResultList
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
