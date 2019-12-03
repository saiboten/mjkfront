import styled from "styled-components";

import React from "react";
import { DateHeader } from "./../../DateHeader";
import { PastDay } from "./PastDay";
import { SingleGuessDay } from "./SingleGuessDay";

const StyledDayWrapper = styled.div`
  padding: 1rem;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5);
  width: calc(50% - 10px);
  min-height: 20rem;
  margin: 5px;
  text-align: center;
  padding-bottom: 2rem;

  background-color: ${props => (props.today ? "#001023" : "white")};
  color: ${props => (props.today ? "white" : "black")};

  @media screen and (max-width: 450px) {
    width: calc(100% - 10px);
  }
`;

class DaySelector extends React.Component {
  render() {
    const today = this.props.day.revealDateAsString === this.props.date;

    let day = "";
    if (today) {
      day = <SingleGuessDay />;
    } else if (this.props.day.solutionArtist !== null) {
      day = <PastDay day={this.props.day} />;
    } else {
      day = <p style={{ paddingTop: "5rem" }}>Luke ikke åpnet</p>;
    }

    return (
      <StyledDayWrapper today={today}>
        <DateHeader
          unixDate={this.props.day.revealDateAsString}
          style={{
            marginBottom: "1rem"
          }}
        >
          {today && <span>: i dag</span>}
        </DateHeader>
        {day}
      </StyledDayWrapper>
    );
  }
}

export default DaySelector;
