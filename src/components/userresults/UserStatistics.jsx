import React, { useContext } from "react";
import UserResultList from "./UserResultList";
import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";

export function UserStatistics() {
  const { days, today, userResult } = useContext(DataContext);

  return (
    <StyledMainBox>
      <h1>Dagens beste!</h1>
      <p>Dette viser klokkeslettet oppgaven ble løst på per bruker</p>
      {days.map((day, i) => {
        if (day.id === today) {
          return (
            <UserResultList key={day.id} day={day} userResult={userResult} />
          );
        } else {
          return null;
        }
      })}
    </StyledMainBox>
  );
}
