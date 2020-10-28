import styled from "styled-components";

import React from "react";
import { DateHeader } from "./../../DateHeader";
import { PastDay } from "./PastDay";
import { SingleGuessDay } from "./SingleGuessDay";
import { secondaryColor } from "../../userresults/colors";

const StyledDayWrapper = styled.div`
  padding: 1rem;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5);
  width: calc(50% - 10px);
  min-height: 20rem;
  margin: 5px;
  text-align: center;
  padding-bottom: 2rem;
  position: relative;

  background-color: ${(props) => (props.today ? secondaryColor : "white")};
  color: ${(props) => (props.today ? "white" : "black")};

  @media screen and (max-width: 450px) {
    width: calc(100% - 10px);
  }
`;

const DaySelector = (props) => {
  const today = props.day.revealDateAsString === props.date;

  let day = "";
  if (today && props.day.description == null) {
    day = <p style={{ paddingTop: "5rem" }}>Luke åpner 08:00</p>;
  } else if (today) {
    day = <SingleGuessDay />;
  } else if (props.day.solutionArtist !== null) {
    day = <PastDay day={props.day} />;
  } else {
    day = <p style={{ paddingTop: "5rem" }}>Luke ikke åpnet</p>;
  }

  return (
    <StyledDayWrapper today={today} id={today ? "today" : null}>
      <DateHeader
        unixDate={props.day.revealDateAsString}
        style={{
          marginBottom: "1rem",
        }}
      >
        {today && <span>: i dag</span>}
      </DateHeader>
      {day}
    </StyledDayWrapper>
  );
};

export default DaySelector;
