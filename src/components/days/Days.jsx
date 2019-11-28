import React, { useContext } from "react";
import styled from "styled-components";
import DaySelector from "./day/DaySelector";
import { DataContext } from "../../context/DataContext";
import { H2 } from "../lib/Heading";
import { StyledMainBox } from "../lib/MainBox";

const StyledDaysContainer = styled(StyledMainBox)`
  width: calc(100% - 10px);
`;

export const Days = function() {
  const { days, answers, date, today, user } = useContext(DataContext);

  return (
    <StyledDaysContainer>
      <H2>Luker</H2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {days
          .filter(day => day.realDate !== new Date(date).getDate().toString())
          .map((day, i) => (
            <DaySelector
              key={day.id}
              answers={answers}
              user={user}
              today={today}
              date={date}
              day={day}
            />
          ))}
      </div>
    </StyledDaysContainer>
  );
};
