import styled from "styled-components";

import React from "react";
import GuessDay from "./GuessDay";
import { DateHeader } from "./../../DateHeader";
import { PastDay } from "./PastDay";

const StyledDayWrapper = styled.div`
  padding: 1rem;
  border: 1px solid black;
  width: 50%;
  text-align: center;
  padding-bottom: 3rem;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

class DaySelector extends React.Component {
  render() {
    let day = "";
    if (this.props.day.revealDateAsString === this.props.date) {
      day = <div>Dette er i dag!</div>;
    } else if (this.props.day.solutionArtist !== null) {
      day = <PastDay day={this.props.day} />;
    } else {
      day = <p>Luke ikke åpnet</p>;
    }

    return (
      <StyledDayWrapper>
        <DateHeader
          unixDate={this.props.day.revealDateAsString}
          style={{
            marginBottom: "1rem"
          }}
        ></DateHeader>
        {day}
      </StyledDayWrapper>
    );
  }
}

export default DaySelector;
