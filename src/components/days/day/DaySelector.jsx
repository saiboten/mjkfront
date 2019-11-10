import { Block } from "jsxstyle";
import styled from "styled-components";

import React from "react";
import GuessDay from "./GuessDay";
import DateHeader from "./../../DateHeader";
import PastDayWithSolution from "./PastDayWithSolution";
import PastDayWithoutSolution from "./PastDayWithoutSolution";

const StyledDayWrapper = styled.div`
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  background-color: "white";
  flex: 1;
`;

class DaySelector extends React.Component {
  state = {
    showSolution: false
  };

  constructor(props) {
    super(props);
    this.showSolution = this.showSolution.bind(this);
  }

  showSolution() {
    console.log("Showing solution");
    this.setState({
      showSolution: true
    });
  }

  createMarkup() {
    console.log("Creating markup", this.props.day.optionalSolutionVideo);
    return { __html: this.props.day.optionalSolutionVideo };
  }

  render() {
    let day = "";
    if (
      this.state.showSolution &&
      this.props.day.solutionArtist !== undefined
    ) {
      day = <PastDayWithSolution day={this.props.day} />;
    } else if (this.props.day.revealDateAsString === this.props.date) {
      day = (
        <GuessDay
          date={this.props.day.revealDateAsString}
          today={this.props.today}
          day={this.props.day}
          answers={this.props.answers}
          user={this.props.user}
        />
      );
    } else if (this.props.day.description !== undefined) {
      day = (
        <PastDayWithoutSolution
          day={this.props.day}
          showSolutionCallback={this.showSolution}
        />
      );
    } else {
      day = <p>Luke ikke åpnet</p>;
    }

    return (
      <StyledDayWrapper>
        <DateHeader unixDate={this.props.day.revealDateAsString}></DateHeader>
        {day}
      </StyledDayWrapper>
    );
  }
}

export default DaySelector;
