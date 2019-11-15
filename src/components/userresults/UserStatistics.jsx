import React, { useContext } from "react";
import UserResultList from "./UserResultList";
import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";

export function UserStatistics() {
  const { days, today, userResult } = useContext(DataContext);

  return (
    <StyledMainBox>
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
