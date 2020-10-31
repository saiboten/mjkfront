import React from "react";
import styled from "styled-components";
import DaySelector from "./day/DaySelector";
import { H2 } from "../lib/Heading";
import { StyledMainBox } from "../lib/MainBox";
import { useDays } from "../../hooks/useData";

const StyledDays = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
`;

export const Days = function () {
  const { days, answers, date, today, user } = useDays();

  return (
    <StyledMainBox>
      <H2>Luker</H2>
      <StyledDays>
        {days
          .filter((day) => day.realDate !== new Date(date).getDate().toString())
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
      </StyledDays>
    </StyledMainBox>
  );
};
