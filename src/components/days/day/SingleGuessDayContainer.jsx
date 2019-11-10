import React from "react";
import SingleGuessDay from "./SingleGuessDay";
import styled from "styled-components";

const StyledDayWrapper = styled.div`
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  background-color: "white";
  flex: 1;
`;

export class SingleGuessDayContainer extends React.Component {
  render() {
    return (
      <StyledDayWrapper>
        <SingleGuessDay />
      </StyledDayWrapper>
    );
  }
}
